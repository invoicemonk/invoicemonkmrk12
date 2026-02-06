import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Check } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

interface Feature {
  icon?: LucideIcon;
  title: string;
  description: string;
}

interface WaveAlternatingFeatureProps {
  title: string;
  subtitle?: string;
  image?: string;
  imagePlaceholder?: React.ReactNode;
  features: Feature[];
  reversed?: boolean;
  className?: string;
}

export function WaveAlternatingFeature({
  title,
  subtitle,
  image,
  imagePlaceholder,
  features,
  reversed = false,
  className = '',
}: WaveAlternatingFeatureProps) {
  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
            {/* Image Side */}
            <AnimatedSection className={reversed ? 'lg:order-2' : 'lg:order-1'}>
              {image ? (
                <img 
                  src={image} 
                  alt={title}
                  className="rounded-2xl shadow-soft-xl border border-border w-full"
                />
              ) : imagePlaceholder ? (
                imagePlaceholder
              ) : (
                <div className="bg-card rounded-2xl shadow-soft-xl border border-border aspect-video flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/20" />
                    </div>
                    <p className="text-body text-muted-foreground">Feature Preview</p>
                  </div>
                </div>
              )}
            </AnimatedSection>

            {/* Content Side */}
            <AnimatedSection delay={0.2} className={reversed ? 'lg:order-1' : 'lg:order-2'}>
              <h2 className="text-h2 text-heading mb-4">{title}</h2>
              {subtitle && (
                <p className="text-body-lg text-muted-foreground mb-8">{subtitle}</p>
              )}

              <div className="space-y-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon || Check;
                  
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: reversed ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-body font-semibold text-heading mb-1">{feature.title}</h3>
                        <p className="text-body text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
