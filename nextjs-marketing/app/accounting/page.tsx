'use client';

import dynamic from 'next/dynamic';

const AccountingComponent = dynamic(() => import('@/pages/Accounting'), {
  ssr: false,
});

export default function AccountingPage() {
  return <AccountingComponent />;
}
