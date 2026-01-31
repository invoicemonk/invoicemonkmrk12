import { LocaleConfig } from '@/locales/types';

interface PageSEO {
  getTitle: (locale: LocaleConfig) => string;
  getDescription: (locale: LocaleConfig) => string;
  ogType: 'website' | 'article';
  priority: number;
  changefreq: 'daily' | 'weekly' | 'monthly';
}

export const pageSEO: Record<string, PageSEO> = {
  '/': {
    getTitle: (locale) => locale.content.seo.siteTitle,
    getDescription: (locale) => locale.content.seo.siteDescription,
    ogType: 'website',
    priority: 1.0,
    changefreq: 'weekly',
  },
  '/invoicing': {
    getTitle: (locale) => `${locale.content.seo.complianceKeyword} Invoicing Software | Invoicemonk`,
    getDescription: (locale) => `Create professional, ${locale.content.seo.complianceKeyword.toLowerCase()} invoices for your ${locale.content.seo.targetAudience} business. Track payments, send reminders. Free tier available.`,
    ogType: 'website',
    priority: 0.9,
    changefreq: 'weekly',
  },
  '/pricing': {
    getTitle: (locale) => `Pricing | Invoicemonk ${locale.content.seo.region}`,
    getDescription: (locale) => `Invoicemonk pricing for ${locale.content.seo.region}. Plans from ${locale.currency.symbol}${locale.pricing.starter}/mo. Free tier available.`,
    ogType: 'website',
    priority: 0.9,
    changefreq: 'weekly',
  },
  '/expenses': {
    getTitle: (locale) => `Expense Tracking Software for ${locale.content.seo.targetAudience} Businesses | Invoicemonk`,
    getDescription: (locale) => `Track business expenses, categorize spending, and stay ${locale.content.seo.complianceKeyword.toLowerCase()} with Invoicemonk expense management.`,
    ogType: 'website',
    priority: 0.8,
    changefreq: 'weekly',
  },
  '/payments': {
    getTitle: (locale) => `Accept Online Payments for ${locale.content.seo.targetAudience} Businesses | Invoicemonk`,
    getDescription: (locale) => `Get paid faster with ${locale.content.paymentGateway} integration. Accept online payments directly from your invoices. Built for ${locale.content.seo.region}.`,
    ogType: 'website',
    priority: 0.8,
    changefreq: 'weekly',
  },
  '/accounting': {
    getTitle: (locale) => `${locale.content.seo.complianceKeyword} Accounting Software | Invoicemonk`,
    getDescription: (locale) => `Simple accounting software for ${locale.content.seo.targetAudience} small businesses. Track income, expenses, and stay tax-ready.`,
    ogType: 'website',
    priority: 0.8,
    changefreq: 'weekly',
  },
  '/estimates': {
    getTitle: (locale) => `Create Professional Estimates & Quotes | Invoicemonk ${locale.content.seo.region}`,
    getDescription: (locale) => `Send professional estimates and quotes to win more clients. Convert to invoices with one click. Built for ${locale.content.seo.targetAudience} businesses.`,
    ogType: 'website',
    priority: 0.7,
    changefreq: 'weekly',
  },
  '/receipts': {
    getTitle: (locale) => `Receipt Management for ${locale.content.seo.targetAudience} Businesses | Invoicemonk`,
    getDescription: (locale) => `Capture and organize receipts digitally. Stay ${locale.content.seo.complianceKeyword.toLowerCase()} with automatic expense categorization.`,
    ogType: 'website',
    priority: 0.7,
    changefreq: 'weekly',
  },
  '/compliance': {
    getTitle: (locale) => `${locale.content.compliance.authority} Tax Compliance | Invoicemonk`,
    getDescription: (locale) => `${locale.content.compliance.message}. Stay audit-ready with automatic tax calculations and reports.`,
    ogType: 'website',
    priority: 0.8,
    changefreq: 'monthly',
  },
  '/freelancers': {
    getTitle: (locale) => `Invoicing Software for ${locale.content.seo.targetAudience} Freelancers | Invoicemonk`,
    getDescription: (locale) => `Professional invoicing for freelancers in ${locale.content.seo.region}. Get paid faster, track expenses, and stay ${locale.content.seo.complianceKeyword.toLowerCase()}.`,
    ogType: 'website',
    priority: 0.8,
    changefreq: 'weekly',
  },
  '/small-businesses': {
    getTitle: (locale) => `Invoicing Software for ${locale.content.seo.targetAudience} Small Businesses | Invoicemonk`,
    getDescription: (locale) => `Complete invoicing and accounting solution for small businesses in ${locale.content.seo.region}. Free tier available.`,
    ogType: 'website',
    priority: 0.8,
    changefreq: 'weekly',
  },
  '/blog': {
    getTitle: (locale) => `Business & Finance Blog | Invoicemonk ${locale.content.seo.region}`,
    getDescription: (locale) => `Tips, guides, and insights for ${locale.content.seo.targetAudience} small businesses and freelancers. Learn invoicing, accounting, and business growth strategies.`,
    ogType: 'website',
    priority: 0.7,
    changefreq: 'daily',
  },
  '/about': {
    getTitle: () => 'About Invoicemonk | Our Story & Mission',
    getDescription: () => 'Learn about Invoicemonk - the invoicing and accounting platform built for businesses worldwide. Our mission is to simplify financial management.',
    ogType: 'website',
    priority: 0.6,
    changefreq: 'monthly',
  },
  '/contact': {
    getTitle: (locale) => `Contact Invoicemonk ${locale.content.seo.region} | Get Support`,
    getDescription: (locale) => `Get in touch with Invoicemonk. We're here to help ${locale.content.seo.targetAudience} businesses with invoicing and accounting needs.`,
    ogType: 'website',
    priority: 0.5,
    changefreq: 'monthly',
  },
  '/privacy-policy': {
    getTitle: () => 'Privacy Policy | Invoicemonk',
    getDescription: () => 'Learn how Invoicemonk protects your data and respects your privacy. Our comprehensive privacy policy explains our data practices.',
    ogType: 'website',
    priority: 0.3,
    changefreq: 'monthly',
  },
  '/terms-of-service': {
    getTitle: () => 'Terms of Service | Invoicemonk',
    getDescription: () => 'Read the Invoicemonk terms of service. Understand your rights and responsibilities when using our invoicing platform.',
    ogType: 'website',
    priority: 0.3,
    changefreq: 'monthly',
  },
  '/why-invoicemonk': {
    getTitle: (locale) => `Why Choose Invoicemonk | ${locale.content.seo.complianceKeyword} Invoicing`,
    getDescription: (locale) => `Discover why ${locale.content.seo.targetAudience} businesses choose Invoicemonk. ${locale.content.seo.complianceKeyword} invoicing, powerful features, and excellent support.`,
    ogType: 'website',
    priority: 0.8,
    changefreq: 'weekly',
  },
  '/free-invoice-generator': {
    getTitle: (locale) => `Invoice Generator for ${locale.content.seo.targetAudience} Businesses | Invoicemonk`,
    getDescription: (locale) => `Create ${locale.content.seo.complianceKeyword.toLowerCase()} invoices instantly. Professional invoice generator with ${locale.content.paymentGateway} integration.`,
    ogType: 'website',
    priority: 0.8,
    changefreq: 'weekly',
  },
  '/developer': {
    getTitle: () => 'Developer API | Invoicemonk',
    getDescription: () => 'Integrate Invoicemonk into your applications with our developer API. Full documentation and SDKs available.',
    ogType: 'website',
    priority: 0.6,
    changefreq: 'monthly',
  },
  '/features/client-management': {
    getTitle: (locale) => `Client Management for ${locale.content.seo.targetAudience} Businesses | Invoicemonk`,
    getDescription: (locale) => `Manage client information, track payment history, and build better relationships. Built for ${locale.content.seo.region} businesses.`,
    ogType: 'website',
    priority: 0.7,
    changefreq: 'weekly',
  },
};

export const getPageSEO = (path: string): PageSEO | undefined => {
  return pageSEO[path];
};
