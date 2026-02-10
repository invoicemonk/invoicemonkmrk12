import { Metadata } from 'next';
import ComplianceComponent from '@/pages/Compliance';

export const metadata: Metadata = {
  title: 'Compliance & Audit-Ready Financial Management | InvoiceMonk',
  description: 'Stay compliant with immutable records, complete audit trails, and financial controls. Built for regulatory requirements.',
  openGraph: {
    title: 'Compliance & Audit-Ready Financial Management',
    description: 'Stay compliant with immutable records, complete audit trails, and financial controls. Built for regulatory requirements.',
    url: 'https://invoicemonk.com/compliance/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/compliance/',
  },
};

export default function CompliancePage() {
  return <ComplianceComponent />;
}
