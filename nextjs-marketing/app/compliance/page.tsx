import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Compliance & Audit-Ready Financial Management | InvoiceMonk',
  description: 'Stay compliant with immutable records, complete audit trails, and financial controls.',
  alternates: { canonical: 'https://invoicemonk.com/compliance/' },
};

const ComplianceComponent = dynamic(() => import('@/pages/Compliance'), { ssr: false });

export default function CompliancePage() {
  return <ComplianceComponent />;
}
