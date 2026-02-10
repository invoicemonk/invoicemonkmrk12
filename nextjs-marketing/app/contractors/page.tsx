'use client';

import dynamicImport from 'next/dynamic';

// Force dynamic rendering - must be before component definition
export const dynamic = 'force-dynamic';

const ContractorsComponent = dynamicImport(() => import('@/pages/Contractors'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '100vh' }}></div>,
});

export default function ContractorsPage() {
  return <ContractorsComponent />;
}
