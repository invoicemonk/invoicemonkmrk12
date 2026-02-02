import { Helmet } from 'react-helmet-async';
import { useLocale } from '@/hooks/useLocale';

export function OrganizationSchema() {
  const { locale } = useLocale();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://invoicemonk.com/#organization",
    "name": "Invoicemonk",
    "alternateName": "Invoice Monk",
    "url": "https://invoicemonk.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://invoicemonk.com/logo.png",
      "width": 512,
      "height": 512
    },
    "description": locale.content.seo.siteDescription,
    "foundingDate": "2023",
    "founders": [
      {
        "@type": "Person",
        "name": "Olayinka Olayokun",
        "jobTitle": "Co-founder & CEO"
      },
      {
        "@type": "Person",
        "name": "Joan Omionawele",
        "jobTitle": "Co-founder & Communication President"
      }
    ],
    "knowsAbout": [
      "Invoicing Software",
      "Small Business Accounting",
      "Tax Compliance",
      "Financial Management",
      "Expense Tracking",
      "Payment Processing",
      "Business Finance",
      "Freelancer Tools"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Nigeria"
      },
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "Canada"
      },
      {
        "@type": "Country",
        "name": "Australia"
      }
    ],
    "sameAs": [
      "https://x.com/invoicemonk",
      "https://instagram.com/invoicemonk",
      "https://facebook.com/invoicemonk",
      "https://linkedin.com/company/invoicemonk",
      "https://www.youtube.com/@invoicemonk"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "support@invoicemonk.com",
      "availableLanguage": ["English"]
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
