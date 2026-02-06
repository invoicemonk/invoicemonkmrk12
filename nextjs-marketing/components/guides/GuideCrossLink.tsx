import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import type { Pillar } from '@/data/topicalMap';

interface GuideCrossLinkProps {
  pillar: Pillar;
}

/**
 * GuideCrossLink - Links guide pages to their corresponding blog pillar posts
 * 
 * This component creates semantic internal links between:
 * - Quick reference guide pages (/guides/*)
 * - Long-form blog pillar posts (/blog/*)
 * 
 * Following Koray Tuğberk Gübür's semantic SEO framework for
 * proper topical authority signaling.
 */
export function GuideCrossLink({ pillar }: GuideCrossLinkProps) {
  // Map pillar IDs to blog pillar post slugs
  const blogPillarMap: Record<string, { slug: string; title: string }> = {
    'invoicing-mastery': {
      slug: 'complete-guide-to-business-invoicing',
      title: 'Complete Guide to Business Invoicing'
    },
    'getting-paid': {
      slug: 'ultimate-guide-getting-paid-faster',
      title: 'Ultimate Guide to Getting Paid Faster'
    },
    'business-finances': {
      slug: 'small-business-accounting-guide',
      title: 'Small Business Accounting Guide'
    },
    'tax-compliance': {
      slug: 'small-business-tax-compliance-guide',
      title: 'Small Business Tax Compliance Guide'
    },
    'freelancer-success': {
      slug: 'freelancer-business-guide',
      title: 'Freelancer Business Guide'
    },
    'estimates-proposals': {
      slug: 'winning-proposals-estimates-guide',
      title: 'Winning Proposals & Estimates Guide'
    }
  };

  const blogPillar = blogPillarMap[pillar.id];
  
  if (!blogPillar) {
    return null;
  }

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${pillar.color}15` }}
              >
                <BookOpen 
                  className="w-7 h-7" 
                  style={{ color: pillar.color }}
                />
              </div>
              
              <div className="flex-1">
                <span className="text-caption text-primary font-medium uppercase tracking-wide">
                  Deep Dive Article
                </span>
                <h3 className="text-h4 text-heading mt-1 mb-2">
                  {blogPillar.title}
                </h3>
                <p className="text-body text-muted-foreground">
                  For a comprehensive deep-dive with detailed examples, case studies, and 
                  expert insights, explore our complete guide on this topic.
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <Button asChild variant="outline" className="rounded-full group">
                  <Link to={`/blog/${blogPillar.slug}`}>
                    Read Full Guide
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
