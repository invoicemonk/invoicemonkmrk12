import { Helmet } from 'react-helmet-async';
import { Author } from '@/data/authors';
import type { Pillar, ClusterType } from '@/data/topicalMap';

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished: string;
  dateModified?: string;
  author: Author;
  section: string;
  // Enhanced semantic SEO fields
  pillar?: Pillar;
  clusterType?: ClusterType;
  isPillarContent?: boolean;
  semanticKeywords?: string[];
  relatedArticles?: Array<{ title: string; url: string }>;
}

export function ArticleSchema({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
  author,
  section,
  pillar,
  clusterType,
  isPillarContent,
  semanticKeywords,
  relatedArticles,
}: ArticleSchemaProps) {
  // Determine article type based on pillar content
  const articleType = isPillarContent ? 'Article' : 'BlogPosting';
  
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": articleType,
    "headline": title,
    "description": description,
    "url": url,
    "image": imageUrl || "https://invoicemonk.com/og-image.png",
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": author.name,
      "url": `https://invoicemonk.com/blog/author/${author.slug}`,
      "jobTitle": author.role,
      "description": author.bio,
      "sameAs": Object.values(author.socialLinks).filter(Boolean)
    },
    "publisher": {
      "@type": "Organization",
      "name": "Invoicemonk",
      "url": "https://invoicemonk.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://invoicemonk.com/logo.png"
      }
    },
    "articleSection": pillar?.title || section,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  // Add semantic keywords if provided
  if (semanticKeywords && semanticKeywords.length > 0) {
    schema.keywords = semanticKeywords.join(', ');
  }

  // Add pillar/cluster relationship for semantic SEO
  if (pillar) {
    schema.isPartOf = {
      "@type": "WebPage",
      "@id": `https://invoicemonk.com/blog?pillar=${pillar.id}`,
      "name": pillar.title,
      "description": pillar.description
    };

    // Add about entity for pillar pages
    if (isPillarContent) {
      schema.about = {
        "@type": "Thing",
        "name": pillar.title,
        "description": pillar.description
      };
    }
  }

  // Add related articles for internal linking signal
  if (relatedArticles && relatedArticles.length > 0) {
    schema.relatedLink = relatedArticles.map(article => ({
      "@type": "WebPage",
      "url": article.url,
      "name": article.title
    }));
  }

  // Add cluster type as additional context
  if (clusterType) {
    const speakableType = {
      pillar: 'Complete Guide',
      cluster: 'In-depth Article',
      supporting: 'Supporting Content',
      outer: 'Related Content'
    };
    schema.speakable = {
      "@type": "SpeakableSpecification",
      "cssSelector": ["article h1", "article h2", "article p:first-of-type"]
    };
    schema.learningResourceType = speakableType[clusterType];
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
