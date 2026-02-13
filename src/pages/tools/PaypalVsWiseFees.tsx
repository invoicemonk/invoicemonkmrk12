import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { PaymentFeeCalculator } from '@/components/tools/PaymentFeeCalculator';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const faqs = [
  {
    question: 'Is Wise cheaper than PayPal for international payments?',
    answer: 'In most cases, yes. Wise charges around 0.6% with the mid-market exchange rate (no FX spread), while PayPal charges 4.49% plus a fixed fee and adds a 3–4% exchange rate markup. For a $1,000 transfer, Wise typically saves $70–80 compared to PayPal.',
  },
  {
    question: 'Is PayPal faster than Wise?',
    answer: 'PayPal transfers are typically instant, while Wise takes 1–2 business days. If speed is your top priority and cost is secondary, PayPal has the edge.',
  },
  {
    question: 'Can I use both Wise and PayPal for my freelance business?',
    answer: 'Absolutely. Many freelancers offer PayPal for clients who prefer it and Wise for clients open to a more cost-effective method. With Invoicemonk, you can specify different payment methods on different invoices.',
  },
  {
    question: 'Does Wise support all currencies?',
    answer: 'Wise supports 50+ currencies with local bank details in major currencies like USD, GBP, EUR, and AUD. PayPal supports 25+ currencies but with less favourable exchange rates.',
  },
];

const comparisonFeatures = [
  { feature: 'Low transfer fees', wise: true, paypal: false },
  { feature: 'Mid-market exchange rate', wise: true, paypal: false },
  { feature: 'Instant transfers', wise: false, paypal: true },
  { feature: 'Widely accepted by clients', wise: false, paypal: true },
  { feature: 'Transparent fee breakdown', wise: true, paypal: false },
  { feature: 'Multi-currency accounts', wise: true, paypal: true },
  { feature: 'Business invoicing integration', wise: false, paypal: true },
  { feature: 'Low FX spread', wise: true, paypal: false },
];

export default function PaypalVsWiseFees() {
  return (
    <Layout>
      <SEOHead
        title="PayPal vs Wise Fees Compared | Which Is Cheaper? | Invoicemonk"
        description="Compare PayPal and Wise fees for international payments. See real fee breakdowns, exchange rate spreads, and find out which saves you more money."
        ogType="website"
        canonical="/paypal-vs-wise-fees"
      />
      <FAQSchema items={faqs} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              PayPal vs Wise: Fee Comparison
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Which service costs you less when receiving international payments? Compare fees, exchange rates, and speed side by side.
            </p>
          </div>

          {/* Calculator pre-filtered */}
          <PaymentFeeCalculator filterMethods={['wise', 'paypal']} />

          {/* Feature comparison */}
          <section className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Feature-by-Feature Comparison</h2>
            <Card className="border border-border overflow-hidden">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="py-3 px-4 text-left text-sm font-semibold text-foreground">Feature</th>
                      <th className="py-3 px-4 text-center text-sm font-semibold text-foreground">Wise</th>
                      <th className="py-3 px-4 text-center text-sm font-semibold text-foreground">PayPal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((row) => (
                      <tr key={row.feature} className="border-b border-border/50">
                        <td className="py-3 px-4 text-sm text-foreground">{row.feature}</td>
                        <td className="py-3 px-4 text-center">
                          {row.wise ? <Check className="w-4 h-4 text-primary mx-auto" /> : <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {row.paypal ? <Check className="w-4 h-4 text-primary mx-auto" /> : <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </section>

          {/* Content */}
          <article className="prose max-w-3xl mx-auto mt-16">
            <h2>PayPal vs Wise: Which Should Freelancers Use?</h2>
            <p>
              Both PayPal and Wise are popular among freelancers and small businesses for receiving international payments. But they serve different needs.
            </p>

            <h3>When to Use Wise</h3>
            <p>
              Wise is the better choice when cost matters. For a typical $1,000 payment from a US client to a Nigerian freelancer, Wise saves approximately $70–80 compared to PayPal. Wise uses the real mid-market exchange rate and charges a small, transparent fee — usually around 0.6%.
            </p>
            <p>
              Wise is ideal for regular freelance income, contractor payments, and any situation where you want to maximize what you receive.
            </p>

            <h3>When to Use PayPal</h3>
            <p>
              PayPal remains useful when clients specifically request it, or when speed is essential. PayPal payments arrive almost instantly, while Wise takes 1–2 business days. PayPal is also more widely recognized, which can make onboarding new clients easier.
            </p>
            <p>
              However, PayPal's total cost — including the ~4.49% transaction fee and 3–4% exchange rate spread — makes it one of the most expensive options for international payments.
            </p>

            <h3>Use Case Breakdown</h3>
            <ul>
              <li><strong>Freelancer receiving regular payments:</strong> Wise — lower fees add up to significant savings over time.</li>
              <li><strong>One-off client payment:</strong> PayPal — convenience outweighs cost for a single transaction.</li>
              <li><strong>Small business with multiple international clients:</strong> Both — offer Wise as default, PayPal as fallback.</li>
            </ul>

            <h2>Optimize Your Payment Strategy with Invoicemonk</h2>
            <p>
              With <Link to="/invoicing" className="text-primary">Invoicemonk</Link>, you can issue multi-currency invoices and specify different payment methods for different clients. Know your costs before invoicing, and make smarter international payment decisions.
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

          {/* Related */}
          <section className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-4">Related Resources</h2>
            <ul className="space-y-2">
              <li><Link to="/international-payment-fee-calculator" className="text-primary hover:underline">International Payment Fee Calculator →</Link></li>
              <li><Link to="/cheapest-way-to-receive-international-payments" className="text-primary hover:underline">Cheapest Way to Receive International Payments →</Link></li>
              <li><Link to="/blog/international-payment-fees-explained" className="text-primary hover:underline">International Payment Fees Explained →</Link></li>
            </ul>
          </section>

          <div className="mt-16 text-center">
            <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">
              <Button size="lg">Start Free with Invoicemonk <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
