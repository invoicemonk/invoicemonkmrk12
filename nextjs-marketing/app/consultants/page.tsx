import { Metadata } from 'next';
import ConsultantsComponent from '@/pages/Consultants';

export const metadata: Metadata = {
  title: 'Invoicing & Accounting for Consultants | InvoiceMonk',
  description: 'Professional invoicing with compliance features your enterprise clients expect. Multi-project tracking and reporting.',
  openGraph: { url: 'https://invoicemonk.com/consultants/', type: 'website' },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://invoicemonk.com/consultants/' },
};

export default function ConsultantsPage() {
  return <ConsultantsComponent />;
}
