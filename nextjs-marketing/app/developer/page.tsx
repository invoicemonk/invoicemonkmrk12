import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Developer API & Integrations | InvoiceMonk',
  description: 'Integrate InvoiceMonk into your applications.',
  alternates: { canonical: 'https://invoicemonk.com/developer/' },
};

const DeveloperComponent = dynamic(() => import('@/pages/Developer'), { ssr: false });

export default function DeveloperPage() {
  return <DeveloperComponent />;
}
