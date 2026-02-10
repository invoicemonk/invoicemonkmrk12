'use client';

import Script from 'next/script';

interface JsonLdProps {
  data: Record<string, unknown>;
}

// Helper component to inject JSON-LD schema data using Next.js Script component
export function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id={`json-ld-${data['@type'] || 'schema'}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      strategy="afterInteractive"
    />
  );
}
