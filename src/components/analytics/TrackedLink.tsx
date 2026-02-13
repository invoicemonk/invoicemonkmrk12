import { useEffect, useCallback } from 'react';
import { useContentAnalytics } from '@/hooks/useContentAnalytics';

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  linkType?: 'internal' | 'external' | 'product' | 'guide';
  children: React.ReactNode;
}

/**
 * TrackedLink - A link component that automatically tracks clicks
 * 
 * Use this for any internal links in content where you want to track
 * user navigation patterns.
 */
export function TrackedLink({ 
  href, 
  linkType = 'internal', 
  children, 
  onClick,
  ...props 
}: TrackedLinkProps) {
  const { trackLinkClick } = useContentAnalytics();

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    trackLinkClick(href, linkType, typeof children === 'string' ? children : undefined);
    onClick?.(e);
  }, [href, linkType, children, trackLinkClick, onClick]);

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

interface ContentSectionTrackerProps {
  sectionId: string;
  articleSlug: string;
  children: React.ReactNode;
}

/**
 * ContentSectionTracker - Tracks when users view specific sections of content
 * 
 * Wrap content sections to track visibility and engagement.
 */
export function ContentSectionTracker({ 
  sectionId, 
  articleSlug, 
  children 
}: ContentSectionTrackerProps) {
  const { trackEvent } = useContentAnalytics(articleSlug);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackEvent('scroll_depth', {
              sectionId,
              visible: true,
              timestamp: Date.now()
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(sectionId);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [sectionId, trackEvent]);

  return <div id={sectionId}>{children}</div>;
}

interface JourneyTrackerProps {
  pillarId: string;
  children: React.ReactNode;
}

/**
 * JourneyTracker - Tracks user learning journeys through content
 * 
 * Wrap pillar/guide pages to automatically track journey progress.
 */
export function JourneyTracker({ pillarId, children }: JourneyTrackerProps) {
  const { startJourney, addJourneyStep } = useContentAnalytics(undefined, pillarId);

  useEffect(() => {
    // Check for existing journey or start new one
    const currentJourneyId = sessionStorage.getItem(`journey_${pillarId}`);
    
    if (!currentJourneyId) {
      const journeyId = startJourney(pillarId);
      sessionStorage.setItem(`journey_${pillarId}`, journeyId);
    }
    
    // Add current page as a step
    const journeyId = sessionStorage.getItem(`journey_${pillarId}`);
    if (journeyId) {
      addJourneyStep(journeyId, window.location.pathname);
    }
  }, [pillarId, startJourney, addJourneyStep]);

  return <>{children}</>;
}

export default TrackedLink;
