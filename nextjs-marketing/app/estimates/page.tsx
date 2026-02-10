'use client';

import dynamic from 'next/dynamic';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

const EstimatesComponent = dynamic(() => import('@/pages/Estimates'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '100vh' }}></div>,
});

export default function EstimatesPage() {
  return <EstimatesComponent />;
}
