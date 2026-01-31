import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Wallet, Calculator, Shield, User, ClipboardList } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { pillars } from '@/data/topicalMap';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  Wallet,
  Calculator,
  Shield,
  User,
  ClipboardList
};

export default function GuidesIndex() {
  return (
    <Layout>
      <SEOHead
        title="Business Guides & Resources | Invoicemonk"
        description="Comprehensive guides on invoicing, getting paid, accounting, tax compliance, freelancing, and business proposals. Expert knowledge to grow your business."
        canonical="https://invoicemonk.com/guides"
      />
      
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-4">
              Business Guides & Resources
            </h1>
            <p className="text-body-lg text-muted-foreground">
              Everything you need to master invoicing, get paid faster, and grow your business. 
              Explore our comprehensive guides written by industry experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guide Cards */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pillars.map((pillar, index) => {
              const IconComponent = iconMap[pillar.icon];
              
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/guides/${pillar.slug}`}>
                    <Card className="h-full hover:shadow-soft-lg transition-all duration-300 group border-border/50">
                      <CardContent className="p-6">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                          style={{ backgroundColor: `${pillar.color}15` }}
                        >
                          {IconComponent && (
                            <IconComponent className="w-6 h-6 text-primary" />
                          )}
                        </div>
                        <h2 className="text-body-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {pillar.title}
                        </h2>
                        <p className="text-body text-muted-foreground mb-4 line-clamp-2">
                          {pillar.description}
                        </p>
                        <span className="inline-flex items-center text-sm font-medium text-primary">
                          Explore guide
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
