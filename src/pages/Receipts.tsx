import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Receipt, ArrowRight, Camera, FolderOpen, Search, Cloud, Smartphone, Shield, Tag } from 'lucide-react';
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

const receiptTabbedFeatures = [
  {
    label: 'Scanning',
    title: 'AI-powered receipt capture',
    description: 'Our OCR technology reads any receipt — printed, handwritten, or faded. Just snap and save.',
  },
  {
    label: 'Storage',
    title: 'Secure, organized storage',
    description: 'Receipts are encrypted and organized by date, vendor, and category. Access from any device.',
  },
  {
    label: 'Search',
    title: 'Find any receipt instantly',
    description: 'Full-text search across all your receipts. Find that coffee shop receipt from 3 months ago in seconds.',
  },
];

const receiptSteps = [
  {
    number: 1,
    title: 'Snap a photo',
    description: 'Take a picture of any receipt with your phone.',
  },
  {
    number: 2,
    title: 'AI extracts details',
    description: 'Vendor, amount, date, and category are captured automatically.',
  },
  {
    number: 3,
    title: 'Stored and searchable',
    description: 'Find any receipt instantly when you need it.',
  },
];

const featureBlocks = [
  {
    icon: Camera,
    title: 'AI-powered scanning',
    description: 'Snap a photo and our AI extracts all the details automatically.',
  },
  {
    icon: FolderOpen,
    title: 'Smart organization',
    description: 'Receipts are auto-organized by date, vendor, and category.',
  },
  {
    icon: Search,
    title: 'Find anything instantly',
    description: 'Full-text search finds any receipt in seconds.',
  },
];

const bannerFeatures = [
  'AI-powered OCR',
  'Instant search',
  'Secure cloud storage',
  'Tax-ready exports',
];

const storageFeatures = [
  {
    icon: Cloud,
    title: 'Secure cloud backup',
    description: 'Every receipt is encrypted and stored safely in the cloud. Access them from anywhere.',
  },
  {
    icon: Shield,
    title: 'Compliance-ready retention',
    description: 'Receipts are stored according to regulatory requirements. Always ready for audits.',
  },
  {
    icon: Tag,
    title: 'Automatic categorization',
    description: 'Receipts are tagged and organized automatically. No manual sorting needed.',
  },
];

const receiptsFAQs = [
  {
    question: 'How does receipt scanning work?',
    answer: 'Simply take a photo of your receipt with your phone or upload an image. Our AI-powered OCR extracts the vendor, date, amount, and category automatically. It works with printed and handwritten receipts.',
  },
  {
    question: 'How long are receipts stored?',
    answer: 'Receipts are stored securely for as long as you need them, meeting tax authority requirements in your region. You can also export or delete receipts at any time.',
  },
  {
    question: 'Can I search my old receipts?',
    answer: 'Yes! Our full-text search lets you find any receipt by vendor name, amount, date, or category. You\'ll never lose a receipt again.',
  },
  {
    question: 'How does this integrate with expenses?',
    answer: 'Receipts can be attached to expense entries automatically or manually. When you scan a receipt, we can create the expense entry for you.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. All receipts are encrypted both in transit and at rest. We use bank-level security to protect your data. You control who has access.',
  },
  {
    question: 'Can I export receipts for my accountant?',
    answer: 'Yes, you can export receipts individually or in bulk. Choose from PDF, CSV, or image formats. Perfect for tax time or audits.',
  },
];

