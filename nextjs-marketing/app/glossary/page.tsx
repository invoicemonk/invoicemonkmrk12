'use client';

import dynamic from 'next/dynamic';

const GlossaryComponent = dynamic(() => import('@/pages/Glossary'), {
  ssr: false,
});

export default function GlossaryPage() {
  return <GlossaryComponent />;
}
