import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const trustBadges = [
  'No credit card required',
  'Free forever plan',
  'Cancel anytime',
];

export function WaveCTASection() {
  return (
    <section className="py-20 lg:py-32 bg-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-h1 lg:text-display mb-6 text-white">
            Ready to simplify{' '}
            <span className="font-serif italic text-primary">your finances?</span>
          </h2>
          <p className="text-body-lg text-white/90 mb-10">
            Join over 10,000 businesses worldwide who trust Invoicemonk for their financial records.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 h-14 text-body-lg bg-accent-orange hover:bg-accent-orange/90 text-accent-orange-foreground shadow-lg group"
            >
              <a href="https://app.invoicemonk.com/signup">
                Start Free Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-body-sm text-white/80">
                <Check className="w-4 h-4 text-primary" />
                <span>{badge}</span>
              </div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
