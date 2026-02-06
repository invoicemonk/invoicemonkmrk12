'use client';

import BlogTopicComponent from '@/pages/BlogTopic';

export default function BlogTopicPage({ params }: { params: { topicId: string } }) {
  return <BlogTopicComponent params={params} />;
}
