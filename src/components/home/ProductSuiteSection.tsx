import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Wallet, CreditCard, Calculator, FileCheck, Receipt, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { useLocale } from '@/hooks/useLocale';

const flagshipFeatures = [
  'Professional invoice templates',
  'Recurring invoices & automation',
  'Payment tracking & reminders',
  'Multi-currency support',
  'Client management portal',
  'Built-in compliance & audit trails',
];

const comingSoonProducts = [
  {
    name: 'Payments',
    icon: CreditCard,
    description: 'Accept online payments, set up payment plans, and reconcile transactions.',
    href: '/payments',
  },
  {
    name: 'Estimates',
    icon: FileCheck,
    description: 'Create professional quotes and convert approved estimates to invoices.',
    href: '/estimates',
  },
];

export function ProductSuiteSection() {
  const { formatCurrency } = useLocale();

  return (
    <section id="products" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-caption font-medium rounded-full bg-primary/10 text-primary mb-4">
            Platform
          </span>
          <h2 className="text-h2 text-heading mb-4">
            One platform, complete financial control
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Start with invoicing today. As your business grows, unlock expenses, payments, accounting, and more — all in one unified platform.
          </p>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto">
          {/* Flagship Product - Invoicing */}
          <AnimatedSection delay={0.1} className="mb-12">
            <div className="relative bg-gradient-to-br from-primary/5 via-card to-accent/30 rounded-3xl border border-primary/20 overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-caption font-semibold bg-green-100 text-green-700">
                  ✓ Available Now
                </span>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <FileText className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-h3 text-heading">Invoicing</h3>
                      <p className="text-body-sm text-muted-foreground">Flagship Product</p>
                    </div>
                  </div>
                  
                  <p className="text-body-lg text-muted-foreground mb-8">
                    Professional, compliance-first invoicing that grows with your business. Create beautiful invoices, automate reminders, and get paid faster — with complete audit trails.
                  </p>
                  
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {flagshipFeatures.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-body-sm">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild size="lg" className="rounded-full group">
                      <a href="https://app.invoicemonk.com/signup">
                        Start Invoicing Free
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full">
                      <Link to="/invoicing">Learn More</Link>
                    </Button>
                  </div>
                </div>
                
                {/* Invoicing Visual */}
                <div className="relative hidden lg:block">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
                  <div className="relative bg-card rounded-2xl shadow-card-hover p-6 border border-border">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-primary text-caption font-bold">IM</span>
                        </div>
                        <div>
                          <div className="text-body-sm font-medium text-foreground">Invoice #1042</div>
                          <div className="text-caption text-muted-foreground">Acme Corp</div>
                        </div>
                      </div>
                      <span className="px-2 py-1 text-caption font-medium rounded-full bg-green-100 text-green-700">
                        Paid
                      </span>
                    </div>
                    <div className="space-y-3 mb-4">
                      <div className="h-3 bg-muted rounded w-3/4" />
                      <div className="h-3 bg-muted rounded w-1/2" />
                      <div className="h-3 bg-muted rounded w-2/3" />
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-body-sm text-muted-foreground">Total</span>
                      <span className="text-h4 font-bold text-heading">{formatCurrency(3250)}</span>
                    </div>
                  </div>
                  
                  {/* Floating notification */}
                  <motion.div
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -bottom-4 -right-4 bg-card rounded-lg shadow-soft-lg p-3 border border-border"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-caption font-medium text-foreground">Payment received</p>
                        <p className="text-[10px] text-muted-foreground">2 minutes ago</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Coming Soon Products */}
          <AnimatedSection delay={0.2}>
            <div className="text-center mb-8">
              <h3 className="text-h4 text-heading mb-2">Coming Soon</h3>
              <p className="text-body text-muted-foreground">
                More products to complete your financial workflow
              </p>
            </div>
            
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {comingSoonProducts.map((product) => {
                const Icon = product.icon;
                
                return (
                  <StaggerItem key={product.name}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={product.href}
                        className="block h-full bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                            <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="text-body font-semibold text-heading group-hover:text-primary transition-colors">
                                {product.name}
                              </h4>
                              <span className="px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-muted text-muted-foreground">
                                Soon
                              </span>
                            </div>
                            <p className="text-body-sm text-muted-foreground">
                              {product.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
