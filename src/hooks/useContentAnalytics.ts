import { useCallback, useEffect, useRef } from 'react';

// Analytics event types
export type AnalyticsEventType = 
  | 'link_click'
  | 'article_start'
  | 'article_complete'
  | 'scroll_depth'
  | 'reading_time'
  | 'topic_explore'
  | 'journey_step'
  | 'ab_impression';

interface AnalyticsEvent {
  type: AnalyticsEventType;
  timestamp: number;
  data: Record<string, unknown>;
}

interface ContentJourney {
  id: string;
  startTime: number;
  pillarId: string;
  steps: string[];
  completed: boolean;
}

// Store analytics in localStorage for persistence
const ANALYTICS_KEY = 'invoicemonk_content_analytics';
const JOURNEY_KEY = 'invoicemonk_content_journeys';
const AB_VARIANTS_KEY = 'invoicemonk_ab_variants';

// Get or create session ID
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('analytics_session');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('analytics_session', sessionId);
  }
  return sessionId;
};

// Get stored analytics
const getStoredAnalytics = (): AnalyticsEvent[] => {
  try {
    const stored = localStorage.getItem(ANALYTICS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

// Store analytics event
const storeAnalyticsEvent = (event: AnalyticsEvent): void => {
  try {
    const events = getStoredAnalytics();
    events.push(event);
    // Keep only last 1000 events
    const trimmedEvents = events.slice(-1000);
    localStorage.setItem(ANALYTICS_KEY, JSON.stringify(trimmedEvents));
  } catch {
    // Silent fail for localStorage issues
  }
};

// Get stored journeys
export const getStoredJourneys = (): ContentJourney[] => {
  try {
    const stored = localStorage.getItem(JOURNEY_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

// Store journey
const storeJourney = (journey: ContentJourney): void => {
  try {
    const journeys = getStoredJourneys();
    const existingIndex = journeys.findIndex(j => j.id === journey.id);
    if (existingIndex >= 0) {
      journeys[existingIndex] = journey;
    } else {
      journeys.push(journey);
    }
    // Keep only last 50 journeys
    const trimmedJourneys = journeys.slice(-50);
    localStorage.setItem(JOURNEY_KEY, JSON.stringify(trimmedJourneys));
  } catch {
    // Silent fail
  }
};

// A/B Testing utilities
export interface ABVariant {
  experimentId: string;
  variantId: 'A' | 'B';
  assignedAt: number;
}

export const getABVariant = (experimentId: string): 'A' | 'B' => {
  try {
    const stored = localStorage.getItem(AB_VARIANTS_KEY);
    const variants: ABVariant[] = stored ? JSON.parse(stored) : [];
    
    const existing = variants.find(v => v.experimentId === experimentId);
    if (existing) {
      return existing.variantId;
    }
    
    // Assign randomly
    const newVariant: ABVariant = {
      experimentId,
      variantId: Math.random() < 0.5 ? 'A' : 'B',
      assignedAt: Date.now()
    };
    
    variants.push(newVariant);
    localStorage.setItem(AB_VARIANTS_KEY, JSON.stringify(variants));
    
    return newVariant.variantId;
  } catch {
    return 'A'; // Default to A
  }
};

// Reading progress tracking
export const getReadingProgress = (): Record<string, number> => {
  try {
    const stored = localStorage.getItem('invoicemonk_reading_progress');
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

export const setReadingProgress = (slug: string, progress: number): void => {
  try {
    const current = getReadingProgress();
    current[slug] = Math.max(current[slug] || 0, progress);
    localStorage.setItem('invoicemonk_reading_progress', JSON.stringify(current));
  } catch {
    // Silent fail
  }
};

// Main analytics hook
export function useContentAnalytics(articleSlug?: string, pillarId?: string) {
  const sessionId = getSessionId();
  const startTimeRef = useRef<number>(Date.now());
  const scrollDepthRef = useRef<number>(0);
  const hasLoggedStartRef = useRef<boolean>(false);

  // Track event
  const trackEvent = useCallback((
    type: AnalyticsEventType,
    data: Record<string, unknown> = {}
  ) => {
    const event: AnalyticsEvent = {
      type,
      timestamp: Date.now(),
      data: {
        ...data,
        sessionId,
        articleSlug,
        pillarId,
        url: window.location.pathname,
      }
    };
    
    storeAnalyticsEvent(event);
    
    // Log for debugging in development
    if (import.meta.env.DEV) {
      console.log('[Analytics]', type, event.data);
    }
  }, [sessionId, articleSlug, pillarId]);

  // Track link click
  const trackLinkClick = useCallback((
    targetUrl: string,
    linkType: 'internal' | 'external' | 'product' | 'guide',
    linkText?: string
  ) => {
    trackEvent('link_click', {
      targetUrl,
      linkType,
      linkText,
      sourceUrl: window.location.pathname
    });
  }, [trackEvent]);

  // Track topic exploration
  const trackTopicExplore = useCallback((
    targetPillarId: string,
    targetSlug: string,
    explorationType: 'cluster_nav' | 'related' | 'suggested_path' | 'topic_map'
  ) => {
    trackEvent('topic_explore', {
      targetPillarId,
      targetSlug,
      explorationType
    });
  }, [trackEvent]);

  // Journey tracking
  const startJourney = useCallback((journeyPillarId: string): string => {
    const journeyId = `journey_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
    const journey: ContentJourney = {
      id: journeyId,
      startTime: Date.now(),
      pillarId: journeyPillarId,
      steps: [],
      completed: false
    };
    storeJourney(journey);
    trackEvent('journey_step', { journeyId, action: 'start' });
    return journeyId;
  }, [trackEvent]);

  const addJourneyStep = useCallback((journeyId: string, slug: string) => {
    const journeys = getStoredJourneys();
    const journey = journeys.find(j => j.id === journeyId);
    if (journey && !journey.steps.includes(slug)) {
      journey.steps.push(slug);
      storeJourney(journey);
      trackEvent('journey_step', { journeyId, slug, stepNumber: journey.steps.length });
    }
  }, [trackEvent]);

  const completeJourney = useCallback((journeyId: string) => {
    const journeys = getStoredJourneys();
    const journey = journeys.find(j => j.id === journeyId);
    if (journey) {
      journey.completed = true;
      storeJourney(journey);
      trackEvent('journey_step', { 
        journeyId, 
        action: 'complete',
        totalSteps: journey.steps.length,
        duration: Date.now() - journey.startTime
      });
    }
  }, [trackEvent]);

  // A/B test impression
  const trackABImpression = useCallback((experimentId: string, variantId: 'A' | 'B') => {
    trackEvent('ab_impression', { experimentId, variantId });
  }, [trackEvent]);

  // Track article start on mount
  useEffect(() => {
    if (articleSlug && !hasLoggedStartRef.current) {
      hasLoggedStartRef.current = true;
      startTimeRef.current = Date.now();
      trackEvent('article_start', { articleSlug });
    }
  }, [articleSlug, trackEvent]);

  // Track scroll depth
  useEffect(() => {
    if (!articleSlug) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      // Track at 25%, 50%, 75%, 100% milestones
      const milestones = [25, 50, 75, 100];
      for (const milestone of milestones) {
        if (scrollPercent >= milestone && scrollDepthRef.current < milestone) {
          scrollDepthRef.current = milestone;
          trackEvent('scroll_depth', { depth: milestone, articleSlug });
          setReadingProgress(articleSlug, milestone);
          
          // Mark as complete at 90%+\\
          if (milestone >= 75) {
            trackEvent('article_complete', { 
              articleSlug,
              readingTime: Date.now() - startTimeRef.current
            });
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [articleSlug, trackEvent]);

  // Track reading time on unmount
  useEffect(() => {
    return () => {
      if (articleSlug && startTimeRef.current) {
        const readingTime = Date.now() - startTimeRef.current;
        if (readingTime > 5000) { // Only track if > 5 seconds
          storeAnalyticsEvent({
            type: 'reading_time',
            timestamp: Date.now(),
            data: {
              sessionId,
              articleSlug,
              readingTimeMs: readingTime,
              scrollDepth: scrollDepthRef.current
            }
          });
        }
      }
    };
  }, [articleSlug, sessionId]);

  return {
    trackEvent,
    trackLinkClick,
    trackTopicExplore,
    startJourney,
    addJourneyStep,
    completeJourney,
    trackABImpression,
    getABVariant
  };
}

// Get analytics summary for display
export function getAnalyticsSummary() {
  const events = getStoredAnalytics();
  const journeys = getStoredJourneys();
  const progress = getReadingProgress();
  
  // Count events by type
  const eventCounts = events.reduce((acc, event) => {
    acc[event.type] = (acc[event.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  // Get popular articles by link clicks
  const linkClicks = events
    .filter(e => e.type === 'link_click')
    .reduce((acc, e) => {
      const url = e.data.targetUrl as string;
      if (url) {
        acc[url] = (acc[url] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);
  
  const popularLinks = Object.entries(linkClicks)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([url, count]) => ({ url, count }));

  // Calculate journey completion rate
  const completedJourneys = journeys.filter(j => j.completed).length;
  const journeyCompletionRate = journeys.length > 0 
    ? Math.round((completedJourneys / journeys.length) * 100) 
    : 0;

  // Calculate average scroll depth
  const scrollEvents = events.filter(e => e.type === 'scroll_depth');
  const avgScrollDepth = scrollEvents.length > 0
    ? Math.round(scrollEvents.reduce((sum, e) => sum + (e.data.depth as number || 0), 0) / scrollEvents.length)
    : 0;

  return {
    totalEvents: events.length,
    eventCounts,
    popularLinks,
    readingProgress: progress,
    journeys: {
      total: journeys.length,
      completed: completedJourneys,
      completionRate: journeyCompletionRate
    },
    avgScrollDepth
  };
}

// Clear analytics (for testing or privacy)
export function clearAnalytics(): void {
  localStorage.removeItem(ANALYTICS_KEY);
  localStorage.removeItem(JOURNEY_KEY);
  localStorage.removeItem(AB_VARIANTS_KEY);
  localStorage.removeItem('invoicemonk_reading_progress');
  sessionStorage.removeItem('analytics_session');
}

export default useContentAnalytics;

