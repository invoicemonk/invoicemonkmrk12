'use client';

import dynamic from 'next/dynamic';

const ComplianceComponent = dynamic(() => import('@/pages/Compliance'), {
  ssr: false,
});

export default function CompliancePage() {
  return <ComplianceComponent />;
}
