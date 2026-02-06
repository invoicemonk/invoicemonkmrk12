'use client';

import AuthorPageComponent from '@/pages/AuthorPage';

export default function AuthorPage({ params }: { params: { authorSlug: string } }) {
  return <AuthorPageComponent params={params} />;
}
