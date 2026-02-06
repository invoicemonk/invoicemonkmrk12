import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Pillar } from '@/data/topicalMap';

interface GuideCTAProps {
  pillar: Pillar;
}

const productBenefits: Record<string, string[]> = {
  'invoicing-mastery': [
    'Create professional invoices in seconds',
    'Automatic payment reminders',
    'Multi-currency support',
    'Tax-compliant templates'
  ],
  'getting-paid': [
    'Accept online payments instantly',
    'Automatic late payment reminders',
    'Payment tracking dashboard',
    'Multiple payment gateways'
  ],
  'business-finances': [
    'Real-time financial insights',
    'Automated expense categorization',
    'Profit & loss reports',
    'Bank reconciliation'
  ],
  'tax-compliance': [
    'Region-specific tax compliance',
    'Automatic tax calculations',
    'Audit-ready reports',
    'Digital record keeping'
  ],
  'freelancer-success': [
    'Track time and projects',
    'Professional client portal',
    'Recurring invoice automation',
    'Expense tracking on-the-go'
  ],
  'estimates-proposals': [
    'Win more clients with pro proposals',
    'Convert estimates to invoices instantly',
    'Track proposal acceptance',
    'Customizable templates'
  ]
};

export function GuideCTA({ pillar }: GuideCTAProps) {
  const benefits = productBenefits[pillar.id] || productBenefits['invoicing-mastery'];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div 
            className="relative rounded-3xl p-8 lg:p-12 overflow-hidden"
            style={{ 
              background: `linear-gradient(135deg, ${pillar.color}15 0%, ${pillar.color}05 100%)` 
            }}
          >
            {/* Decorative elements */}
            <div 
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: pillar.color }}
            />
            
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-display-xs lg:text-display-sm font-bold text-foreground mb-4">
                    Put Your Knowledge Into Practice
                  </h2>
                  <p className="text-body-lg text-muted-foreground mb-6">
                    Ready to apply what you've learned? Start using Invoicemonk today and experience 
                    professional {pillar.title.toLowerCase()} made simple.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg" className="rounded-full">
                      <Link to={pillar.targetProduct}>
                        Get Started Free
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full">
                      <Link to="/pricing">
                        View Pricing
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle 
                        className="h-5 w-5 flex-shrink-0" 
                        style={{ color: pillar.color }} 
                      />
                      <span className="text-body text-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
