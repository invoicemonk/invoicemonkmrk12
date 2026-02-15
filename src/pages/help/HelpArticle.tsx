import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { HowToSchema } from '@/components/seo/HowToSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { HelpSidebar } from '@/components/help/HelpSidebar';
import { getGuideBySlug, helpGuides } from '@/data/helpGuides';
import { Button } from '@/components/ui/button';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { icons } from 'lucide-react';
import NotFound from '@/pages/NotFound';

export default function HelpArticle() {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? getGuideBySlug(slug) : undefined;

  if (!guide) return <NotFound />;

  const relatedGuides = guide.relatedGuides
    .map(s => helpGuides.find(g => g.slug === s))
    .filter(Boolean);

  const isExternal = guide.targetFeature.startsWith('http');

  return (
    <Layout>
      <SEOHead
        title={`${guide.title} — Invoicemonk Help`}
        description={guide.description}
        canonical={`https://invoicemonk.com/help/${guide.slug}`}
      />
      <HowToSchema
        name={guide.title}
        description={guide.description}
        steps={guide.steps}
        totalTime={guide.estimatedTime}
        tool={['Invoicemonk account']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://invoicemonk.com/' },
          { name: 'Help Center', url: 'https://invoicemonk.com/help' },
          { name: guide.title.split('—')[0].trim(), url: `https://invoicemonk.com/help/${guide.slug}` },
        ]}
      />
      {guide.faq && guide.faq.length > 0 && <FAQSchema items={guide.faq} />}

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-body-sm text-muted-foreground mb-8 flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/help" className="hover:text-primary transition-colors">Help Center</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">{guide.title.split('—')[0].split(':')[0].trim()}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-28">
                <HelpSidebar currentSlug={guide.slug} />
              </div>
            </aside>

            {/* Main Content */}
            <article className="flex-1 min-w-0 max-w-3xl">
              <h1 className="text-display-sm font-bold text-heading mb-4">{guide.title}</h1>
              <p className="text-body-lg text-muted-foreground mb-8">{guide.description}</p>

              {/* Steps summary */}
              <div className="bg-primary/5 rounded-2xl p-6 mb-10 border border-primary/10">
                <h2 className="text-body font-semibold text-foreground mb-4">Quick Steps</h2>
                <ol className="space-y-3">
                  {guide.steps.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-body-sm font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <div>
                        <span className="font-medium text-foreground">{step.name}</span>
                        <p className="text-body-sm text-muted-foreground mt-0.5">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Full content */}
              <div
                className="prose prose-headings:text-heading prose-headings:font-bold prose-p:text-foreground/80 prose-li:text-foreground/80 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground max-w-none
                  [&_.callout]:bg-accent/50 [&_.callout]:border-l-4 [&_.callout]:border-primary [&_.callout]:p-4 [&_.callout]:rounded-lg [&_.callout]:my-6 [&_.callout]:text-body-sm"
                dangerouslySetInnerHTML={{ __html: guide.content }}
              />

              {/* FAQ */}
              {guide.faq && guide.faq.length > 0 && (
                <div className="mt-12 border-t border-border pt-8">
                  <h2 className="text-heading-sm font-bold text-heading mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {guide.faq.map((item, i) => (
                      <div key={i}>
                        <h3 className="text-body font-semibold text-foreground mb-2">{item.question}</h3>
                        <p className="text-body-sm text-muted-foreground">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Guides */}
              {relatedGuides.length > 0 && (
                <div className="mt-12 border-t border-border pt-8">
                  <h2 className="text-heading-sm font-bold text-heading mb-6">Related Guides</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {relatedGuides.map(rg => {
                      if (!rg) return null;
                      const Icon = icons[rg.icon as keyof typeof icons];
                      return (
                        <Link
                          key={rg.slug}
                          to={`/help/${rg.slug}`}
                          className="flex items-center gap-3 p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors group"
                        >
                          {Icon && (
                            <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                              <Icon className="w-4 h-4" />
                            </div>
                          )}
                          <span className="text-body-sm font-medium text-foreground group-hover:text-primary transition-colors">
                            {rg.title.split('—')[0].split(':')[0].trim()}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-12 bg-primary/5 rounded-2xl p-8 text-center border border-primary/10">
                <h2 className="text-heading-sm font-bold text-heading mb-2">Ready to try it?</h2>
                <p className="text-body text-muted-foreground mb-6">
                  Put this guide into action with your Invoicemonk account.
                </p>
                <Button asChild className="rounded-full px-8">
                  {isExternal ? (
                    <a href={guide.targetFeature} target="_blank" rel="noopener noreferrer">
                      Open Invoicemonk <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  ) : (
                    <Link to={guide.targetFeature}>
                      Learn More <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  )}
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  );
}
