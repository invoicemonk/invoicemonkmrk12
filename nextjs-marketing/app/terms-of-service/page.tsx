'use client';

import dynamic from 'next/dynamic';

const TermsOfServiceComponent = dynamic(() => import('@/pages/TermsOfService'), {
  ssr: false,
});

export default function TermsOfServicePage() {
  return <TermsOfServiceComponent />;
}
