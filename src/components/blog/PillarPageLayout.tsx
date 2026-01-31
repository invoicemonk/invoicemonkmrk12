import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Wallet, 
  Calculator, 
  Shield, 
  User, 
  ClipboardList,
  ArrowRight,
  BookOpen,
  ChevronDown,
  ChevronUp 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { Pillar } from '@/data/topicalMap';
import type { BlogPost } from '@/data/blogPosts';
import { ClusterSeriesSection } from './ClusterSeriesSection';
import { ClusterTopicMap } from './ClusterTopicMap';

const iconMap: Record<string, React.ElementType> = {
  FileText,
  Wallet,
  Calculator,
  Shield,
  User,
  ClipboardList
};

interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

interface PillarPageLayoutProps {
  pillar: Pillar;
  post: BlogPost;
  clusterPosts: BlogPost[];
  children: React.ReactNode;
}

export function PillarPageLayout({ 
  pillar, 
  post, 
  clusterPosts,
  children 
}: PillarPageLayoutProps) {
  const [tocItems, setTocItems] = useState<TableOfContentsItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [showFullToc, setShowFullToc] = useState(false);
  
  const Icon = iconMap[pillar.icon] || FileText;

  // Extract headings from content for TOC
  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(post.content, 'text/html');
    const headings = doc.querySelectorAll('h2, h3');
    
    const items: TableOfContentsItem[] = Array.from(headings).map((heading, index) => {
      const id = heading.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || `heading-${index}`;
      return {
        id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1))
      };
    });
    
    setTocItems(items);
  }, [post.content]);

  // Intersection observer for active heading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    tocItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [tocItems]);

  const displayedTocItems = showFullToc ? tocItems : tocItems.slice(0, 6);
  const hasMoreItems = tocItems.length > 6;

  const sortedClusterPosts = useMemo(() => {
    return [...clusterPosts].sort((a, b) => {
      // Prioritize by content type
      if (a.pillarContent && !b.pillarContent) return -1;
      if (!a.pillarContent && b.pillarContent) return 1;
      // Then by priority if available
      const priorityOrder: Record<string, number> = { 'P1': 1, 'P2': 2, 'P3': 3 };
      const aPriority = priorityOrder[a.priority || 'P3'] || 3;
      const bPriority = priorityOrder[b.priority || 'P3'] || 3;
      return aPriority - bPriority;
    });
  }, [clusterPosts]);

  return (
    <div className="relative">
      {/* Pillar Header Banner */}
      <div 
        className="mb-8 p-6 rounded-2xl border-2"
        style={{ 
          borderColor: pillar.color,
          backgroundColor: `${pillar.color}08`
        }}
      >
        <div className="flex items-start gap-4">
          <div 
            className="p-3 rounded-xl flex-shrink-0"
            style={{ backgroundColor: `${pillar.color}15` }}
          >
            <Icon 
              className="h-8 w-8"
              style={{ color: pillar.color }}
            />
          </div>
          <div className="flex-grow">
            <Badge 
              className="mb-2"
              style={{ 
                backgroundColor: `${pillar.color}20`,
                color: pillar.color,
                borderColor: pillar.color
              }}
            >
              Complete Guide
            </Badge>
            <h2 
              className="text-xl font-semibold mb-2"
              style={{ color: pillar.color }}
            >
              {pillar.title}
            </h2>
            <p className="text-muted-foreground text-sm">
              {pillar.description}
            </p>
          </div>
        </div>
      </div>

      {/* Prominent Cluster Topic Map - Visible on all devices */}
      <ClusterTopicMap
        pillar={pillar}
        currentSlug={post.slug}
        clusterPosts={sortedClusterPosts}
        hubPost={post.pillarContent ? post : undefined}
      />

      {/* Two-column layout for desktop */}
      <div className="grid lg:grid-cols-[1fr_320px] gap-8">
        {/* Main Content */}
        <div>
          {children}
        </div>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            {/* Table of Contents */}
            {tocItems.length > 0 && (
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
                    <span>In This Guide</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <nav aria-label="Table of contents">
                    <ul className="space-y-2">
                      {displayedTocItems.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className={cn(
                              "block text-sm transition-colors hover:text-primary",
                              item.level === 3 && "pl-4",
                              activeId === item.id 
                                ? "font-medium" 
                                : "text-muted-foreground"
                            )}
                            style={{
                              color: activeId === item.id ? pillar.color : undefined
                            }}
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                    {hasMoreItems && (
                      <button
                        onClick={() => setShowFullToc(!showFullToc)}
                        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mt-3 transition-colors"
                      >
                        {showFullToc ? (
                          <>
                            <ChevronUp className="h-3 w-3" />
                            Show less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-3 w-3" />
                            {tocItems.length - 6} more sections
                          </>
                        )}
                      </button>
                    )}
                  </nav>
                </CardContent>
              </Card>
            )}

            {/* Related Articles in Series */}
            {sortedClusterPosts.length > 1 && (
              <Card className="border-border/50 overflow-hidden">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">More in this Series</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {sortedClusterPosts
                      .filter(p => p.slug !== post.slug)
                      .slice(0, 5)
                      .map((clusterPost) => (
                        <li key={clusterPost.slug}>
                          <Link 
                            to={`/blog/${clusterPost.slug}`}
                            className="group flex items-start gap-3 text-sm hover:text-primary transition-colors"
                          >
                            <span 
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-transform group-hover:scale-125"
                              style={{ backgroundColor: pillar.color }}
                            />
                            <span className="line-clamp-2">{clusterPost.title}</span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Product CTA */}
            <Card 
              className="border-2 overflow-hidden"
              style={{ borderColor: pillar.color }}
            >
              <CardContent className="p-6 text-center">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${pillar.color}15` }}
                >
                  <Icon 
                    className="h-6 w-6"
                    style={{ color: pillar.color }}
                  />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Ready to get started?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Try Invoicemonk's {pillar.title.toLowerCase()} tools free.
                </p>
                <Button 
                  asChild 
                  className="w-full group"
                  style={{ 
                    backgroundColor: pillar.color,
                    color: 'white'
                  }}
                >
                  <Link to={pillar.targetProduct}>
                    <span>Start Free Trial</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </aside>
      </div>

      {/* Mobile TOC (collapsible) */}
      <div className="lg:hidden mb-8">
        <details className="group">
          <summary 
            className="flex items-center justify-between p-4 rounded-xl border cursor-pointer list-none"
            style={{ borderColor: pillar.color }}
          >
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" style={{ color: pillar.color }} />
              <span className="font-medium">Table of Contents</span>
            </div>
            <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
          </summary>
          <nav className="p-4 pt-2" aria-label="Table of contents">
            <ul className="space-y-2">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={cn(
                      "block text-sm text-muted-foreground hover:text-primary transition-colors",
                      item.level === 3 && "pl-4"
                    )}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>

      {/* Cluster Series Section - Featured at bottom */}
      <ClusterSeriesSection
        pillar={pillar}
        posts={sortedClusterPosts}
        currentSlug={post.slug}
        maxPosts={3}
      />
    </div>
  );
}
