import { useState, useMemo } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { HelpSearch } from '@/components/help/HelpSearch';
import { HelpCategoryCard } from '@/components/help/HelpCategoryCard';
import { helpGuides, categoryLabels, categoryOrder } from '@/data/helpGuides';
import { BookOpen } from 'lucide-react';

export default function HelpCenter() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return helpGuides;
    const q = query.toLowerCase();
    return helpGuides.filter(
      g =>
        g.title.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q) ||
        g.steps.some(s => s.name.toLowerCase().includes(q) || s.text.toLowerCase().includes(q))
    );
  }, [query]);

  const grouped = categoryOrder
    .map(cat => ({
      category: cat,
      label: categoryLabels[cat],
      guides: filtered.filter(g => g.category === cat),
    }))
    .filter(g => g.guides.length > 0);

  return (
    <Layout>
      <SEOHead
        title="Help Center — Invoicemonk Product Guides"
        description="Step-by-step guides for every Invoicemonk feature. Learn how to create invoices, record payments, track expenses, manage your team, and more."
        canonical="https://invoicemonk.com/help"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://invoicemonk.com/' },
          { name: 'Help Center', url: 'https://invoicemonk.com/help' },
        ]}
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-body-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Product Documentation
          </div>
          <h1 className="text-display-sm sm:text-display font-bold text-heading mb-4">
            Help Center
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Step-by-step guides for every Invoicemonk feature. Find what you need and get back to work.
          </p>
          <HelpSearch onSearch={setQuery} />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {grouped.length === 0 ? (
            <p className="text-center text-muted-foreground text-body-lg py-12">
              No guides found matching "{query}". Try a different search term.
            </p>
          ) : (
            grouped.map(group => (
              <div key={group.category} className="mb-12 last:mb-0">
                <h2 className="text-heading-sm font-bold text-heading mb-6">{group.label}</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.guides.map(guide => (
                    <HelpCategoryCard key={guide.slug} guide={guide} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </Layout>
  );
}
