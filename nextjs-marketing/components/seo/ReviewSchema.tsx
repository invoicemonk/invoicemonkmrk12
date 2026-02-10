'use client';

import { JsonLd } from './JsonLd';

interface Review {
  author: string;
  authorType?: 'Person' | 'Organization';
  reviewRating: number;
  maxRating?: number;
  datePublished: string;
  reviewBody: string;
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

  if (itemReviewed.description) schema.description = itemReviewed.description;
  if (itemReviewed.image) schema.image = itemReviewed.image;

  if (aggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount,
      "bestRating": aggregateRating.bestRating || 5,
      "worstRating": aggregateRating.worstRating || 1,
    };
  }

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

  return <JsonLd data={schema} />;
}

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
