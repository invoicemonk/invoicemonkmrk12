import { Metadata } from 'next';
import { DynamicReceipts } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Receipt Management & Scanning Software | InvoiceMonk',
  description: 'Scan, organize, and manage receipts digitally.',
  alternates: { canonical: 'https://invoicemonk.com/receipts/' },
};

export default function ReceiptsPage() {
  return <DynamicReceipts />;
}
