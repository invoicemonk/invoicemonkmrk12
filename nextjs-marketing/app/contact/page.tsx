'use client';

import dynamicImport from 'next/dynamic';

// Force dynamic rendering - must be before component definition
export const dynamic = 'force-dynamic';

const ContactComponent = dynamicImport(() => import('@/pages/Contact'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '100vh' }}></div>,
});

export default function ContactPage() {
  return <ContactComponent />;
}
