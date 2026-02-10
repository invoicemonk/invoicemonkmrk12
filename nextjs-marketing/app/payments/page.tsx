'use client';

import dynamic from 'next/dynamic';

const PaymentsComponent = dynamic(() => import('@/pages/Payments'), {
  ssr: false,
});

export default function PaymentsPage() {
  return <PaymentsComponent />;
}
