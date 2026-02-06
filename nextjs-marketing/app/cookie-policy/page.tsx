import { Metadata } from 'next';
import CookiePolicyComponent from '@/pages/Cookie-policy';

export const metadata: Metadata = {
  title: 'Cookie Policy ',
  description: ' InvoiceMonk|How InvoiceMonk uses cookies to improve your experience. Cookie preferences and management.',
  openGraph: {
    title: 'Cookie Policy ',
    description: ' InvoiceMonk|How InvoiceMonk uses cookies to improve your experience. Cookie preferences and management.',
    url: 'https://invoicemonk.com/cookie-policy/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/cookie-policy/',
  },
};

export default function Cookie-policyPage() {
  return <CookiePolicyComponent />;
}
