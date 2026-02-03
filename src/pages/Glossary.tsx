import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { DefinedTermSetSchema } from '@/components/seo/DefinedTermSetSchema';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { 
  glossaryTerms, 
  getTermsByCategory, 
  getGlossaryCategories,
  searchGlossaryTerms,
  getRelatedTerms,
  type GlossaryTerm 
} from '@/data/glossaryTerms';
import { blogPosts } from '@/data/blogPosts';
import { 
  Search, 
  BookOpen, 
  FileText, 
  Wallet, 
  Calculator, 
  Shield, 
  User, 
  Briefcase,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

const categoryConfig: Record<GlossaryTerm['category'], { icon: typeof FileText; label: string; color: string }> = {
  invoicing: { icon: FileText, label: 'Invoicing', color: 'bg-primary/10 text-primary' },
  payments: { icon: Wallet, label: 'Payments', color: 'bg-green-500/10 text-green-600' },
  accounting: { icon: Calculator, label: 'Accounting', color: 'bg-blue-500/10 text-blue-600' },
  tax: { icon: Shield, label: 'Tax & Compliance', color: 'bg-purple-500/10 text-purple-600' },
  freelancing: { icon: User, label: 'Freelancing', color: 'bg-orange-500/10 text-orange-600' },
  business: { icon: Briefcase, label: 'Business', color: 'bg-rose-500/10 text-rose-600' },
};

const Glossary = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const selectedCategory = searchParams.get('category') as GlossaryTerm['category'] | null;
  const selectedTerm = searchParams.get('term');

  const categories = getGlossaryCategories();

  // Filter terms based on search and category
  const filteredTerms = useMemo(() => {
    let terms = glossaryTerms;
    
    if (searchQuery) {
      terms = searchGlossaryTerms(searchQuery);
    }
    
    if (selectedCategory) {
      terms = terms.filter(t => t.category === selectedCategory);
    }
    
    return terms.sort((a, b) => a.term.localeCompare(b.term));
  }, [searchQuery, selectedCategory]);

  // Group terms alphabetically
  const groupedTerms = useMemo(() => {
    const groups: Record<string, GlossaryTerm[]> = {};
    filteredTerms.forEach(term => {
      const letter = term.term[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(term);
    });
    return groups;
  }, [filteredTerms]);

  // Get the selected term details
  const termDetails = selectedTerm 
    ? glossaryTerms.find(t => t.slug === selectedTerm)
    : null;

  const relatedTermsList = termDetails ? getRelatedTerms(termDetails.slug) : [];
  
  // Get related articles for the selected term
  const relatedArticles = termDetails?.relatedArticles
    ? blogPosts.filter(post => termDetails.relatedArticles?.includes(post.slug))
    : [];

  const handleCategoryFilter = (category: GlossaryTerm['category'] | null) => {
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  const handleTermSelect = (slug: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('term', slug);
    setSearchParams(newParams);
  };

  const handleCloseTerm = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('term');
    setSearchParams(newParams);
  };

  return (
    <Layout>
      <SEOHead
        title="Business Finance Glossary | Invoicing & Accounting Terms | Invoicemonk"
        description="Comprehensive glossary of invoicing, payments, accounting, tax, and business finance terms. Learn key concepts for small business owners and freelancers."
        canonical="https://invoicemonk.com/glossary"
      />
      <DefinedTermSetSchema terms={glossaryTerms} />

      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4" />
              <span>Knowledge Base</span>
            </div>
            <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-4">
              Business Finance Glossary
            </h1>
            <p className="text-body-lg text-muted-foreground">
              Essential invoicing, accounting, and business terms explained simply. 
              Build your financial vocabulary with our comprehensive glossary.
            </p>
          </AnimatedSection>

          {/* Search */}
          <AnimatedSection className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search terms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </AnimatedSection>

          {/* Category Filter */}
          <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-12">
            <Button
              variant={!selectedCategory ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryFilter(null)}
            >
              All Terms
            </Button>
            {categories.map((category) => {
              const config = categoryConfig[category];
              const Icon = config.icon;
              return (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryFilter(category)}
                  className="gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {config.label}
                </Button>
              );
            })}
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Term List */}
            <div className="lg:col-span-2">
              {Object.keys(groupedTerms).length === 0 ? (
                <AnimatedSection className="text-center py-12">
                  <p className="text-muted-foreground">No terms found matching your search.</p>
                </AnimatedSection>
              ) : (
                <div className="space-y-8">
                  {Object.entries(groupedTerms).map(([letter, terms]) => (
                    <AnimatedSection key={letter}>
                      <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">
                        {letter}
                      </h2>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {terms.map((term) => {
                          const config = categoryConfig[term.category];
                          return (
                            <button
                              key={term.slug}
                              onClick={() => handleTermSelect(term.slug)}
                              className={`text-left p-4 rounded-lg border transition-all hover:border-primary hover:shadow-sm ${
                                selectedTerm === term.slug ? 'border-primary bg-primary/5' : 'border-border'
                              }`}
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <h3 className="font-semibold text-foreground">{term.term}</h3>
                                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                                    {term.definition}
                                  </p>
                                </div>
                                <Badge variant="secondary" className={`shrink-0 ${config.color}`}>
                                  {config.label}
                                </Badge>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              )}
            </div>

            {/* Term Detail Panel */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {termDetails ? (
                  <AnimatedSection>
                    <Card>
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <Badge 
                              variant="secondary" 
                              className={`mb-2 ${categoryConfig[termDetails.category].color}`}
                            >
                              {categoryConfig[termDetails.category].label}
                            </Badge>
                            <CardTitle className="text-xl" id={termDetails.slug}>
                              {termDetails.term}
                            </CardTitle>
                          </div>
                          <Button variant="ghost" size="sm" onClick={handleCloseTerm}>
                            ×
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-medium text-sm text-muted-foreground mb-1">Definition</h4>
                          <p className="text-foreground">{termDetails.definition}</p>
                        </div>
                        
                        {termDetails.extendedDescription && (
                          <div>
                            <h4 className="font-medium text-sm text-muted-foreground mb-1">More Details</h4>
                            <p className="text-foreground text-sm">{termDetails.extendedDescription}</p>
                          </div>
                        )}

                        {relatedTermsList.length > 0 && (
                          <div>
                            <h4 className="font-medium text-sm text-muted-foreground mb-2">Related Terms</h4>
                            <div className="flex flex-wrap gap-2">
                              {relatedTermsList.map(related => (
                                <Button
                                  key={related.slug}
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleTermSelect(related.slug)}
                                >
                                  {related.term}
                                </Button>
                              ))}
                            </div>
                          </div>
                        )}

                        {relatedArticles.length > 0 && (
                          <div>
                            <h4 className="font-medium text-sm text-muted-foreground mb-2">Learn More</h4>
                            <div className="space-y-2">
                              {relatedArticles.map(article => (
                                <Link
                                  key={article.slug}
                                  to={`/blog/${article.slug}`}
                                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                                >
                                  <ChevronRight className="h-4 w-4" />
                                  {article.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ) : (
                  <Card className="border-dashed">
                    <CardContent className="py-8 text-center">
                      <BookOpen className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                      <p className="text-muted-foreground">
                        Select a term to see its full definition and related resources.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <AnimatedSection className="mt-16 text-center">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="py-8">
                <h2 className="text-2xl font-bold mb-2">Put These Terms Into Practice</h2>
                <p className="text-muted-foreground mb-4">
                  Start using professional invoicing software that handles the complexity for you.
                </p>
                <Button asChild>
                  <Link to="/pricing" className="gap-2">
                    Get Started Free <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </Layout>
  );
};

export default Glossary;
