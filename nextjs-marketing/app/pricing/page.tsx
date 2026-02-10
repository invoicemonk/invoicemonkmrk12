'use client';

import dynamic from 'next/dynamic';

const PricingComponent = dynamic(() => import('@/pages/Pricing'), {
  ssr: false,
});

export default function PricingPage() {
  return <PricingComponent />;
}
