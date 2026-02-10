import { Metadata } from 'next';
import GlossaryComponent from '@/pages/Glossary';

export const metadata: Metadata = {
  title: 'Page Title | InvoiceMonk',
  description: 'Page description',
  alternates: { canonical: 'https://invoicemonk.com/glossary/' },
};

export default function GlossaryPage() {
  return <GlossaryComponent />;
}
