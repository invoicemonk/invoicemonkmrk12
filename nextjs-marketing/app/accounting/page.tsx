'use client';

import dynamic from 'next/dynamic';

// Dynamically import the page component with no SSR
const PageComponent = dynamic(() => import('@/pages/COMPONENT_NAME'), {
  ssr: false,
});

export default function Page() {
  return <PageComponent />;
}
