import { LocaleConfig } from './types';

export const enUS: LocaleConfig = {
  code: "en-US",
  country: "United States",
  countryCode: "US",
  flag: "🇺🇸",
  currency: {
    code: "USD",
    symbol: "$",
    position: "before",
  },
  content: {
    hero: {
      badge: "IRS-ready invoicing",
      headline: "Create beautiful invoices",
      headlineAccent: "in seconds",
      subheadline: "Professional invoicing, payments, and accounting software built for American small businesses and freelancers.",
      cta: "Start Your Free Trial",
      secondaryCta: "Watch Demo",
      trustBadge: "Trusted by 15,000+ American businesses",
    },
    compliance: {
      authority: "IRS",
      message: "Tax-ready invoices with all required documentation",
    },
    socialProof: "Join 15,000+ businesses across the United States",
    paymentGateway: "Stripe",
    seo: {
      siteTitle: "Invoicemonk - Professional Invoicing Software for Small Business",
      siteDescription: "Invoicing and accounting software for American small businesses and freelancers. IRS-ready with Stripe payments. Free tier available.",
      complianceKeyword: "IRS-ready",
      targetAudience: "American",
      region: "United States",
      hreflangCode: "en-US",
    },
  },
  pricing: {
    free: 0,
    professional: 5,
    business: 19,
    annualMultiplier: 0.8, // 20% off = 80% of monthly x 12
  },
  pricingContent: {
    annualSavingsText: "Save 20%",
    starterAvailable: false,
  },
};
