'use client';

import dynamic from 'next/dynamic';

const PrivacyPolicyComponent = dynamic(() => import('@/pages/PrivacyPolicy'), {
  ssr: false,
});

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyComponent />;
}
