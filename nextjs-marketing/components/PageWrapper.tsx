'use client';

import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

// Create dynamic imports for all page components
export const DynamicAbout = dynamic(() => import('@/pages/About'), { ssr: false });
export const DynamicAccounting = dynamic(() => import('@/pages/Accounting'), { ssr: false });
export const DynamicBlog = dynamic(() => import('@/pages/Blog'), { ssr: false });
export const DynamicCompliance = dynamic(() => import('@/pages/Compliance'), { ssr: false });
export const DynamicConsultants = dynamic(() => import('@/pages/Consultants'), { ssr: false });
export const DynamicContact = dynamic(() => import('@/pages/Contact'), { ssr: false });
export const DynamicContractors = dynamic(() => import('@/pages/Contractors'), { ssr: false });
export const DynamicCookiePolicy = dynamic(() => import('@/pages/CookiePolicy'), { ssr: false });
export const DynamicDeveloper = dynamic(() => import('@/pages/Developer'), { ssr: false });
export const DynamicEstimates = dynamic(() => import('@/pages/Estimates'), { ssr: false });
export const DynamicExpenses = dynamic(() => import('@/pages/Expenses'), { ssr: false });
export const DynamicExplore = dynamic(() => import('@/pages/Explore'), { ssr: false });
export const DynamicFreeInvoiceGenerator = dynamic(() => import('@/pages/FreeInvoiceGenerator'), { ssr: false });
export const DynamicFreelancers = dynamic(() => import('@/pages/Freelancers'), { ssr: false });
export const DynamicGlossary = dynamic(() => import('@/pages/Glossary'), { ssr: false });
export const DynamicIndex = dynamic(() => import('@/pages/Index'), { ssr: false });
export const DynamicInvoicing = dynamic(() => import('@/pages/Invoicing'), { ssr: false });
export const DynamicPayments = dynamic(() => import('@/pages/Payments'), { ssr: false });
export const DynamicPricing = dynamic(() => import('@/pages/Pricing'), { ssr: false });
export const DynamicPrivacyPolicy = dynamic(() => import('@/pages/PrivacyPolicy'), { ssr: false });
export const DynamicReceipts = dynamic(() => import('@/pages/Receipts'), { ssr: false });
export const DynamicSmallBusinesses = dynamic(() => import('@/pages/SmallBusinesses'), { ssr: false });
export const DynamicTermsOfService = dynamic(() => import('@/pages/TermsOfService'), { ssr: false });
export const DynamicWhyInvoicemonk = dynamic(() => import('@/pages/WhyInvoicemonk'), { ssr: false });
