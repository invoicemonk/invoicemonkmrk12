import { Metadata } from 'next';
import dynamic from 'next/dynamic';

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

const AboutComponent = dynamic(() => import('@/pages/About'), { ssr: false });

export default function AboutPage() {
  return <AboutComponent />;
}
