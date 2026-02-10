import { Metadata } from 'next';
import { DynamicAbout } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'About InvoiceMonk - Our Story & Mission | InvoiceMonk',
  description: 'Learn about InvoiceMonk mission to simplify financial management for small businesses and freelancers.',
  openGraph: {
    title: 'About InvoiceMonk - Our Story & Mission',
    url: 'https://invoicemonk.com/about/',
    type: 'website',
  },
  alternates: { canonical: 'https://invoicemonk.com/about/' },
};

export default function AboutPage() {
  return <DynamicAbout />;
}
