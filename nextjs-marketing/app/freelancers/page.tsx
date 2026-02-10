import { Metadata } from 'next';
import FreelancersComponent from '@/pages/Freelancers';

export const metadata: Metadata = {
  title: 'Invoicing Software for Freelancers | InvoiceMonk',
  description: 'Purpose-built invoicing and expense tracking for freelancers. Get paid faster, track project expenses, stay organized.',
  openGraph: {
    title: 'Invoicing Software for Freelancers',
    description: 'Purpose-built invoicing and expense tracking for freelancers. Get paid faster, track project expenses, stay organized.',
    url: 'https://invoicemonk.com/freelancers/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/freelancers/',
  },
};

export default function FreelancersPage() {
  return <FreelancersComponent />;
}
