import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Accounting Software for Small Businesses | InvoiceMonk',
  description: 'Grow from one-person shop to full team.',
  alternates: { canonical: 'https://invoicemonk.com/small-businesses/' },
};

const SmallBusinessesComponent = dynamic(() => import('@/pages/SmallBusinesses'), { ssr: false });

export default function SmallBusinessesPage() {
  return <SmallBusinessesComponent />;
}
