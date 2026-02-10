'use client';

import dynamic from 'next/dynamic';

const FreeInvoiceGeneratorComponent = dynamic(() => import('@/pages/FreeInvoiceGenerator'), {
  ssr: false,
});

export default function FreeInvoiceGeneratorPage() {
  return <FreeInvoiceGeneratorComponent />;
}
