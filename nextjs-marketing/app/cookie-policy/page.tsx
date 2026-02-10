import { Metadata } from 'next';
import { DynamicCookiePolicy } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Cookie Policy | InvoiceMonk',
  description: 'How InvoiceMonk uses cookies to improve your experience.',
  alternates: { canonical: 'https://invoicemonk.com/cookie-policy/' },
};

export default function CookiePolicyPage() {
  return <DynamicCookiePolicy />;
}
