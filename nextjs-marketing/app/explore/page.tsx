'use client';

import dynamic from 'next/dynamic';

const ExploreComponent = dynamic(() => import('@/pages/Explore'), {
  ssr: false,
});

export default function ExplorePage() {
  return <ExploreComponent />;
}
