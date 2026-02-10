import { Metadata } from 'next';
import { DynamicInvoicing } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Professional Invoicing Software | InvoiceMonk',
  description: 'Create professional invoices in seconds. Track payments, send automated reminders.',
  alternates: { canonical: 'https://invoicemonk.com/invoicing/' },
};

export default function InvoicingPage() {
  return <DynamicInvoicing />;
}
