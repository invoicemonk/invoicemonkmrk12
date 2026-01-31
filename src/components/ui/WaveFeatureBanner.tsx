import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface WaveFeatureBannerProps {
  title: string;
  features: string[];
  variant?: 'primary' | 'orange';
}

export function WaveFeatureBanner({ title, features, variant = 'primary' }: WaveFeatureBannerProps) {
  const bgClass = variant === 'primary' 
    ? 'bg-primary text-primary-foreground' 
    : 'bg-accent-orange text-accent-orange-foreground';

  return (
    <section className={`py-12 lg:py-16 ${bgClass}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h3 lg:text-h2 text-center mb-8"
          >
            {title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-white">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
