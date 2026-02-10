import { Metadata } from 'next';
import PricingComponent from '@/pages/Pricing';

export const metadata: Metadata = {
  title: 'Page Title | InvoiceMonk',
  description: 'Page description',
  alternates: { canonical: 'https://invoicemonk.com/pricing/' },
};

export default function PricingPage() {
  return <PricingComponent />;
}
