import { useEffect, useMemo, ReactNode } from 'react';
import { getABVariant, useContentAnalytics } from '@/hooks/useContentAnalytics';

interface ABTestProps {
  experimentId: string;
  variantA: ReactNode;
  variantB: ReactNode;
  // Optional: force a specific variant for testing
  forceVariant?: 'A' | 'B';
}

/**
 * A/B Testing Component
 * 
 * Renders one of two variants based on user assignment.
 * Assignment is persistent per user (stored in localStorage).
 * 
 * @example
 * <ABTest
 *   experimentId="hero-headline-test"
 *   variantA={<h1>Get Paid Faster</h1>}
 *   variantB={<h1>Invoicing Made Simple</h1>}
 * />
 */
export function ABTest({ experimentId, variantA, variantB, forceVariant }: ABTestProps) {
  const { trackABImpression } = useContentAnalytics();
  
  const variant = useMemo(() => {
    if (forceVariant) return forceVariant;
    return getABVariant(experimentId);
  }, [experimentId, forceVariant]);

  // Track impression on mount
  useEffect(() => {
    trackABImpression(experimentId, variant);
  }, [experimentId, variant, trackABImpression]);

  return <>{variant === 'A' ? variantA : variantB}</>;
}

/**
 * Hook for programmatic A/B testing
 * 
 * @example
 * const variant = useABTest('button-color-test');
 * return <Button className={variant === 'A' ? 'bg-primary' : 'bg-wave-green'}>
 */
export function useABTest(experimentId: string): 'A' | 'B' {
  const { trackABImpression } = useContentAnalytics();
  
  const variant = useMemo(() => getABVariant(experimentId), [experimentId]);

  useEffect(() => {
    trackABImpression(experimentId, variant);
  }, [experimentId, variant, trackABImpression]);

  return variant;
}

/**
 * Get all active A/B test assignments for the current user
 */
export function getActiveExperiments(): Array<{ experimentId: string; variant: 'A' | 'B' }> {
  try {
    const stored = localStorage.getItem('invoicemonk_ab_variants');
    const variants = stored ? JSON.parse(stored) : [];
    return variants.map((v: { experimentId: string; variantId: 'A' | 'B' }) => ({
      experimentId: v.experimentId,
      variant: v.variantId
    }));
  } catch {
    return [];
  }
}

export default ABTest;
