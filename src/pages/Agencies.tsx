import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Users, Layers, Clock, BarChart3, Shield, RefreshCw } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { FloatingInvoiceCard, FloatingChartCard, FloatingIcon } from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from 'react-router-dom';

const faqs = [
  { question: 'Can Invoicemonk handle retainer billing for agencies?', answer: 'Yes. Set up recurring invoices for retainer clients with automatic scheduling, so you never miss a billing cycle.' },
  { question: 'Does Invoicemonk support multiple team members?', answer: 'Invoicemonk supports multi-user access so your project managers and finance team can collaborate on invoicing.' },
  { question: 'Can I invoice different clients in different currencies?', answer: 'Absolutely. Invoicemonk supports multi-currency invoicing, perfect for agencies with international clients.' },
  { question: 'How does Invoicemonk help agencies track project profitability?', answer: 'With expense tracking and detailed financial reports, you can see revenue vs. costs per client or project.' },
  { question: 'Is there a free plan for agencies?', answer: 'Yes! Invoicemonk offers a free tier that lets you send unlimited invoices. Upgrade as your agency grows.' },
];

const Agencies = () => {
  const benefits = [
    { icon: Layers, title: 'Multi-Project Billing', description: 'Manage invoices across multiple clients and projects from a single dashboard.' },
    { icon: RefreshCw, title: 'Retainer Invoicing', description: 'Automate recurring invoices for retainer clients. Set it and forget it.' },
    { icon: BarChart3, title: 'Revenue Reporting', description: 'Track revenue per client, project profitability, and outstanding payments at a glance.' },
    { icon: Shield, title: 'Professional Branding', description: 'White-label invoices with your agency logo, colors, and custom payment terms.' },
  ];

  const testimonials = [
    { quote: "We manage 30+ retainer clients. Invoicemonk's recurring invoices save us hours every month.", author: "Kemi B.", role: "Operations Manager, Digital Agency" },
    { quote: "The multi-currency support is a game changer for our international client base.", author: "David L.", role: "Creative Director" },
  ];

  return (
    <Layout>
      <SEOHead
        title="Invoicing Software for Agencies | Invoicemonk"
        description="Streamline agency billing with retainer invoicing, multi-project tracking, and branded invoices. Built for digital, creative, and marketing agencies."
        canonical="https://invoicemonk.com/agencies"
      />
      <FAQSchema items={faqs} />

      <div className="relative">
        <PageHero
          badge={{ icon: Users, text: 'For Agencies' }}
          title="Invoicing built for growing agencies"
          accentWord="agencies"
          description="Manage retainer billing, project invoices, and multi-currency payments from one platform. Spend less time on admin, more time winning clients."
          primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: 'View Pricing', href: '/pricing', external: false }}
          trustBadge="Trusted by digital and creative agencies"
          backgroundVariant="gradient"
        />
        <FloatingChartCard className="absolute top-28 right-8 lg:right-20 hidden lg:block" delay={0.4} />
        <FloatingInvoiceCard className="absolute bottom-36 left-8 lg:left-16 hidden lg:block" delay={0.6} variant="pending" />
        <FloatingIcon icon={Layers} className="absolute top-48 left-12 lg:left-32 hidden lg:block" delay={0.8} size="md" />
      </div>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">Built for agency workflows</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Everything you need to bill clients professionally and get paid on time</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4"><b.icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">What agencies get with Invoicemonk</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {['Unlimited professional invoices', 'Recurring retainer billing', 'Multi-project dashboard', 'Custom branding & logo', 'Multi-currency support', 'Automatic payment reminders', 'Expense tracking per project', 'Client management portal', 'Detailed revenue reports', 'Tax-compliant records'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">Trusted by agencies</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-8">
                  <p className="text-foreground mb-6 italic">"{t.quote}"</p>
                  <div><p className="font-semibold text-foreground">{t.author}</p><p className="text-sm text-muted-foreground">{t.role}</p></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i}><h3 className="font-semibold text-foreground mb-2">{faq.question}</h3><p className="text-muted-foreground">{faq.answer}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-4">Related reading</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/blog/recurring-invoices-complete-guide" className="text-primary hover:underline">Recurring Invoices Guide</Link>
            <Link to="/blog/managing-clients-effectively" className="text-primary hover:underline">Client Management Tips</Link>
            <Link to="/guides/getting-paid" className="text-primary hover:underline">Getting Paid Faster</Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Ready to streamline your agency billing?</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Join agencies that trust Invoicemonk for professional invoicing.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Agencies;
