import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { blogPosts, getBlogCategories, getPostsForPillar } from '@/data/blogPosts';
import { pillars, pillarClusters } from '@/data/topicalMap';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { PillarCard } from '@/components/blog/PillarCard';
import { SEOHead } from '@/components/seo/SEOHead';
import { useLocale } from '@/hooks/useLocale';
import { pageSEO } from '@/components/seo/seoConfig';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { Grid3X3, List, Sparkles } from 'lucide-react';

type ViewMode = 'topics' | 'all';

const Blog = () => {
  const { locale } = useLocale();
  const seo = pageSEO['/blog'];
  const [searchParams, setSearchParams] = useSearchParams();
  
  const selectedPillar = searchParams.get('pillar');
  const selectedCategory = searchParams.get('category');
  const [viewMode, setViewMode] = useState<ViewMode>(selectedPillar ? 'all' : 'topics');
  
  const categories = getBlogCategories();

  // Calculate post counts for each pillar
  const pillarPostCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    pillarClusters.forEach(cluster => {
      counts[cluster.pillarId] = cluster.postSlugs.length;
    });
    return counts;
  }, []);
  
  // Filter posts based on selection
  const filteredPosts = useMemo(() => {
    if (selectedPillar) {
      return getPostsForPillar(selectedPillar);
    }
    if (selectedCategory) {
      return blogPosts.filter(post => post.category === selectedCategory);
    }
    return blogPosts;
  }, [selectedPillar, selectedCategory]);

  const selectedPillarData = selectedPillar 
    ? pillars.find(p => p.id === selectedPillar) 
    : null;

  const handlePillarClear = () => {
    setSearchParams({});
    setViewMode('topics');
  };

  const handleCategoryFilter = (category: string | null) => {
    if (category) {
      setSearchParams({ category });
      setViewMode('all');
    } else {
      setSearchParams({});
    }
  };

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <Layout>
      <SEOHead
        title={seo.getTitle(locale)}
        description={seo.getDescription(locale)}
        canonical="https://invoicemonk.com/blog"
      />
      
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Insights & Guides</span>
            </div>
            <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-4">
              The Invoicemonk Blog
            </h1>
            <p className="text-body-lg text-muted-foreground">
              Master invoicing, accounting, and business finance with expert guides 
              organized by topic to help you grow.
            </p>
          </AnimatedSection>

          {/* View Mode Toggle (when not filtering) */}
          {!selectedPillar && !selectedCategory && (
            <AnimatedSection className="flex justify-center mb-8">
              <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as ViewMode)}>
                <TabsList className="h-11">
                  <TabsTrigger value="topics" className="gap-2 px-4">
                    <Grid3X3 className="h-4 w-4" />
                    Browse Topics
                  </TabsTrigger>
                  <TabsTrigger value="all" className="gap-2 px-4">
                    <List className="h-4 w-4" />
                    All Articles
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </AnimatedSection>
          )}

          {/* Pillar Filter Indicator */}
          {selectedPillarData && (
            <AnimatedSection className="mb-8">
              <div 
                className="flex items-center justify-between p-4 rounded-xl border"
                style={{ 
                  borderColor: selectedPillarData.color,
                  backgroundColor: `${selectedPillarData.color}08`
                }}
              >
                <div>
                  <p className="text-sm text-muted-foreground">Viewing topic</p>
                  <h2 
                    className="text-xl font-semibold"
                    style={{ color: selectedPillarData.color }}
                  >
                    {selectedPillarData.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    {selectedPillarData.description}
                  </p>
                </div>
                <Button variant="outline" onClick={handlePillarClear}>
                  View All Topics
                </Button>
              </div>
            </AnimatedSection>
          )}

          {/* Topics Grid View */}
          {viewMode === 'topics' && !selectedPillar && !selectedCategory && (
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {pillars.map((pillar) => (
                <StaggerItem key={pillar.id}>
                  <PillarCard 
                    pillar={pillar} 
                    postCount={pillarPostCounts[pillar.id] || 0} 
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}

          {/* Category Filter (for All view) */}
          {viewMode === 'all' && !selectedPillar && (
            <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-12">
              <Button
                variant={!selectedCategory ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryFilter(null)}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </AnimatedSection>
          )}

          {/* Posts Display */}
          {(viewMode === 'all' || selectedPillar) && (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <AnimatedSection className="mb-12">
                  <BlogPostCard post={featuredPost} featured showPillar />
                </AnimatedSection>
              )}

              {/* Post Grid */}
              {remainingPosts.length > 0 && (
                <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {remainingPosts.map((post) => (
                    <StaggerItem key={post.slug}>
                      <BlogPostCard post={post} showPillar />
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              )}

              {/* Empty State */}
              {filteredPosts.length === 0 && (
                <AnimatedSection className="text-center py-12">
                  <p className="text-muted-foreground">No posts found in this topic.</p>
                  <Button 
                    variant="link" 
                    onClick={handlePillarClear}
                    className="mt-2"
                  >
                    View all topics
                  </Button>
                </AnimatedSection>
              )}
            </>
          )}

          {/* Recent Articles Section (Topics view) */}
          {viewMode === 'topics' && !selectedPillar && (
            <AnimatedSection className="mt-16">
              <h2 className="text-h3 font-bold text-foreground mb-8 text-center">
                Recent Articles
              </h2>
              <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.slice(0, 6).map((post) => (
                  <StaggerItem key={post.slug}>
                    <BlogPostCard post={post} showPillar />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimatedSection>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
