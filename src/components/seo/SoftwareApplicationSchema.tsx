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
    "offers": (() => {
      const offers = [
        {
          "@type": "Offer",
          "name": "Free Plan",
          "price": "0",
          "priceCurrency": locale.currency.code,
          "description": "For individuals getting started"
        },
      ];
      if (locale.pricingContent.starterAvailable && locale.pricing.starter) {
        offers.push({
          "@type": "Offer",
          "name": "Starter Plan",
          "price": String(locale.pricing.starter),
          "priceCurrency": locale.currency.code,
          "description": "For solo businesses ready to grow"
        });
      }
      offers.push(
        {
          "@type": "Offer",
          "name": "Professional Plan",
          "price": String(locale.pricing.professional),
          "priceCurrency": locale.currency.code,
          "description": "For growing businesses"
        },
        {
          "@type": "Offer",
          "name": "Business Plan",
          "price": String(locale.pricing.business),
          "priceCurrency": locale.currency.code,
          "description": "For enterprises with advanced needs"
        }
      );
      return {
        "@type": "AggregateOffer",
        "lowPrice": "0",
        "highPrice": String(locale.pricing.business),
        "priceCurrency": locale.currency.code,
        "offerCount": offers.length,
        "offers": offers
      };
    })(),
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
