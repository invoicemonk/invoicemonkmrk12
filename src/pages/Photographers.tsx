import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Camera, FileText, Clock, TrendingUp, Shield, Image } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { FloatingInvoiceCard, FloatingPaymentBadge, FloatingIcon } from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from 'react-router-dom';

const faqs = [
  { question: 'Can I create milestone-based invoices for photography projects?', answer: 'Yes. Create deposit invoices, progress payments, and final balance invoices for wedding, commercial, or event photography projects.' },
  { question: 'Does Invoicemonk support package-based pricing?', answer: 'Absolutely. Add line items for different packages (e.g., Basic, Premium, Deluxe) with clear descriptions and pricing.' },
  { question: 'Can I add my photography branding to invoices?', answer: 'Yes. Upload your logo, set brand colors, and create a professional look that matches your photography style.' },
  { question: 'How do automatic payment reminders work?', answer: 'Set reminder schedules and Invoicemonk automatically emails clients before and after payment due dates.' },
  { question: 'Is Invoicemonk free for photographers?', answer: 'Yes! The free tier includes unlimited invoices. Upgrade for advanced features like recurring billing and detailed reports.' },
];

const Photographers = () => {
  const benefits = [
    { icon: Image, title: 'Package & Session Billing', description: 'Invoice for photo packages, sessions, prints, and add-ons with detailed line items.' },
    { icon: Clock, title: 'Milestone Payments', description: 'Collect deposits upfront and balance on delivery. Perfect for weddings and events.' },
    { icon: FileText, title: 'Branded Invoices', description: 'Professional invoices that match your photography brand and impress clients.' },
    { icon: Shield, title: 'Tax-Ready Records', description: 'Track income and expenses for tax season. Export reports for your accountant.' },
  ];

  const testimonials = [
    { quote: "I used to dread invoicing after shoots. Now it takes 2 minutes. The deposit invoice feature is perfect for weddings.", author: "Funke A.", role: "Wedding Photographer" },
    { quote: "My clients love the professional invoices. It makes my small business look established and trustworthy.", author: "James K.", role: "Commercial Photographer" },
  ];

  return (
    <Layout>
      <SEOHead
        title="Invoice Software for Photographers | Invoicemonk"
        description="Create professional photography invoices with milestone payments, package billing, and branded templates. Perfect for wedding, event, and commercial photographers."
        canonical="https://invoicemonk.com/photographers"
      />
      <FAQSchema items={faqs} />

      <div className="relative">
        <PageHero
          badge={{ icon: Camera, text: 'For Photographers' }}
          title="Invoicing made simple for photographers"
          accentWord="photographers"
          description="Create deposit invoices, bill for photo packages, and get paid faster. Focus on capturing moments, not chasing payments."
          primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: 'View Pricing', href: '/pricing', external: false }}
          trustBadge="Trusted by professional photographers"
          backgroundVariant="gradient"
        />
        <FloatingInvoiceCard className="absolute top-32 right-8 lg:right-24 hidden lg:block" delay={0.4} variant="paid" />
        <FloatingPaymentBadge className="absolute top-48 left-8 lg:left-20 hidden lg:block" delay={0.6} />
        <FloatingIcon icon={Camera} className="absolute bottom-32 right-12 lg:right-32 hidden lg:block" delay={0.8} size="md" />
      </div>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">Built for photography professionals</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Everything you need to handle the business side of photography</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <Card key={i} className="border-border/50"><CardContent className="p-6"><div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4"><b.icon className="w-6 h-6 text-primary" /></div><h3 className="font-semibold text-foreground mb-2">{b.title}</h3><p className="text-sm text-muted-foreground">{b.description}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">What photographers get with Invoicemonk</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Unlimited professional invoices', 'Deposit & milestone billing', 'Package-based pricing', 'Custom branding & logo', 'Automatic payment reminders', 'Expense tracking', 'Income reports', 'Multi-currency support', 'Client management', 'Tax-compliant records'].map((item, i) => (
              <div key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-foreground">{item}</span></div>
            ))}
          </div>
        </div></div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">Trusted by photographers</h2>
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
            <Link to="/blog/invoice-design-branding-identity" className="text-primary hover:underline">Invoice Design & Branding</Link>
            <Link to="/blog/pricing-freelance-services" className="text-primary hover:underline">Pricing Your Services</Link>
            <Link to="/guides/getting-paid" className="text-primary hover:underline">Getting Paid Faster</Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Ready to simplify your photography billing?</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Join photographers who trust Invoicemonk for professional invoicing.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
};

export default Photographers;
