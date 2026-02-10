'use client';

import dynamic from 'next/dynamic';

const BlogComponent = dynamic(() => import('@/pages/Blog'), {
  ssr: false,
});

export default function BlogPage() {
  return <BlogComponent />;
}
