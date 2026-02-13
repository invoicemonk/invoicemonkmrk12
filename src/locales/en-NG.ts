import { LocaleConfig } from './types';

export const enNG: LocaleConfig = {
  code: "en-NG",
  country: "Nigeria",
  countryCode: "NG",
  flag: "🇳🇬",
  currency: {
    code: "NGN",
    symbol: "₦",
    position: "before",
  },
  content: {
    hero: {
      badge: "NRS-compliant invoicing",
      headline: "Professional invoices for",
      headlineAccent: "Nigerian businesses",
      subheadline: "Create NRS-compliant invoices, track payments, and manage expenses. Built for Nigerian entrepreneurs and SMEs.",
      cta: "Start Your Free Trial",
      secondaryCta: "Watch Demo",
      trustBadge: "Trusted by Nigerian businesses",
    },
    compliance: {
      authority: "NRS",
      message: "Fully compliant with Nigerian Revenue Service requirements",
    },
    socialProof: "Join growing businesses across Nigeria",
    paymentGateway: "Paystack",
    seo: {
      siteTitle: "Invoicemonk Nigeria - NRS-Compliant Invoicing Software",
      siteDescription: "Professional invoicing and accounting software for Nigerian businesses. NRS-compliant, Paystack integration. Free tier available.",
      complianceKeyword: "NRS-compliant",
      targetAudience: "Nigerian",
      region: "Nigeria",
      hreflangCode: "en-NG",
    },
  },
  pricing: {
    free: 0,
    starter: 2000,
    professional: 4000,
    business: 8000,
    annualMultiplier: 10, // 10 months = 2 months free
  },
  pricingContent: {
    annualSavingsText: "2 months free",
    starterAvailable: true,
  },
};
