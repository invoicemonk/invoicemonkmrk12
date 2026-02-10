'use client';

import dynamic from 'next/dynamic';

const ContractorsComponent = dynamic(() => import('@/pages/Contractors'), {
  ssr: false,
});

export default function ContractorsPage() {
  return <ContractorsComponent />;
}
