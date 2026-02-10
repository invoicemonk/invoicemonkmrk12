'use client';

import dynamic from 'next/dynamic';

const AboutComponent = dynamic(() => import('@/pages/About'), {
  ssr: false,
});

export default function AboutPage() {
  return <AboutComponent />;
}
