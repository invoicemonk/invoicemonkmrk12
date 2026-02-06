import { Metadata } from 'next';
import ExploreComponent from '@/pages/Explore';

export const metadata: Metadata = {
  title: 'Explore Topics - Guides & Resources ',
  description: ' InvoiceMonk|Browse our comprehensive guides and resources on invoicing, accounting, expenses, and financial management.',
  openGraph: {
    title: 'Explore Topics - Guides & Resources ',
    description: ' InvoiceMonk|Browse our comprehensive guides and resources on invoicing, accounting, expenses, and financial management.',
    url: 'https://invoicemonk.com/explore/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/explore/',
  },
};

export default function ExplorePage() {
  return <ExploreComponent />;
}
