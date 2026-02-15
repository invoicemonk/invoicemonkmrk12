import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, ShoppingCart, Globe, FileText, Shield, Package, RefreshCw } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { FloatingInvoiceCard, FloatingPaymentBadge, FloatingIcon } from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from 'react-router-dom';

const faqs = [
  { question: 'Can I create bulk invoices for wholesale orders?', answer: 'Yes. Create invoices with multiple line items, quantity pricing, and wholesale discounts for B2B orders.' },
  { question: 'Does Invoicemonk support multi-currency for international e-commerce?', answer: 'Absolutely. Invoice international buyers in their preferred currency with automatic conversion.' },
  { question: 'Can I set up recurring invoices for subscription products?', answer: 'Yes. Automate recurring billing for subscription boxes, memberships, or regular supply orders.' },
  { question: 'How does Invoicemonk handle shipping and tax on invoices?', answer: 'Add shipping as a line item and configure tax rates per region. Everything is calculated automatically.' },
  { question: 'Is there a free plan for small e-commerce sellers?', answer: 'Yes! Start free with unlimited invoices. Perfect for sellers just starting out.' },
];

const Ecommerce = () => {
  const benefits = [
    { icon: Package, title: 'Order-Based Invoicing', description: 'Create invoices for individual orders or bulk wholesale purchases with itemized line items.' },
    { icon: Globe, title: 'Multi-Currency Billing', description: 'Sell globally and invoice buyers in their local currency. Perfect for cross-border e-commerce.' },
    { icon: RefreshCw, title: 'Subscription Billing', description: 'Automate recurring invoices for subscription products and repeat customers.' },
    { icon: Shield, title: 'Tax Compliance', description: 'Automatic tax calculations for different regions. Stay compliant as you sell across borders.' },
  ];

  const testimonials = [
    { quote: "I sell handmade products on multiple platforms. Invoicemonk helps me manage B2B wholesale invoicing professionally.", author: "Blessing I.", role: "E-commerce Seller" },
    { quote: "The multi-currency feature is essential for my dropshipping business. International clients get invoices in their currency.", author: "Ola P.", role: "Online Retailer" },
  ];

  return (
    <Layout>
      <SEOHead
        title="Invoicing for E-commerce Sellers | Invoicemonk"
        description="Professional invoicing for e-commerce businesses. B2B wholesale billing, multi-currency invoicing, and subscription billing for online sellers."
        canonical="https://invoicemonk.com/ecommerce"
      />
      <FAQSchema items={faqs} />

      <div className="relative">
        <PageHero
          badge={{ icon: ShoppingCart, text: 'For E-commerce' }}
          title="Invoicing built for e-commerce sellers"
          accentWord="e-commerce"
          description="Create professional invoices for B2B orders, wholesale buyers, and subscription products. Manage multi-currency billing with ease."
          primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: 'View Pricing', href: '/pricing', external: false }}
          trustBadge="Trusted by online sellers and e-commerce businesses"
          backgroundVariant="gradient"
        />
        <FloatingInvoiceCard className="absolute top-32 right-8 lg:right-24 hidden lg:block" delay={0.4} variant="paid" />
        <FloatingPaymentBadge className="absolute top-48 left-8 lg:left-20 hidden lg:block" delay={0.6} />
        <FloatingIcon icon={ShoppingCart} className="absolute bottom-32 right-12 lg:right-32 hidden lg:block" delay={0.8} size="md" />
      </div>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-4">Built for online sellers</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Everything you need to invoice customers and manage your e-commerce finances</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <Card key={i} className="border-border/50"><CardContent className="p-6"><div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4"><b.icon className="w-6 h-6 text-primary" /></div><h3 className="font-semibold text-foreground mb-2">{b.title}</h3><p className="text-sm text-muted-foreground">{b.description}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">What e-commerce sellers get with Invoicemonk</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Unlimited professional invoices', 'B2B wholesale invoicing', 'Multi-currency support', 'Subscription billing', 'Automatic payment reminders', 'Shipping & tax line items', 'Customer management', 'Expense tracking', 'Revenue reports', 'Tax-compliant records'].map((item, i) => (
              <div key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-foreground">{item}</span></div>
            ))}
          </div>
        </div></div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">Trusted by e-commerce sellers</h2>
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
            <Link to="/blog/recurring-invoices-complete-guide" className="text-primary hover:underline">Recurring Invoices Guide</Link>
            <Link to="/blog/international-payment-fees-hidden-costs" className="text-primary hover:underline">International Payment Fees</Link>
            <Link to="/guides/invoicing" className="text-primary hover:underline">Invoicing Guide</Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Ready to professionalize your e-commerce billing?</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Join e-commerce sellers who trust Invoicemonk for their invoicing needs.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
};

export default Ecommerce;
