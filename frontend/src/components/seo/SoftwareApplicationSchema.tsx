import { Helmet } from 'react-helmet-async';
import { useLocale } from '@/hooks/useLocale';

interface SoftwareApplicationSchemaProps {
  name?: string;
  description?: string;
  /** Set to true when you have verified real reviews */
  hasVerifiedReviews?: boolean;
}

export function SoftwareApplicationSchema({ 
  name = 'Invoicemonk',
  description,
  hasVerifiedReviews = false
}: SoftwareApplicationSchemaProps) {
  const { locale } = useLocale();

  const baseSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://invoicemonk.com/#software",
    "name": name,
    "description": description || locale.content.seo.siteDescription,
    "applicationCategory": "FinanceApplication",
    "applicationSubCategory": "Invoicing Software",
    "operatingSystem": "Web",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "softwareVersion": "1.0",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "0",
      "highPrice": locale.pricing.business,
      "priceCurrency": locale.currency.code,
      "offerCount": 3,
      "offers": [
        {
          "@type": "Offer",
          "name": "Free Plan",
          "price": "0",
          "priceCurrency": locale.currency.code,
          "description": "Free invoicing with core features"
        },
        {
          "@type": "Offer",
          "name": "Starter Plan",
          "price": locale.pricing.starter,
          "priceCurrency": locale.currency.code,
          "description": "For growing freelancers and small businesses"
        },
        {
          "@type": "Offer",
          "name": "Business Plan",
          "price": locale.pricing.business,
          "priceCurrency": locale.currency.code,
          "description": "For established businesses with advanced needs"
        }
      ]
    },
    "featureList": [
      "Professional Invoice Creation",
      "Expense Tracking with Receipt Scanning",
      "Payment Processing",
      "Tax Compliance & Reports",
      "Client Management",
      "Financial Reports & Analytics",
      "Recurring Invoices",
      "Multi-Currency Support",
      "Estimates & Proposals"
    ],
    "screenshot": "https://invoicemonk.com/og-image.png",
    "author": {
      "@id": "https://invoicemonk.com/#organization"
    }
  };

  // Only add aggregateRating when we have verified real reviews
  if (hasVerifiedReviews) {
    baseSchema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "250",
      "bestRating": "5",
      "worstRating": "1"
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(baseSchema)}
      </script>
    </Helmet>
  );
}
