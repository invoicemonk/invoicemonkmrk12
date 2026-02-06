import { Layout } from '@/components/layout/Layout';
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { Shield, FileCheck, Clock, Lock } from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';
import { PageHero } from '@/components/shared/PageHero';
import { 
  FloatingSecurityBadge,
  FloatingLockBadge,
  FloatingImmutableStamp
} from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { pageSEO } from '@/components/seo/seoConfig';

const complianceFeatures = [
  { icon: Lock, title: 'Immutable Records', description: 'Once created, invoice records cannot be altered or deleted, ensuring complete data integrity for audits.' },
  { icon: Clock, title: 'Timestamped Logs', description: 'Every action is logged with precise timestamps, creating a complete chronological audit trail.' },
  { icon: FileCheck, title: 'Export-Ready Reports', description: 'Generate compliance reports in formats accepted by tax authorities and auditors worldwide.' },
  { icon: Shield, title: 'Regulatory Standards', description: 'Built to meet international invoicing and record-keeping requirements for small businesses.' },
];

const Compliance = () => {
  const { locale } = useLocale();
  const { compliance } = locale.content;
  const seo = pageSEO['/compliance'];

  return (
    <Layout>
      <SEOHead
        title={seo?.getTitle(locale) || 'Tax Compliance | Invoicemonk'}
        description={seo?.getDescription(locale) || 'Stay audit-ready with immutable records and comprehensive audit trails.'}
        canonical="https://invoicemonk.com/compliance"
      />
      {/* Hero Section */}
      <div className="relative">
        <PageHero
          badge={{ icon: Shield, text: `${compliance.authority}-Compliant` }}
          title="Built for audit-ready confidence"
          accentWord="audit-ready"
          description={`${compliance.message}. Invoicemonk maintains immutable records and comprehensive audit trails, so you're always prepared for regulatory review.`}
          primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: 'Learn More', href: '/why-invoicemonk', external: false }}
          trustBadge="Immutable records • Complete audit trails • Export-ready reports"
          backgroundVariant="mesh"
        />
        {/* Floating Elements */}
        <FloatingSecurityBadge 
          label="Audit Ready"
          className="absolute top-28 right-8 lg:right-20 hidden lg:block" 
          delay={0.4}
        />
        <FloatingLockBadge 
          className="absolute bottom-40 left-8 lg:left-16 hidden lg:block" 
          delay={0.6}
        />
        <FloatingImmutableStamp 
          className="absolute top-52 left-20 lg:left-36 hidden lg:block" 
          delay={0.8}
        />
      </div>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
