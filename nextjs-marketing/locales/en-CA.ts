import { LocaleConfig } from './types';

export const enCA: LocaleConfig = {
  code: "en-CA",
  country: "Canada",
  countryCode: "CA",
  flag: "🇨🇦",
  currency: {
    code: "CAD",
    symbol: "C$",
    position: "before",
  },
  content: {
    hero: {
      badge: "CRA-compliant invoicing",
      headline: "Invoicing made simple",
      headlineAccent: "for Canadians",
      subheadline: "Create CRA-compliant invoices, track GST/HST, and manage your finances with ease. Built for Canadian businesses.",
      cta: "Start Your Free Trial",
      secondaryCta: "Watch Demo",
      trustBadge: "Trusted by 8,000+ Canadian businesses",
    },
    compliance: {
      authority: "CRA",
      message: "Compliant with Canada Revenue Agency requirements including GST/HST",
    },
    socialProof: "Join 8,000+ businesses across Canada",
    paymentGateway: "Stripe",
    seo: {
      siteTitle: "Invoicemonk Canada - CRA-Compliant Invoicing Software",
      siteDescription: "Invoicing and accounting software for Canadian businesses. CRA-compliant with GST/HST tracking. Free tier available.",
      complianceKeyword: "CRA-compliant",
      targetAudience: "Canadian",
      region: "Canada",
      hreflangCode: "en-CA",
    },
  },
  pricing: {
    free: 0,
    professional: 7,
    business: 25,
    annualMultiplier: 0.8, // 20% off
  },
  pricingContent: {
    annualSavingsText: "Save 20%",
    starterAvailable: false,
  },
};
