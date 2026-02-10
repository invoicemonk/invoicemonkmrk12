'use client';

import dynamic from 'next/dynamic';

const CookiePolicyComponent = dynamic(() => import('@/pages/CookiePolicy'), {
  ssr: false,
});

export default function CookiePolicyPage() {
  return <CookiePolicyComponent />;
}
