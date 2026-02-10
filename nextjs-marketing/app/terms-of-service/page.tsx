import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Terms of Service | InvoiceMonk',
  description: 'Terms and conditions for using InvoiceMonk services.',
  alternates: { canonical: 'https://invoicemonk.com/terms-of-service/' },
};

const TermsOfServiceComponent = dynamic(() => import('@/pages/TermsOfService'), { ssr: false });

export default function TermsOfServicePage() {
  return <TermsOfServiceComponent />;
}
