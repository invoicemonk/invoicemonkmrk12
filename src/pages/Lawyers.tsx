import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Scale, Clock, FileText, Shield, BarChart3, Briefcase } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { FloatingInvoiceCard, FloatingChartCard, FloatingIcon } from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from 'react-router-dom';

const faqs = [
  { question: 'Can Invoicemonk handle hourly billing for lawyers?', answer: 'Yes. Track billable hours per client and matter, then generate detailed invoices showing time entries, rates, and descriptions.' },
  { question: 'Does Invoicemonk support trust account billing?', answer: 'You can create invoices that reference trust account balances and track retainer drawdowns for compliance.' },
  { question: 'Can I generate LEDES-format invoices?', answer: 'Invoicemonk produces detailed, itemized invoices suitable for corporate clients. Contact us for LEDES-specific formatting needs.' },
  { question: 'How does Invoicemonk help with compliance?', answer: 'All invoices include required tax information, are stored securely, and can be exported for audit purposes.' },
  { question: 'Is there a free plan for solo practitioners?', answer: 'Yes! Solo lawyers can start free with unlimited invoices. Upgrade as your practice grows.' },
];

const Lawyers = () => {
  const benefits = [
    { icon: Clock, title: 'Time-Based Billing', description: 'Track billable hours per client and matter. Generate itemized invoices automatically.' },
    { icon: Briefcase, title: 'Retainer Management', description: 'Bill against retainers, track balances, and send automatic replenishment invoices.' },
    { icon: FileText, title: 'Detailed Invoices', description: 'Itemized billing statements that meet corporate and institutional client requirements.' },
    { icon: Shield, title: 'Compliance & Security', description: 'Secure record-keeping with audit trails. Tax-compliant invoicing for legal practices.' },
  ];

  const testimonials = [
    { quote: "The time-based billing and retainer tracking have saved my practice countless hours. My corporate clients appreciate the detailed statements.", author: "Aisha M.", role: "Corporate Lawyer" },
    { quote: "As a solo practitioner, I needed something simple yet professional. Invoicemonk delivers on both.", author: "Emeka O.", role: "Family Law Attorney" },
  ];

  return (
    <Layout>
      <SEOHead
        title="Legal Billing Software for Lawyers | Invoicemonk"
        description="Professional legal billing with time tracking, retainer management, and detailed invoicing. Built for law firms, solo practitioners, and legal consultants."
        canonical="https://invoicemonk.com/lawyers"
      />
      <FAQSchema items={faqs} />

      <div className="relative">
        <PageHero
          badge={{ icon: Scale, text: 'For Lawyers' }}
          title="Professional billing for legal practices"
          accentWord="legal"
          description="Track billable hours, manage retainers, and send detailed invoices that meet your clients' procurement standards."
          primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: 'View Pricing', href: '/pricing', external: false }}
          trustBadge="Trusted by law firms and solo practitioners"
          backgroundVariant="gradient"
        />
        <FloatingChartCard className="absolute top-28 right-8 lg:right-20 hidden lg:block" delay={0.4} />
        <FloatingInvoiceCard className="absolute bottom-36 left-8 lg:left-16 hidden lg:block" delay={0.6} variant="pending" />
        <FloatingIcon icon={Scale} className="absolute top-48 left-12 lg:left-32 hidden lg:block" delay={0.8} size="md" />
      </div>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">Built for legal professionals</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Billing features designed for the unique needs of legal practices</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <Card key={i} className="border-border/50"><CardContent className="p-6"><div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4"><b.icon className="w-6 h-6 text-primary" /></div><h3 className="font-semibold text-foreground mb-2">{b.title}</h3><p className="text-sm text-muted-foreground">{b.description}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">What lawyers get with Invoicemonk</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Time-based hourly billing', 'Retainer management', 'Matter-based tracking', 'Detailed billing statements', 'Automatic payment reminders', 'Expense tracking per case', 'Professional branding', 'Multi-currency support', 'Secure document storage', 'Tax-compliant records'].map((item, i) => (
              <div key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-foreground">{item}</span></div>
            ))}
          </div>
        </div></div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">Trusted by legal professionals</h2>
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
            <Link to="/blog/time-tracking-invoicing" className="text-primary hover:underline">Time Tracking & Invoicing</Link>
            <Link to="/blog/invoice-payment-terms-guide" className="text-primary hover:underline">Payment Terms Guide</Link>
            <Link to="/guides/getting-paid" className="text-primary hover:underline">Getting Paid Faster</Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Ready to modernize your legal billing?</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Join legal professionals who trust Invoicemonk for compliant, professional invoicing.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
};

export default Lawyers;
