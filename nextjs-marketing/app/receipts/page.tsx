'use client';

import dynamic from 'next/dynamic';

const ReceiptsComponent = dynamic(() => import('@/pages/Receipts'), {
  ssr: false,
});

export default function ReceiptsPage() {
  return <ReceiptsComponent />;
}
