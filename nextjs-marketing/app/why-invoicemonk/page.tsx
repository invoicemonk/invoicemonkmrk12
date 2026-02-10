import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Why Choose InvoiceMonk - Features & Benefits | InvoiceMonk',
  description: 'Discover why thousands of businesses trust InvoiceMonk.',
  alternates: { canonical: 'https://invoicemonk.com/why-invoicemonk/' },
};

const WhyInvoicemonkComponent = dynamic(() => import('@/pages/WhyInvoicemonk'), { ssr: false });

export default function WhyInvoicemonkPage() {
  return <WhyInvoicemonkComponent />;
}
