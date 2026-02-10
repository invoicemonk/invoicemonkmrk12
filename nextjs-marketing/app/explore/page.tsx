import { Metadata } from 'next';
import ExploreComponent from '@/pages/Explore';

export const metadata: Metadata = {
  title: 'Page Title | InvoiceMonk',
  description: 'Page description',
  alternates: { canonical: 'https://invoicemonk.com/explore/' },
};

export default function ExplorePage() {
  return <ExploreComponent />;
}
