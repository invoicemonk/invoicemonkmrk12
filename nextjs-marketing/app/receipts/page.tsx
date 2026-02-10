import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Receipt Management & Scanning Software | InvoiceMonk',
  description: 'Scan, organize, and manage receipts digitally.',
  alternates: { canonical: 'https://invoicemonk.com/receipts/' },
};

const ReceiptsComponent = dynamic(() => import('@/pages/Receipts'), { ssr: false });

export default function ReceiptsPage() {
  return <ReceiptsComponent />;
}
