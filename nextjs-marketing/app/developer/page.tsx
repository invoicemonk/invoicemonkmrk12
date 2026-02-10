import { Metadata } from 'next';
import DeveloperComponent from '@/pages/Developer';

export const metadata: Metadata = {
  title: 'Page Title | InvoiceMonk',
  description: 'Page description',
  alternates: { canonical: 'https://invoicemonk.com/developer/' },
};

export default function DeveloperPage() {
  return <DeveloperComponent />;
}
