'use client';

import BlogPostComponent from '@/pages/BlogPost';

// Since we're using static export, all dynamic pages must be client-side navigated
export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  return <BlogPostComponent params={resolvedParams} />;
}
