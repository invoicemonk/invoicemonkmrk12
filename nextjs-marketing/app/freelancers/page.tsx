import { Metadata } from 'next';
import { DynamicFreelancers } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Invoicing Software for Freelancers | InvoiceMonk',
  description: 'Purpose-built invoicing and expense tracking for freelancers.',
  alternates: { canonical: 'https://invoicemonk.com/freelancers/' },
};

export default function FreelancersPage() {
  return <DynamicFreelancers />;
}
