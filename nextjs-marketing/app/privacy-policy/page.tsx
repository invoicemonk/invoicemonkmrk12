'use client';

import dynamicImport from 'next/dynamic';

// Force dynamic rendering - must be before component definition
export const dynamic = 'force-dynamic';

const PrivacyPolicyComponent = dynamicImport(() => import('@/pages/PrivacyPolicy'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '100vh' }}></div>,
});

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyComponent />;
}
