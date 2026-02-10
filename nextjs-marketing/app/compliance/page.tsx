import { Metadata } from 'next';
import ComplianceComponent from '@/pages/Compliance';

export const metadata: Metadata = {
  title: 'Compliance & Audit-Ready Financial Management | InvoiceMonk',
  description: 'Stay compliant with immutable records, complete audit trails, and financial controls. Built for regulatory requirements.',
  openGraph: { title: 'Compliance & Audit-Ready', url: 'https://invoicemonk.com/compliance/', type: 'website' },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://invoicemonk.com/compliance/' },
};

export default function CompliancePage() {
  return <ComplianceComponent />;
}
