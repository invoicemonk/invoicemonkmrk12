import { Metadata } from 'next';
import AboutComponent from '@/pages/About';

export const metadata: Metadata = {
  title: 'About InvoiceMonk - Our Story & Mission ',
  description: ' InvoiceMonk|Learn about InvoiceMonk's mission to simplify financial management for small businesses and freelancers.',
  openGraph: {
    title: 'About InvoiceMonk - Our Story & Mission ',
    description: ' InvoiceMonk|Learn about InvoiceMonk's mission to simplify financial management for small businesses and freelancers.',
    url: 'https://invoicemonk.com/about/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/about/',
  },
};

export default function AboutPage() {
  return <AboutComponent />;
}
