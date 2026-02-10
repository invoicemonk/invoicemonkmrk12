import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Create Professional Estimates & Quotes | InvoiceMonk',
  description: 'Create and send professional estimates quickly.',
  alternates: { canonical: 'https://invoicemonk.com/estimates/' },
};

const EstimatesComponent = dynamic(() => import('@/pages/Estimates'), { ssr: false });

export default function EstimatesPage() {
  return <EstimatesComponent />;
}
