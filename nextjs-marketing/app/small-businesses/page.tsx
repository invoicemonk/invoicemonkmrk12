import { Metadata } from 'next';
import SmallBusinessesComponent from '@/pages/Small-businesses';

export const metadata: Metadata = {
  title: 'Accounting Software for Small Businesses ',
  description: ' InvoiceMonk|Grow from one-person shop to full team. Scalable invoicing, expense tracking, and accounting tools.',
  openGraph: {
    title: 'Accounting Software for Small Businesses ',
    description: ' InvoiceMonk|Grow from one-person shop to full team. Scalable invoicing, expense tracking, and accounting tools.',
    url: 'https://invoicemonk.com/small-businesses/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/small-businesses/',
  },
};

export default function Small-businessesPage() {
  return <SmallBusinessesComponent />;
}
