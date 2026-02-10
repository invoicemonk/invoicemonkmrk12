import { Metadata } from 'next';
import { DynamicIndex } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'InvoiceMonk - Invoicing, Expenses & Accounting Software for Small Businesses',
  description: 'Professional invoicing, expense tracking, and accounting software for freelancers, consultants, and small businesses.',
  openGraph: {
    title: 'InvoiceMonk - Invoicing, Expenses & Accounting Software',
    description: 'Professional invoicing, expense tracking, and accounting software for freelancers and small businesses.',
    url: 'https://invoicemonk.com/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/',
  },
};

export default function HomePage() {
  return <DynamicIndex />;
}
