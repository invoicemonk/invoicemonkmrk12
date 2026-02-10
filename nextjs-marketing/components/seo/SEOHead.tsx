'use client';

// In Next.js App Router, SEO metadata is handled by the metadata export in page.tsx files
// This component is kept for backwards compatibility but renders nothing
// All SEO meta tags are already defined in the app/[route]/page.tsx metadata exports

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogType?: 'website' | 'article' | 'profile';
  noindex?: boolean;
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    author: string;
    section: string;
  };
}

export function SEOHead(_props: SEOHeadProps) {
  // Metadata is handled by Next.js App Router metadata exports
  // This component is a no-op for backwards compatibility
  return null;
}
