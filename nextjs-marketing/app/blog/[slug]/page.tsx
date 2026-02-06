'use client';

import BlogPostComponent from '@/pages/BlogPost';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostComponent params={params} />;
}
