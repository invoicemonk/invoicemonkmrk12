import { Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

const benefits = [
  {
    icon: Clock,
    title: 'Save Hours Every Week',
    description:
      'Stop chasing payments and manually tracking invoices. Automate reminders, recurring billing, and payment tracking.',
  },
  {
    icon: ShieldCheck,
    title: 'Audit-Ready Records',
    description:
      'Every transaction is logged with immutable timestamps. When auditors come calling, you\'re ready.',
  },
  {
    icon: Sparkles,
    title: 'Look Professional',
    description:
      'Send polished invoices that reflect your brand. Make a great impression and get paid faster.',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-h2 text-heading mb-4">
            Focus on your work, not paperwork
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Invoicemonk handles the details so you can focus on what you do best.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <StaggerItem key={benefit.title}>
                <div className="group text-center p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-card-hover hover:border-primary/20 transition-all duration-300">
                  <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-h4 text-heading mb-3">{benefit.title}</h3>
                  <p className="text-body text-muted-foreground">{benefit.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
