import { Metadata } from 'next';
import { DynamicWhyInvoicemonk } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Why Choose InvoiceMonk - Features & Benefits | InvoiceMonk',
  description: 'Discover why thousands of businesses trust InvoiceMonk.',
  alternates: { canonical: 'https://invoicemonk.com/why-invoicemonk/' },
};

export default function WhyInvoicemonkPage() {
  return <DynamicWhyInvoicemonk />;
}
