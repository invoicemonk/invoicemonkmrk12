import { Helmet } from 'react-helmet-async';
import { Author } from '@/data/authors';
import type { Pillar, ClusterType } from '@/data/topicalMap';
import { pillars } from '@/data/topicalMap';

interface EntityMention {
  name: string;
  type?: string;
  url?: string;
  sameAs?: string;
}

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
  // New: Entity mentions for semantic relationships
  entityMentions?: EntityMention[];
}

/**
 * Enhanced ArticleSchema following Koray Tuğberk Gübür's Semantic SEO principles
 * 
 * Includes:
 * - mentions: Entities referenced in the article (topics, concepts, products)
 * - about: Primary entities the article discusses
 * - isPartOf: Pillar/cluster relationships for topical authority
 * - author with knowsAbout: E-E-A-T expertise signals
 */
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
  entityMentions,
}: ArticleSchemaProps) {
  // Determine article type based on pillar content
  const articleType = isPillarContent ? 'Article' : 'BlogPosting';
  
  // Build entity mentions from pillar topics and provided mentions
  const mentions = buildEntityMentions(pillar, entityMentions);
  
  // Build about entities from pillar and content
  const aboutEntities = buildAboutEntities(pillar, isPillarContent);
  
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": articleType,
    "@id": `${url}#article`,
    "headline": title,
    "description": description,
    "url": url,
    "image": imageUrl || "https://invoicemonk.com/og-image.png",
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "inLanguage": "en",
    
    // Enhanced author with E-E-A-T signals
    "author": {
      "@type": "Person",
      "@id": `https://invoicemonk.com/blog/author/${author.slug}#person`,
      "name": author.name,
      "url": `https://invoicemonk.com/blog/author/${author.slug}`,
      "jobTitle": author.role,
      "description": author.bio,
      // E-E-A-T: Expertise signals
      "knowsAbout": author.expertise.map(topic => ({
        "@type": "Thing",
        "name": topic
      })),
      "sameAs": Object.values(author.socialLinks).filter(Boolean)
    },
    
    "publisher": {
      "@type": "Organization",
      "@id": "https://invoicemonk.com/#organization",
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

  // Add entity mentions for semantic relationships
  if (mentions.length > 0) {
    schema.mentions = mentions;
  }

  // Add about entities for primary topic signals
  if (aboutEntities.length > 0) {
    schema.about = aboutEntities;
  }

  // Add pillar/cluster relationship for semantic SEO
  if (pillar) {
    schema.isPartOf = {
      "@type": "WebPage",
      "@id": `https://invoicemonk.com${pillar.hubPage}`,
      "name": pillar.title,
      "description": pillar.description,
      "url": `https://invoicemonk.com${pillar.hubPage}`
    };
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

  // Add citation/reference to product page
  if (pillar?.targetProduct) {
    schema.citation = {
      "@type": "WebPage",
      "url": `https://invoicemonk.com${pillar.targetProduct}`,
      "name": `Invoicemonk ${pillar.title} Product`
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

/**
 * Build entity mentions from pillar topics and explicit mentions
 * These create semantic relationships between content and concepts
 */
function buildEntityMentions(
  pillar?: Pillar, 
  explicitMentions?: EntityMention[]
): Array<Record<string, unknown>> {
  const mentions: Array<Record<string, unknown>> = [];

  // Add pillar key topics as entity mentions
  if (pillar) {
    pillar.keyTopics.forEach(topic => {
      mentions.push({
        "@type": "Thing",
        "name": topic.title,
        "description": topic.description,
        ...(topic.link && { "url": `https://invoicemonk.com${topic.link}` })
      });
    });

    // Add cross-pillar mentions for related topics
    const relatedPillars = getRelatedPillars(pillar.id);
    relatedPillars.forEach(relatedPillar => {
      mentions.push({
        "@type": "Thing",
        "name": relatedPillar.title,
        "description": relatedPillar.description,
        "url": `https://invoicemonk.com${relatedPillar.hubPage}`
      });
    });
  }

  // Add explicit entity mentions with proper typing
  if (explicitMentions) {
    explicitMentions.forEach(mention => {
      mentions.push({
        "@type": mention.type || "Thing",
        "name": mention.name,
        ...(mention.url && { "url": mention.url }),
        ...(mention.sameAs && { "sameAs": mention.sameAs })
      });
    });
  }

  return mentions;
}

/**
 * Build about entities for primary topic signals
 * Helps search engines understand the main subject of the article
 */
function buildAboutEntities(
  pillar?: Pillar,
  isPillarContent?: boolean
): Array<Record<string, unknown>> {
  const aboutEntities: Array<Record<string, unknown>> = [];

  if (pillar) {
    // Primary about entity is the pillar topic
    aboutEntities.push({
      "@type": "Thing",
      "name": pillar.title,
      "description": pillar.longDescription || pillar.description,
      "url": `https://invoicemonk.com${pillar.hubPage}`
    });

    // For pillar content, add the central entity
    if (isPillarContent) {
      aboutEntities.push({
        "@type": "SoftwareApplication",
        "name": "Invoicemonk",
        "applicationCategory": "BusinessApplication",
        "description": "All-in-one business finance platform for invoicing, expenses, payments, and accounting",
        "url": `https://invoicemonk.com${pillar.targetProduct}`
      });
    }
  }

  return aboutEntities;
}

/**
 * Get related pillars for cross-topic entity mentions
 * Creates semantic web between related business topics
 */
function getRelatedPillars(currentPillarId: string): Pillar[] {
  const relationships: Record<string, string[]> = {
    'invoicing-mastery': ['getting-paid', 'tax-compliance'],
    'getting-paid': ['invoicing-mastery', 'business-finances'],
    'business-finances': ['tax-compliance', 'getting-paid'],
    'tax-compliance': ['invoicing-mastery', 'business-finances'],
    'freelancer-success': ['invoicing-mastery', 'getting-paid', 'estimates-proposals'],
    'estimates-proposals': ['invoicing-mastery', 'freelancer-success']
  };

  const relatedIds = relationships[currentPillarId] || [];
  return pillars.filter(p => relatedIds.includes(p.id));
}
