import { Metadata } from 'next';
import PaymentsComponent from '@/pages/Payments';

export const metadata: Metadata = {
  title: 'Payment Processing & Tracking Software ',
  description: ' InvoiceMonk|Accept online payments, track payment status, and get paid faster. Integrated payment processing for your invoices.',
  openGraph: {
    title: 'Payment Processing & Tracking Software ',
    description: ' InvoiceMonk|Accept online payments, track payment status, and get paid faster. Integrated payment processing for your invoices.',
    url: 'https://invoicemonk.com/payments/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/payments/',
  },
};

export default function PaymentsPage() {
  return <PaymentsComponent />;
}
