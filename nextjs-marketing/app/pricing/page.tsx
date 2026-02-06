import { Metadata } from 'next';
import PricingComponent from '@/pages/Pricing';

export const metadata: Metadata = {
  title: 'Pricing Plans - Start Free ',
  description: ' InvoiceMonk|Simple, transparent pricing for freelancers and small businesses. Start free, upgrade as you grow.',
  openGraph: {
    title: 'Pricing Plans - Start Free ',
    description: ' InvoiceMonk|Simple, transparent pricing for freelancers and small businesses. Start free, upgrade as you grow.',
    url: 'https://invoicemonk.com/pricing/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/pricing/',
  },
};

export default function PricingPage() {
  return <PricingComponent />;
}
