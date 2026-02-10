import { Metadata } from 'next';
import AboutComponent from '@/pages/About';

export const metadata: Metadata = {
  title: 'About InvoiceMonk - Our Story & Mission | InvoiceMonk',
  description: 'Learn about InvoiceMonk mission to simplify financial management for small businesses and freelancers.',
  openGraph: {
    title: 'About InvoiceMonk - Our Story & Mission',
    description: 'Learn about InvoiceMonk mission to simplify financial management for small businesses and freelancers.',
    url: 'https://invoicemonk.com/about/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About InvoiceMonk',
  },
  alternates: { canonical: 'https://invoicemonk.com/about/' },
};

export default function AboutPage() {
  return <AboutComponent />;
}
