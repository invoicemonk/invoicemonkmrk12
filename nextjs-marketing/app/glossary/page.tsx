import { Metadata } from 'next';
import GlossaryComponent from '@/pages/Glossary';

export const metadata: Metadata = {
  title: 'Financial Glossary - Accounting & Business Terms | InvoiceMonk',
  description: 'Comprehensive glossary of accounting, invoicing, and business financial terms. Learn the language of finance.',
  openGraph: {
    title: 'Financial Glossary - Accounting & Business Terms',
    description: 'Comprehensive glossary of accounting, invoicing, and business financial terms. Learn the language of finance.',
    url: 'https://invoicemonk.com/glossary/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/glossary/',
  },
};

export default function GlossaryPage() {
  return <GlossaryComponent />;
}