const Receipts = () => {
  const { formatCurrency } = useLocale();

  const receipts = [
    { vendor: 'Office Depot', amount: 142.50, category: 'Supplies', date: 'Today' },
    { vendor: 'Zoom Pro', amount: 19.99, category: 'Software', date: 'Yesterday' },
    { vendor: 'United Airlines', amount: 340, category: 'Travel', date: 'Mon' },
    { vendor: 'Starbucks', amount: 18.45, category: 'Meals', date: 'Mon' },
  ];

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
                  <Receipt className="w-8 h-8 text-primary" />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-display text-heading mb-6"
              >
                Never lose a receipt{' '}
                <span className="font-serif italic text-primary">again</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-body-lg text-muted-foreground mb-8"
              >
                Capture, organize, and store all your receipts digitally. Never lose 
                a receipt again with AI-powered scanning and smart organization.
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
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-body font-semibold text-heading">Recent Receipts</h3>
                  <span className="text-caption text-muted-foreground">12 this week</span>
                </div>
                
                <div className="space-y-4">
                  {receipts.map((receipt, index) => (
                    <motion.div
                      key={receipt.vendor}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Receipt className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-body-sm font-medium text-foreground truncate">{receipt.vendor}</span>
                          <span className="text-body-sm font-semibold text-heading">{formatCurrency(receipt.amount)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-caption text-muted-foreground">{receipt.category}</span>
                          <span className="text-caption text-muted-foreground">{receipt.date}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-soft-lg p-3 border border-border"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-wave-green/10 flex items-center justify-center">
                    <Camera className="w-4 h-4 text-wave-green" />
                  </div>
                  <span className="text-body-sm font-medium text-foreground">Scan new receipt</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Banner */}
      <WaveFeatureBanner 
        title="Digital receipts, organized automatically"
        features={bannerFeatures}
        variant="primary"
      />

      {/* 3 Feature Blocks */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 text-heading mb-4">
              What's <span className="font-serif italic text-primary">coming</span>
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Digital receipt management that integrates with your expense tracking.
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
        title="Everything you need for receipt management"
        subtitle="From capture to search."
        tabs={receiptTabbedFeatures}
      />

      {/* How It Works */}
      <WaveHowItWorks
        title="How receipt capture works"
        subtitle="From photo to organized record in seconds."
        steps={receiptSteps}
      />

      {/* Secure Storage Features */}
      <WaveAlternatingFeature
        title="Safe, secure, always accessible"
        subtitle="Your receipts are protected with enterprise-grade security."
        features={storageFeatures}
        className="bg-background"
        imagePlaceholder={
          <div className="bg-card rounded-2xl shadow-soft-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Cloud className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-body-sm font-medium text-heading">Cloud Storage</p>
                <p className="text-caption text-muted-foreground">256-bit encryption</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-body-sm p-3 rounded-lg bg-muted/50">
                <span className="text-foreground">Receipt_Office_Depot.jpg</span>
                <span className="text-wave-green text-caption">Synced</span>
              </div>
              <div className="flex items-center justify-between text-body-sm p-3 rounded-lg bg-muted/50">
                <span className="text-foreground">Receipt_Zoom_Jan2024.jpg</span>
                <span className="text-wave-green text-caption">Synced</span>
              </div>
              <div className="flex items-center justify-between text-body-sm p-3 rounded-lg bg-muted/50">
                <span className="text-foreground">Receipt_Travel_Dec2023.jpg</span>
                <span className="text-wave-green text-caption">Synced</span>
              </div>
            </div>
          </div>
        }
      />

      {/* Featured Testimonial */}
      <WaveFeaturedTestimonial
        quote="I used to have a shoebox full of receipts. Now I just snap a photo and everything is organized. Tax season is actually manageable now."
        author={{
          name: "Ngozi Ibe",
          title: "Photographer",
          company: "Ibe Studios"
        }}
        rating={5}
        variant="primary"
      />

      {/* Blog Preview */}
      <WaveBlogPreview
        title="Record keeping tips"
        subtitle="Keep your receipts organized and audit-ready."
        category="Small Business"
      />

      {/* FAQ Section */}
      <WaveProductFAQ
        title="Receipt questions, answered"
        subtitle="Everything you need to know about digital receipt management."
        faqs={receiptsFAQs}
      />

      {/* Final CTA */}
      <WaveCTASection />
    </Layout>
  );
};

export default Receipts;
