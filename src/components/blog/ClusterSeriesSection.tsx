import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { BlogPost } from '@/data/blogPosts';
import type { Pillar } from '@/data/topicalMap';

interface ClusterSeriesSectionProps {
  pillar: Pillar;
  posts: BlogPost[];
  currentSlug: string;
  maxPosts?: number;
}

export function ClusterSeriesSection({ 
  pillar, 
  posts, 
  currentSlug,
  maxPosts = 3 
}: ClusterSeriesSectionProps) {
  // Filter out current post and limit to maxPosts
  const displayPosts = posts
    .filter(post => post.slug !== currentSlug)
    .slice(0, maxPosts);

  if (displayPosts.length === 0) return null;

  const remainingCount = posts.filter(p => p.slug !== currentSlug).length - displayPosts.length;

  return (
    <section className="mt-12 pt-12 border-t border-border/50">
      <div className="flex items-center gap-3 mb-6">
        <div 
          className="p-2 rounded-lg"
          style={{ backgroundColor: `${pillar.color}15` }}
        >
          <BookOpen 
            className="h-5 w-5"
            style={{ color: pillar.color }}
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Explore the {pillar.title} Series
          </h2>
          <p className="text-sm text-muted-foreground">
            {posts.length} articles to master this topic
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {displayPosts.map((post) => (
          <Link 
            key={post.slug} 
            to={`/blog/${post.slug}`}
            className="group"
          >
            <Card className="h-full border-border/50 overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/30">
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src={post.featuredImage}
                  alt={post.featuredImageAlt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Pillar color indicator */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: pillar.color }}
                />
              </div>
              
              <CardContent className="p-4">
                {post.pillarContent && (
                  <Badge 
                    className="mb-2 text-xs"
                    style={{ 
                      backgroundColor: `${pillar.color}15`,
                      color: pillar.color,
                      borderColor: `${pillar.color}30`
                    }}
                  >
                    Complete Guide
                  </Badge>
                )}
                <h3 className="font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                <span className="text-xs text-muted-foreground">
                  {post.readTime}
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {remainingCount > 0 && (
        <div className="text-center">
          <Button 
            variant="outline" 
            asChild
            className="group"
          >
            <Link to={`/blog?pillar=${pillar.id}`}>
              <span>View all {posts.length} articles in {pillar.title}</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      )}
    </section>
  );
}
