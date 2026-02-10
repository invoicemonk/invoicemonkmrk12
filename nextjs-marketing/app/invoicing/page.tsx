import { Metadata } from 'next';
import InvoicingComponent from '@/pages/Invoicing';

export const metadata: Metadata = {
  title: 'Page Title | InvoiceMonk',
  description: 'Page description',
  alternates: { canonical: 'https://invoicemonk.com/invoicing/' },
};

export default function InvoicingPage() {
  return <InvoicingComponent />;
}
