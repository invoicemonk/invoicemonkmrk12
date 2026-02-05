import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, ArrowRight, Sparkles } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { useLocale } from '@/hooks/useLocale';
import { SEOHead } from '@/components/seo/SEOHead';
import { pageSEO } from '@/components/seo/seoConfig';
import { getPricingPlans, calculatePrice } from '@/config/pricingPlans';

const faqs = [
  {
    question: 'Is there a free tier?',
    answer: 'Yes! Our Free tier lets you send up to 5 invoices per month with clean, professional layouts. Upgrade to Starter or Professional for unlimited invoices and advanced features.',
  },
  {
    question: 'Can I upgrade or downgrade anytime?',
    answer: 'Absolutely. You can change your plan at any time. When upgrading, you\'ll be prorated. When downgrading, your new rate starts at the next billing cycle.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express) and can arrange invoicing for annual Business plans.',
  },
  {
    question: 'Is my financial data secure?',
    answer: 'Your security is our priority. We use bank-level encryption, immutable audit logs, and are fully compliant with data protection regulations.',
  },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const { locale, formatCurrency } = useLocale();
  const plans = getPricingPlans(locale);
  const { pricingContent } = locale;

  // Determine grid layout based on number of plans
  const gridCols = plans.length === 4 
    ? 'md:grid-cols-2 lg:grid-cols-4' 
    : 'md:grid-cols-3';

  const seo = pageSEO['/pricing'];

  return (
    <Layout>
      <SEOHead
        title={seo?.getTitle(locale) || 'Pricing | Invoicemonk'}
        description={seo?.getDescription(locale) || 'Simple, transparent pricing. Start free, upgrade when you need more.'}
        canonical="https://invoicemonk.com/pricing"
      />
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-display text-heading mb-4">
              Simple, <span className="font-serif italic text-primary">transparent</span> pricing
            </h1>
            <p className="text-body-lg text-muted-foreground mb-8">
              Start free, upgrade when you need more. No hidden fees, no surprises.
            </p>
            
            {/* Toggle */}
            <div className="inline-flex items-center gap-3 p-1.5 bg-card border border-border rounded-full shadow-soft">
              <button 
                onClick={() => setIsAnnual(false)} 
                className={`px-5 py-2.5 rounded-full text-body-sm font-medium transition-all ${
                  !isAnnual 
                    ? 'bg-primary text-primary-foreground shadow-soft' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsAnnual(true)} 
                className={`px-5 py-2.5 rounded-full text-body-sm font-medium transition-all ${
                  isAnnual 
                    ? 'bg-primary text-primary-foreground shadow-soft' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Annual
                <span className="ml-1.5 text-wave-orange font-semibold">
                  {pricingContent.annualSavingsText}
                </span>
              </button>
            </div>
          </AnimatedSection>

          {/* Pricing Cards */}
          <StaggerContainer className={`grid ${gridCols} gap-6 lg:gap-8 max-w-6xl mx-auto`}>
            {plans.map((plan) => {
              const price = calculatePrice(locale, plan.id, isAnnual);
              
              return (
                <StaggerItem key={plan.id}>
                  <motion.div 
                    whileHover={{ y: -8 }} 
                    className={`relative h-full bg-card rounded-3xl p-8 border-2 transition-all ${
                      plan.popular 
                        ? 'border-primary shadow-soft-xl' 
                        : 'border-border hover:border-primary/30'
                    }`}
                  >
                    {plan.badge && (
                      <span className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 text-body-sm font-semibold rounded-full flex items-center gap-1.5 ${
                        plan.popular 
                          ? 'bg-accent-orange text-accent-orange-foreground' 
                          : 'bg-primary text-primary-foreground'
                      }`}>
                        {plan.popular ? (
                          <Sparkles className="w-3.5 h-3.5" />
                        ) : (
                          <Shield className="w-3.5 h-3.5" />
                        )}
                        {plan.badge}
                      </span>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-h3 text-heading mb-1">{plan.name}</h3>
                      <p className="text-body-sm text-muted-foreground">{plan.description}</p>
                    </div>
                    
                    <div className="text-center mb-8">
                      <span className="text-display text-heading">
                        {formatCurrency(price.monthly)}
                      </span>
                      <span className="text-body text-muted-foreground">/month</span>
                      {isAnnual && price.total > 0 && (
                        <p className="text-body-sm text-muted-foreground mt-1">
                          {formatCurrency(price.total)}/year
                        </p>
                      )}
                    </div>
                    
                    <Button 
                      asChild 
                      size="lg"
                      className={`w-full rounded-full mb-6 h-12 ${
                        plan.popular 
                          ? 'bg-accent-orange hover:bg-accent-orange/90 text-accent-orange-foreground' 
                          : ''
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      <a href={plan.ctaLink} className="flex items-center justify-center gap-2">
                        {plan.cta}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                    
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-body-sm">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                            plan.compliance ? 'bg-wave-green/10' : 'bg-muted'
                          }`}>
                            <Check className={`w-3 h-3 ${
                              plan.compliance ? 'text-wave-green' : 'text-muted-foreground'
                            }`} />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 text-heading mb-4">
              Frequently asked <span className="font-serif italic text-primary">questions</span>
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Everything you need to know about pricing and billing.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 0.1}>
                <div className="bg-background rounded-2xl p-6 border border-border">
                  <h3 className="text-body font-semibold text-heading mb-2">{faq.question}</h3>
                  <p className="text-body text-muted-foreground">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-h1 text-white mb-6">
              Ready to get <span className="font-serif italic">started?</span>
            </h2>
            <p className="text-body-lg text-white/90 mb-8">
              Join thousands of businesses who trust Invoicemonk for their invoicing needs.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 h-14 text-body-lg bg-white hover:bg-white/90 text-black shadow-lg"
            >
              <a href="https://app.invoicemonk.com/signup">
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
