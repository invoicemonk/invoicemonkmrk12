import { Helmet } from 'react-helmet-async';
import { useLocale } from '@/hooks/useLocale';

export function OrganizationSchema() {
  const { locale } = useLocale();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Invoicemonk",
    "url": "https://invoicemonk.com",
    "logo": "https://invoicemonk.com/logo.png",
    "description": locale.content.seo.siteDescription,
    "areaServed": {
      "@type": "Country",
      "name": locale.content.seo.region
    },
    "sameAs": [
      "https://instagram.com/invoicemonk",
      "https://facebook.com/invoicemonk",
      "https://twitter.com/invoicemonk",
      "https://linkedin.com/company/invoicemonk"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "support@invoicemonk.com",
      "availableLanguage": "English"
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
