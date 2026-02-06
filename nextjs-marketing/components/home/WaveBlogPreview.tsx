import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { blogPosts, getPostsForPillar, type BlogPost } from '@/data/blogPosts';

interface WaveBlogPreviewProps {
  title?: string;
  subtitle?: string;
  category?: string;
  pillarId?: string;
  posts?: BlogPost[];
  limit?: number;
  className?: string;
}

export function WaveBlogPreview({
  title = 'From the blog',
  subtitle,
  category,
  pillarId,
  posts,
  limit = 3,
  className = '',
}: WaveBlogPreviewProps) {
  // Filter and limit posts
  let displayPosts = posts || blogPosts;
  
  if (pillarId) {
    displayPosts = getPostsForPillar(pillarId);
  } else if (category) {
    displayPosts = displayPosts.filter(post => 
      post.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  displayPosts = displayPosts.slice(0, limit);

  if (displayPosts.length === 0) {
    return null;
  }

  return (
    <section className={`py-20 lg:py-32 bg-card ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-h2 text-heading mb-2">{title}</h2>
            {subtitle && <p className="text-body-lg text-muted-foreground">{subtitle}</p>}
          </div>
          <Button asChild variant="ghost" className="group">
            <Link to="/blog" className="flex items-center gap-2">
              View all articles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <BlogPostCard post={post} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
