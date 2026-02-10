import { Metadata } from 'next';
import { DynamicConsultants } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Invoicing & Accounting for Consultants | InvoiceMonk',
  description: 'Professional invoicing with compliance features your enterprise clients expect.',
  alternates: { canonical: 'https://invoicemonk.com/consultants/' },
};

export default function ConsultantsPage() {
  return <DynamicConsultants />;
}
