import { Metadata } from 'next';
import PaymentsComponent from '@/pages/Payments';

export const metadata: Metadata = {
  title: 'Page Title | InvoiceMonk',
  description: 'Page description',
  alternates: { canonical: 'https://invoicemonk.com/payments/' },
};

export default function PaymentsPage() {
  return <PaymentsComponent />;
}
