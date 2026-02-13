import { Link } from 'react-router-dom';
import { Check, Circle, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { Pillar } from '@/data/topicalMap';
import type { BlogPost } from '@/data/blogPosts';

interface ClusterTopicMapProps {
  pillar: Pillar;
  currentSlug: string;
  clusterPosts: BlogPost[];
  hubPost?: BlogPost;
}

export function ClusterTopicMap({ 
  pillar, 
  currentSlug, 
  clusterPosts,
  hubPost
}: ClusterTopicMapProps) {
  // Include hub post at the top if it exists
  const allPosts = hubPost 
    ? [hubPost, ...clusterPosts.filter(p => p.slug !== hubPost.slug)]
    : clusterPosts;

  if (allPosts.length === 0) return null;

  return (
    <Card 
      className="border-2 mb-8"
      style={{ borderColor: pillar.color }}
    >
      <CardHeader 
        className="pb-3"
        style={{ backgroundColor: `${pillar.color}08` }}
      >
        <CardTitle className="flex items-center gap-2 text-lg">
          <BookOpen 
            className="h-5 w-5 flex-shrink-0" 
            style={{ color: pillar.color }} 
          />
          <span>{pillar.title} Series</span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          This guide is part of a comprehensive series. Explore all {allPosts.length} topics:
        </p>
      </CardHeader>
      <CardContent className="pt-4">
        <nav aria-label="Topic cluster navigation">
          <ul className="space-y-2">
            {allPosts.map((post) => {
              const isCurrent = post.slug === currentSlug;
              const isHub = hubPost && post.slug === hubPost.slug;
              
              return (
                <li key={post.slug}>
                  {isCurrent ? (
                    <div 
                      className={cn(
                        "flex items-start gap-3 py-2 px-3 rounded-lg",
                        "font-medium"
                      )}
                      style={{ backgroundColor: `${pillar.color}10` }}
                    >
                      <Check 
                        className="h-4 w-4 mt-0.5 flex-shrink-0" 
                        style={{ color: pillar.color }}
                      />
                      <span className="text-sm" style={{ color: pillar.color }}>
                        {post.title}
                        {isHub && (
                          <span className="ml-2 text-xs opacity-70">(Complete Guide)</span>
                        )}
                      </span>
                    </div>
                  ) : (
                    <Link 
                      to={`/blog/${post.slug}`}
                      className={cn(
                        "group flex items-start gap-3 py-2 px-3 rounded-lg",
                        "text-muted-foreground hover:text-foreground",
                        "hover:bg-muted/50 transition-colors"
                      )}
                    >
                      <Circle 
                        className="h-4 w-4 mt-0.5 flex-shrink-0 transition-colors"
                        style={{ color: `${pillar.color}60` }}
                      />
                      <span className="text-sm">
                        {post.title}
                        {isHub && (
                          <span className="ml-2 text-xs opacity-70">(Complete Guide)</span>
                        )}
                      </span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </CardContent>
    </Card>
  );
}
