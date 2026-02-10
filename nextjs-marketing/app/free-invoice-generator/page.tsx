import { Metadata } from 'next';
import { DynamicFreeInvoiceGenerator } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Free Online Invoice Generator | InvoiceMonk',
  description: 'Create professional invoices instantly with our free invoice generator.',
  alternates: { canonical: 'https://invoicemonk.com/free-invoice-generator/' },
};

export default function FreeInvoiceGeneratorPage() {
  return <DynamicFreeInvoiceGenerator />;
}
