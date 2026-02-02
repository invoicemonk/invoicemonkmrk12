import { LocaleConfig } from '@/locales/types';

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: 'free' | 'starter' | 'professional' | 'business';
  name: string;
  description: string;
  features: string[];
  cta: string;
  ctaLink: string;
  popular?: boolean;
  badge?: string;
  compliance?: boolean;
}

// Feature lists for each tier
export const freeTierFeatures = [
  '5 invoices/month',
  'Clean invoice layout',
  'Subtle Invoicemonk branding',
  'View invoice online',
  'Basic invoice verification',
  '7-year data retention',
];

export const starterTierFeatures = [
  'Unlimited invoices',
  'PDF export',
  'Branded invoices (with footer)',
  'Basic compliance fields',
  '7-year retention',
  'Email support',
];

export const professionalTierFeatures = [
  'Everything in Starter',
  'Full audit trail (append-only)',
  'Immutable invoice hashes',
  'Public invoice verification',
  'Compliance-ready exports',
  'Regulator-friendly logs',
  'Priority support',
];

export const professionalTierFeaturesIntl = [
  'Unlimited invoices',
  'Full audit trail (append-only)',
  'Immutable invoice hashes',
  'Public invoice verification',
  'Compliance-ready exports',
  'Regulator-friendly logs',
  'Priority support',
];

export const businessTierFeatures = [
  'Everything in Professional',
  'Multi-user accounts',
  'Roles & permissions',
  'Bulk invoicing',
  'Compliance reports',
  'API access (when enabled)',
  'SLA support',
];

// Get pricing plans based on locale
export function getPricingPlans(locale: LocaleConfig): PricingPlan[] {
  const showStarterTier = locale.pricingContent.starterAvailable;

  const plans: PricingPlan[] = [
    {
      id: 'free',
      name: 'Free',
      description: 'For getting started',
      features: freeTierFeatures,
      cta: 'Get Started',
      ctaLink: 'https://app.invoicemonk.com/signup',
      popular: false,
      compliance: false,
    },
  ];

  // Add Starter tier for Nigeria only
  if (showStarterTier) {
    plans.push({
      id: 'starter',
      name: 'Starter',
      description: 'For growing freelancers',
      features: starterTierFeatures,
      cta: 'Start Free Trial',
      ctaLink: 'https://app.invoicemonk.com/signup?plan=starter',
      popular: false,
      compliance: false,
    });
  }

  // Professional tier
  plans.push({
    id: 'professional',
    name: 'Professional',
    description: 'For serious businesses',
    features: showStarterTier ? professionalTierFeatures : professionalTierFeaturesIntl,
    cta: 'Start Free Trial',
    ctaLink: 'https://app.invoicemonk.com/signup?plan=professional',
    popular: true,
    badge: 'Recommended',
    compliance: true,
  });

  // Business tier
  plans.push({
    id: 'business',
    name: 'Business',
    description: 'For teams and enterprises',
    features: businessTierFeatures,
    cta: 'Contact Sales',
    ctaLink: 'https://app.invoicemonk.com/signup?plan=business',
    popular: false,
    badge: 'Enterprise',
    compliance: true,
  });

  return plans;
}

// Calculate price based on billing period
export function calculatePrice(
  locale: LocaleConfig,
  planId: 'free' | 'starter' | 'professional' | 'business',
  isAnnual: boolean
): { monthly: number; total: number } {
  const { pricing } = locale;
  
  let basePrice = 0;
  
  switch (planId) {
    case 'free':
      return { monthly: 0, total: 0 };
    case 'starter':
      basePrice = pricing.starter || 0;
      break;
    case 'professional':
      basePrice = pricing.professional;
      break;
    case 'business':
      basePrice = pricing.business;
      break;
  }

  if (!isAnnual) {
    return { monthly: basePrice, total: basePrice };
  }

  // Annual pricing logic differs by region
  const { annualMultiplier } = pricing;
  
  if (annualMultiplier >= 1) {
    // Nigeria: Monthly x 10 (pay for 10 months, get 12)
    const annualTotal = basePrice * annualMultiplier;
    const effectiveMonthly = Math.round(annualTotal / 12);
    return { monthly: effectiveMonthly, total: annualTotal };
  } else {
    // International: 20% off (multiply monthly by 12 then by 0.8)
    const annualTotal = Math.round(basePrice * 12 * annualMultiplier);
    const effectiveMonthly = Math.round(annualTotal / 12);
    return { monthly: effectiveMonthly, total: annualTotal };
  }
}
