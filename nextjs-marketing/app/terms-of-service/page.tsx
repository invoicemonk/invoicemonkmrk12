import { Metadata } from 'next';
import { DynamicTermsOfService } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Terms of Service | InvoiceMonk',
  description: 'Terms and conditions for using InvoiceMonk services.',
  alternates: { canonical: 'https://invoicemonk.com/terms-of-service/' },
};

export default function TermsOfServicePage() {
  return <DynamicTermsOfService />;
}
