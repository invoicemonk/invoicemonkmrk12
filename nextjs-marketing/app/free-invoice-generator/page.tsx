import { Metadata } from 'next';
import FreeInvoiceGeneratorComponent from '@/pages/FreeInvoiceGenerator';

export const metadata: Metadata = {
  title: 'Free Online Invoice Generator | InvoiceMonk',
  description: 'Create professional invoices instantly with our free invoice generator.',
  alternates: { canonical: 'https://invoicemonk.com/free-invoice-generator/' },
};

export default function FreeInvoiceGeneratorPage() {
  return <FreeInvoiceGeneratorComponent />;
}
