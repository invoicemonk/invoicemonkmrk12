import { Metadata } from 'next';
import { DynamicGlossary } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Financial Glossary - Accounting & Business Terms | InvoiceMonk',
  description: 'Comprehensive glossary of accounting, invoicing, and business financial terms.',
  alternates: { canonical: 'https://invoicemonk.com/glossary/' },
};

export default function GlossaryPage() {
  return <DynamicGlossary />;
}
