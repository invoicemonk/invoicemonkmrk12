import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { blogPosts, getBlogCategories, getPostsForPillar } from '@/data/blogPosts';
import { pillars, pillarClusters } from '@/data/topicalMap';
import { 
  getPostIntent, 
  type ContentIntent, 
  type ContentStage, 
  type ExperienceLevel 
} from '@/data/contentIntents';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { PillarCard } from '@/components/blog/PillarCard';
import { IntentFilter, IntentBadge, ExperienceBadge } from '@/components/blog/IntentFilter';
import { ContentSearchBox } from '@/components/blog/ContentSearchBox';
import { SEOHead } from '@/components/seo/SEOHead';
import { BlogTopicListSchema } from '@/components/seo/ItemListSchema';
import { useLocale } from '@/hooks/useLocale';
import { pageSEO } from '@/components/seo/seoConfig';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { Grid3X3, List, Sparkles, Filter } from 'lucide-react';

type ViewMode = 'topics' | 'all';

const Blog = () => {
  const { locale } = useLocale();
  const seo = pageSEO['/blog'];
  const [searchParams, setSearchParams] = useSearchParams();
  
  const selectedPillar = searchParams.get('pillar');
  const selectedCategory = searchParams.get('category');
  const searchQuery = searchParams.get('q') || '';
  const [viewMode, setViewMode] = useState<ViewMode>(selectedPillar ? 'all' : 'topics');
  
  // Intent filters
  const [selectedIntent, setSelectedIntent] = useState<ContentIntent | null>(null);
  const [selectedStage, setSelectedStage] = useState<ContentStage | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceLevel | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = getBlogCategories();

  // Calculate post counts for each pillar
  const pillarPostCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    pillarClusters.forEach(cluster => {
      counts[cluster.pillarId] = cluster.postSlugs.length;
    });
    return counts;
  }, []);
  
  // Filter posts based on all criteria
  const filteredPosts = useMemo(() => {
    let posts = blogPosts;
    
    // Pillar filter
    if (selectedPillar) {
      posts = getPostsForPillar(selectedPillar);
    }
    
    // Category filter
    if (selectedCategory) {
      posts = posts.filter(post => post.category === selectedCategory);
    }
    
    // Search query filter
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery) ||
        post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      );
    }
    
    // Intent filters
    if (selectedIntent || selectedStage || selectedExperience) {
      posts = posts.filter(post => {
        const metadata = getPostIntent(post.slug);
        if (!metadata) return false;
        
        if (selectedIntent && metadata.intent !== selectedIntent) return false;
        if (selectedStage && metadata.stage !== selectedStage) return false;
        if (selectedExperience && metadata.experienceLevel !== selectedExperience) return false;
        
        return true;
      });
    }
    
    return posts;
  }, [selectedPillar, selectedCategory, searchQuery, selectedIntent, selectedStage, selectedExperience]);

  const selectedPillarData = selectedPillar 
    ? pillars.find(p => p.id === selectedPillar) 
    : null;

  const handlePillarClear = () => {
    setSearchParams({});
    setViewMode('topics');
    clearIntentFilters();
  };

  const handleCategoryFilter = (category: string | null) => {
    if (category) {
      setSearchParams({ category });
      setViewMode('all');
    } else {
      setSearchParams({});
    }
  };

  const clearIntentFilters = () => {
    setSelectedIntent(null);
    setSelectedStage(null);
    setSelectedExperience(null);
  };

  const hasIntentFilters = selectedIntent || selectedStage || selectedExperience;
  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <Layout>
      <SEOHead
        title={seo.getTitle(locale)}
        description={seo.getDescription(locale)}
        canonical="https://invoicemonk.com/blog"
      />
      
      {/* ItemList Schema for blog topics */}
      {viewMode === 'topics' && !selectedPillar && !selectedCategory && (
        <BlogTopicListSchema topics={pillars} />
      )}
      
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-8">
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

          {/* Search Box */}
          <AnimatedSection className="max-w-xl mx-auto mb-8">
            <ContentSearchBox 
              placeholder="Search for guides, tips, or questions..."
            />
          </AnimatedSection>

          {/* View Mode Toggle (when not filtering) */}
          {!selectedPillar && !selectedCategory && !searchQuery && (
            <AnimatedSection className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
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
              
              {viewMode === 'all' && (
                <Button
                  variant={showFilters ? "default" : "outline"}
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="gap-2"
                >
                  <Filter className="h-4 w-4" />
                  Smart Filters
                  {hasIntentFilters && (
                    <span className="bg-primary-foreground text-primary rounded-full w-5 h-5 text-xs flex items-center justify-center">
                      {[selectedIntent, selectedStage, selectedExperience].filter(Boolean).length}
                    </span>
                  )}
                </Button>
              )}
            </AnimatedSection>
          )}

          {/* Intent Filters */}
          {(showFilters || hasIntentFilters) && viewMode === 'all' && !selectedPillar && (
            <AnimatedSection className="flex justify-center mb-8">
              <IntentFilter
                selectedIntent={selectedIntent}
                selectedStage={selectedStage}
                selectedExperience={selectedExperience}
                onIntentChange={setSelectedIntent}
                onStageChange={setSelectedStage}
                onExperienceChange={setSelectedExperience}
                onClearAll={clearIntentFilters}
              />
            </AnimatedSection>
          )}

          {/* Search Results Header */}
          {searchQuery && (
            <AnimatedSection className="mb-8">
              <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-muted/50">
                <div>
                  <p className="text-sm text-muted-foreground">Search results for</p>
                  <h2 className="text-xl font-semibold text-foreground">"{searchQuery}"</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
                  </p>
                </div>
                <Button variant="outline" onClick={handlePillarClear}>
                  Clear Search
                </Button>
              </div>
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
          {viewMode === 'topics' && !selectedPillar && !selectedCategory && !searchQuery && (
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
          {viewMode === 'all' && !selectedPillar && !searchQuery && (
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
          {(viewMode === 'all' || selectedPillar || searchQuery) && (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <AnimatedSection className="mb-12">
                  <BlogPostCard post={featuredPost} featured />
                </AnimatedSection>
              )}

              {/* Post Grid */}
              {remainingPosts.length > 0 && (
                <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {remainingPosts.map((post) => {
                    const intent = getPostIntent(post.slug);
                    return (
                      <StaggerItem key={post.slug}>
                        <div className="relative">
                          <BlogPostCard post={post} />
                          {/* Show intent badges if intent filtering is active */}
                          {hasIntentFilters && intent && (
                            <div className="absolute top-3 right-3 flex gap-1">
                              <IntentBadge intent={intent.intent} size="sm" />
                            </div>
                          )}
                        </div>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>
              )}

              {/* Empty State */}
              {filteredPosts.length === 0 && (
                <AnimatedSection className="text-center py-12">
                  <p className="text-muted-foreground">
                    {searchQuery 
                      ? `No articles found for "${searchQuery}"`
                      : hasIntentFilters 
                        ? 'No articles match your filters'
                        : 'No posts found in this topic.'
                    }
                  </p>
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
          {viewMode === 'topics' && !selectedPillar && !searchQuery && (
            <AnimatedSection className="mt-16">
              <h2 className="text-h3 font-bold text-foreground mb-8 text-center">
                Recent Articles
              </h2>
              <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.slice(0, 6).map((post) => (
                  <StaggerItem key={post.slug}>
                    <BlogPostCard post={post} />
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
