import { Metadata } from 'next';
import AccountingComponent from '@/pages/Accounting';

export const metadata: Metadata = {
  title: 'Small Business Accounting Software | InvoiceMonk',
  description: 'Complete accounting solution for small businesses. Chart of accounts, financial reports, multi-entity support, and automated bookkeeping.',
  openGraph: {
    title: 'Small Business Accounting Software',
    url: 'https://invoicemonk.com/accounting/',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://invoicemonk.com/accounting/' },
};

export default function AccountingPage() {
  return <AccountingComponent />;
}
