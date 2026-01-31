import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Building2, Users, BarChart3, Shield, FileText, Clock } from 'lucide-react';

const SmallBusinesses = () => {
  const benefits = [
    {
      icon: FileText,
      title: 'Streamlined Invoicing',
      description: 'Create, send, and track invoices for multiple clients effortlessly.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Add team members with role-based access to manage finances together.',
    },
    {
      icon: BarChart3,
      title: 'Business Insights',
      description: 'Get clear reports on revenue, outstanding payments, and cash flow.',
    },
    {
      icon: Shield,
      title: 'Compliance Built-In',
      description: 'Stay audit-ready with automatic compliance and record-keeping.',
    },
  ];

  const useCases = [
    {
      title: 'Retail & E-commerce',
      description: 'Manage inventory invoicing and track customer payments seamlessly.',
    },
    {
      title: 'Professional Services',
      description: 'Bill clients by the hour or project with detailed time tracking.',
    },
    {
      title: 'Agencies',
      description: 'Handle multiple clients and recurring retainer invoices easily.',
    },
    {
      title: 'Consulting',
      description: 'Create proposals and convert them to invoices with one click.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Building2 className="w-4 h-4" />
              For Small Businesses
            </span>
            <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-6">
              Financial tools that grow with your business
            </h1>
            <p className="text-body-lg text-muted-foreground mb-8">
              From invoicing to expense tracking, Invoicemonk gives small businesses 
              the financial infrastructure they need to operate professionally and scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/pricing">
                  View Business Plans
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">
            Built for growing businesses
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Everything you need to manage business finances professionally
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
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
            Perfect for all types of businesses
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
              Everything your business needs
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Unlimited invoices and clients',
                'Custom branding and templates',
                'Team member access controls',
                'Automated payment reminders',
                'Expense tracking and categorization',
                'Revenue and cash flow reports',
                'Multi-currency support',
                'Recurring invoice automation',
                'Client portal access',
                'Tax-compliant audit trails',
                'API access for integrations',
                'Priority customer support',
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

      {/* Stats */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50%</div>
              <p className="text-muted-foreground">Faster payment collection</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10hrs</div>
              <p className="text-muted-foreground">Saved per month on admin</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Audit-ready compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">
            Ready to streamline your business finances?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Join growing businesses that trust Invoicemonk for their financial operations.
          </p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SmallBusinesses;
