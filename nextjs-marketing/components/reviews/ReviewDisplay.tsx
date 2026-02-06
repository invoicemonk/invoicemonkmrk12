import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, User, Building2, BadgeCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface Review {
  id: string;
  author: string;
  role?: string;
  company?: string;
  rating: number;
  reviewText: string;
  date: string;
  verified?: boolean;
  avatarUrl?: string;
}

interface ReviewDisplayProps {
  reviews: Review[];
  showAggregateRating?: boolean;
  className?: string;
  layout?: 'grid' | 'list' | 'carousel';
}

function StarRating({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            sizeClasses[size],
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-muted-foreground/20"
          )}
        />
      ))}
    </div>
  );
}

function AggregateRating({ reviews }: { reviews: Review[] }) {
  const stats = useMemo(() => {
    const total = reviews.length;
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    const average = total > 0 ? (sum / total).toFixed(1) : '0';
    
    // Count by rating
    const distribution = [5, 4, 3, 2, 1].map(rating => ({
      rating,
      count: reviews.filter(r => r.rating === rating).length,
      percentage: total > 0 ? (reviews.filter(r => r.rating === rating).length / total) * 100 : 0
    }));
    
    return { average, total, distribution };
  }, [reviews]);

  return (
    <div className="flex flex-col sm:flex-row gap-6 p-6 bg-muted/30 rounded-xl mb-8">
      <div className="text-center sm:text-left">
        <div className="text-5xl font-bold text-foreground">{stats.average}</div>
        <StarRating rating={Math.round(parseFloat(stats.average))} size="lg" />
        <p className="text-sm text-muted-foreground mt-1">
          Based on {stats.total} review{stats.total !== 1 ? 's' : ''}
        </p>
      </div>
      <div className="flex-1 space-y-2">
        {stats.distribution.map(({ rating, count, percentage }) => (
          <div key={rating} className="flex items-center gap-2">
            <span className="text-sm w-3">{rating}</span>
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-yellow-400 rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <span className="text-sm text-muted-foreground w-8">{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="h-full border-border/50 hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <StarRating rating={review.rating} />
            {review.verified && (
              <Badge variant="secondary" className="text-xs flex items-center gap-1">
                <BadgeCheck className="h-3 w-3" />
                Verified
              </Badge>
            )}
          </div>
          
          <div className="relative mb-4">
            <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/10" />
            <p className="text-foreground pl-4 italic">
              "{review.reviewText}"
            </p>
          </div>
          
          <div className="flex items-center gap-3 pt-4 border-t border-border/50">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              {review.avatarUrl ? (
                <img 
                  src={review.avatarUrl} 
                  alt={review.author}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <User className="h-5 w-5 text-primary" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground truncate">{review.author}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                {review.role && <span>{review.role}</span>}
                {review.role && review.company && <span>•</span>}
                {review.company && (
                  <span className="flex items-center gap-1">
                    <Building2 className="h-3 w-3" />
                    {review.company}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground mt-3">
            {new Date(review.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ReviewDisplay({ 
  reviews, 
  showAggregateRating = true,
  className,
  layout = 'grid'
}: ReviewDisplayProps) {
  if (reviews.length === 0) {
    return (
      <div className={cn("text-center py-12", className)}>
        <Star className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
        <h3 className="text-lg font-medium mb-2">No Reviews Yet</h3>
        <p className="text-muted-foreground">
          Be the first to share your experience with Invoicemonk
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      {showAggregateRating && <AggregateRating reviews={reviews} />}
      
      <div className={cn(
        layout === 'grid' && "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
        layout === 'list' && "space-y-4",
        layout === 'carousel' && "flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
      )}>
        {reviews.map((review, index) => (
          <div 
            key={review.id}
            className={layout === 'carousel' ? "snap-start flex-shrink-0 w-80" : undefined}
          >
            <ReviewCard review={review} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

// Sample reviews for demonstration (would be replaced with real data)
export const sampleReviews: Review[] = [
  {
    id: '1',
    author: 'Sarah Johnson',
    role: 'Freelance Designer',
    company: 'SJ Creative',
    rating: 5,
    reviewText: 'Invoicemonk has completely transformed how I manage my freelance business. The invoicing is so smooth, and I get paid faster than ever!',
    date: '2026-01-15',
    verified: true
  },
  {
    id: '2',
    author: 'Michael Chen',
    role: 'Business Owner',
    company: 'TechStart Solutions',
    rating: 5,
    reviewText: 'The compliance features are exactly what we needed. No more worrying about tax requirements across different regions.',
    date: '2026-01-10',
    verified: true
  },
  {
    id: '3',
    author: 'Emily Rodriguez',
    role: 'Consultant',
    rating: 4,
    reviewText: 'Great tool for managing multiple clients. The recurring invoices save me hours every month. Would love to see more reporting features.',
    date: '2026-01-05',
    verified: true
  },
  {
    id: '4',
    author: 'David Okonkwo',
    role: 'Contractor',
    company: 'BuildRight Construction',
    rating: 5,
    reviewText: 'Finally an invoicing solution that works for Nigerian businesses! The FIRS compliance is a game-changer.',
    date: '2025-12-28',
    verified: true
  },
  {
    id: '5',
    author: 'Lisa Thompson',
    role: 'Small Business Owner',
    company: 'The Bake Shop',
    rating: 5,
    reviewText: 'So easy to use! I set up my first invoice in under 5 minutes. My customers love the professional look.',
    date: '2025-12-20',
    verified: true
  }
];

export default ReviewDisplay;
