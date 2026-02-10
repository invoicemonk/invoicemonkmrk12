import { Metadata } from 'next';
import { DynamicContact } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Contact Us - Get Help & Support | InvoiceMonk',
  description: 'Get in touch with InvoiceMonk support.',
  alternates: { canonical: 'https://invoicemonk.com/contact/' },
};

export default function ContactPage() {
  return <DynamicContact />;
}
