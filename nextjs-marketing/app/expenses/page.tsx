import { Metadata } from 'next';
import { DynamicExpenses } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Expense Tracking Software | InvoiceMonk',
  description: 'Effortlessly track business expenses, scan receipts, categorize spending.',
  alternates: { canonical: 'https://invoicemonk.com/expenses/' },
};

export default function ExpensesPage() {
  return <DynamicExpenses />;
}
