import { motion } from 'framer-motion';
import { Shield, TrendingUp, Layers, Lock } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

const benefits = [
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

export function WhyInvoicemonkSection() {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-3 py-1 text-caption font-medium rounded-full bg-primary/10 text-primary mb-4">
            Why Invoicemonk
          </span>
          <h2 className="text-h2 text-heading mb-4">
            A financial records system, not just an invoicing app
          </h2>
          <p className="text-body-lg text-muted-foreground">
            We built Invoicemonk with compliance at its core — because your financial records 
            should inspire confidence, not concern.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            
            return (
              <StaggerItem key={benefit.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="h-full bg-background rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-h4 text-heading mb-3">{benefit.title}</h3>
                  <p className="text-body text-muted-foreground">{benefit.description}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
