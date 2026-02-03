import { Helmet } from 'react-helmet-async';
import type { Author } from '@/data/authors';

interface CredentialSchema {
  '@type': 'EducationalOccupationalCredential';
  name: string;
  credentialCategory?: string;
}

interface PersonSchemaProps {
  author: Author;
  isMainEntity?: boolean;
}

/**
 * Enhanced Person Schema following Koray Tuğberk Gübür's E-E-A-T principles
 * Includes knowsAbout (expertise), hasCredential (certifications), and sameAs (authoritative profiles)
 */
export function PersonSchema({ author, isMainEntity = false }: PersonSchemaProps) {
  // Convert credentials to structured schema format
  const credentialSchemas: CredentialSchema[] = author.credentials.map((credential) => ({
    '@type': 'EducationalOccupationalCredential',
    name: credential,
    credentialCategory: credential.toLowerCase().includes('certified') ? 'certificate' : 'degree'
  }));

  // Map expertise to knowsAbout entities with proper semantic references
  const knowsAboutEntities = author.expertise.map((topic) => ({
    '@type': 'Thing',
    name: topic,
    // Add sameAs references for known topics
    ...(getTopicSameAs(topic) && { sameAs: getTopicSameAs(topic) })
  }));

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `https://invoicemonk.com/blog/author/${author.slug}#person`,
    name: author.name,
    url: `https://invoicemonk.com/blog/author/${author.slug}`,
    image: `https://invoicemonk.com${author.avatar}`,
    jobTitle: author.role,
    description: author.bio,
    
    // E-E-A-T: Expertise signals
    knowsAbout: knowsAboutEntities,
    
    // E-E-A-T: Credential signals
    hasCredential: credentialSchemas,
    
    // E-E-A-T: Trust signals via authoritative profiles
    sameAs: Object.values(author.socialLinks).filter(Boolean),
    
    // Employment relationship
    worksFor: {
      '@type': 'Organization',
      '@id': 'https://invoicemonk.com/#organization',
      name: 'Invoicemonk',
      url: 'https://invoicemonk.com'
    }
  };

  // If this is the main entity of the page (e.g., author page)
  if (isMainEntity) {
    schema.mainEntityOfPage = {
      '@type': 'ProfilePage',
      '@id': `https://invoicemonk.com/blog/author/${author.slug}`
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
 * Get sameAs references for known topics to establish entity relationships
 * This helps search engines understand the semantic context of expertise
 */
function getTopicSameAs(topic: string): string | undefined {
  const topicReferences: Record<string, string> = {
    'Digital Marketing': 'https://en.wikipedia.org/wiki/Digital_marketing',
    'SEO Strategy': 'https://en.wikipedia.org/wiki/Search_engine_optimization',
    'Business Growth': 'https://en.wikipedia.org/wiki/Business_development',
    'Entrepreneurship': 'https://en.wikipedia.org/wiki/Entrepreneurship',
    'Financial Management': 'https://en.wikipedia.org/wiki/Financial_management',
    'Tax Compliance': 'https://en.wikipedia.org/wiki/Tax_compliance',
    'Financial Planning': 'https://en.wikipedia.org/wiki/Financial_planning',
    'Business Accounting': 'https://en.wikipedia.org/wiki/Accounting',
    'Small Business Finance': 'https://en.wikipedia.org/wiki/Small_business',
    'Cash Flow Management': 'https://en.wikipedia.org/wiki/Cash_flow',
    'Invoicing Best Practices': 'https://en.wikipedia.org/wiki/Invoice',
    'Content Creation': 'https://en.wikipedia.org/wiki/Content_creation',
    'Product Strategy': 'https://en.wikipedia.org/wiki/Product_management'
  };

  return topicReferences[topic];
}
