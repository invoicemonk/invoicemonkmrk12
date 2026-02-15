import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Calculator, Users, FileText, Shield, BarChart3, RefreshCw } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { FloatingInvoiceCard, FloatingChartCard, FloatingIcon } from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from 'react-router-dom';

const faqs = [
  { question: 'Can I manage invoicing for multiple clients as a bookkeeper?', answer: 'Yes. Invoicemonk lets you manage multiple client accounts, each with their own branding, payment terms, and reporting.' },
  { question: 'Does Invoicemonk integrate with accounting software?', answer: 'Invoicemonk includes built-in accounting features. Export data in standard formats for use with other accounting tools.' },
  { question: 'Can I set up recurring invoices for monthly retainer clients?', answer: 'Absolutely. Automate monthly billing for retainer clients with recurring invoice schedules.' },
  { question: 'How does Invoicemonk handle tax calculations?', answer: 'Set up tax rates per jurisdiction. Invoicemonk automatically calculates and displays taxes on every invoice.' },
  { question: 'Is there a free plan for solo accountants?', answer: 'Yes! Start free with unlimited invoices. Upgrade for team features and advanced reporting.' },
];

const Accountants = () => {
  const benefits = [
    { icon: Users, title: 'Multi-Client Management', description: 'Manage invoicing for multiple clients from a single dashboard with separate branding per client.' },
    { icon: RefreshCw, title: 'Recurring Billing', description: 'Set up automated monthly or quarterly invoices for retainer and advisory clients.' },
    { icon: BarChart3, title: 'Financial Reporting', description: 'Detailed income, expense, and receivable reports. Export for audits and client reviews.' },
    { icon: Shield, title: 'Tax Compliance', description: 'Automatic tax calculations, compliant invoice formats, and audit-ready record keeping.' },
  ];

  const testimonials = [
    { quote: "Managing invoicing for 20+ small business clients is effortless with Invoicemonk. The multi-client setup saves me hours.", author: "Grace T.", role: "Freelance Bookkeeper" },
    { quote: "The tax compliance features give me confidence that every invoice meets regulatory requirements.", author: "Samuel A.", role: "Chartered Accountant" },
  ];

  return (
    <Layout>
      <SEOHead
        title="Invoicing for Accountants & Bookkeepers | Invoicemonk"
        description="Multi-client invoicing and billing for accountants, bookkeepers, and accounting firms. Recurring billing, tax compliance, and detailed financial reporting."
        canonical="https://invoicemonk.com/accountants"
      />
      <FAQSchema items={faqs} />

      <div className="relative">
        <PageHero
          badge={{ icon: Calculator, text: 'For Accountants' }}
          title="Invoicing built for accounting professionals"
          accentWord="accounting"
          description="Manage multi-client billing, automate recurring invoices, and maintain tax-compliant records — all from one platform."
          primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: 'View Pricing', href: '/pricing', external: false }}
          trustBadge="Trusted by accountants and bookkeepers"
          backgroundVariant="gradient"
        />
        <FloatingChartCard className="absolute top-28 right-8 lg:right-20 hidden lg:block" delay={0.4} />
        <FloatingInvoiceCard className="absolute bottom-36 left-8 lg:left-16 hidden lg:block" delay={0.6} variant="paid" />
        <FloatingIcon icon={Calculator} className="absolute top-48 left-12 lg:left-32 hidden lg:block" delay={0.8} size="md" />
      </div>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">Built for accounting workflows</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Tools designed for the way accountants and bookkeepers actually work</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <Card key={i} className="border-border/50"><CardContent className="p-6"><div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4"><b.icon className="w-6 h-6 text-primary" /></div><h3 className="font-semibold text-foreground mb-2">{b.title}</h3><p className="text-sm text-muted-foreground">{b.description}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">What accountants get with Invoicemonk</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Multi-client management', 'Recurring monthly billing', 'Automatic tax calculations', 'Detailed financial reports', 'Custom branding per client', 'Payment tracking dashboard', 'Expense categorization', 'Audit-ready records', 'Multi-currency support', 'Export to accounting formats'].map((item, i) => (
              <div key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-foreground">{item}</span></div>
            ))}
          </div>
        </div></div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">Trusted by accounting professionals</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <Card key={i} className="border-border/50"><CardContent className="p-8"><p className="text-foreground mb-6 italic">"{t.quote}"</p><div><p className="font-semibold text-foreground">{t.author}</p><p className="text-sm text-muted-foreground">{t.role}</p></div></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Frequently asked questions</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i}><h3 className="font-semibold text-foreground mb-2">{faq.question}</h3><p className="text-muted-foreground">{faq.answer}</p></div>))}</div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-4">Related reading</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/blog/small-business-accounting-basics" className="text-primary hover:underline">Accounting Basics</Link>
            <Link to="/blog/financial-reports-guide" className="text-primary hover:underline">Financial Reports Guide</Link>
            <Link to="/guides/tax-compliance" className="text-primary hover:underline">Tax Compliance Guide</Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Ready to streamline your accounting practice?</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Join accountants and bookkeepers who trust Invoicemonk.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
};

export default Accountants;
