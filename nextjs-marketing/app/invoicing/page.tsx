'use client';

import dynamic from 'next/dynamic';

const InvoicingComponent = dynamic(() => import('@/pages/Invoicing'), {
  ssr: false,
});

export default function InvoicingPage() {
  return <InvoicingComponent />;
}
