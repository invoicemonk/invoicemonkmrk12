import { useMemo } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { GuideHero, ConceptGrid, ArticleList, GuideCTA, GuideFAQ, GuideCrossLink } from '@/components/guides';
import { getPillarBySlug, getClusterPostsForPillar } from '@/data/topicalMap';
import { blogPosts } from '@/data/blogPosts';
import NotFound from '@/pages/NotFound';

export default function FreelancingGuide() {
  const pillar = getPillarBySlug('freelancing');
  
  const articles = useMemo(() => {
    if (!pillar) return [];
    const slugs = getClusterPostsForPillar(pillar.id);
    return blogPosts.filter(post => slugs.includes(post.slug));
  }, [pillar]);

  if (!pillar) {
    return <NotFound />;
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Guides', url: '/guides' },
    { name: pillar.title, url: `/guides/${pillar.slug}` }
  ];

  return (
    <Layout>
      <SEOHead
        title={`${pillar.title} Guide | Invoicemonk`}
        description={pillar.longDescription}
        canonical={`https://invoicemonk.com/guides/${pillar.slug}`}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      
      <GuideHero pillar={pillar} />
      <ConceptGrid pillar={pillar} />
      <GuideCrossLink pillar={pillar} />
      <ArticleList pillar={pillar} articles={articles} />
      <GuideCTA pillar={pillar} />
      <GuideFAQ pillar={pillar} />
    </Layout>
  );
}
