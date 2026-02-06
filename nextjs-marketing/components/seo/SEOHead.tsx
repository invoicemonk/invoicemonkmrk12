import { Helmet } from 'react-helmet-async';
import { useLocale } from '@/hooks/useLocale';

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

export function SEOHead({
  title,
  description,
  canonical,
  ogImage = 'https://invoicemonk.com/og-image.png',
  ogImageWidth = 1200,
  ogImageHeight = 630,
  ogType = 'website',
  noindex = false,
  article,
}: SEOHeadProps) {
  const { locale } = useLocale();
  const baseUrl = 'https://invoicemonk.com';
  const fullCanonical = canonical || baseUrl;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Invoicemonk" />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical - single canonical URL, no hreflang needed for single-language site */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={String(ogImageWidth)} />
      <meta property="og:image:height" content={String(ogImageHeight)} />
      <meta property="og:site_name" content="Invoicemonk" />
      <meta property="og:locale" content={locale.code.replace('-', '_')} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@invoicemonk" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Article specific meta */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          <meta property="article:author" content={article.author} />
          <meta property="article:section" content={article.section} />
        </>
      )}
    </Helmet>
  );
}
