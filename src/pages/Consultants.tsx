import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Briefcase, Globe, BarChart3, Shield, Users } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { 
  FloatingInvoiceCard,
  FloatingChartCard,
  FloatingIcon
} from '@/components/shared/FloatingElements';

const Consultants = () => {
  const benefits = [
    {
      icon: Briefcase,
      title: 'Enterprise-Ready Invoices',
      description: 'Professional invoices that meet corporate procurement standards.',
    },
    {
      icon: Globe,
      title: 'Multi-Currency Billing',
      description: 'Invoice international clients in their preferred currency.',
    },
    {
      icon: BarChart3,
      title: 'Detailed Reporting',
      description: 'Generate reports for client presentations and financial reviews.',
    },
    {
      icon: Shield,
      title: 'Compliance Built-In',
      description: 'Stay compliant with tax requirements your enterprise clients expect.',
    },
  ];

  const testimonials = [
    {
      quote: "My corporate clients are impressed with the professional invoices. The compliance features give them confidence in working with me.",
      author: "Tunde A.",
      role: "Management Consultant",
    },
    {
      quote: "Managing retainer clients and project-based billing is seamless. I can focus on delivering value instead of chasing payments.",
      author: "Amaka E.",
      role: "Strategy Consultant",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative">
        <PageHero
          badge={{ icon: Users, text: 'For Consultants' }}
          title="Professional invoicing for consultants"
          accentWord="consultants"
          description="Impress enterprise clients with professional, compliant invoices. Manage retainers, project billing, and international payments with ease."
          primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: 'View Pricing', href: '/pricing', external: false }}
          trustBadge="Trusted by management consultants and strategy firms"
          backgroundVariant="gradient"
        />
        {/* Floating Elements */}
        <FloatingChartCard 
          className="absolute top-28 right-8 lg:right-20 hidden lg:block" 
          delay={0.4}
        />
        <FloatingInvoiceCard 
          className="absolute bottom-36 left-8 lg:left-16 hidden lg:block" 
          delay={0.6}
          variant="pending"
        />
        <FloatingIcon 
          icon={Globe}
          className="absolute top-48 left-12 lg:left-32 hidden lg:block" 
          delay={0.8}
          size="md"
        />
      </div>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">
            Built for consulting professionals
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Everything you need to manage client billing at the enterprise level
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
              What consultants get with Invoicemonk
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Professional branded invoices',
                'Retainer invoice management',
                'Project-based billing',
                'Multi-currency support',
                'Automatic payment reminders',
                'Detailed financial reports',
                'Time tracking integration',
                'Client portal access',
                'Recurring invoices',
                'Tax-compliant records',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
            Trusted by consultants
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-8">
                  <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">
            Ready to elevate your consulting practice?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Join consultants who trust Invoicemonk for professional invoicing.
          </p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">
              Get Started Free
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Consultants;
