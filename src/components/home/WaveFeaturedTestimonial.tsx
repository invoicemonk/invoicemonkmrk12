import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

interface WaveFeaturedTestimonialProps {
  quote: string;
  author: {
    name: string;
    title: string;
    company?: string;
    avatar?: string;
  };
  rating?: number;
  variant?: 'primary' | 'card';
  className?: string;
}

export function WaveFeaturedTestimonial({
  quote,
  author,
  rating = 5,
  variant = 'primary',
  className = '',
}: WaveFeaturedTestimonialProps) {
  const isPrimary = variant === 'primary';

  return (
    <section className={`py-20 lg:py-32 ${isPrimary ? 'bg-primary' : 'bg-card'} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          {/* Quote Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Quote className={`w-16 h-16 mx-auto ${isPrimary ? 'text-white/30' : 'text-primary/20'}`} />
          </motion.div>

          {/* Stars */}
          {rating > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center gap-1 mb-8"
            >
              {[...Array(rating)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${isPrimary ? 'fill-wave-orange text-wave-orange' : 'fill-primary text-primary'}`}
                />
              ))}
            </motion.div>
          )}

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className={`text-h3 font-medium leading-relaxed mb-10 ${isPrimary ? 'text-white' : 'text-heading'}`}
          >
            "{quote}"
          </motion.blockquote>

          {/* Author */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            {author.avatar ? (
              <img
                src={author.avatar}
                alt={author.name}
                className="w-14 h-14 rounded-full object-cover"
              />
            ) : (
              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${isPrimary ? 'bg-white/20' : 'bg-primary/10'}`}>
                <span className={`text-h4 font-bold ${isPrimary ? 'text-white' : 'text-primary'}`}>
                  {author.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            )}
            <div className="text-left">
              <p className={`text-body font-semibold ${isPrimary ? 'text-white' : 'text-heading'}`}>
                {author.name}
              </p>
              <p className={`text-body-sm ${isPrimary ? 'text-white/80' : 'text-muted-foreground'}`}>
                {author.title}
                {author.company && <span>, {author.company}</span>}
              </p>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
