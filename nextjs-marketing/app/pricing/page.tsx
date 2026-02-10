import { Metadata } from 'next';
import { DynamicPricing } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Pricing Plans - Start Free | InvoiceMonk',
  description: 'Simple, transparent pricing for freelancers and small businesses.',
  alternates: { canonical: 'https://invoicemonk.com/pricing/' },
};

export default function PricingPage() {
  return <DynamicPricing />;
}
