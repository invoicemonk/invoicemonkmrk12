import { Metadata } from 'next';
import AccountingComponent from '@/pages/Accounting';

export const metadata: Metadata = {
  title: 'Small Business Accounting Software | InvoiceMonk',
  description: 'Complete accounting solution for small businesses. Chart of accounts, financial reports, multi-entity support, and automated bookkeeping.',
  openGraph: {
    title: 'Small Business Accounting Software',
    description: 'Complete accounting solution for small businesses. Chart of accounts, financial reports, multi-entity support, and automated bookkeeping.',
    url: 'https://invoicemonk.com/accounting/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/accounting/',
  },
};

export default function AccountingPage() {
  return <AccountingComponent />;
}
