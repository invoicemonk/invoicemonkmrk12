import { AnimatedSection } from '@/components/ui/AnimatedSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is Invoicemonk?',
    answer:
      'Invoicemonk is an all-in-one business finance platform that helps small businesses and freelancers manage invoicing, expenses, payments, and accounting. Our tools are designed to be simple, professional, and compliant with tax regulations worldwide.',
  },
  {
    question: 'Is Invoicemonk really free?',
    answer:
      'Yes! Invoicemonk offers a free forever plan that includes unlimited invoicing, client management, and basic expense tracking. We also offer premium plans with advanced features like payment processing, detailed reporting, and priority support.',
  },
  {
    question: 'How does invoicing work?',
    answer:
      'Creating invoices with Invoicemonk is simple. Choose from our professional templates, add your business details and logo, enter the line items, and send directly to your clients via email. You can track when invoices are viewed and paid, and set up automatic payment reminders.',
  },
  {
    question: 'What payment methods are supported?',
    answer:
      'Invoicemonk supports multiple payment methods including credit/debit cards, bank transfers, and popular digital wallets. Your clients can pay directly from the invoice with just a few clicks, and funds are deposited to your account quickly.',
  },
  {
    question: 'How secure is my data?',
    answer:
      'Security is our top priority. We use bank-level encryption (256-bit SSL) to protect all your data. Our servers are hosted in secure, certified data centers, and we perform regular security audits. Your financial information is never shared with third parties.',
  },
  {
    question: 'Can I track expenses with Invoicemonk?',
    answer:
      'Absolutely! Invoicemonk makes expense tracking effortless. Snap photos of receipts, categorize expenses automatically, and generate reports for tax time. Connect your bank accounts to import transactions automatically and stay on top of your spending.',
  },
  {
    question: 'Does Invoicemonk support multiple currencies?',
    answer:
      'Yes, Invoicemonk supports invoicing and payments in multiple currencies. This makes it perfect for businesses working with international clients. Exchange rates are updated automatically, and you can set your preferred currencies for different clients.',
  },
  {
    question: 'Can I customize my invoices with my branding?',
    answer:
      'Yes! You can fully customize your invoices with your logo, brand colors, and business information. Choose from multiple professional templates or create your own. Your invoices will look polished and represent your brand perfectly.',
  },
];

export function FAQSection() {
  const leftFaqs = faqs.slice(0, 4);
  const rightFaqs = faqs.slice(4);

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
