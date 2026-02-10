import { Metadata } from 'next';
import PrivacyPolicyComponent from '@/pages/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'Privacy Policy | InvoiceMonk',
  description: 'How InvoiceMonk collects, uses, and protects your personal information. Our commitment to data privacy.',
  openGraph: {
    title: 'Privacy Policy',
    description: 'How InvoiceMonk collects, uses, and protects your personal information. Our commitment to data privacy.',
    url: 'https://invoicemonk.com/privacy-policy/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/privacy-policy/',
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyComponent />;
}
