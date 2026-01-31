import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileCheck, ArrowRight, FileText, CheckCircle, Clock, RefreshCw, Send, Users, TrendingUp, MessageSquare, BarChart } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { WaveFeatureBanner } from '@/components/ui/WaveFeatureBanner';
import { WaveTabbedFeature } from '@/components/home/WaveTabbedFeature';
import { WaveHowItWorks } from '@/components/home/WaveHowItWorks';
import { WaveAlternatingFeature } from '@/components/home/WaveAlternatingFeature';
import { WaveFeaturedTestimonial } from '@/components/home/WaveFeaturedTestimonial';
import { WaveBlogPreview } from '@/components/home/WaveBlogPreview';
import { WaveProductFAQ } from '@/components/home/WaveProductFAQ';
import { WaveCTASection } from '@/components/home/WaveCTASection';
import { useLocale } from '@/hooks/useLocale';

const estimateTabbedFeatures = [
  {
    label: 'Templates',
    title: 'Beautiful estimate templates',
    description: 'Choose from professional templates or create your own. Add your branding and impress clients.',
  },
  {
    label: 'Client Portal',
    title: 'Let clients review and approve online',
    description: 'Clients get a dedicated link to view estimates, ask questions, and approve with one click.',
  },
  {
    label: 'Tracking',
    title: 'Know where every estimate stands',
    description: 'Track views, responses, and approval status. Follow up at the right time.',
  },
];

const conversionFeatures = [
  {
    icon: TrendingUp,
    title: 'Higher conversion rates',
    description: 'Professional estimates build trust and close deals faster.',
  },
  {
    icon: MessageSquare,
    title: 'Client communication',
    description: 'Discuss changes and answer questions right on the estimate.',
  },
  {
    icon: BarChart,
    title: 'Estimate analytics',
    description: 'See which estimates convert and optimize your proposals.',
  },
];

const featureBlocks = [
  {
    icon: FileText,
    title: 'Professional quotes in minutes',
    description: 'Create beautiful, branded estimates that make a great first impression.',
  },
  {
    icon: CheckCircle,
    title: 'One-click client approval',
    description: 'Clients can review and approve estimates online — no printing or signing needed.',
  },
  {
    icon: RefreshCw,
    title: 'Convert to invoice instantly',
    description: 'Turn approved estimates into invoices with a single click. No re-entering data.',
  },
];

const bannerFeatures = [
  'Professional quotes',
  'One-click approval',
  'Convert to invoice',
  'Expiration tracking',
];

const howItWorksSteps = [
  {
    number: 1,
    title: 'Create your estimate',
    description: 'Build a professional quote with line items, pricing, and terms.',
  },
  {
    number: 2,
    title: 'Send to your client',
    description: 'Your client reviews online and approves with a single click.',
  },
  {
    number: 3,
    title: 'Convert to invoice',
    description: 'Turn approved estimates into invoices instantly. Get paid faster.',
  },
];

const estimatesFAQs = [
  {
    question: 'What\'s the difference between an estimate and an invoice?',
    answer: 'An estimate (or quote) is a proposal for work before it\'s done, while an invoice is a bill for work that\'s been completed. With Invoicemonk, you can easily convert approved estimates into invoices.',
  },
  {
    question: 'Can clients approve estimates online?',
    answer: 'Yes! When you send an estimate, your client receives a link where they can review the details and approve with a single click. You\'ll be notified immediately when they approve.',
  },
  {
    question: 'Can I set expiration dates on estimates?',
    answer: 'Absolutely. You can set validity periods for your quotes, and we\'ll notify you before they expire. This helps create urgency and keeps your pipeline moving.',
  },
  {
    question: 'How do I convert an estimate to an invoice?',
    answer: 'Once a client approves your estimate, you can convert it to an invoice with one click. All the line items, pricing, and client details transfer automatically.',
  },
  {
    question: 'Can I track which estimates are pending?',
    answer: 'Yes, your dashboard shows all estimates organized by status — draft, sent, viewed, approved, or expired. You\'ll always know where each proposal stands.',
  },
];

const Estimates = () => {
  const { formatCurrency } = useLocale();
  
  const lineItems = [
    { item: 'Website Design', qty: 1, price: 3500 },
    { item: 'Development', qty: 40, price: 4000 },
    { item: 'SEO Setup', qty: 1, price: 800 },
  ];
  
  const estimateTotal = lineItems.reduce((sum, line) => sum + line.price, 0);

  return (
    <Layout>
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
                  <FileCheck className="w-8 h-8 text-primary" />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-display text-heading mb-6"
              >
                Professional Estimates,{' '}
                <span className="font-serif italic text-primary">streamlined</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-body-lg text-muted-foreground mb-8"
              >
                Create professional quotes, get client approval, and convert to invoices 
                with one click. The complete estimate-to-payment workflow.
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
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-caption text-muted-foreground">Estimate</div>
                    <h3 className="text-body font-semibold text-heading">EST-2024-0042</h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-wave-green/10 text-wave-green text-body-sm font-medium">
                    Approved
                  </div>
                </div>

                <div className="border-t border-border pt-4 mb-4">
                  <div className="text-caption text-muted-foreground mb-1">Client</div>
                  <div className="text-body font-medium text-heading">Acme Corporation</div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="text-caption text-muted-foreground">Line Items</div>
                  {lineItems.map((line, i) => (
                    <div key={i} className="flex justify-between items-center text-body-sm bg-muted/30 rounded-lg px-3 py-2">
                      <span className="text-foreground">{line.item}</span>
                      <span className="text-muted-foreground">{formatCurrency(line.price)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-body font-medium text-heading">Total</span>
                    <span className="text-h4 font-bold text-primary">{formatCurrency(estimateTotal)}</span>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-primary" />
                    <span className="text-body-sm text-primary font-medium">Convert to Invoice</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Banner */}
      <WaveFeatureBanner 
        title="Estimates that work for you"
        features={bannerFeatures}
        variant="orange"
      />

      {/* 3 Feature Blocks */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 text-heading mb-4">
              Win more work with{' '}
              <span className="font-serif italic text-primary">professional quotes</span>
            </h2>
            <p className="text-body-lg text-muted-foreground">
              From proposal to payment in a seamless workflow.
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
        title="Everything you need for professional estimates"
        subtitle="From templates to tracking."
        tabs={estimateTabbedFeatures}
      />

      {/* How It Works */}
      <WaveHowItWorks
        title="From estimate to invoice in 3 steps"
        subtitle="A simple workflow that gets you paid faster."
        steps={howItWorksSteps}
      />

      {/* Alternating Feature - Conversion */}
      <WaveAlternatingFeature
        title="Win more business"
        subtitle="Professional estimates that convert."
        features={conversionFeatures}
        className="bg-background"
      />

      {/* Featured Testimonial */}
      <WaveFeaturedTestimonial
        quote="The one-click conversion from estimate to invoice saves me so much time. My clients love how professional everything looks."
        author={{
          name: "Funke Okafor",
          title: "Interior Designer",
          company: "Okafor Designs"
        }}
        rating={5}
        variant="primary"
      />

      {/* Blog Preview */}
      <WaveBlogPreview
        title="Proposal and estimate tips"
        subtitle="Win more clients with better proposals."
        category="Small Business"
      />

      {/* FAQ Section */}
      <WaveProductFAQ
        title="Estimates questions, answered"
        subtitle="Everything you need to know about creating and managing estimates."
        faqs={estimatesFAQs}
      />

      {/* Final CTA */}
      <WaveCTASection />
    </Layout>
  );
};

export default Estimates;
