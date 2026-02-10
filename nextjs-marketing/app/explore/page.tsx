import { Metadata } from 'next';
import { DynamicExplore } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Explore Topics - Guides & Resources | InvoiceMonk',
  description: 'Browse our comprehensive guides and resources.',
  alternates: { canonical: 'https://invoicemonk.com/explore/' },
};

export default function ExplorePage() {
  return <DynamicExplore />;
}
