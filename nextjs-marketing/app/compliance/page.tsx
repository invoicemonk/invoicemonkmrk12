import { Metadata } from 'next';
import { DynamicCompliance } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Compliance & Audit-Ready Financial Management | InvoiceMonk',
  description: 'Stay compliant with immutable records, complete audit trails, and financial controls.',
  alternates: { canonical: 'https://invoicemonk.com/compliance/' },
};

export default function CompliancePage() {
  return <DynamicCompliance />;
}
