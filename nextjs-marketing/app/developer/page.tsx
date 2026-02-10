import { Metadata } from 'next';
import { DynamicDeveloper } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Developer API & Integrations | InvoiceMonk',
  description: 'Integrate InvoiceMonk into your applications.',
  alternates: { canonical: 'https://invoicemonk.com/developer/' },
};

export default function DeveloperPage() {
  return <DynamicDeveloper />;
}
