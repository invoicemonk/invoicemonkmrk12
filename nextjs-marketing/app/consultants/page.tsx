import { Metadata } from 'next';
import ConsultantsComponent from '@/pages/Consultants';

export const metadata: Metadata = {
  title: 'Invoicing & Accounting for Consultants | InvoiceMonk',
  description: 'Professional invoicing with compliance features your enterprise clients expect. Multi-project tracking and reporting.',
  openGraph: {
    title: 'Invoicing & Accounting for Consultants',
    description: 'Professional invoicing with compliance features your enterprise clients expect. Multi-project tracking and reporting.',
    url: 'https://invoicemonk.com/consultants/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/consultants/',
  },
};

export default function ConsultantsPage() {
  return <ConsultantsComponent />;
}
