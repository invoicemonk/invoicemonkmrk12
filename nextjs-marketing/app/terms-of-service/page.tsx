'use client';

import dynamicImport from 'next/dynamic';

// Force dynamic rendering - must be before component definition
export const dynamic = 'force-dynamic';

const TermsOfServiceComponent = dynamicImport(() => import('@/pages/TermsOfService'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '100vh' }}></div>,
});

export default function TermsOfServicePage() {
  return <TermsOfServiceComponent />;
}
