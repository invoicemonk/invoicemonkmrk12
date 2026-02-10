import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Free Online Invoice Generator | InvoiceMonk',
  description: 'Create professional invoices instantly with our free invoice generator.',
  alternates: { canonical: 'https://invoicemonk.com/free-invoice-generator/' },
};

const FreeInvoiceGeneratorComponent = dynamic(() => import('@/pages/FreeInvoiceGenerator'), { ssr: false });

export default function FreeInvoiceGeneratorPage() {
  return <FreeInvoiceGeneratorComponent />;
}
