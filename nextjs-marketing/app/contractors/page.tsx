import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Financial Management for Contractors | InvoiceMonk',
  description: 'Manage multiple clients, track project expenses, create professional invoices.',
  alternates: { canonical: 'https://invoicemonk.com/contractors/' },
};

const ContractorsComponent = dynamic(() => import('@/pages/Contractors'), { ssr: false });

export default function ContractorsPage() {
  return <ContractorsComponent />;
}
