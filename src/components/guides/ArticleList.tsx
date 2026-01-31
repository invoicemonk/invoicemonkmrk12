import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Pillar } from '@/data/topicalMap';
import type { BlogPost } from '@/data/blogPosts';

interface ArticleListProps {
  pillar: Pillar;
  articles: BlogPost[];
}

export function ArticleList({ pillar, articles }: ArticleListProps) {
  if (articles.length === 0) {
    return null;
  }

  // Separate pillar content from cluster content
  const pillarArticles = articles.filter(a => a.pillarContent);
  const clusterArticles = articles.filter(a => !a.pillarContent);

  return (
    <section id="articles" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-display-xs lg:text-display-sm font-bold text-foreground mb-4">
              All Articles in This Series
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              {articles.length} comprehensive articles to help you master {pillar.title.toLowerCase()}.
            </p>
          </motion.div>

          {/* Pillar/Hub Articles */}
          {pillarArticles.length > 0 && (
            <div className="mb-12">
              <h3 className="text-body-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <BookOpen className="h-5 w-5" style={{ color: pillar.color }} />
                Comprehensive Guides
              </h3>
              <div className="grid gap-6">
                {pillarArticles.map((article, index) => (
                  <ArticleCard 
                    key={article.slug} 
                    article={article} 
                    pillar={pillar}
                    index={index}
                    featured
                  />
                ))}
              </div>
            </div>
          )}

          {/* Cluster Articles */}
          {clusterArticles.length > 0 && (
            <div>
              <h3 className="text-body-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <span 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: pillar.color }}
                />
                Supporting Articles
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {clusterArticles.map((article, index) => (
                  <ArticleCard 
                    key={article.slug} 
                    article={article} 
                    pillar={pillar}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

interface ArticleCardProps {
  article: BlogPost;
  pillar: Pillar;
  index: number;
  featured?: boolean;
}

function ArticleCard({ article, pillar, index, featured }: ArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link to={`/blog/${article.slug}`}>
        <Card className={`h-full hover:shadow-soft-lg transition-all duration-300 group border-border/50 ${
          featured ? 'bg-gradient-to-br from-card to-muted/30' : ''
        }`}>
          <CardContent className={`p-6 ${featured ? 'flex gap-6' : ''}`}>
            {featured && article.featuredImage && (
              <div className="hidden md:block w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={article.featuredImage} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                {featured && (
                  <Badge 
                    variant="secondary"
                    style={{ 
                      backgroundColor: `${pillar.color}15`,
                      color: pillar.color 
                    }}
                  >
                    Featured
                  </Badge>
                )}
                <div className="flex items-center text-caption text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  {article.readTime}
                </div>
              </div>
              <h4 className="text-body-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h4>
              <p className="text-body text-muted-foreground line-clamp-2 mb-4">
                {article.excerpt}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-primary">
                Read article
                <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
