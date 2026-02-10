import { Metadata } from 'next';
import { DynamicPrivacyPolicy } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Privacy Policy | InvoiceMonk',
  description: 'How InvoiceMonk collects, uses, and protects your personal information.',
  alternates: { canonical: 'https://invoicemonk.com/privacy-policy/' },
};

export default function PrivacyPolicyPage() {
  return <DynamicPrivacyPolicy />;
}
