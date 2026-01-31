import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { 
  getBlogPostBySlug, 
  getRelatedPostsEnhanced, 
  getPostClusterInfo,
  getPostsForPillar 
} from '@/data/blogPosts';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { AuthorCard } from '@/components/blog/AuthorCard';
import { ClusterNavigation } from '@/components/blog/ClusterNavigation';
import { ClusterTopicMap } from '@/components/blog/ClusterTopicMap';
import { TopicBreadcrumb } from '@/components/blog/TopicBreadcrumb';
import { PillarBadge } from '@/components/blog/PillarBadge';
import { PillarPageLayout } from '@/components/blog/PillarPageLayout';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import NotFound from './NotFound';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  // Add IDs to headings for TOC navigation
  useEffect(() => {
    if (!post) return;
    
    const article = document.querySelector('article .prose');
    if (!article) return;
    
    const headings = article.querySelectorAll('h2, h3');
    headings.forEach((heading, index) => {
      const id = heading.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || `heading-${index}`;
      heading.id = id;
    });
  }, [post]);

  if (!post) {
    return <NotFound />;
  }

  const { pillar, clusterType } = getPostClusterInfo(post.slug);
  const relatedPosts = getRelatedPostsEnhanced(post.slug, 3);
  const clusterPosts = pillar ? getPostsForPillar(pillar.id) : [];
  
  // Find the hub post for this cluster (the pillar content page)
  const hubPost = clusterPosts.find(p => p.pillarContent);
  
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const formattedModifiedDate = post.dateModified 
    ? new Date(post.dateModified).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : null;

  const articleUrl = `https://invoicemonk.com/blog/${post.slug}`;
  const ogImageUrl = `https://invoicemonk.com${post.featuredImage}`;

  const breadcrumbs = [
    { name: 'Home', url: 'https://invoicemonk.com' },
    { name: 'Blog', url: 'https://invoicemonk.com/blog' },
    ...(pillar 
      ? [{ name: pillar.title, url: `https://invoicemonk.com/blog?pillar=${pillar.id}` }]
      : [{ name: post.category, url: `https://invoicemonk.com/blog?category=${encodeURIComponent(post.category)}` }]
    ),
    { name: post.title, url: articleUrl }
  ];

  // Related articles for schema
  const relatedArticlesSchema = relatedPosts.map(p => ({
    title: p.title,
    url: `https://invoicemonk.com/blog/${p.slug}`
  }));

  // Determine if this is a pillar page that should use special layout
  const isPillarPage = post.pillarContent && pillar;

  // Common article content
  const ArticleContent = () => (
    <>
      <div 
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-wrap gap-2">
            <span className="text-body-sm font-medium text-foreground">Tags:</span>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </>
  );

  return (
    <Layout>
      <SEOHead
        title={`${post.title} | Invoicemonk Blog`}
        description={post.excerpt}
        canonical={articleUrl}
        ogImage={ogImageUrl}
        ogImageWidth={1200}
        ogImageHeight={630}
        ogType="article"
        article={{
          publishedTime: post.date,
          modifiedTime: post.dateModified,
          author: post.author.name,
          section: pillar?.title || post.category
        }}
      />
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        url={articleUrl}
        imageUrl={ogImageUrl}
        datePublished={post.date}
        dateModified={post.dateModified}
        author={post.author}
        section={post.category}
        pillar={pillar}
        clusterType={clusterType}
        isPillarContent={post.pillarContent}
        semanticKeywords={post.semanticKeywords}
        relatedArticles={relatedArticlesSchema}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <article className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Breadcrumb Navigation */}
          <div className="max-w-5xl mx-auto mb-6">
            <TopicBreadcrumb 
              pillar={pillar} 
              category={post.category}
            />
          </div>

          {/* Back Button */}
          <div className="max-w-5xl mx-auto mb-8">
            <Button variant="ghost" asChild className="gap-2">
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <header className="max-w-5xl mx-auto text-center mb-12">
            {/* Hero Featured Image */}
            <div className="mb-8 rounded-2xl overflow-hidden relative">
              {pillar && (
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5 z-10"
                  style={{ backgroundColor: pillar.color }}
                />
              )}
              <img
                src={post.featuredImage}
                alt={post.featuredImageAlt}
                width={1200}
                height={630}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Topic and Category Badges */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {pillar ? (
                <PillarBadge pillar={pillar} clusterType={clusterType} size="md" />
              ) : (
                <Badge variant="secondary">
                  {post.category}
                </Badge>
              )}
              {post.pillarContent && (
                <Badge className="bg-primary text-primary-foreground">
                  Complete Guide
                </Badge>
              )}
              {post.priority && (
                <Badge variant="outline" className="text-xs">
                  Priority: {post.priority}
                </Badge>
              )}
            </div>
            
            <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{formattedDate}</time>
              </div>
              {formattedModifiedDate && formattedModifiedDate !== formattedDate && (
                <>
                  <span>•</span>
                  <span className="text-body-sm">Updated: <time dateTime={post.dateModified}>{formattedModifiedDate}</time></span>
                </>
              )}
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            {/* Author Info */}
            <div className="flex justify-center">
              <AuthorCard author={post.author} variant="compact" />
            </div>
          </header>

          {/* Main Content Area - Use PillarPageLayout for pillar content */}
          <div className="max-w-5xl mx-auto">
            {isPillarPage ? (
              <PillarPageLayout
                pillar={pillar}
                post={post}
                clusterPosts={clusterPosts}
              >
                <ArticleContent />
              </PillarPageLayout>
            ) : (
              <div className="grid lg:grid-cols-[1fr_300px] gap-8">
                {/* Article Content */}
                <div>
                  {/* Cluster Topic Map for cluster articles */}
                  {pillar && clusterPosts.length > 1 && (
                    <ClusterTopicMap
                      pillar={pillar}
                      currentSlug={post.slug}
                      clusterPosts={clusterPosts}
                      hubPost={hubPost}
                    />
                  )}
                  <ArticleContent />
                </div>

                {/* Sidebar - Cluster Navigation */}
                <aside className="hidden lg:block">
                  <div className="sticky top-24">
                    {pillar && clusterPosts.length > 0 && (
                      <ClusterNavigation 
                        pillar={pillar}
                        currentPostSlug={post.slug}
                        relatedPosts={clusterPosts}
                      />
                    )}
                  </div>
                </aside>
              </div>
            )}
          </div>

          {/* Mobile Cluster Navigation (for non-pillar pages) */}
          {!isPillarPage && pillar && clusterPosts.length > 0 && (
            <div className="lg:hidden max-w-3xl mx-auto mt-12">
              <ClusterNavigation 
                pillar={pillar}
                currentPostSlug={post.slug}
                relatedPosts={clusterPosts}
              />
            </div>
          )}

          {/* Full Author Card */}
          <div className="max-w-3xl mx-auto mt-12">
            <AuthorCard author={post.author} variant="full" showCredentials />
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto mt-16 p-8 bg-primary/5 rounded-2xl text-center">
            <h2 className="text-heading-md font-bold text-foreground mb-3">
              Ready to streamline your invoicing?
            </h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of businesses using Invoicemonk to manage their finances.
            </p>
            <Button asChild size="lg">
              <Link to={post.targetProduct || pillar?.targetProduct || "/invoicing"}>
                {pillar?.title === 'Freelancer Success' ? 'Start for Free' : 'Start Your Free Trial'}
              </Link>
            </Button>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="max-w-5xl mx-auto mt-20">
              <h2 className="text-heading-md font-bold text-foreground mb-8 text-center">
                {pillar ? `More from ${pillar.title}` : 'Related Articles'}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <BlogPostCard key={relatedPost.slug} post={relatedPost} showPillar />
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
