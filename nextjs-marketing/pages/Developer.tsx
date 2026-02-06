import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Code, Webhook, Shield, Zap, BookOpen, Terminal } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { 
  FloatingTerminal, 
  FloatingEndpointBadge,
  FloatingIcon
} from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { pageSEO } from '@/components/seo/seoConfig';

const Developer = () => {
  const features = [
    {
      icon: Code,
      title: 'RESTful API',
      description: 'Full-featured REST API to create, manage, and retrieve invoices programmatically.',
    },
    {
      icon: Webhook,
      title: 'Webhooks',
      description: 'Real-time notifications for invoice events, payments, and status changes.',
    },
    {
      icon: Shield,
      title: 'Secure by Design',
      description: 'OAuth 2.0 authentication, API keys with scopes, and encrypted data transfer.',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Fast response times with 99.9% uptime SLA for business-critical integrations.',
    },
  ];

  const endpoints = [
    { method: 'POST', path: '/v1/invoices', description: 'Create a new invoice' },
    { method: 'GET', path: '/v1/invoices/:id', description: 'Retrieve an invoice' },
    { method: 'PUT', path: '/v1/invoices/:id', description: 'Update an invoice' },
    { method: 'POST', path: '/v1/invoices/:id/send', description: 'Send invoice to client' },
    { method: 'GET', path: '/v1/clients', description: 'List all clients' },
    { method: 'POST', path: '/v1/expenses', description: 'Record an expense' },
  ];

  const seo = pageSEO['/developer'];

  return (
    <Layout>
      <SEOHead
        title={seo?.getTitle({} as any) || 'Developer API | Invoicemonk'}
        description={seo?.getDescription({} as any) || 'Integrate Invoicemonk into your applications with our developer API. Full documentation and SDKs available.'}
        canonical="https://invoicemonk.com/developer"
      />
      {/* Hero Section */}
      <div className="relative">
        <PageHero
          badge={{ icon: Terminal, text: 'Developer API' }}
          title="Build with Invoicemonk"
          accentWord="Invoicemonk"
          description="Integrate invoicing, expenses, and financial data directly into your applications. Our API makes it easy to build powerful financial workflows."
          primaryCta={{ text: 'View Documentation', href: 'https://docs.invoicemonk.com' }}
          secondaryCta={{ text: 'Get API Keys', href: 'https://app.invoicemonk.com/signup' }}
          trustBadge="99.9% uptime SLA • RESTful API • Webhooks"
          backgroundVariant="mesh"
        />
        {/* Floating Elements */}
        <FloatingTerminal 
          className="absolute top-28 right-8 lg:right-20 hidden lg:block" 
          delay={0.4}
        />
        <FloatingEndpointBadge 
          method="POST"
          path="/v1/invoices"
          className="absolute bottom-40 left-8 lg:left-16 hidden lg:block" 
          delay={0.6}
        />
        <FloatingIcon 
          icon={Code}
          className="absolute top-44 left-12 lg:left-28 hidden lg:block" 
          delay={0.8}
          size="sm"
        />
      </div>

      {/* Features */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
            Developer-friendly by design
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50">
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

      {/* API Preview */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">
              Simple, intuitive API
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              RESTful endpoints that are easy to understand and integrate
            </p>
            
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-card border-b border-border px-6 py-3">
                  <span className="text-sm font-medium text-foreground">Sample Endpoints</span>
                </div>
                <div className="divide-y divide-border">
                  {endpoints.map((endpoint, index) => (
                    <div key={index} className="flex items-center gap-4 px-6 py-3">
                      <span className={`px-2 py-1 text-xs font-mono font-medium rounded ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-700' :
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-sm font-mono text-foreground">{endpoint.path}</code>
                      <span className="text-sm text-muted-foreground ml-auto hidden sm:block">
                        {endpoint.description}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
              Get started in minutes
            </h2>
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-slate-900 text-slate-100 p-6 overflow-x-auto">
                  <pre className="text-sm font-mono">
{`// Create an invoice with the Invoicemonk API
const response = await fetch('https://api.invoicemonk.com/v1/invoices', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    client_id: 'cli_123',
    items: [
      { description: 'Web Development', quantity: 10, rate: 150 }
    ],
    due_date: '2025-02-28'
  })
});

const invoice = await response.json();
console.log('Invoice created:', invoice.id);`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
            Developer Resources
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="border-border/50">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Documentation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive guides and API reference
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://docs.invoicemonk.com" target="_blank" rel="noopener noreferrer">
                    Read Docs
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border/50">
              <CardContent className="p-6 text-center">
                <Code className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">SDKs</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Client libraries for popular languages
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/invoicemonk" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border/50">
              <CardContent className="p-6 text-center">
                <Terminal className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">API Status</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Real-time API health and uptime
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://status.invoicemonk.com" target="_blank" rel="noopener noreferrer">
                    Check Status
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">
            Ready to integrate?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Sign up for free API access and start building with Invoicemonk today.
          </p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">
              Get Your API Keys
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Developer;
