import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQSchema } from '@/components/seo/FAQSchema';
import type { Pillar } from '@/data/topicalMap';

interface GuideFAQProps {
  pillar: Pillar;
}

export function GuideFAQ({ pillar }: GuideFAQProps) {
  if (!pillar.faq || pillar.faq.length === 0) {
    return null;
  }

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      {/* FAQ Schema for rich results */}
      <FAQSchema items={pillar.faq} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-display-xs lg:text-display-sm font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Common questions about {pillar.title.toLowerCase()}.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {pillar.faq.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border/50 px-6 data-[state=open]:shadow-soft"
                >
                  <AccordionTrigger className="text-left text-body-lg font-medium hover:no-underline py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-body text-muted-foreground pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
