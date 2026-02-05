import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CreditCard, ArrowRight, Banknote, RefreshCw, BarChart3, Shield, Check, Zap, Clock, Globe } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { WaveFeatureBanner } from '@/components/ui/WaveFeatureBanner';
import { WaveTabbedFeature } from '@/components/home/WaveTabbedFeature';
import { WaveHowItWorks } from '@/components/home/WaveHowItWorks';
import { WaveFeaturedTestimonial } from '@/components/home/WaveFeaturedTestimonial';
import { WaveBlogPreview } from '@/components/home/WaveBlogPreview';
import { WaveProductFAQ } from '@/components/home/WaveProductFAQ';
import { WaveCTASection } from '@/components/home/WaveCTASection';
import { useLocale } from '@/hooks/useLocale';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { SEOHead } from '@/components/seo/SEOHead';

const paymentTabbedFeatures = [
  {
    label: 'Payment Methods',
    title: 'Accept the way your clients want to pay',
    description: 'Credit cards, bank transfers, digital wallets — offer all the options your clients expect.',
  },
  {
    label: 'Security',
    title: 'Bank-level payment security',
    description: 'PCI-compliant processing, encrypted transactions, and fraud protection built in.',
  },
  {
    label: 'Reconciliation',
    title: 'Automatic payment matching',
    description: 'Payments are matched to invoices automatically. Your books stay accurate without any effort.',
  },
];

const featureBlocks = [
  {
    icon: Zap,
    title: 'Faster payments, better cash flow',
    description: 'Clients can pay instantly with a single click. No more waiting for checks or bank transfers.',
  },
  {
    icon: Globe,
    title: 'Your customers want to pay online',
    description: 'Meet your clients where they are. Accept all major credit cards, bank transfers, and digital wallets.',
  },
  {
    icon: Clock,
    title: 'Never lose track of payments',
    description: 'Every payment is automatically matched to its invoice. Complete visibility into your cash flow.',
  },
];

const bannerFeatures = [
  'Accept all major cards',
  'Bank transfers & ACH',
  'Payment plans & installments',
  'Automatic reconciliation',
];

const howItWorksSteps = [
  {
    number: 1,
    title: 'Send your invoice',
    description: 'Create and send professional invoices with built-in payment links.',
  },
  {
    number: 2,
    title: 'Client pays online',
    description: 'Your client clicks the payment link and pays securely with their preferred method.',
  },
  {
    number: 3,
    title: 'Money arrives fast',
    description: 'Funds are deposited directly to your bank account, usually within 1-2 business days.',
  },
];

const paymentsFAQs = [
  {
    question: 'What payment methods can I accept?',
    answer: 'When our payments feature launches, you\'ll be able to accept all major credit cards (Visa, Mastercard, American Express), debit cards, bank transfers (ACH in the US), and popular digital wallets.',
  },
  {
    question: 'What are the processing fees?',
    answer: 'We offer competitive processing rates. Card payments are typically 2.9% + a small fixed fee. Bank transfers have even lower fees. Full pricing will be announced when the feature launches.',
  },
  {
    question: 'How quickly will I receive my money?',
    answer: 'Funds typically arrive in your bank account within 1-2 business days after your client pays. We\'re also working on instant payout options for premium plans.',
  },
  {
    question: 'Is the payment processing secure?',
    answer: 'Absolutely. All payments are processed through PCI-compliant payment infrastructure. Your clients\' payment information is encrypted and never stored on our servers.',
  },
  {
    question: 'Can I set up payment plans for large invoices?',
    answer: 'Yes! You\'ll be able to offer your clients the option to pay in installments. You set the terms, and we handle the automatic collection of each payment.',
  },
  {
    question: 'How does automatic reconciliation work?',
    answer: 'When a client pays an invoice, the payment is automatically matched and recorded against that invoice. No manual data entry needed — your books stay up to date automatically.',
  },
];

