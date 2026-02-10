import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Privacy Policy | InvoiceMonk',
  description: 'How InvoiceMonk collects, uses, and protects your personal information.',
  alternates: { canonical: 'https://invoicemonk.com/privacy-policy/' },
};

const PrivacyPolicyComponent = dynamic(() => import('@/pages/PrivacyPolicy'), { ssr: false });

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyComponent />;
}
