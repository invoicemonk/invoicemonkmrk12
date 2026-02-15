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
  '5 invoices & 5 receipts/month',
  '1 currency account',
  '1 payment method per currency',
  'Accounting & expense tracking',
  'Credit notes',
  'Invoice verification portal',
  'Invoicemonk watermark on PDFs',
];

export const starterTierFeatures = [
  'Unlimited invoices & receipts',
  '3 currency accounts',
  '2 payment methods per currency',
  'Accounting & expense tracking',
  'Credit notes',
  'In-app support',
  'Invoicemonk watermark on PDFs',
];

export const professionalTierFeatures = [
  'Unlimited invoices & receipts',
  'Unlimited currency accounts',
  'Unlimited payment methods',
  'Up to 5 team members',
  'Full audit trail & data exports',
  'Custom branding & premium templates',
  'No watermark on PDFs',
];

export const professionalTierFeaturesIntl = [
  'Unlimited invoices & receipts',
  'Unlimited currency accounts',
  'Unlimited payment methods',
  'Up to 5 team members',
  'Full audit trail & data exports',
  'Custom branding & premium templates',
  'No watermark on PDFs',
];

export const businessTierFeatures = [
  'Everything in Professional',
  'Unlimited team members',
  'API access',
  'Advanced reports',
  'Enterprise-grade support',
];

// Get pricing plans based on locale
export function getPricingPlans(locale: LocaleConfig): PricingPlan[] {
  const showStarterTier = locale.pricingContent.starterAvailable;

  const plans: PricingPlan[] = [
    {
      id: 'free',
      name: 'Free',
      description: 'For individuals getting started',
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
      description: 'For solo businesses ready to grow',
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
    description: 'For growing businesses',
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
    description: 'For enterprises with advanced needs',
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
