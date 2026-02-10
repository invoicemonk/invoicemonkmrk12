import { Metadata } from 'next';
import ExpensesComponent from '@/pages/Expenses';

export const metadata: Metadata = {
  title: 'Page Title | InvoiceMonk',
  description: 'Page description',
  alternates: { canonical: 'https://invoicemonk.com/expenses/' },
};

export default function ExpensesPage() {
  return <ExpensesComponent />;
}
