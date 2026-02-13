import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { PaymentFeeCalculator } from '@/components/tools/PaymentFeeCalculator';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: 'What is the cheapest way to receive international payments?',
    answer: 'For most freelancers and small businesses, Wise offers the lowest total cost. It charges ~0.6% with the mid-market rate and no FX spread. For very large transfers, a bank wire may be competitive if the flat fee is small relative to the amount.',
  },
  {
    question: 'How can I avoid high exchange rate fees?',
    answer: 'Use a provider that offers the mid-market rate (like Wise). Avoid providers with hidden FX spreads — this is where most of the cost hides. Also consider invoicing in the sender\'s local currency to give them a better experience.',
  },
  {
    question: 'Is PayPal the cheapest option for small amounts?',
    answer: 'No. PayPal\'s high percentage fee (4.49%) and exchange rate markup (3–4%) make it one of the most expensive options at any amount. Wise is cheaper even for small transfers.',
  },
  {
    question: 'Should I invoice in my currency or the client\'s currency?',
    answer: 'Invoicing in the client\'s local currency often results in faster payments and better client experience. Use a low-spread provider like Wise for the currency conversion on your end.',
  },
];

export default function CheapestInternationalPayments() {
  return (
    <Layout>
      <SEOHead
        title="Cheapest Way to Receive International Payments | 2026 Guide | Invoicemonk"
        description="Find the cheapest way to receive international payments. Compare Wise, PayPal, bank transfers, and cards. Ranked by cost with tips to reduce fees."
        ogType="website"
        canonical="/cheapest-way-to-receive-international-payments"
      />
      <FAQSchema items={faqs} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              The Cheapest Way to Receive International Payments
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stop losing money to hidden fees. Find the most cost-effective method for your specific corridor and amount.
            </p>
          </div>

          <PaymentFeeCalculator />

          <article className="prose max-w-3xl mx-auto mt-16">
            <h2>Payment Methods Ranked by Cost (Cheapest First)</h2>

            <h3>1. Wise — Best Overall Value</h3>
            <p>
              Wise consistently offers the lowest total cost for international payments. With a ~0.6% fee and mid-market exchange rate, there's no hidden FX spread eating into your money. For a $1,000 transfer, you'll pay roughly $6 in fees and receive the full market rate.
            </p>
            <p>
              <strong>Best for:</strong> Freelancers, contractors, and businesses receiving regular international payments.
            </p>

            <h3>2. Card Payments — Good for Online Invoicing</h3>
            <p>
              Accepting card payments through processors like Stripe costs around 2.9% + $0.30 per transaction, plus a 1–2% FX spread for international cards. It's more expensive than Wise but offers instant processing and a smooth client experience.
            </p>
            <p>
              <strong>Best for:</strong> Online invoicing, e-commerce, clients who prefer paying by card.
            </p>

            <h3>3. Bank Transfer (SWIFT) — Best for Large Amounts</h3>
            <p>
              Bank wires charge flat fees ($25–50) plus a 2–4% exchange rate markup. For small amounts, the flat fee makes this expensive. But for transfers above $10,000, the percentage cost becomes competitive.
            </p>
            <p>
              <strong>Best for:</strong> Large one-off payments, established business relationships.
            </p>

            <h3>4. PayPal — Most Convenient, Most Expensive</h3>
            <p>
              PayPal is the easiest option for many clients but charges 4.49% plus a fixed fee and adds a 3–4% exchange rate spread. On a $1,000 payment, total costs can exceed $80.
            </p>
            <p>
              <strong>Best for:</strong> Clients who insist on PayPal, small one-off payments where convenience matters more than cost.
            </p>

            <h2>5 Tips to Reduce International Payment Fees</h2>
            <ol>
              <li><strong>Compare before you invoice.</strong> Use the calculator above to see real cost differences before choosing a payment method.</li>
              <li><strong>Invoice in the client's currency.</strong> Let the sender pay in their local currency — you control the conversion.</li>
              <li><strong>Avoid double conversion.</strong> If both parties have Wise accounts, transfer directly without going through multiple currencies.</li>
              <li><strong>Batch smaller payments.</strong> Consolidate weekly invoices into monthly to reduce per-transaction fixed fees.</li>
              <li><strong>Use <Link to="/invoicing" className="text-primary">multi-currency invoicing</Link></strong> to offer clients the flexibility to pay in their preferred currency.</li>
            </ol>

            <h2>Country-Specific Corridors</h2>
            <p>Costs vary significantly by corridor. Explore specific routes:</p>
            <ul>
              <li><Link to="/receive-usd-in-nigeria-cost" className="text-primary">Receive USD in Nigeria →</Link></li>
              <li><Link to="/receive-gbp-in-nigeria-cost" className="text-primary">Receive GBP in Nigeria →</Link></li>
              <li><Link to="/receive-usd-in-uk-cost" className="text-primary">Receive USD in the UK →</Link></li>
              <li><Link to="/receive-eur-in-uk-cost" className="text-primary">Receive EUR in the UK →</Link></li>
              <li><Link to="/receive-usd-in-canada-cost" className="text-primary">Receive USD in Canada →</Link></li>
              <li><Link to="/receive-usd-in-australia-cost" className="text-primary">Receive USD in Australia →</Link></li>
            </ul>

            <h2>Know Your Costs Before Invoicing</h2>
            <p>
              The best time to optimize payment costs is <em>before</em> you send the invoice. With <Link to="/free-invoice-generator" className="text-primary">Invoicemonk's free invoice generator</Link>, you can create professional multi-currency invoices and specify the optimal payment method for each client.
            </p>
          </article>

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

          <section className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-4">Related Resources</h2>
            <ul className="space-y-2">
              <li><Link to="/international-payment-fee-calculator" className="text-primary hover:underline">International Payment Fee Calculator →</Link></li>
              <li><Link to="/paypal-vs-wise-fees" className="text-primary hover:underline">PayPal vs Wise Fee Comparison →</Link></li>
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
