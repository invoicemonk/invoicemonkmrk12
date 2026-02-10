'use client';

import dynamic from 'next/dynamic';

const DeveloperComponent = dynamic(() => import('@/pages/Developer'), {
  ssr: false,
});

export default function DeveloperPage() {
  return <DeveloperComponent />;
}
