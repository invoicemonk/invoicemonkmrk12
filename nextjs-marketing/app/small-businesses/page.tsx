import { Metadata } from 'next';
import { DynamicSmallBusinesses } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Accounting Software for Small Businesses | InvoiceMonk',
  description: 'Grow from one-person shop to full team.',
  alternates: { canonical: 'https://invoicemonk.com/small-businesses/' },
};

export default function SmallBusinessesPage() {
  return <DynamicSmallBusinesses />;
}
