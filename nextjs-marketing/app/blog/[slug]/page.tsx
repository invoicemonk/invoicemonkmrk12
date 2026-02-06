'use client';

import BlogPostComponent from '@/pages/BlogPost';

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  return <BlogPostComponent params={resolvedParams} />;
}
