import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Layers, TrendingUp, Lock, ArrowRight, Check, FileText, Users, Globe, Heart } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { PageHero } from '@/components/shared/PageHero';
import { 
  FloatingSecurityBadge,
  FloatingIcon,
  FloatingChartCard
} from '@/components/shared/FloatingElements';

const corePrinciples = [
  {
    icon: Shield,
    title: 'Compliance-First Architecture',
    description: 'Every transaction is immutable and audit-ready from day one. Built for businesses that need to satisfy regulators, clients, and stakeholders.',
  },
  {
    icon: Layers,
    title: 'Unified Financial Data',
    description: 'All your financial operations in one platform. No more juggling multiple tools, exports, and reconciliations.',
  },
  {
    icon: TrendingUp,
    title: 'Scales With Your Business',
    description: 'Start with what you need today. Add products as you grow — without migrating data or learning new systems.',
  },
  {
    icon: Lock,
    title: 'Built for Audit Confidence',
    description: 'Timestamped records, hash-based integrity, and complete audit trails. Be ready for any audit, anytime.',
  },
];

const differentiators = [
  'This is not an invoicing app with compliance features.',
  'This is a financial records system that issues invoices.',
  'Every record is immutable from creation.',
  'Every action is logged with complete audit trails.',
  'Compliance isn\'t an add-on — it\'s the foundation.',
];

const trustIndicators = [
  { icon: FileText, label: '100,000+', description: 'Invoices processed' },
  { icon: Users, label: '10,000+', description: 'Businesses trust us' },
  { icon: Globe, label: '50+', description: 'Countries served' },
  { icon: Shield, label: '99.9%', description: 'Uptime guarantee' },
];

const WhyInvoicemonk = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative">
        <PageHero
          badge={{ icon: Heart, text: 'Our Philosophy' }}
          title="A financial records system, not just an invoicing app"
          accentWord="financial records system"
          description="We built Invoicemonk because financial records should inspire confidence, not concern. Every feature, every decision, starts with compliance at its core."
          primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: 'Learn About Compliance', href: '/compliance', external: false }}
          backgroundVariant="gradient"
        />
        {/* Floating Elements */}
        <FloatingSecurityBadge 
          label="Compliance First"
          className="absolute top-28 right-8 lg:right-20 hidden lg:block" 
          delay={0.4}
        />
        <FloatingChartCard 
          className="absolute bottom-40 left-8 lg:left-16 hidden lg:block" 
          delay={0.6}
        />
        <FloatingIcon 
          icon={Layers}
          className="absolute top-52 left-16 lg:left-32 hidden lg:block" 
          delay={0.8}
          size="md"
        />
      </div>

      {/* Philosophy Statement */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="bg-gradient-to-br from-primary/5 to-accent/30 rounded-3xl p-8 lg:p-12 border border-primary/10">
              <h2 className="text-h3 text-heading mb-8 text-center">What makes us different</h2>
              
              <ul className="space-y-4">
                {differentiators.map((point, index) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-body-lg text-foreground">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-h2 text-heading mb-4">Built on core principles</h2>
            <p className="text-body-lg text-muted-foreground">
              These principles guide every product decision we make.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {corePrinciples.map((principle) => {
              const Icon = principle.icon;
              
              return (
                <StaggerItem key={principle.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="h-full bg-card rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-h4 text-heading mb-3">{principle.title}</h3>
                    <p className="text-body text-muted-foreground">{principle.description}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {trustIndicators.map((indicator, index) => {
                const Icon = indicator.icon;
                
                return (
                  <motion.div
                    key={indicator.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-h3 text-heading mb-1">{indicator.label}</div>
                    <p className="text-body-sm text-muted-foreground">{indicator.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-h2 text-heading mb-4">Ready to get started?</h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              Join thousands of businesses that trust Invoicemonk for their financial records.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 group">
                <a href="https://app.invoicemonk.com/signup">
                  Start with Invoicing
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default WhyInvoicemonk;
