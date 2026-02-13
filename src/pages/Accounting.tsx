import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight, BookOpen, FileSpreadsheet, TrendingUp, Building2, PieChart, BarChart3, Shield, RefreshCw, CheckCircle, Calendar } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { WaveFeatureBanner } from '@/components/ui/WaveFeatureBanner';
import { WaveTabbedFeature } from '@/components/home/WaveTabbedFeature';
import { WaveAlternatingFeature } from '@/components/home/WaveAlternatingFeature';
import { WaveHowItWorks } from '@/components/home/WaveHowItWorks';
import { WaveFeaturedTestimonial } from '@/components/home/WaveFeaturedTestimonial';
import { WaveProductFAQ } from '@/components/home/WaveProductFAQ';
import { WaveBlogPreview } from '@/components/home/WaveBlogPreview';
import { WaveCTASection } from '@/components/home/WaveCTASection';
import { useLocale } from '@/hooks/useLocale';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { SEOHead } from '@/components/seo/SEOHead';

const automationFeatures = [
  {
    icon: RefreshCw,
    title: 'Automatic journal entries',
    description: 'Every invoice and expense creates proper accounting entries automatically.',
  },
  {
    icon: CheckCircle,
    title: 'Bank reconciliation',
    description: 'Connect your bank and transactions match automatically.',
  },
  {
    icon: Calendar,
    title: 'Real-time financials',
    description: 'See your P&L and balance sheet updated in real-time.',
  },
];

const accountingSteps = [
  {
    number: 1,
    title: 'Invoice and track expenses',
    description: 'All your financial activity flows into the accounting system.',
  },
  {
    number: 2,
    title: 'Automatic categorization',
    description: 'Transactions are categorized and recorded correctly.',
  },
  {
    number: 3,
    title: 'Generate reports',
    description: 'Pull financial statements whenever you need them.',
  },
];

const featureBlocks = [
  {
    icon: BookOpen,
    title: 'Double-entry bookkeeping',
    description: 'Full chart of accounts with automatic journal entries. Real accounting, made simple.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Financial statements on demand',
    description: 'Balance sheets, profit & loss, and cash flow statements at your fingertips.',
  },
  {
    icon: TrendingUp,
    title: 'Tax-ready reports',
    description: 'Generate reports your accountant will love. Ready for any filing deadline.',
  },
];

const bannerFeatures = [
  'Double-entry bookkeeping',
  'Financial statements',
  'Tax-ready reports',
  'Multi-entity support',
];

import accountingChartOfAccounts from '@/assets/accounting-chart-of-accounts.jpg';
import accountingFinancialReports from '@/assets/accounting-financial-reports.jpg';
import accountingMultiEntity from '@/assets/accounting-multi-entity.jpg';
import accountingAutomation from '@/assets/accounting-automation.jpg';

const tabbedFeatures = [
  {
    label: 'Chart of Accounts',
    title: 'A complete chart of accounts, ready to go',
    description: 'Start with a standard chart of accounts or customize it to fit your business. Every transaction is automatically categorized and recorded correctly.',
    image: accountingChartOfAccounts,
  },
  {
    label: 'Financial Reports',
    title: 'Financial statements when you need them',
    description: 'Generate balance sheets, profit & loss statements, and cash flow reports with a single click. Always know where your business stands financially.',
    image: accountingFinancialReports,
  },
  {
    label: 'Multi-Entity',
    title: 'Manage multiple businesses easily',
    description: 'Running more than one business? Switch between entities seamlessly and get consolidated views of your entire portfolio.',
    image: accountingMultiEntity,
  },
];

const accountingFAQs = [
  {
    question: 'Do I need accounting knowledge to use this?',
    answer: 'Not at all! Invoicemonk Accounting is designed for business owners, not accountants. We handle the complexity behind the scenes while giving you clear, simple views of your finances.',
  },
  {
    question: 'How does this connect to invoicing?',
    answer: 'When you create invoices, payments, and expenses in Invoicemonk, they automatically flow into your accounting. No double entry, no reconciliation headaches.',
  },
  {
    question: 'Can I use this with my existing accountant?',
    answer: 'Absolutely. You can invite your accountant to view your books, and export reports in formats they\'re familiar with. We make their job easier too.',
  },
  {
    question: 'What financial reports can I generate?',
    answer: 'You\'ll be able to generate profit & loss statements, balance sheets, cash flow statements, accounts receivable/payable aging, and custom reports for tax purposes.',
  },
  {
    question: 'Is this suitable for larger businesses?',
    answer: 'Yes! Our accounting features scale with your business. Multi-entity support, team permissions, and advanced reporting are available for growing businesses.',
  },
];

