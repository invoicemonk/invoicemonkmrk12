'use client';

import AuthorPageComponent from '@/pages/AuthorPage';

export default async function AuthorPage({ 
  params 
}: { 
  params: Promise<{ authorSlug: string }> 
}) {
  const resolvedParams = await params;
  return <AuthorPageComponent params={resolvedParams} />;
}
