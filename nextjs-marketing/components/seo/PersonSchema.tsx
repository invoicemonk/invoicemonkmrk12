'use client';

import { JsonLd } from './JsonLd';
import type { Author } from '@/data/authors';

interface PersonSchemaProps {
  author: Author;
  isMainEntity?: boolean;
}

export function PersonSchema({ author, isMainEntity = false }: PersonSchemaProps) {
  const credentialSchemas = author.credentials.map((credential) => ({
    '@type': 'EducationalOccupationalCredential',
    name: credential,
    credentialCategory: credential.toLowerCase().includes('certified') ? 'certificate' : 'degree'
  }));

  const knowsAboutEntities = author.expertise.map((topic) => ({
    '@type': 'Thing',
    name: topic,
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
    knowsAbout: knowsAboutEntities,
    hasCredential: credentialSchemas,
    sameAs: Object.values(author.socialLinks).filter(Boolean),
    worksFor: {
      '@type': 'Organization',
      '@id': 'https://invoicemonk.com/#organization',
      name: 'Invoicemonk',
      url: 'https://invoicemonk.com'
    }
  };

  if (isMainEntity) {
    schema.mainEntityOfPage = {
      '@type': 'ProfilePage',
      '@id': `https://invoicemonk.com/blog/author/${author.slug}`
    };
  }

  return <JsonLd data={schema} />;
}

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
