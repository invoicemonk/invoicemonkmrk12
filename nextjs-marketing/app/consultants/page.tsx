'use client';

import dynamic from 'next/dynamic';

const ConsultantsComponent = dynamic(() => import('@/pages/Consultants'), {
  ssr: false,
});

export default function ConsultantsPage() {
  return <ConsultantsComponent />;
}
