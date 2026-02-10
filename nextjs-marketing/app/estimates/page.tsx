'use client';

import dynamic from 'next/dynamic';

const EstimatesComponent = dynamic(() => import('@/pages/Estimates'), {
  ssr: false,
});

export default function EstimatesPage() {
  return <EstimatesComponent />;
}
