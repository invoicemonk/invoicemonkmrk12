import { Metadata } from 'next';
import FreeInvoiceGeneratorComponent from '@/pages/Free-invoice-generator';

export const metadata: Metadata = {
  title: 'Free Online Invoice Generator - Create Invoices Instantly ',
  description: ' InvoiceMonk|Create professional invoices instantly with our free invoice generator. No signup required. Download as PDF.',
  openGraph: {
    title: 'Free Online Invoice Generator - Create Invoices Instantly ',
    description: ' InvoiceMonk|Create professional invoices instantly with our free invoice generator. No signup required. Download as PDF.',
    url: 'https://invoicemonk.com/free-invoice-generator/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/free-invoice-generator/',
  },
};

export default function Free-invoice-generatorPage() {
  return <FreeInvoiceGeneratorComponent />;
}
