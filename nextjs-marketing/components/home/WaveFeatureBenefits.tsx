import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import featureRelief from '@/assets/feature-relief.jpg';
import featureProfessional from '@/assets/feature-professional.jpg';
import featureCompliance from '@/assets/feature-compliance.jpg';

const benefits = [
  {
    title: 'Breathe that sigh of relief',
    description: 'Stop stressing about getting paid. With automated reminders and payment tracking, you\'ll spend less time chasing invoices and more time doing what you love.',
    image: featureRelief,
    imageAlt: 'Person relaxed at desk with laptop',
    reverse: false,
  },
  {
    title: 'Look professional, feel confident',
    description: 'Send polished invoices that make a great impression. Customizable templates with your branding help you stand out and build trust with every client.',
    image: featureProfessional,
    imageAlt: 'Professional invoice on screen',
    reverse: true,
  },
  {
    title: 'Stay compliant, stay ready',
    description: 'Every transaction is logged with immutable records and complete audit trails. When regulators or auditors come calling, you\'re already prepared.',
    image: featureCompliance,
    imageAlt: 'Audit trail dashboard',
    reverse: false,
  },
];

export function WaveFeatureBenefits() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-h2 text-heading mb-4">
            Spend more time on{' '}
            <span className="font-serif italic text-primary">what you love</span>
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Invoicemonk handles the details so you can focus on your craft.
          </p>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto space-y-20 lg:space-y-32">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={benefit.title} delay={index * 0.1}>
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  benefit.reverse ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: benefit.reverse ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={benefit.reverse ? 'lg:col-start-2' : ''}
                >
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-wave-blue-light to-accent">
                      <img
                        src={benefit.image}
                        alt={benefit.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-orange/10 rounded-2xl -z-10" />
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-2xl -z-10" />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: benefit.reverse ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={benefit.reverse ? 'lg:col-start-1' : ''}
                >
                  <h3 className="text-h2 text-heading mb-4">{benefit.title}</h3>
                  <p className="text-body-lg text-muted-foreground">{benefit.description}</p>
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