const Payments = () => {
  const { locale, formatCurrency } = useLocale();
  
  const invoiceAmount = locale.pricing.business * 50 + locale.pricing.starter * 50;
  const processingFee = Math.round(invoiceAmount * 0.029 * 100) / 100;
  const netAmount = invoiceAmount - processingFee;
  const feePercent = '2.9%';

  return (
    <Layout>
      <SEOHead
        title="Accept Online Payments | Payment Processing | Invoicemonk"
        description="Accept payments directly from invoices. Credit cards, bank transfers, and digital wallets with automatic reconciliation and low processing fees."
        canonical="https://invoicemonk.com/payments"
      />
      <ServiceSchema
        serviceName="Invoicemonk Payment Processing"
        serviceType="Payment Processing Software"
        description="Accept payments directly from invoices. Credit cards, bank transfers, and digital wallets with automatic reconciliation."
        url="https://invoicemonk.com/payments"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-accent/30 py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wave-orange/10 text-wave-orange mb-6"
              >
                <span className="text-body-sm font-medium">Coming Soon</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-display text-heading mb-6"
              >
                Get paid faster with{' '}
                <span className="font-serif italic text-primary">integrated payments</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-body-lg text-muted-foreground mb-8"
              >
                Accept payments directly from invoices. Set up payment plans, process 
                refunds, and reconcile everything automatically.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 h-14 text-body-lg bg-accent-orange hover:bg-accent-orange/90 text-accent-orange-foreground shadow-soft-md group"
                >
                  <a href="https://app.invoicemonk.com/signup">
                    Join the Waitlist
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 h-14 text-body border-border hover:bg-muted"
                >
                  <Link to="/invoicing">Start with Invoicing</Link>
                </Button>
              </motion.div>
            </div>

            {/* Product Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="bg-card rounded-2xl shadow-soft-xl border border-border p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-wave-green/10 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-wave-green" />
                  </div>
                  <h3 className="text-h3 text-heading mb-2">Payment Received!</h3>
                  <p className="text-body-sm text-muted-foreground">Invoice #1042 • Acme Corp</p>
                </div>
                
                <div className="bg-muted/50 rounded-xl p-6 text-center mb-6">
                  <div className="text-caption text-muted-foreground mb-1">Amount Paid</div>
                  <div className="text-display font-bold text-heading">{formatCurrency(invoiceAmount)}</div>
                </div>
                
                <div className="space-y-3 text-body-sm">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Payment Method</span>
                    <span className="text-foreground font-medium">Visa •••• 4242</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Processing Fee</span>
                    <span className="text-foreground font-medium">{formatCurrency(processingFee)} ({feePercent})</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Net Amount</span>
                    <span className="text-wave-green font-semibold">{formatCurrency(netAmount)}</span>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-card rounded-xl shadow-soft-lg p-3 border border-border"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-body-sm font-medium text-foreground">Instant payout</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Banner */}
      <WaveFeatureBanner 
        title="Accept payments your clients prefer"
        features={bannerFeatures}
        variant="primary"
      />

      {/* 3 Feature Blocks */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 text-heading mb-4">
              Why add payments to your{' '}
              <span className="font-serif italic text-primary">invoices</span>
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Make it as easy as possible for your clients to pay you.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {featureBlocks.map((feature) => {
              const Icon = feature.icon;
              
              return (
                <StaggerItem key={feature.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="h-full bg-background rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-card-hover transition-all duration-300 text-center"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 mx-auto">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-h4 text-heading mb-3">{feature.title}</h3>
                    <p className="text-body text-muted-foreground">{feature.description}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Tabbed Features */}
      <WaveTabbedFeature
        title="Everything you need to accept payments"
        subtitle="Flexible options for you and your clients."
        tabs={paymentTabbedFeatures}
      />

      {/* Featured Testimonial */}
      <WaveFeaturedTestimonial
        quote="Since adding payment links to my invoices, I get paid on average 12 days faster. It's made a huge difference to my cash flow."
        author={{
          name: "Amaka Eze",
          title: "Creative Director",
          company: "Studio Amber"
        }}
        rating={5}
        variant="primary"
      />

      {/* How It Works */}
      <WaveHowItWorks
        title="How accepting payments works"
        subtitle="It's as simple as sending an invoice — we handle the rest."
        steps={howItWorksSteps}
      />

      {/* Processing Fees Preview */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 text-heading mb-4">
              Simple, transparent{' '}
              <span className="font-serif italic text-primary">pricing</span>
            </h2>
            <p className="text-body-lg text-muted-foreground">
              No monthly fees. No hidden charges. Just pay when you get paid.
            </p>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="p-6 border-b border-border">
                <h3 className="text-h4 text-heading mb-2">Processing Fees</h3>
                <p className="text-body text-muted-foreground">Coming soon — competitive rates for every business size.</p>
              </div>
              <div className="divide-y divide-border">
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-body font-medium text-heading">Credit & Debit Cards</p>
                      <p className="text-body-sm text-muted-foreground">Visa, Mastercard, Amex</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-h4 font-bold text-heading">2.9%</p>
                    <p className="text-caption text-muted-foreground">+ fixed fee</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Banknote className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-body font-medium text-heading">Bank Transfers</p>
                      <p className="text-body-sm text-muted-foreground">ACH, Direct Debit</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-h4 font-bold text-heading">1%</p>
                    <p className="text-caption text-muted-foreground">capped at $5</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Preview */}
      <WaveBlogPreview
        title="Getting paid faster"
        subtitle="Tips and strategies to improve your cash flow."
        pillarId="getting-paid"
      />

      {/* FAQ Section */}
      <WaveProductFAQ
        title="Payments questions, answered"
        subtitle="Everything you need to know about accepting payments."
        faqs={paymentsFAQs}
      />

      {/* Final CTA */}
      <WaveCTASection />
    </Layout>
  );
};

export default Payments;
