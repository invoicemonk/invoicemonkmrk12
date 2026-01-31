import { Layout } from '@/components/layout/Layout';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { Shield, FileCheck, Clock, Lock } from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';

const complianceFeatures = [
  { icon: Lock, title: 'Immutable Records', description: 'Once created, invoice records cannot be altered or deleted, ensuring complete data integrity for audits.' },
  { icon: Clock, title: 'Timestamped Logs', description: 'Every action is logged with precise timestamps, creating a complete chronological audit trail.' },
  { icon: FileCheck, title: 'Export-Ready Reports', description: 'Generate compliance reports in formats accepted by tax authorities and auditors worldwide.' },
  { icon: Shield, title: 'Regulatory Standards', description: 'Built to meet international invoicing and record-keeping requirements for small businesses.' },
];

const Compliance = () => {
  const { locale } = useLocale();
  const { compliance } = locale.content;

  return (
    <Layout>
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-caption font-medium rounded-full bg-primary/10 text-primary mb-4">
              {compliance.authority}-Compliant
            </span>
            <h1 className="text-h1 text-heading mb-4">Built for Audit-Ready Confidence</h1>
            <p className="text-body-lg text-muted-foreground">
              {compliance.message}. Invoicemonk maintains immutable records and comprehensive audit trails, 
              so you're always prepared for regulatory review.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {complianceFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <StaggerItem key={feature.title}>
                  <div className="group h-full bg-card rounded-2xl p-8 border border-border hover:shadow-card-hover transition-all">
                    <div className="w-14 h-14 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-h3 text-heading mb-3">{feature.title}</h3>
                    <p className="text-body text-muted-foreground">{feature.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </Layout>
  );
};

export default Compliance;
