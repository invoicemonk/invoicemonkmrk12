import { Metadata } from 'next';
import TermsOfServiceComponent from '@/pages/TermsOfService';

export const metadata: Metadata = {
  title: 'Terms of Service | InvoiceMonk',
  description: 'Terms and conditions for using InvoiceMonk services.',
  alternates: { canonical: 'https://invoicemonk.com/terms-of-service/' },
};

export default function TermsOfServicePage() {
  return <TermsOfServiceComponent />;
}
