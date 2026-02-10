import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Expense Tracking Software | InvoiceMonk',
  description: 'Effortlessly track business expenses, scan receipts, categorize spending.',
  alternates: { canonical: 'https://invoicemonk.com/expenses/' },
};

const ExpensesComponent = dynamic(() => import('@/pages/Expenses'), { ssr: false });

export default function ExpensesPage() {
  return <ExpensesComponent />;
}
