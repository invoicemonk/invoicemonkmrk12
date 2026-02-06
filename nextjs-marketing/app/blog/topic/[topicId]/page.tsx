'use client';

import BlogTopicComponent from '@/pages/BlogTopic';

export default async function BlogTopicPage({ 
  params 
}: { 
  params: Promise<{ topicId: string }> 
}) {
  const resolvedParams = await params;
  return <BlogTopicComponent params={resolvedParams} />;
}
