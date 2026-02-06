import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const testimonials = [
  {
    quote: "Invoicemonk cut our invoicing time by 70%. The compliance features give me peace of mind, and my clients love the professional invoices.",
    highlight: "cut our invoicing time by 70%",
    name: 'Sarah Chen',
    title: 'Founder',
    company: 'PixelCraft Studio',
    location: 'Singapore',
  },
  {
    quote: "Finally, a finance tool that's both powerful and simple. Our team was up and running in a day, and the audit trails are invaluable.",
    highlight: "up and running in a day",
    name: 'Marcus Weber',
    title: 'CFO',
    company: 'Alpine Consulting',
    location: 'Germany',
  },
  {
    quote: "The expense tracking alone has saved us thousands. I recommend Invoicemonk to every business owner I know.",
    highlight: "saved us thousands",
    name: 'Priya Sharma',
    title: 'CEO',
    company: 'Bloom Digital',
    location: 'United Kingdom',
  },
];

// Helper to extract initials from name
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

export function WaveTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  // Helper to render quote with highlight
  const renderQuote = (quote: string, highlight: string) => {
    const parts = quote.split(highlight);
    if (parts.length === 1) return <span>{quote}</span>;
    return (
      <>
        {parts[0]}
        <span className="text-primary font-semibold">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-body-sm font-medium text-primary uppercase tracking-wide mb-2">
            Testimonials
          </p>
          <h2 className="text-h2 text-heading">
            Loved by <span className="font-serif italic">10,000+</span> businesses worldwide
          </h2>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-wave-blue-light to-background rounded-3xl p-8 lg:p-12">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-[200px_1fr] gap-8 items-center"
              >
                {/* Avatar */}
                <div className="hidden lg:flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-3xl font-semibold text-primary">
                      {getInitials(current.name)}
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="text-body font-semibold text-heading">{current.name}</p>
                    <p className="text-body-sm text-muted-foreground">
                      {current.title}, {current.company}
                    </p>
                    <p className="text-caption text-muted-foreground">{current.location}</p>
                  </div>
                </div>

                {/* Quote */}
                <div>
                  <blockquote className="text-h3 lg:text-h2 text-heading font-normal leading-relaxed mb-8">
                    "{renderQuote(current.quote, current.highlight)}"
                  </blockquote>

                  {/* Mobile avatar */}
                  <div className="flex items-center gap-4 lg:hidden">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-semibold text-primary">
                        {getInitials(current.name)}
                      </span>
                    </div>
                    <div>
                      <p className="text-body font-semibold text-heading">{current.name}</p>
                      <p className="text-body-sm text-muted-foreground">
                        {current.title}, {current.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-primary'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
