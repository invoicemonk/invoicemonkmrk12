import { Metadata } from 'next';
import { DynamicAccounting } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Small Business Accounting Software | InvoiceMonk',
  description: 'Complete accounting solution for small businesses. Chart of accounts, financial reports, multi-entity support.',
  alternates: { canonical: 'https://invoicemonk.com/accounting/' },
};

export default function AccountingPage() {
  return <DynamicAccounting />;
}
