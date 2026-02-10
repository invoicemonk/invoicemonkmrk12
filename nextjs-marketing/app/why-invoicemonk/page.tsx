'use client';

import dynamic from 'next/dynamic';

const WhyInvoicemonkComponent = dynamic(() => import('@/pages/WhyInvoicemonk'), {
  ssr: false,
});

export default function WhyInvoicemonkPage() {
  return <WhyInvoicemonkComponent />;
}
