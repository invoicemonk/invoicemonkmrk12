import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, FileText, Download, Zap, Shield, CheckCircle } from 'lucide-react';

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
      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
              <CheckCircle className="w-4 h-4" />
              100% Free
            </span>
            <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-6">
              Free Invoice Generator
            </h1>
            <p className="text-body-lg text-muted-foreground mb-8">
              Create professional invoices in minutes. No signup required to get started. 
              Perfect for freelancers and small businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://app.invoicemonk.com" target="_blank" rel="noopener noreferrer">
                  Create Free Invoice
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/invoicing">
                  Learn About Full Platform
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

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
