import { AnimatedSection } from '@/components/ui/AnimatedSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { homepageFAQs } from '@/data/homepageFAQs';

export function FAQSection() {
  const leftFaqs = homepageFAQs.slice(0, 4);
  const rightFaqs = homepageFAQs.slice(4);

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-h2 text-heading mb-4">
            Frequently Asked{' '}
            <span className="font-serif italic text-primary">Questions</span>
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Everything you need to know about Invoicemonk. Can't find what you're looking for? Contact our support team.
          </p>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6 lg:gap-12">
          <Accordion type="single" collapsible className="space-y-4">
            {leftFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`left-${index}`}
                className="bg-card rounded-xl px-6 border border-border shadow-sm"
              >
                <AccordionTrigger className="text-left text-body font-medium text-heading hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-body-sm text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Accordion type="single" collapsible className="space-y-4">
            {rightFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`right-${index}`}
                className="bg-card rounded-xl px-6 border border-border shadow-sm"
              >
                <AccordionTrigger className="text-left text-body font-medium text-heading hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-body-sm text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
