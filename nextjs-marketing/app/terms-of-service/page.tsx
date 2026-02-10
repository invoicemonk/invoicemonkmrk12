'use client';

import dynamic from 'next/dynamic';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

const TermsOfServiceComponent = dynamic(() => import('@/pages/TermsOfService'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '100vh' }}></div>,
});

export default function TermsOfServicePage() {
  return <TermsOfServiceComponent />;
}
