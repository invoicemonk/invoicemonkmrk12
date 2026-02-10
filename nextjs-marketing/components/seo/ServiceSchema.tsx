'use client';

import { JsonLd } from './JsonLd';

interface ServiceSchemaProps {
  serviceName: string;
  serviceType: string;
  description: string;
  url: string;
  price?: string;
  priceCurrency?: string;
}

export function ServiceSchema({
  serviceName,
  serviceType,
  description,
  url,
  price = "0",
  priceCurrency = "USD"
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "serviceType": serviceType,
    "description": description,
    "url": url,
    "provider": {
      "@type": "Organization",
      "@id": "https://invoicemonk.com/#organization",
      "name": "Invoicemonk",
      "url": "https://invoicemonk.com"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": priceCurrency,
      "availability": "https://schema.org/InStock",
      "description": "Free tier available with premium options"
    },
    "termsOfService": "https://invoicemonk.com/terms-of-service",
    "serviceOutput": {
      "@type": "Thing",
      "name": serviceType
    }
  };

  return <JsonLd data={schema} />;
}
