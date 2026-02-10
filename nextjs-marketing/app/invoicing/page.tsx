'use client';

import dynamicImport from 'next/dynamic';

// Force dynamic rendering - must be before component definition
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const InvoicingComponent = dynamicImport(() => import('@/pages/Invoicing'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '100vh' }}></div>,
});

export default function InvoicingPage() {
  return <InvoicingComponent />;
}
