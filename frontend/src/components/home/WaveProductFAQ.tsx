import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQ {
  question: string;
  answer: string;
}

interface WaveProductFAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
  className?: string;
}

export function WaveProductFAQ({
  title = 'Frequently asked questions',
  subtitle,
  faqs,
  className = '',
}: WaveProductFAQProps) {
  return (
    <section className={`py-20 lg:py-32 bg-background ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-h2 text-heading mb-4">{title}</h2>
          {subtitle && <p className="text-body-lg text-muted-foreground">{subtitle}</p>}
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="text-left text-body font-medium text-heading hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-body text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
