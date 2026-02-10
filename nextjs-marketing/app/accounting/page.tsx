import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Small Business Accounting Software | InvoiceMonk',
  description: 'Complete accounting solution for small businesses. Chart of accounts, financial reports, multi-entity support.',
  alternates: { canonical: 'https://invoicemonk.com/accounting/' },
};

const AccountingComponent = dynamic(() => import('@/pages/Accounting'), { ssr: false });

export default function AccountingPage() {
  return <AccountingComponent />;
}
