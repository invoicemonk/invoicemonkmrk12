import { Metadata } from 'next';
import { DynamicContractors } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Financial Management for Contractors | InvoiceMonk',
  description: 'Manage multiple clients, track project expenses, create professional invoices.',
  alternates: { canonical: 'https://invoicemonk.com/contractors/' },
};

export default function ContractorsPage() {
  return <DynamicContractors />;
}
