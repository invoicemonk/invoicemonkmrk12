import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Invoicing Software for Freelancers | InvoiceMonk',
  description: 'Purpose-built invoicing and expense tracking for freelancers.',
  alternates: { canonical: 'https://invoicemonk.com/freelancers/' },
};

const FreelancersComponent = dynamic(() => import('@/pages/Freelancers'), { ssr: false });

export default function FreelancersPage() {
  return <FreelancersComponent />;
}
