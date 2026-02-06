import { Metadata } from 'next';
import InvoicingComponent from '@/pages/Invoicing';

export const metadata: Metadata = {
  title: 'Professional Invoicing Software - Create & Send Invoices Online | InvoiceMonk',
  description: 'Create professional invoices in seconds. Track payments, send automated reminders, and get paid faster. Perfect for freelancers and small businesses.',
  openGraph: {
    title: 'Professional Invoicing Software | InvoiceMonk',
    description: 'Create professional invoices in seconds. Track payments, send automated reminders, and get paid faster.',
    url: 'https://invoicemonk.com/invoicing/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/invoicing/',
  },
};

export default function InvoicingPage() {
  return <InvoicingComponent />;
}
