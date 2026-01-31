import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wallet, ArrowRight, Camera, Tag, PieChart, Receipt, Smartphone, FileText, TrendingDown, Clock, FolderCheck, FileBarChart } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { WaveFeatureBanner } from '@/components/ui/WaveFeatureBanner';
import { WaveTabbedFeature } from '@/components/home/WaveTabbedFeature';
import { WaveAlternatingFeature } from '@/components/home/WaveAlternatingFeature';
import { WaveFeaturedTestimonial } from '@/components/home/WaveFeaturedTestimonial';
import { WaveBlogPreview } from '@/components/home/WaveBlogPreview';
import { WaveProductFAQ } from '@/components/home/WaveProductFAQ';
import { WaveCTASection } from '@/components/home/WaveCTASection';
import { useLocale } from '@/hooks/useLocale';

const automationFeatures = [
  {
    icon: Clock,
    title: 'Automatic data entry',
    description: 'No more typing. Receipt scanning does the work for you.',
  },
  {
    icon: FolderCheck,
    title: 'Smart organization',
    description: 'Expenses sorted by vendor, category, and date automatically.',
  },
  {
    icon: FileBarChart,
    title: 'One-click reports',
    description: 'Generate expense reports ready for clients or accountants.',
  },
];

const featureBlocks = [
  {
    icon: Camera,
    title: 'Snap and forget',
    description: 'Take a photo of any receipt and we\'ll extract all the details automatically.',
  },
  {
    icon: Tag,
    title: 'Auto-categorize everything',
    description: 'Expenses are automatically sorted by type, vendor, and tax category.',
  },
  {
    icon: PieChart,
    title: 'See where your money goes',
    description: 'Visual breakdowns help you understand spending patterns at a glance.',
  },
];

const bannerFeatures = [
  'Scan receipts instantly',
  'Auto-categorize spending',
  'Track tax deductions',
  'Generate expense reports',
];

const tabbedFeatures = [
  {
    label: 'Receipt Scanning',
    title: 'Capture expenses on the go',
    description: 'Simply snap a photo of your receipt and our AI extracts the vendor, amount, date, and category automatically. No more manual data entry or lost receipts.',
  },
  {
    label: 'Categories',
    title: 'Automatic smart categorization',
    description: 'Our system learns from your expenses and automatically categorizes them. Easily track office supplies, travel, meals, software, and more.',
  },
  {
    label: 'Tax Tracking',
    title: 'Tax deductions made easy',
    description: 'Automatically flag tax-deductible expenses and generate reports ready for your accountant. Never miss a deduction again.',
  },
];

const expensesFAQs = [
  {
    question: 'How does receipt scanning work?',
    answer: 'Simply take a photo of your receipt with your phone or upload an image. Our AI-powered OCR technology extracts the vendor name, date, amount, and even suggests a category automatically.',
  },
  {
    question: 'Can I track expenses for multiple categories?',
    answer: 'Yes! You can create custom categories or use our pre-built ones like Travel, Office Supplies, Software, Meals, and more. Expenses are automatically categorized based on the vendor.',
  },
  {
    question: 'Will this help with my taxes?',
    answer: 'Absolutely. We automatically flag tax-deductible expenses and generate reports you can share with your accountant. You\'ll never miss a deduction again.',
  },
  {
    question: 'How does this integrate with invoicing?',
    answer: 'Expenses flow directly into your financial reports. When combined with invoicing, you get a complete picture of your business finances — income and expenses in one place.',
  },
  {
    question: 'Can I set spending budgets?',
    answer: 'Yes, you can set budgets for different expense categories and get alerts when you\'re approaching your limits. Great for keeping spending under control.',
  },
];

const Expenses = () => {
  const { formatCurrency } = useLocale();

  const expenseCategories = [
    { category: 'Office Supplies', amount: 450, percent: 14 },
    { category: 'Software', amount: 890, percent: 27 },
    { category: 'Travel', amount: 1200, percent: 37 },
    { category: 'Meals', amount: 700, percent: 22 },
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
                  <Wallet className="w-8 h-8 text-primary" />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-display text-heading mb-6"
              >
                Track every expense with{' '}
                <span className="font-serif italic text-primary">ease</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-body-lg text-muted-foreground mb-8"
              >
                Track business expenses effortlessly. Scan receipts, categorize spending, 
                and maintain compliance-ready records — all integrated with your invoicing.
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
                  <h3 className="text-body font-semibold text-heading">Expense Summary</h3>
                  <span className="text-caption text-muted-foreground">This Month</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="text-caption text-muted-foreground mb-1">Total Expenses</div>
                    <div className="text-h3 font-bold text-heading">{formatCurrency(3240)}</div>
                  </div>
                  <div className="bg-wave-green/10 rounded-xl p-4">
                    <div className="text-caption text-wave-green mb-1">Tax Deductible</div>
                    <div className="text-h3 font-bold text-wave-green">{formatCurrency(2180)}</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {expenseCategories.map((item) => (
                    <div key={item.category} className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="flex justify-between text-body-sm mb-1">
                          <span className="text-foreground">{item.category}</span>
                          <span className="text-muted-foreground">{formatCurrency(item.amount)}</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full" 
                            style={{ width: `${item.percent}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Banner */}
      <WaveFeatureBanner 
        title="Expense tracking that works for you"
        features={bannerFeatures}
        variant="orange"
      />

      {/* 3 Feature Blocks */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 text-heading mb-4">
              What's <span className="font-serif italic text-primary">coming</span>
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Expense tracking designed to integrate seamlessly with your invoicing workflow.
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
        title="Everything you need to track expenses"
        subtitle="From receipt capture to tax-ready reports."
        tabs={tabbedFeatures}
      />

      {/* Alternating Feature - Automation */}
      <WaveAlternatingFeature
        title="Save hours every month"
        subtitle="Automate the tedious parts of expense tracking."
        features={automationFeatures}
        className="bg-background"
      />

      {/* Featured Testimonial */}
      <WaveFeaturedTestimonial
        quote="I used to dread expense tracking. Now I just snap a photo and everything is organized automatically. Tax season is so much easier."
        author={{
          name: "Oluwaseun Adeyemi",
          title: "Consultant",
          company: "Adeyemi Advisory"
        }}
        rating={5}
        variant="primary"
      />

      {/* Blog Preview */}
      <WaveBlogPreview
        title="Expense management tips"
        subtitle="Learn how to track expenses more efficiently."
        category="Small Business"
      />

      {/* FAQ Section */}
      <WaveProductFAQ
        title="Expense tracking questions, answered"
        subtitle="Everything you need to know about managing expenses."
        faqs={expensesFAQs}
      />

      {/* Final CTA */}
      <WaveCTASection />
    </Layout>
  );
};

export default Expenses;
