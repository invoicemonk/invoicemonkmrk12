import { Metadata } from 'next';
import ContractorsComponent from '@/pages/Contractors';

export const metadata: Metadata = {
  title: 'Financial Management for Contractors | InvoiceMonk',
  description: 'Manage multiple clients, track project expenses, create professional invoices. Built for independent contractors.',
  openGraph: { url: 'https://invoicemonk.com/contractors/', type: 'website' },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://invoicemonk.com/contractors/' },
};

export default function ContractorsPage() {
  return <ContractorsComponent />;
}
