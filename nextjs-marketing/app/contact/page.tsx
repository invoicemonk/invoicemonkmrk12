'use client';

import dynamic from 'next/dynamic';

const ContactComponent = dynamic(() => import('@/pages/Contact'), {
  ssr: false,
});

export default function ContactPage() {
  return <ContactComponent />;
}
