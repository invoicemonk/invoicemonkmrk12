import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Cookie Policy | InvoiceMonk',
  description: 'How InvoiceMonk uses cookies to improve your experience.',
  alternates: { canonical: 'https://invoicemonk.com/cookie-policy/' },
};

const CookiePolicyComponent = dynamic(() => import('@/pages/CookiePolicy'), { ssr: false });

export default function CookiePolicyPage() {
  return <CookiePolicyComponent />;
}
