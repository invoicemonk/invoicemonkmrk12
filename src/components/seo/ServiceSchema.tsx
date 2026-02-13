import { Helmet } from 'react-helmet-async';

interface ServiceSchemaProps {
  serviceName: string;
  serviceType: string;
  description: string;
  url: string;
  /** Optional price - defaults to "0" for free tier */
  price?: string;
  priceCurrency?: string;
}

/**
 * ServiceSchema - Schema.org Service markup for product pages
 * 
 * Use this on product pages (Invoicing, Expenses, Payments, etc.)
 * to help search engines understand each service offering.
 */
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

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
