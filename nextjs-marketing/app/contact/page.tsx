import { Metadata } from 'next';
import ContactComponent from '@/pages/Contact';

export const metadata: Metadata = {
  title: 'Contact Us - Get Help & Support | InvoiceMonk',
  description: 'Get in touch with InvoiceMonk support. We are here to help with any questions about invoicing, expenses, or accounting.',
  openGraph: {
    title: 'Contact Us - Get Help & Support',
    description: 'Get in touch with InvoiceMonk support. We are here to help with any questions about invoicing, expenses, or accounting.',
    url: 'https://invoicemonk.com/contact/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/contact/',
  },
};

export default function ContactPage() {
  return <ContactComponent />;
}
