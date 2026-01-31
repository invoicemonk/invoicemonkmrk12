import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface WaveHowItWorksProps {
  title: string;
  subtitle?: string;
  steps: Step[];
  className?: string;
}

export function WaveHowItWorks({ title, subtitle, steps, className = '' }: WaveHowItWorksProps) {
  return (
    <section className={`py-20 lg:py-32 bg-card ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-h2 text-heading mb-4">{title}</h2>
          {subtitle && <p className="text-body-lg text-muted-foreground">{subtitle}</p>}
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Step Number */}
                <div className="w-24 h-24 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-h2 font-bold text-primary">{step.number}</span>
                </div>

                {/* Content */}
                <h3 className="text-h4 text-heading mb-3">{step.title}</h3>
                <p className="text-body text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
