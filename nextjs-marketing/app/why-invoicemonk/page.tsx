import { Metadata } from 'next';
import WhyInvoicemonkComponent from '@/pages/WhyInvoicemonk';

export const metadata: Metadata = {
  title: 'Why Choose InvoiceMonk - Features & Benefits | InvoiceMonk',
  description: 'Discover why thousands of businesses trust InvoiceMonk for invoicing, expenses, and accounting.',
  alternates: { canonical: 'https://invoicemonk.com/why-invoicemonk/' },
};

export default function WhyInvoicemonkPage() {
  return <WhyInvoicemonkComponent />;
}
