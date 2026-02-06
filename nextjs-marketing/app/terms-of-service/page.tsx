import { Metadata } from 'next';
import Terms-of-serviceComponent from '@/pages/Terms-of-service';

export const metadata: Metadata = {
  title: 'Terms of Service ',
  description: ' InvoiceMonk|Terms and conditions for using InvoiceMonk services. User rights and responsibilities.',
  openGraph: {
    title: 'Terms of Service ',
    description: ' InvoiceMonk|Terms and conditions for using InvoiceMonk services. User rights and responsibilities.',
    url: 'https://invoicemonk.com/terms-of-service/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/terms-of-service/',
  },
};

export default function Terms-of-servicePage() {
  return <Terms-of-serviceComponent />;
}
