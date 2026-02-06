import { Metadata } from 'next';
import DeveloperComponent from '@/pages/Developer';

export const metadata: Metadata = {
  title: 'Developer API & Integrations ',
  description: ' InvoiceMonk|Integrate InvoiceMonk into your applications. RESTful API, webhooks, and developer documentation.',
  openGraph: {
    title: 'Developer API & Integrations ',
    description: ' InvoiceMonk|Integrate InvoiceMonk into your applications. RESTful API, webhooks, and developer documentation.',
    url: 'https://invoicemonk.com/developer/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/developer/',
  },
};

export default function DeveloperPage() {
  return <DeveloperComponent />;
}
