import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, HardHat, Smartphone, Receipt, FolderOpen, Shield } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { 
  FloatingMobileDevice,
  FloatingInvoiceCard,
  FloatingIcon
} from '@/components/shared/FloatingElements';

const Contractors = () => {
  const benefits = [
    {
      icon: FolderOpen,
      title: 'Multi-Project Management',
      description: 'Track invoices and expenses across multiple clients and job sites.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Invoicing',
      description: 'Create and send invoices from the job site using your phone.',
    },
    {
      icon: Receipt,
      title: 'Material Cost Tracking',
      description: 'Track materials, labor, and expenses for accurate job costing.',
    },
    {
      icon: Shield,
      title: 'Tax-Ready Records',
      description: 'Keep compliant records that make tax season stress-free.',
    },
  ];

  const testimonials = [
    {
      quote: "I can invoice clients right from the job site. No more waiting until I get back to the office to send invoices.",
      author: "Emeka O.",
      role: "Electrical Contractor",
    },
    {
      quote: "Tracking expenses per project has helped me understand my true costs. I'm pricing jobs more accurately now.",
      author: "Kola B.",
      role: "Building Contractor",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative">
        <PageHero
          badge={{ icon: HardHat, text: 'For Contractors' }}
          title="Invoicing built for contractors"
          accentWord="contractors"
          description="Manage multiple projects, track job expenses, and invoice clients from anywhere. Built for contractors who work on-site and on-the-go."
          primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: 'View Pricing', href: '/pricing', external: false }}
          trustBadge="Trusted by electrical, building, and trade contractors"
          backgroundVariant="gradient"
        />
        {/* Floating Elements */}
        <FloatingMobileDevice 
          className="absolute top-28 right-8 lg:right-20 hidden lg:block" 
          delay={0.4}
        />
        <FloatingInvoiceCard 
          className="absolute bottom-36 left-8 lg:left-16 hidden lg:block" 
          delay={0.6}
          variant="pending"
        />
        <FloatingIcon 
          icon={Receipt}
          className="absolute top-52 left-12 lg:left-32 hidden lg:block" 
          delay={0.8}
          size="md"
        />
      </div>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">
            Built for trades and construction
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Everything you need to manage finances across multiple job sites
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

      {/* Use Cases */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
              What contractors get with Invoicemonk
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Progress billing & milestones',
                'Job-based expense tracking',
                'Material cost management',
                'Multi-client organization',
                'Mobile invoicing',
                'Automatic payment reminders',
                'Photo attachments for jobs',
                'Deposit & retainer invoices',
                'Labor hour tracking',
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
            Trusted by contractors
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
            Ready to simplify your contracting business?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Join contractors who trust Invoicemonk to manage their invoicing and expenses.
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

export default Contractors;
