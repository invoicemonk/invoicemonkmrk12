import { Metadata } from 'next';
import { DynamicEstimates } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Create Professional Estimates & Quotes | InvoiceMonk',
  description: 'Create and send professional estimates quickly.',
  alternates: { canonical: 'https://invoicemonk.com/estimates/' },
};

export default function EstimatesPage() {
  return <DynamicEstimates />;
}
