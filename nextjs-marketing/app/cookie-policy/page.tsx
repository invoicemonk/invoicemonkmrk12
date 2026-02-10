import { Metadata } from 'next';
import CookiePolicyComponent from '@/pages/CookiePolicy';

export const metadata: Metadata = {
  title: 'Cookie Policy | InvoiceMonk',
  description: 'How InvoiceMonk uses cookies to improve your experience.',
  alternates: { canonical: 'https://invoicemonk.com/cookie-policy/' },
};

export default function CookiePolicyPage() {
  return <CookiePolicyComponent />;
}
