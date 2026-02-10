'use client';

import dynamic from 'next/dynamic';

const SmallBusinessesComponent = dynamic(() => import('@/pages/SmallBusinesses'), {
  ssr: false,
});

export default function SmallBusinessesPage() {
  return <SmallBusinessesComponent />;
}
