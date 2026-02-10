import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Pricing Plans - Start Free | InvoiceMonk',
  description: 'Simple, transparent pricing for freelancers and small businesses.',
  alternates: { canonical: 'https://invoicemonk.com/pricing/' },
};

const PricingComponent = dynamic(() => import('@/pages/Pricing'), { ssr: false });

export default function PricingPage() {
  return <PricingComponent />;
}
