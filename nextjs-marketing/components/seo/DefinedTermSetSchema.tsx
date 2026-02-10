'use client';

import { JsonLd } from './JsonLd';
import { GlossaryTerm } from '@/data/glossaryTerms';

interface DefinedTermSetSchemaProps {
  terms: GlossaryTerm[];
}

export function DefinedTermSetSchema({ terms }: DefinedTermSetSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': 'https://invoicemonk.com/glossary',
    name: 'Business Finance & Invoicing Glossary',
    description: 'Comprehensive glossary of invoicing, payments, accounting, and business finance terms for small business owners and freelancers.',
    hasDefinedTerm: terms.map(term => ({
      '@type': 'DefinedTerm',
      '@id': `https://invoicemonk.com/glossary#${term.slug}`,
      name: term.term,
      description: term.definition,
      inDefinedTermSet: 'https://invoicemonk.com/glossary'
    }))
  };

  return <JsonLd data={schema} />;
}

interface SingleTermSchemaProps {
  term: GlossaryTerm;
}

export function SingleTermSchema({ term }: SingleTermSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    '@id': `https://invoicemonk.com/glossary#${term.slug}`,
    name: term.term,
    description: term.definition,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      '@id': 'https://invoicemonk.com/glossary',
      name: 'Business Finance & Invoicing Glossary'
    }
  };

  return <JsonLd data={schema} />;
}
