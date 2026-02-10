import { Metadata } from 'next';
import FreelancersComponent from '@/pages/Freelancers';

export const metadata: Metadata = {
  title: 'Page Title | InvoiceMonk',
  description: 'Page description',
  alternates: { canonical: 'https://invoicemonk.com/freelancers/' },
};

export default function FreelancersPage() {
  return <FreelancersComponent />;
}
