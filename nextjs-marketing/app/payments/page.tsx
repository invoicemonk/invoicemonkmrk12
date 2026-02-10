import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Payment Processing & Tracking Software | InvoiceMonk',
  description: 'Accept online payments, track payment status, and get paid faster.',
  alternates: { canonical: 'https://invoicemonk.com/payments/' },
};

const PaymentsComponent = dynamic(() => import('@/pages/Payments'), { ssr: false });

export default function PaymentsPage() {
  return <PaymentsComponent />;
}
