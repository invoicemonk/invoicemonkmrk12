import { Helmet } from 'react-helmet-async';
import { useLocale } from '@/hooks/useLocale';

interface SoftwareApplicationSchemaProps {
  name?: string;
  description?: string;
}

export function SoftwareApplicationSchema({ 
  name = 'Invoicemonk',
  description 
}: SoftwareApplicationSchemaProps) {
  const { locale } = useLocale();

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description || locale.content.seo.siteDescription,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": locale.pricing.starter,
      "highPrice": locale.pricing.business,
      "priceCurrency": locale.currency.code,
      "offerCount": 3
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "ratingCount": "10000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "Professional Invoicing",
      "Expense Tracking",
      "Payment Processing",
      "Tax Compliance",
      "Client Management",
      "Financial Reports"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
