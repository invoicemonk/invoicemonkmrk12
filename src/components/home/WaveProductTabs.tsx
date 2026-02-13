import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, CreditCard, Wallet, Calculator, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

import { Users, FileCheck, Receipt, BarChart3 } from 'lucide-react';

const products = [
  {
    id: 'invoicing',
    name: 'Invoicing',
    icon: FileText,
    title: 'Get paid on time, every time',
    description: 'Create professional invoices in minutes. Send them instantly, track payments, and automate reminders so you never have to chase clients again.',
    features: ['Customizable templates', 'Automatic reminders', 'Payment tracking', 'Multi-currency'],
    link: '/invoicing',
    available: true,
  },
  {
    id: 'payments',
    name: 'Payments',
    icon: CreditCard,
    title: 'Accept payments your way',
    description: 'Let clients pay directly from invoices with credit cards, bank transfers, or digital wallets. Money lands in your account faster.',
    features: ['Credit card processing', 'Bank transfers', 'Payment plans', 'Auto-reconciliation'],
    link: '/payments',
    available: false,
  },
  {
    id: 'expenses',
    name: 'Expenses',
    icon: Wallet,
    title: 'Track every expense with ease',
    description: 'Capture receipts, categorize spending automatically, and always know where your money goes. Tax time becomes a breeze.',
    features: ['Receipt scanning', 'Auto-categorization', 'Tax categories', 'Expense reports'],
    link: '/expenses',
    available: true,
  },
  {
    id: 'accounting',
    name: 'Accounting',
    icon: Calculator,
    title: 'No sweat accounting',
    description: 'Track income and expenses, pull financial reports, and stay on top of your business finances without the accounting degree.',
    features: ['Double-entry bookkeeping', 'Financial reports', 'Tax preparation', 'Bank connections'],
    link: '/accounting',
    available: true,
  },
  {
    id: 'clients',
    name: 'Clients',
    icon: Users,
    title: 'Manage clients effortlessly',
    description: 'Keep all your client information organized in one place. Track contact details, payment history, and outstanding balances at a glance.',
    features: ['Contact management', 'Payment history', 'Client notes', 'Quick invoicing'],
    link: '/features/client-management',
    available: true,
  },
  {
    id: 'estimates',
    name: 'Estimates',
    icon: FileCheck,
    title: 'Win more business with quotes',
    description: 'Create professional estimates and quotes that convert. When approved, turn them into invoices with a single click.',
    features: ['Professional templates', 'One-click conversion', 'Approval tracking', 'Custom branding'],
    link: '/estimates',
    available: false,
  },
  {
    id: 'receipts',
    name: 'Receipts',
    icon: Receipt,
    title: 'Never lose a receipt again',
    description: 'Snap photos of receipts and let us handle the rest. Automatic data extraction and organization for stress-free bookkeeping.',
    features: ['Photo capture', 'Auto-extraction', 'Cloud storage', 'Search & filter'],
    link: '/receipts',
    available: true,
  },
];

export function WaveProductTabs() {
  const [activeTab, setActiveTab] = useState('invoicing');
  const activeProduct = products.find((p) => p.id === activeTab) || products[0];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-h2 text-heading mb-4">
            More reasons to love{' '}
            <span className="font-serif italic text-primary">Invoicemonk</span>
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Everything you need to manage your business finances, from invoicing to accounting.
          </p>
        </AnimatedSection>

        {/* Tab Navigation - Horizontal scroll on mobile */}
        <div className="overflow-x-auto pb-2 mb-12 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          <div className="flex sm:flex-wrap sm:justify-center gap-2 min-w-max sm:min-w-0 max-w-3xl mx-auto">
            {products.map((product) => {
              const Icon = product.icon;
              const isActive = activeTab === product.id;

              return (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(product.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-body font-medium transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-soft-md'
                      : 'bg-card text-muted-foreground hover:bg-muted border border-border'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {product.name}
                  {!product.available && (
                    <span className="text-[10px] font-semibold uppercase tracking-wide opacity-70">
                      Soon
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Product Mockup / Visual */}
              <div className="order-2 lg:order-1">
                <div className="relative bg-gradient-to-br from-wave-blue-light to-accent rounded-3xl p-8 aspect-[4/3] flex items-center justify-center">
                  <div className="bg-card rounded-2xl shadow-soft-xl border border-border p-6 w-full max-w-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <activeProduct.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-body-sm font-medium text-heading">{activeProduct.name}</div>
                          <div className="text-caption text-muted-foreground">Invoicemonk</div>
                        </div>
                      </div>
                      {activeProduct.available ? (
                        <span className="px-2 py-1 text-[10px] font-medium rounded-full bg-wave-green/10 text-wave-green">
                          Available
                        </span>
                      ) : (
                        <span className="px-2 py-1 text-[10px] font-medium rounded-full bg-muted text-muted-foreground">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <div className="space-y-2">
                      {activeProduct.features.map((feature, index) => (
                        <div key={feature} className="flex items-center gap-2 text-body-sm">
                          <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Floating decoration */}
                  <motion.div
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-4 -right-4 bg-accent-orange text-accent-orange-foreground rounded-xl px-4 py-2 shadow-soft-lg hidden md:block"
                  >
                    <span className="text-body-sm font-semibold">Free to start!</span>
                  </motion.div>
                </div>
              </div>

              {/* Product Description */}
              <div className="order-1 lg:order-2">
                <h3 className="text-h2 text-heading mb-4">
                  {activeProduct.title.split(' ').map((word, i, arr) =>
                    i === arr.length - 1 ? (
                      <span key={i} className="font-serif italic text-primary">{word}</span>
                    ) : (
                      <span key={i}>{word} </span>
                    )
                  )}
                </h3>
                <p className="text-body-lg text-muted-foreground mb-8">
                  {activeProduct.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {activeProduct.available ? (
                    <>
                      <Button
                        asChild
                        size="lg"
                        className="rounded-full px-8 h-12 bg-accent-orange hover:bg-accent-orange/90 text-accent-orange-foreground shadow-soft-md group"
                      >
                        <a href="https://app.invoicemonk.com/signup">
                          Start Free
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12">
                        <Link to={activeProduct.link}>Learn More</Link>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button asChild size="lg" className="rounded-full px-8 h-12 group">
                        <a href="https://app.invoicemonk.com/signup">
                          Join Waitlist
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12">
                        <Link to={activeProduct.link}>Learn More</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
