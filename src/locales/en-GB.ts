import { LocaleConfig } from './types';

export const enGB: LocaleConfig = {
  code: "en-GB",
  country: "United Kingdom",
  countryCode: "GB",
  flag: "🇬🇧",
  currency: {
    code: "GBP",
    symbol: "£",
    position: "before",
  },
  content: {
    hero: {
      badge: "HMRC-compliant invoicing",
      headline: "Beautiful invoices,",
      headlineAccent: "sorted",
      subheadline: "Create HMRC-compliant invoices with proper VAT handling. Perfect for UK freelancers, contractors and businesses.",
      cta: "Start Your Free Trial",
      secondaryCta: "Watch Demo",
      trustBadge: "Trusted by UK businesses",
    },
    compliance: {
      authority: "HMRC",
      message: "Fully compliant with Making Tax Digital requirements",
    },
    socialProof: "Join growing businesses across the United Kingdom",
    paymentGateway: "Stripe",
    seo: {
      siteTitle: "Invoicemonk UK - HMRC-Compliant Invoicing Software",
      siteDescription: "Invoicing software built for UK businesses. HMRC-compliant, Making Tax Digital ready. Free tier available.",
      complianceKeyword: "HMRC-compliant",
      targetAudience: "British",
      region: "United Kingdom",
      hreflangCode: "en-GB",
    },
  },
  pricing: {
    free: 0,
    professional: 4,
    business: 15,
    annualMultiplier: 0.8, // 20% off
  },
  pricingContent: {
    annualSavingsText: "Save 20%",
    starterAvailable: false,
  },
};
