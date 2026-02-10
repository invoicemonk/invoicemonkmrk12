import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Contact Us - Get Help & Support | InvoiceMonk',
  description: 'Get in touch with InvoiceMonk support.',
  alternates: { canonical: 'https://invoicemonk.com/contact/' },
};

const ContactComponent = dynamic(() => import('@/pages/Contact'), { ssr: false });

export default function ContactPage() {
  return <ContactComponent />;
}