const Accounting = () => {
  const { formatCurrency } = useLocale();

  return (
    <Layout>
      <SEOHead
        title="Small Business Accounting Software | Double-Entry Bookkeeping | Invoicemonk"
        description="Complete accounting software with double-entry bookkeeping, financial statements, and tax reports. Designed for small businesses and freelancers."
        canonical="https://invoicemonk.com/accounting"
      />
      <ServiceSchema
        serviceName="Invoicemonk Accounting Software"
        serviceType="Accounting Software"
        description="Complete accounting software with double-entry bookkeeping, financial statements, and tax-ready reports for small businesses."
        url="https://invoicemonk.com/accounting"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wave-green/10 text-wave-green mb-6"
              >
                <span className="text-body-sm font-medium">Now Available</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Calculator className="w-8 h-8 text-primary" />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-display text-heading mb-6"
              >
                Full Accounting,{' '}
                <span className="font-serif italic text-primary">made simple</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-body-lg text-muted-foreground mb-8"
              >
                Complete accounting software with double-entry bookkeeping, financial 
                statements, and tax reports — all with Invoicemonk's compliance guarantees.
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
                    Start Your Free Trial
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
                  <h3 className="text-body font-semibold text-heading">Financial Overview</h3>
                  <span className="text-caption text-muted-foreground">Q4 2024</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="text-caption text-muted-foreground mb-2">Balance Sheet</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-body-sm">
                        <span className="text-foreground">Total Assets</span>
                        <span className="font-medium text-heading">{formatCurrency(124500)}</span>
                      </div>
                      <div className="flex justify-between text-body-sm">
                        <span className="text-foreground">Total Liabilities</span>
                        <span className="font-medium text-heading">{formatCurrency(42300)}</span>
                      </div>
                      <div className="h-px bg-border my-2" />
                      <div className="flex justify-between text-body-sm font-semibold">
                        <span className="text-primary">Equity</span>
                        <span className="text-primary">{formatCurrency(82200)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-wave-green/10 rounded-xl p-3">
                      <div className="text-caption text-wave-green mb-1">Revenue</div>
                      <div className="text-h4 font-bold text-wave-green">{formatCurrency(48200)}</div>
                    </div>
                    <div className="bg-wave-orange/10 rounded-xl p-3">
                      <div className="text-caption text-wave-orange mb-1">Expenses</div>
                      <div className="text-h4 font-bold text-wave-orange">{formatCurrency(31400)}</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="text-caption text-muted-foreground mb-3">Chart of Accounts</div>
                  <div className="space-y-2">
                    {['1000 - Cash', '1200 - Accounts Receivable', '2000 - Accounts Payable', '4000 - Revenue'].map((account) => (
                      <div key={account} className="flex items-center gap-2 text-body-sm text-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary/60" />
                        {account}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Banner */}
      <WaveFeatureBanner 
        title="Accounting that works for you"
        features={bannerFeatures}
        variant="orange"
      />

      {/* 3 Feature Blocks */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 text-heading mb-4">
              What you'll <span className="font-serif italic text-primary">get</span>
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Professional accounting tools built on top of your invoicing data.
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

      {/* Tabbed Feature Section */}
      <WaveTabbedFeature
        title="Everything you need to manage your books"
        subtitle="From daily transactions to year-end reports."
        tabs={tabbedFeatures}
      />

      {/* Alternating Feature - Automation */}
      <WaveAlternatingFeature
        title="Your books, always up to date"
        subtitle="Automation that keeps your accounting accurate."
        features={automationFeatures}
        image={accountingAutomation}
        className="bg-background"
      />

      {/* How It Works */}
      <WaveHowItWorks
        title="How accounting flows work"
        subtitle="From transactions to reports in three simple steps."
        steps={accountingSteps}
      />

      {/* Featured Testimonial */}
      <WaveFeaturedTestimonial
        quote="Finally, accounting software that doesn't make me feel like I need a finance degree. Everything just flows from my invoices automatically."
        author={{
          name: "Emeka Nwosu",
          title: "CEO",
          company: "Nwosu Ventures"
        }}
        rating={5}
        variant="primary"
      />

      {/* Featured Article Link */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 lg:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-caption text-primary font-medium uppercase tracking-wide">Featured Guide</span>
                  <h2 className="text-h3 text-heading mt-2">Small Business Accounting Basics: A Simple Guide</h2>
                </div>
              </div>
              <p className="text-body-lg text-muted-foreground mb-6">
                Master small business accounting in 7 simple steps. Learn how to set up your chart of accounts, 
                choose between cash and accrual methods, and generate tax-ready financial reports—no accounting 
                degree required.
              </p>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/blog/small-business-accounting-guide">
                  Read the Complete Guide
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Preview */}
      <WaveBlogPreview
        title="Learn about small business accounting"
        subtitle="Tips and guides to help you manage your finances."
        pillarId="business-finances"
      />

      {/* FAQ Section */}
      <WaveProductFAQ
        title="Accounting questions, answered"
        subtitle="Everything you need to know about managing your books."
        faqs={accountingFAQs}
      />

      {/* Final CTA */}
      <WaveCTASection />
    </Layout>
  );
};

export default Accounting;
