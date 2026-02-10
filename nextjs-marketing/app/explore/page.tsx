import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Explore Topics - Guides & Resources | InvoiceMonk',
  description: 'Browse our comprehensive guides and resources.',
  alternates: { canonical: 'https://invoicemonk.com/explore/' },
};

const ExploreComponent = dynamic(() => import('@/pages/Explore'), { ssr: false });

export default function ExplorePage() {
  return <ExploreComponent />;
}
