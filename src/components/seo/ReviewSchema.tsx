import { Helmet } from 'react-helmet-async';

interface Review {
  author: string;
  authorType?: 'Person' | 'Organization';
  reviewRating: number;
  maxRating?: number;
  datePublished: string;
  reviewBody: string;
  // Optional verification fields for when real reviews are available
  verifiedPurchase?: boolean;
  source?: string;
}

interface ReviewSchemaProps {
  reviews: Review[];
  itemReviewed: {
    name: string;
    description?: string;
    image?: string;
    type?: 'Product' | 'SoftwareApplication' | 'Organization' | 'Service';
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  };
}

/**
 * ReviewSchema - Structured data for reviews and ratings
 * 
 * Use this component when you have REAL, VERIFIABLE customer reviews.
 * Do NOT use with fabricated testimonials - this violates Google's guidelines
 * and can result in penalties.
 * 
 * Prerequisites for using this component:
 * 1. Real customer reviews with verified identities
 * 2. Actual ratings given by customers
 * 3. Genuine review dates
 * 
 * @example
 * // Only use when you have real reviews:
 * <ReviewSchema
 *   itemReviewed={{ name: "Invoicemonk", type: "SoftwareApplication" }}
 *   reviews={[{
 *     author: "John Smith",
 *     reviewRating: 5,
 *     datePublished: "2026-01-15",
 *     reviewBody: "Great invoicing software...",
 *     verifiedPurchase: true
 *   }]}
 *   aggregateRating={{
 *     ratingValue: 4.8,
 *     reviewCount: 127
 *   }}
 * />
 */
export function ReviewSchema({
  reviews,
  itemReviewed,
  aggregateRating,
}: ReviewSchemaProps) {
  const itemType = itemReviewed.type || 'Product';
  
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": itemType,
    "name": itemReviewed.name,
  };

  if (itemReviewed.description) {
    schema.description = itemReviewed.description;
  }

  if (itemReviewed.image) {
    schema.image = itemReviewed.image;
  }

  // Add aggregate rating if provided
  if (aggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount,
      "bestRating": aggregateRating.bestRating || 5,
      "worstRating": aggregateRating.worstRating || 1,
    };
  }

  // Add individual reviews
  if (reviews && reviews.length > 0) {
    schema.review = reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": review.authorType || "Person",
        "name": review.author,
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.reviewRating,
        "bestRating": review.maxRating || 5,
      },
      "datePublished": review.datePublished,
      "reviewBody": review.reviewBody,
    }));
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

/**
 * Placeholder component for when real reviews are not yet available
 * Displays a softer "loved by businesses" message without structured data
 */
interface SocialProofBannerProps {
  heading?: string;
  subheading?: string;
  className?: string;
}

export function SocialProofBanner({
  heading = "Loved by businesses worldwide",
  subheading = "Join thousands of freelancers and small businesses using Invoicemonk",
  className,
}: SocialProofBannerProps) {
  return (
    <div className={className}>
      <p className="font-semibold text-foreground">{heading}</p>
      <p className="text-sm text-muted-foreground">{subheading}</p>
    </div>
  );
}

export default ReviewSchema;
