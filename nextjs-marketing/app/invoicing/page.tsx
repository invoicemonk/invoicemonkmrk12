import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Professional Invoicing Software | InvoiceMonk',
  description: 'Create professional invoices in seconds. Track payments, send automated reminders.',
  alternates: { canonical: 'https://invoicemonk.com/invoicing/' },
};

const InvoicingComponent = dynamic(() => import('@/pages/Invoicing'), { ssr: false });

export default function InvoicingPage() {
  return <InvoicingComponent />;
}
