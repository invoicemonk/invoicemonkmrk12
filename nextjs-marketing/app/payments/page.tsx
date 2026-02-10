import { Metadata } from 'next';
import { DynamicPayments } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Payment Processing & Tracking Software | InvoiceMonk',
  description: 'Accept online payments, track payment status, and get paid faster.',
  alternates: { canonical: 'https://invoicemonk.com/payments/' },
};

export default function PaymentsPage() {
  return <DynamicPayments />;
}
