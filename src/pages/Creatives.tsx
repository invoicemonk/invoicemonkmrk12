import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Palette, Clock, FileText, Shield, Sparkles, Layers } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { FloatingInvoiceCard, FloatingPaymentBadge, FloatingIcon } from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from 'react-router-dom';

const faqs = [
  { question: 'Can I invoice for different creative services on one invoice?', answer: 'Yes. Add multiple line items for design, illustration, copywriting, video editing, or any creative service on a single invoice.' },
  { question: 'Does Invoicemonk support project-based and hourly billing?', answer: 'Absolutely. Bill per project with flat rates, or track hours and bill based on time spent. Mix both on a single invoice.' },
  { question: 'Can I add my creative branding to invoices?', answer: 'Yes. Upload your logo, choose brand colors, and create invoices that reflect your creative identity.' },
  { question: 'How do deposit invoices work for creative projects?', answer: 'Create a deposit invoice for upfront payment, then a final invoice for the balance upon project completion.' },
  { question: 'Is there a free plan for creative freelancers?', answer: 'Yes! Start free with unlimited invoices. No credit card required.' },
];

const Creatives = () => {
  const benefits = [
    { icon: Sparkles, title: 'Project-Based Billing', description: 'Invoice per project with deposits, milestones, and final payments. Perfect for design and creative work.' },
    { icon: Clock, title: 'Hourly & Flat Rate', description: 'Bill by the hour or per project. Mix both billing types on a single invoice.' },
    { icon: Palette, title: 'On-Brand Invoices', description: 'Create invoices that look as good as your creative work. Custom branding and professional templates.' },
    { icon: Shield, title: 'Financial Clarity', description: "Track income across clients and projects. Know exactly what you're earning and what's outstanding." },
  ];

  const testimonials = [
    { quote: "As a graphic designer, my invoices need to look professional. Invoicemonk lets me create branded invoices in seconds.", author: "Yemi D.", role: "Graphic Designer" },
    { quote: "I juggle multiple creative projects. The project-based invoicing and payment tracking keep everything organized.", author: "Tola F.", role: "Freelance Illustrator" },
  ];

  return (
    <Layout>
      <SEOHead
        title="Invoicing for Creatives & Designers | Invoicemonk"
        description="Professional invoicing for graphic designers, illustrators, videographers, and creative freelancers. Project billing, branded invoices, and payment tracking."
        canonical="https://invoicemonk.com/creatives"
      />
      <FAQSchema items={faqs} />

      <div className="relative">
        <PageHero
          badge={{ icon: Palette, text: 'For Creatives' }}
          title="Invoicing as creative as your work"
          accentWord="creative"
          description="Beautiful, branded invoices for designers, illustrators, and creative professionals. Bill per project, track payments, and focus on your craft."
          primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: 'View Pricing', href: '/pricing', external: false }}
          trustBadge="Trusted by designers and creative professionals"
          backgroundVariant="gradient"
        />
        <FloatingInvoiceCard className="absolute top-32 right-8 lg:right-24 hidden lg:block" delay={0.4} variant="paid" />
        <FloatingPaymentBadge className="absolute top-48 left-8 lg:left-20 hidden lg:block" delay={0.6} />
        <FloatingIcon icon={Palette} className="absolute bottom-32 right-12 lg:right-32 hidden lg:block" delay={0.8} size="md" />
      </div>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">Built for creative professionals</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Spend less time on paperwork, more time creating</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <Card key={i} className="border-border/50"><CardContent className="p-6"><div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4"><b.icon className="w-6 h-6 text-primary" /></div><h3 className="font-semibold text-foreground mb-2">{b.title}</h3><p className="text-sm text-muted-foreground">{b.description}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">What creatives get with Invoicemonk</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Unlimited professional invoices', 'Project-based billing', 'Deposit & milestone invoicing', 'Custom branding & logo', 'Hourly and flat-rate billing', 'Automatic payment reminders', 'Expense tracking', 'Client management', 'Income reports', 'Tax-compliant records'].map((item, i) => (
              <div key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-foreground">{item}</span></div>
            ))}
          </div>
        </div></div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">Trusted by creatives</h2>
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
            <Link to="/blog/graphic-designer-career-guide" className="text-primary hover:underline">Graphic Designer Career Guide</Link>
            <Link to="/blog/pricing-freelance-services" className="text-primary hover:underline">Pricing Your Services</Link>
            <Link to="/blog/freelance-portfolio-guide" className="text-primary hover:underline">Portfolio Guide</Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Ready to level up your creative business?</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Join creative professionals who trust Invoicemonk for their invoicing.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
};

export default Creatives;
