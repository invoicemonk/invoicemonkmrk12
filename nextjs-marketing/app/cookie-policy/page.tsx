'use client';

import dynamicImport from 'next/dynamic';

// Force dynamic rendering - must be before component definition
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const CookiePolicyComponent = dynamicImport(() => import('@/pages/CookiePolicy'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '100vh' }}></div>,
});

export default function CookiePolicyPage() {
  return <CookiePolicyComponent />;
}
