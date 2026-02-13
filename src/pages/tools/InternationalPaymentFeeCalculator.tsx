import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { PaymentFeeCalculator } from '@/components/tools/PaymentFeeCalculator';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: 'How accurate is this international payment fee calculator?',
    answer: 'This calculator provides estimates based on publicly available average fee structures. Actual fees depend on provider pricing, transfer amount, and timing. Always confirm final costs with your chosen provider before sending money.',
  },
  {
    question: 'What is an FX spread and why does it matter?',
    answer: 'An FX (foreign exchange) spread is the difference between the mid-market exchange rate and the rate a provider actually offers you. A higher spread means you receive less money. Some providers like Wise use the mid-market rate with zero spread, while others like PayPal add a 3–4% markup.',
  },
  {
    question: 'Which is the cheapest way to receive international payments?',
    answer: 'For most corridors, Wise offers the lowest total cost because it charges a small transparent fee with no FX spread. Bank transfers can be cheaper for very large amounts, while PayPal is the most expensive due to high fees and FX markups.',
  },
  {
    question: 'How long do international payments take?',
    answer: 'Card payments and PayPal are typically instant. Wise transfers take 1–2 business days. Traditional bank (SWIFT) transfers take 3–5 business days and sometimes longer for less common corridors.',
  },
  {
    question: 'Can I use this tool for business invoicing?',
    answer: 'Yes. This tool helps you understand the real cost of receiving payments before you create an invoice. With Invoicemonk, you can issue multi-currency invoices and choose the optimal payment method for each client.',
  },
];

export default function InternationalPaymentFeeCalculator() {
  return (
    <Layout>
      <SEOHead
        title="International Payment Fee Calculator | Compare Transfer Costs | Invoicemonk"
        description="Calculate and compare international payment fees across Wise, PayPal, bank transfers, and card payments. Find the cheapest way to receive money from abroad."
        ogType="website"
        canonical="/international-payment-fee-calculator"
      />
      <FAQSchema items={faqs} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              International Payment Fee Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How much will you <strong className="text-foreground">actually receive</strong> after fees and exchange rate markups? Compare costs across payment methods instantly.
            </p>
          </div>

          {/* Calculator */}
          <PaymentFeeCalculator />

          {/* SEO Content */}
          <article className="prose max-w-3xl mx-auto mt-16">
            <h2>Understanding International Payment Fees</h2>
            <p>
              When you receive an international payment, the amount that lands in your account is rarely the full amount sent. Fees, exchange rate spreads, and intermediary charges can eat into your earnings — sometimes by as much as 5–8% of the total.
            </p>
            <p>
              For freelancers, contractors, and small businesses that rely on cross-border income, understanding these costs is essential. Every percentage point matters when you're building a sustainable business.
            </p>

            <h2>How International Payment Fees Work</h2>
            <p>
              International payment costs typically come from three sources:
            </p>
            <ul>
              <li><strong>Transaction fees</strong> — A flat fee or percentage charged by the payment provider for processing the transfer.</li>
              <li><strong>Exchange rate markup (FX spread)</strong> — The difference between the mid-market rate and the rate you actually receive. This is often the largest hidden cost.</li>
              <li><strong>Intermediary bank fees</strong> — For SWIFT transfers, correspondent banks may deduct fees along the way.</li>
            </ul>

            <h2>Comparing Payment Methods</h2>

            <h3>Wise</h3>
            <p>
              Wise (formerly TransferWise) is known for transparent pricing. It charges a small percentage fee — typically around 0.6% — and converts at the mid-market exchange rate with no markup. This makes it the cheapest option for most international transfers.
            </p>

            <h3>PayPal</h3>
            <p>
              PayPal is widely accepted and convenient, but it's one of the most expensive ways to receive international payments. Cross-border fees can reach 4.49% plus a fixed fee, and PayPal's exchange rate includes a 3–4% spread on top.
            </p>

            <h3>Bank Transfer (SWIFT)</h3>
            <p>
              Traditional bank wires are reliable for large transfers but come with flat fees ($25–50), slow processing (3–5 business days), and exchange rate markups of 2–4%. Intermediary banks may also deduct additional fees.
            </p>

            <h3>Card Payments</h3>
            <p>
              Accepting card payments through processors like Stripe or Square is fast and convenient for online invoicing. Fees are typically around 2.9% + a fixed amount, with a 1–2% FX spread for international transactions.
            </p>

            <h2>Tips to Reduce International Payment Costs</h2>
            <ul>
              <li><strong>Invoice in the sender's currency</strong> — Let the sender pay in their local currency and use a provider with a low FX spread.</li>
              <li><strong>Batch smaller payments</strong> — Some providers have minimum fees, so consolidating payments can reduce per-transaction costs.</li>
              <li><strong>Choose the right method per client</strong> — High-value clients may warrant bank transfers, while frequent small payments work better with Wise.</li>
              <li><strong>Use multi-currency invoicing</strong> — With <Link to="/invoicing" className="text-primary">Invoicemonk's invoicing tools</Link>, you can issue invoices in multiple currencies and let clients pay using the method that works best.</li>
            </ul>

            <h2>Make Smarter International Payment Decisions</h2>
            <p>
              Before you create your next invoice, use this calculator to understand the real cost of each payment method. Then, issue a professional invoice with <Link to="/free-invoice-generator" className="text-primary">Invoicemonk's free invoice generator</Link> optimized for your chosen method.
            </p>
          </article>

          {/* FAQ */}
          <section className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related links */}
          <section className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-4">Related Resources</h2>
            <ul className="space-y-2">
              <li><Link to="/paypal-vs-wise-fees" className="text-primary hover:underline">PayPal vs Wise: Fee Comparison →</Link></li>
              <li><Link to="/cheapest-way-to-receive-international-payments" className="text-primary hover:underline">Cheapest Way to Receive International Payments →</Link></li>
              <li><Link to="/blog/international-payment-fees-explained" className="text-primary hover:underline">International Payment Fees Explained →</Link></li>
              <li><Link to="/payments" className="text-primary hover:underline">Invoicemonk Payment Processing →</Link></li>
            </ul>
          </section>

          {/* Final CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Invoice Internationally?</h2>
            <p className="text-muted-foreground mb-6">Issue multi-currency invoices and get paid faster with Invoicemonk.</p>
            <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                Start Free <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
