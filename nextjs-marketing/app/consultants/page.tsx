import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Invoicing & Accounting for Consultants | InvoiceMonk',
  description: 'Professional invoicing with compliance features your enterprise clients expect.',
  alternates: { canonical: 'https://invoicemonk.com/consultants/' },
};

const ConsultantsComponent = dynamic(() => import('@/pages/Consultants'), { ssr: false });

export default function ConsultantsPage() {
  return <ConsultantsComponent />;
}
