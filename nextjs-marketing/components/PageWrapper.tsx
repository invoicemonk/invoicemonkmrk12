'use client';

import dynamic from 'next/dynamic';

// Create dynamic imports for all page components
export const DynamicAbout = dynamic(() => import('@/page-components/About'), { ssr: false });
export const DynamicAccounting = dynamic(() => import('@/page-components/Accounting'), { ssr: false });
export const DynamicBlog = dynamic(() => import('@/page-components/Blog'), { ssr: false });
export const DynamicCompliance = dynamic(() => import('@/page-components/Compliance'), { ssr: false });
export const DynamicConsultants = dynamic(() => import('@/page-components/Consultants'), { ssr: false });
export const DynamicContact = dynamic(() => import('@/page-components/Contact'), { ssr: false });
export const DynamicContractors = dynamic(() => import('@/page-components/Contractors'), { ssr: false });
export const DynamicCookiePolicy = dynamic(() => import('@/page-components/CookiePolicy'), { ssr: false });
export const DynamicDeveloper = dynamic(() => import('@/page-components/Developer'), { ssr: false });
export const DynamicEstimates = dynamic(() => import('@/page-components/Estimates'), { ssr: false });
export const DynamicExpenses = dynamic(() => import('@/page-components/Expenses'), { ssr: false });
export const DynamicExplore = dynamic(() => import('@/page-components/Explore'), { ssr: false });
export const DynamicFreeInvoiceGenerator = dynamic(() => import('@/page-components/FreeInvoiceGenerator'), { ssr: false });
export const DynamicFreelancers = dynamic(() => import('@/page-components/Freelancers'), { ssr: false });
export const DynamicGlossary = dynamic(() => import('@/page-components/Glossary'), { ssr: false });
export const DynamicIndex = dynamic(() => import('@/page-components/Index'), { ssr: false });
export const DynamicInvoicing = dynamic(() => import('@/page-components/Invoicing'), { ssr: false });
export const DynamicPayments = dynamic(() => import('@/page-components/Payments'), { ssr: false });
export const DynamicPricing = dynamic(() => import('@/page-components/Pricing'), { ssr: false });
export const DynamicPrivacyPolicy = dynamic(() => import('@/page-components/PrivacyPolicy'), { ssr: false });
export const DynamicReceipts = dynamic(() => import('@/page-components/Receipts'), { ssr: false });
export const DynamicSmallBusinesses = dynamic(() => import('@/page-components/SmallBusinesses'), { ssr: false });
export const DynamicTermsOfService = dynamic(() => import('@/page-components/TermsOfService'), { ssr: false });
export const DynamicWhyInvoicemonk = dynamic(() => import('@/page-components/WhyInvoicemonk'), { ssr: false });
