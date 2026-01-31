import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { blogPosts } from '@/data/blogPosts';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

export function HomeBlogSection() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-h2 text-heading mb-4">
            From the{' '}
            <span className="font-serif italic text-primary">Blog</span>
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Tips, guides, and insights to help you run your business better.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {latestPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <BlogPostCard post={post} showPillar />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-12 group"
          >
            <Link to="/blog">
              View All Posts
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
