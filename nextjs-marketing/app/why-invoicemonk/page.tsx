import { Metadata } from 'next';
import WhyInvoicemonkComponent from '@/pages/Why-invoicemonk';

export const metadata: Metadata = {
  title: 'Why Choose InvoiceMonk - Features & Benefits ',
  description: ' InvoiceMonk|Discover why thousands of businesses trust InvoiceMonk for invoicing, expenses, and accounting. Compliance-first, easy to use.',
  openGraph: {
    title: 'Why Choose InvoiceMonk - Features & Benefits ',
    description: ' InvoiceMonk|Discover why thousands of businesses trust InvoiceMonk for invoicing, expenses, and accounting. Compliance-first, easy to use.',
    url: 'https://invoicemonk.com/why-invoicemonk/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/why-invoicemonk/',
  },
};

export default function Why-invoicemonkPage() {
  return <WhyInvoicemonkComponent />;
}
