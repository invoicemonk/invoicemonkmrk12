import { Metadata } from 'next';
import EstimatesComponent from '@/pages/Estimates';

export const metadata: Metadata = {
  title: 'Create Professional Estimates & Quotes | InvoiceMonk',
  description: 'Create and send professional estimates quickly. Convert approved estimates to invoices with one click.',
  openGraph: {
    title: 'Create Professional Estimates & Quotes',
    description: 'Create and send professional estimates quickly. Convert approved estimates to invoices with one click.',
    url: 'https://invoicemonk.com/estimates/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/estimates/',
  },
};

export default function EstimatesPage() {
  return <EstimatesComponent />;
}
