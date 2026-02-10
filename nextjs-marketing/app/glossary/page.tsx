'use client';

import dynamicImport from 'next/dynamic';

// Force dynamic rendering - must be before component definition
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const GlossaryComponent = dynamicImport(() => import('@/pages/Glossary'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '100vh' }}></div>,
});

export default function GlossaryPage() {
  return <GlossaryComponent />;
}
