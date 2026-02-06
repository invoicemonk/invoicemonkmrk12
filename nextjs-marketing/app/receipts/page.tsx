import { Metadata } from 'next';
import ReceiptsComponent from '@/pages/Receipts';

export const metadata: Metadata = {
  title: 'Receipt Management & Scanning Software ',
  description: ' InvoiceMonk|Scan, organize, and manage receipts digitally. Automatic expense categorization and tax tracking.',
  openGraph: {
    title: 'Receipt Management & Scanning Software ',
    description: ' InvoiceMonk|Scan, organize, and manage receipts digitally. Automatic expense categorization and tax tracking.',
    url: 'https://invoicemonk.com/receipts/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/receipts/',
  },
};

export default function ReceiptsPage() {
  return <ReceiptsComponent />;
}
