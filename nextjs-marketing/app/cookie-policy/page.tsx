import { Metadata } from 'next';
import CookiePolicyComponent from '@/pages/CookiePolicy';

export const metadata: Metadata = {
  title: 'Cookie Policy | InvoiceMonk',
  description: 'How InvoiceMonk uses cookies to improve your experience. Cookie preferences and management.',
  openGraph: {
    title: 'Cookie Policy',
    description: 'How InvoiceMonk uses cookies to improve your experience. Cookie preferences and management.',
    url: 'https://invoicemonk.com/cookie-policy/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/cookie-policy/',
  },
};

export default function CookiePolicyPage() {
  return <CookiePolicyComponent />;
}
