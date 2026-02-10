import { Metadata } from 'next';
import SmallBusinessesComponent from '@/pages/SmallBusinesses';

export const metadata: Metadata = {
  title: 'Accounting Software for Small Businesses | InvoiceMonk',
  description: 'Grow from one-person shop to full team. Scalable invoicing, expense tracking, and accounting tools.',
  alternates: { canonical: 'https://invoicemonk.com/small-businesses/' },
};

export default function SmallBusinessesPage() {
  return <SmallBusinessesComponent />;
}
