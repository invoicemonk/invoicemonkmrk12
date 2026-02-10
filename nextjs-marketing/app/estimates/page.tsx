import { Metadata } from 'next';
import EstimatesComponent from '@/pages/Estimates';

export const metadata: Metadata = {
  title: 'Page Title | InvoiceMonk',
  description: 'Page description',
  alternates: { canonical: 'https://invoicemonk.com/estimates/' },
};

export default function EstimatesPage() {
  return <EstimatesComponent />;
}
