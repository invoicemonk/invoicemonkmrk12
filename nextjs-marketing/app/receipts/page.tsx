'use client';

import dynamic from 'next/dynamic';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

const ReceiptsComponent = dynamic(() => import('@/pages/Receipts'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '100vh' }}></div>,
});

export default function ReceiptsPage() {
  return <ReceiptsComponent />;
}
