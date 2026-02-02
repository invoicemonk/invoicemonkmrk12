import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, FileText, Download, Zap, Shield, CheckCircle } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { 
  FloatingInvoiceCard,
  FloatingPDFBadge,
  FloatingIcon
} from '@/components/shared/FloatingElements';

const FreeInvoiceGenerator = () => {
  const features = [
    {
      icon: FileText,
      title: 'Professional Templates',
      description: 'Choose from beautifully designed invoice templates that look great.',
    },
    {
      icon: Zap,
      title: 'Quick & Easy',
      description: 'Create your first invoice in under 2 minutes. No learning curve.',
    },
    {
      icon: Download,
      title: 'PDF Download',
      description: 'Download your invoices as professional PDF files instantly.',
    },
    {
      icon: Shield,
      title: 'Compliance Ready',
      description: 'All invoices meet standard business and tax requirements.',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Enter your details',
      description: 'Add your business information and logo to personalize your invoices.',
    },
    {
      step: '02',
      title: 'Add line items',
      description: 'Enter the products or services you\'re billing for with quantities and rates.',
    },
    {
      step: '03',
      title: 'Send or download',
      description: 'Email directly to your client or download as a professional PDF.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative">
        <PageHero
          badge={{ icon: CheckCircle, text: '100% Free' }}
          title="Free Invoice Generator"
          accentWord="Free"
          description="Create professional invoices in minutes. No signup required to get started. Perfect for freelancers and small businesses."
          primaryCta={{ text: 'Create Free Invoice', href: 'https://app.invoicemonk.com' }}
          secondaryCta={{ text: 'Learn About Full Platform', href: '/invoicing', external: false }}
          trustBadge="No credit card required • No signup needed • Unlimited invoices"
          backgroundVariant="dots"
        />
        {/* Floating Elements */}
        <FloatingInvoiceCard 
          className="absolute top-28 right-8 lg:right-20 hidden lg:block" 
          delay={0.4}
        />
        <FloatingPDFBadge 
          className="absolute bottom-36 left-8 lg:left-16 hidden lg:block" 
          delay={0.6}
        />
        <FloatingIcon 
          icon={Zap}
          className="absolute top-52 left-16 lg:left-32 hidden lg:block" 
          delay={0.8}
          size="sm"
        />
      </div>

      {/* Features */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
            Everything you need to invoice professionally
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 text-center">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
            Create invoices in 3 simple steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-heading-sm font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrade CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto bg-primary">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-heading-lg font-bold text-white mb-4">
                Need more than just invoices?
              </h2>
              <p className="text-white/90 mb-6 max-w-xl mx-auto">
                Upgrade to the full Invoicemonk platform for recurring invoices, expense tracking, 
                payment reminders, compliance features, and more.
              </p>
              <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
                <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">
                  Get Started Free
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default FreeInvoiceGenerator;
