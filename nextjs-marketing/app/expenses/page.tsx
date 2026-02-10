import { Metadata } from 'next';
import ExpensesComponent from '@/pages/Expenses';

export const metadata: Metadata = {
  title: 'Expense Tracking Software - Track Business Expenses | InvoiceMonk',
  description: 'Effortlessly track business expenses, scan receipts, categorize spending, and generate expense reports. Perfect for freelancers and small businesses.',
  openGraph: {
    title: 'Expense Tracking Software - Track Business Expenses',
    description: 'Effortlessly track business expenses, scan receipts, categorize spending, and generate expense reports. Perfect for freelancers and small businesses.',
    url: 'https://invoicemonk.com/expenses/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/expenses/',
  },
};

export default function ExpensesPage() {
  return <ExpensesComponent />;
}
