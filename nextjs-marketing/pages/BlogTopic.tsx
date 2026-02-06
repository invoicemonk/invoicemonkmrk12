import { useParams, Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, FileText, Wallet, Calculator, Shield, User, ClipboardList, type LucideIcon } from 'lucide-react';
import { pillars, type Pillar } from '@/data/topicalMap';
import { getPostsForPillar } from '@/data/blogPosts';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { BlogPagination } from '@/components/blog/BlogPagination';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import NotFound from './NotFound';

const POSTS_PER_PAGE = 12;

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Wallet,
  Calculator,
  Shield,
  User,
  ClipboardList
};

const BlogTopic = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  
  const pillar = useMemo(() => 
    pillars.find(p => p.id === topicId), 
    [topicId]
  );
  
  const posts = useMemo(() => 
    pillar ? getPostsForPillar(pillar.id) : [], 
    [pillar]
  );
  
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE, 
    currentPage * POSTS_PER_PAGE
  );

  if (!pillar) {
    return <NotFound />;
  }

  const Icon = iconMap[pillar.icon] || FileText;
  const hubUrl = `https://invoicemonk.com/blog/topic/${pillar.id}`;

  const breadcrumbs = [
    { name: 'Home', url: 'https://invoicemonk.com' },
    { name: 'Blog', url: 'https://invoicemonk.com/blog' },
    { name: pillar.title, url: hubUrl }
  ];

  // Cross-link to related pillars (exclude current)
  const relatedPillars = pillars.filter(p => p.id !== pillar.id).slice(0, 3);

  return (
    <Layout>
      <SEOHead
        title={`${pillar.title} - Expert Guides & Tips | Invoicemonk Blog`}
        description={pillar.longDescription}
        canonical={hubUrl}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      {pillar.faq && pillar.faq.length > 0 && (
        <FAQSchema items={pillar.faq} />
      )}

      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <AnimatedSection className="mb-8">
            <Button variant="ghost" asChild className="gap-2">
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4" />
                All Topics
              </Link>
            </Button>
          </AnimatedSection>

          {/* Hub Header */}
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
              style={{ backgroundColor: `${pillar.color}15` }}
            >
              <Icon className="h-8 w-8" style={{ color: pillar.color }} />
            </div>
            <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-4">
              {pillar.title}
            </h1>
            <p className="text-body-lg text-muted-foreground mb-6">
              {pillar.longDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="text-sm">
                {posts.length} {posts.length === 1 ? 'article' : 'articles'}
              </Badge>
              <Button asChild size="sm" style={{ backgroundColor: pillar.color }}>
                <Link to={pillar.targetProduct}>
                  Explore {pillar.title.split(' ')[0]} Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          {/* Key Topics Grid */}
          {pillar.keyTopics && pillar.keyTopics.length > 0 && (
            <AnimatedSection className="mb-16">
              <h2 className="text-h3 font-bold text-foreground mb-8 text-center">
                Key Topics
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {pillar.keyTopics.map((topic, index) => (
                  <Link 
                    key={index}
                    to={topic.link || '#'}
                    className="group p-5 rounded-xl border border-border bg-card hover:shadow-md hover:border-primary/30 transition-all"
                  >
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {topic.description}
                    </p>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* All Articles */}
          <AnimatedSection className="mb-8">
            <h2 className="text-h3 font-bold text-foreground mb-2">
              All Articles
            </h2>
            <p className="text-muted-foreground">
              {posts.length} articles to help you master {pillar.title.toLowerCase()}
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <BlogPostCard post={post} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Pagination */}
          {totalPages > 1 && (
            <BlogPagination
              currentPage={currentPage}
              totalPages={totalPages}
              basePath={`/blog/topic/${pillar.id}`}
              onPageChange={setCurrentPage}
            />
          )}

          {/* FAQ Section */}
          {pillar.faq && pillar.faq.length > 0 && (
            <AnimatedSection className="max-w-3xl mx-auto mt-20">
              <h2 className="text-h3 font-bold text-foreground mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {pillar.faq.map((item, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
          )}

          {/* Related Topics */}
          <AnimatedSection className="mt-20">
            <h2 className="text-h3 font-bold text-foreground mb-8 text-center">
              Explore More Topics
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {relatedPillars.map((related) => {
                const RelatedIcon = iconMap[related.icon] || FileText;
                return (
                  <Link
                    key={related.id}
                    to={`/blog/topic/${related.id}`}
                    className="group p-6 rounded-xl border border-border bg-card hover:shadow-md hover:border-primary/30 transition-all text-center"
                  >
                    <div 
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                      style={{ backgroundColor: `${related.color}15` }}
                    >
                      <RelatedIcon className="h-6 w-6" style={{ color: related.color }} />
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                  </Link>
                );
              })}
            </div>
          </AnimatedSection>

          {/* CTA Section */}
          <AnimatedSection className="mt-20 p-8 bg-primary/5 rounded-2xl text-center">
            <h2 className="text-heading-md font-bold text-foreground mb-3">
              Ready to streamline your {pillar.title.toLowerCase().split(' ')[0]}?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Join thousands of businesses using Invoicemonk to manage their finances professionally.
            </p>
            <Button asChild size="lg">
              <Link to={pillar.targetProduct}>
                Get Started Free
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </Layout>
  );
};

export default BlogTopic;
