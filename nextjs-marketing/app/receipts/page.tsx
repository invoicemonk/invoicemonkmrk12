import { Metadata } from 'next';
import ReceiptsComponent from '@/pages/Receipts';

export const metadata: Metadata = {
  title: 'Page Title | InvoiceMonk',
  description: 'Page description',
  alternates: { canonical: 'https://invoicemonk.com/receipts/' },
};

export default function ReceiptsPage() {
  return <ReceiptsComponent />;
}
