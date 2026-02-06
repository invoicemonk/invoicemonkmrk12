import { Metadata } from 'next';
import PrivacyPolicyComponent from '@/pages/Privacy-policy';

export const metadata: Metadata = {
  title: 'Privacy Policy ',
  description: ' InvoiceMonk|How InvoiceMonk collects, uses, and protects your personal information. Our commitment to data privacy.',
  openGraph: {
    title: 'Privacy Policy ',
    description: ' InvoiceMonk|How InvoiceMonk collects, uses, and protects your personal information. Our commitment to data privacy.',
    url: 'https://invoicemonk.com/privacy-policy/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/privacy-policy/',
  },
};

export default function Privacy-policyPage() {
  return <PrivacyPolicyComponent />;
}
