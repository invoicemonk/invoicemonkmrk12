import { Metadata } from 'next';
import ContractorsComponent from '@/pages/Contractors';

export const metadata: Metadata = {
  title: 'Financial Management for Contractors ',
  description: ' InvoiceMonk|Manage multiple clients, track project expenses, create professional invoices. Built for independent contractors.',
  openGraph: {
    title: 'Financial Management for Contractors ',
    description: ' InvoiceMonk|Manage multiple clients, track project expenses, create professional invoices. Built for independent contractors.',
    url: 'https://invoicemonk.com/contractors/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/contractors/',
  },
};

export default function ContractorsPage() {
  return <ContractorsComponent />;
}
