import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Financial Glossary - Accounting & Business Terms | InvoiceMonk',
  description: 'Comprehensive glossary of accounting, invoicing, and business financial terms.',
  alternates: { canonical: 'https://invoicemonk.com/glossary/' },
};

const GlossaryComponent = dynamic(() => import('@/pages/Glossary'), { ssr: false });

export default function GlossaryPage() {
  return <GlossaryComponent />;
}
