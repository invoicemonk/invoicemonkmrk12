import { Metadata } from 'next';
import ContactComponent from '@/pages/Contact';

export const metadata: Metadata = {
  title: 'Contact Us - Get Help & Support | InvoiceMonk',
  description: 'Get in touch with InvoiceMonk support. We are here to help with any questions about invoicing, expenses, or accounting.',
  openGraph: { url: 'https://invoicemonk.com/contact/', type: 'website' },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://invoicemonk.com/contact/' },
};

export default function ContactPage() {
  return <ContactComponent />;
}
