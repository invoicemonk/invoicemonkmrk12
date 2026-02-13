import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Globe, Sparkles, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { Pillar } from '@/data/topicalMap';
import type { BlogPost } from '@/data/blogPosts';
import { pillars as allPillars } from '@/data/topicalMap';

interface ClusterNavigationProps {
  pillar: Pillar;
  currentPostSlug?: string;
  relatedPosts: BlogPost[];
  className?: string;
  showCrossPillar?: boolean;
  showCountryGuides?: boolean;
}

// Country compliance guides mapping
const countryGuides = [
  { code: 'NG', flag: '🇳🇬', name: 'Nigeria', authority: 'FIRS', slug: 'firs-invoice-requirements-nigeria' },
  { code: 'UK', flag: '🇬🇧', name: 'UK', authority: 'HMRC', slug: 'hmrc-invoicing-rules-uk-mtd-compliance' },
  { code: 'US', flag: '🇺🇸', name: 'US', authority: 'IRS', slug: 'irs-invoice-requirements-us-compliance' },
  { code: 'CA', flag: '🇨🇦', name: 'Canada', authority: 'CRA', slug: 'cra-invoice-standards-canadian-compliance' },
  { code: 'AU', flag: '🇦🇺', name: 'Australia', authority: 'ATO', slug: 'ato-invoice-requirements-australian-compliance' },
];

export function ClusterNavigation({ 
  pillar, 
  currentPostSlug,
  relatedPosts,
  className,
  showCrossPillar = true,
  showCountryGuides = false
}: ClusterNavigationProps) {
  const filteredPosts = relatedPosts.filter(p => p.slug !== currentPostSlug);
  
  // Get cross-pillar suggestions (related pillars based on topic)
  const crossPillarSuggestions = showCrossPillar 
    ? getCrossPillarSuggestions(pillar.id)
    : [];

  if (filteredPosts.length === 0 && crossPillarSuggestions.length === 0) return null;

  return (
    <div className={cn('space-y-6', className)}>
      {/* Main Series Navigation */}
      {filteredPosts.length > 0 && (
        <Card className="border-border/50 overflow-hidden">
          <CardHeader 
            className="pb-3"
            style={{ borderBottom: `2px solid ${pillar.color}` }}
          >
            <CardTitle className="flex items-center gap-2 text-base">
              <BookOpen 
                className="h-4 w-4" 
                style={{ color: pillar.color }} 
              />
              <span>From this series</span>
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {pillar.description}
            </p>
          </CardHeader>
          <CardContent className="pt-4">
            <nav aria-label="Related articles in this series">
              <ul className="space-y-3">
                {filteredPosts.slice(0, 5).map((post) => (
                  <li key={post.slug}>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="group flex items-start gap-3 text-sm hover:text-primary transition-colors"
                    >
                      <span 
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-transform group-hover:scale-125"
                        style={{ backgroundColor: pillar.color }}
                      />
                      <span className="line-clamp-2">{post.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            {pillar.hubPage && (
              <Button 
                asChild 
                variant="ghost" 
                size="sm" 
                className="w-full mt-4 group"
              >
                <Link to={pillar.hubPage}>
                  <span>Read the complete guide</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      {/* Product CTA */}
      <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-primary/10">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Put it into practice</span>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Apply what you've learned with Invoicemonk's {pillar.title.toLowerCase()} tools.
          </p>
          <Button asChild size="sm" className="w-full rounded-full">
            <Link to={pillar.targetProduct}>
              Try Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* Country-Specific Guides (for Tax & Compliance pillar) */}
      {showCountryGuides && pillar.id === 'tax-compliance' && (
        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Globe className="h-4 w-4 text-primary" />
              <span>Country Guides</span>
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Region-specific tax compliance
            </p>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {countryGuides.map((country) => (
                <Link
                  key={country.code}
                  to={`/blog/${country.slug}`}
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium",
                    "bg-muted hover:bg-muted/80 text-foreground transition-colors",
                    currentPostSlug === country.slug && "bg-primary/10 text-primary"
                  )}
                >
                  <span>{country.flag}</span>
                  <span>{country.authority}</span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Cross-Pillar Suggestions */}
      {crossPillarSuggestions.length > 0 && (
        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span>Related Topics</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-2">
              {crossPillarSuggestions.map((relatedPillar) => (
                <Link
                  key={relatedPillar.id}
                  to={relatedPillar.hubPage}
                  className="group flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${relatedPillar.color}15` }}
                  >
                    <BookOpen 
                      className="w-4 h-4" 
                      style={{ color: relatedPillar.color }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {relatedPillar.title}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

/**
 * Get related pillars based on logical connections
 */
function getCrossPillarSuggestions(currentPillarId: string): Pillar[] {
  const pillarRelations: Record<string, string[]> = {
    'invoicing-mastery': ['getting-paid', 'tax-compliance'],
    'getting-paid': ['invoicing-mastery', 'business-finances'],
    'business-finances': ['tax-compliance', 'getting-paid'],
    'tax-compliance': ['invoicing-mastery', 'business-finances'],
    'freelancer-success': ['invoicing-mastery', 'estimates-proposals'],
    'estimates-proposals': ['invoicing-mastery', 'freelancer-success'],
  };

  const relatedIds = pillarRelations[currentPillarId] || [];
  return allPillars.filter(p => relatedIds.includes(p.id));
}

/**
 * Standalone Country Compliance Navigation Card
 */
interface CountryComplianceNavProps {
  currentSlug?: string;
  className?: string;
}

export function CountryComplianceNav({ currentSlug, className }: CountryComplianceNavProps) {
  return (
    <Card className={cn('border-border/50', className)}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Globe className="h-4 w-4 text-primary" />
          <span>Compliance by Country</span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Tax authority-specific invoice requirements
        </p>
      </CardHeader>
      <CardContent className="pt-0">
        <nav aria-label="Country compliance guides">
          <ul className="space-y-2">
            {countryGuides.map((country) => (
              <li key={country.code}>
                <Link
                  to={`/blog/${country.slug}`}
                  className={cn(
                    "flex items-center gap-3 p-2 rounded-lg transition-colors",
                    currentSlug === country.slug 
                      ? "bg-primary/10 text-primary" 
                      : "hover:bg-muted/50 text-foreground"
                  )}
                >
                  <span className="text-lg">{country.flag}</span>
                  <div className="flex-1">
                    <span className="text-sm font-medium">{country.name}</span>
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {country.authority}
                    </Badge>
                  </div>
                  {currentSlug !== country.slug && (
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <Button 
          asChild 
          variant="ghost" 
          size="sm" 
          className="w-full mt-4 group"
        >
          <Link to="/guides/tax-compliance">
            <span>Full Tax Compliance Guide</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
