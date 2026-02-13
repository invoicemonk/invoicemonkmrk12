import { useParams, Navigate, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { PaymentFeeCalculator } from '@/components/tools/PaymentFeeCalculator';
import { getCorridorData, keyCorridor } from '@/config/paymentFeeModels';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ReceiveCurrencyInCountry() {
  const { currency, country } = useParams<{ currency: string; country: string }>();
  const corridor = currency && country ? getCorridorData(currency, country) : undefined;

  if (!corridor) {
    return <Navigate to="/international-payment-fee-calculator" replace />;
  }

  const title = `Receive ${corridor.sendCurrency} in ${corridor.countryName} — Cost Breakdown`;
  const description = `How much does it cost to receive ${corridor.sendCurrency} in ${corridor.countryName}? Compare fees across Wise, PayPal, bank transfers, and card payments for the ${corridor.sendCurrency} to ${corridor.receiveCurrency} corridor.`;

  const faqs = [
    {
      question: `What is the cheapest way to receive ${corridor.sendCurrency} in ${corridor.countryName}?`,
      answer: `For most individuals and businesses in ${corridor.countryName}, Wise offers the lowest total cost to receive ${corridor.sendCurrency}. It charges ~0.6% with the mid-market rate and no hidden FX markup.`,
    },
    {
      question: `How long does it take to receive ${corridor.sendCurrency} in ${corridor.countryName}?`,
      answer: `Wise transfers typically arrive in 1–2 business days. PayPal is instant. Bank transfers (SWIFT) take 3–5 business days for the ${corridor.sendCurrency} to ${corridor.receiveCurrency} corridor.`,
    },
    {
      question: `Can I invoice clients in ${corridor.sendCurrency} from ${corridor.countryName}?`,
      answer: `Yes. With Invoicemonk, you can create professional invoices in ${corridor.sendCurrency} and receive payments using your preferred method, all from ${corridor.countryName}.`,
    },
  ];

  const otherCorridors = keyCorridor.filter(
    (c) => !(c.currency === corridor.currency && c.country === corridor.country),
  );

  return (
    <Layout>
      <SEOHead
        title={`${title} | Invoicemonk`}
        description={description}
        ogType="website"
        canonical={`/receive-${corridor.currency}-in-${corridor.country}-cost`}
      />
      <FAQSchema items={faqs} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare the real cost of receiving {corridor.sendCurrency} payments in {corridor.countryName} across popular payment methods.
            </p>
          </div>

          <PaymentFeeCalculator
            defaultSendCurrency={corridor.sendCurrency}
            defaultReceiveCurrency={corridor.receiveCurrency}
            defaultAmount={1000}
          />

          <article className="prose max-w-3xl mx-auto mt-16">
            <h2>Receiving {corridor.sendCurrency} in {corridor.countryName}</h2>
            <p>
              Whether you're a freelancer, contractor, or small business in {corridor.countryName}, receiving {corridor.sendCurrency} payments involves currency conversion. The total cost depends on the payment method, the provider's exchange rate, and any fixed fees.
            </p>
            <p>
              Use the calculator above to see exactly how much you'll receive in {corridor.receiveCurrency} after all fees and exchange rate markups.
            </p>

            <h2>Best Methods for the {corridor.sendCurrency} → {corridor.receiveCurrency} Corridor</h2>
            <h3>Wise</h3>
            <p>
              Wise typically offers the best rate for {corridor.sendCurrency} to {corridor.receiveCurrency} transfers, using the mid-market rate with a small transparent fee. Ideal for regular freelance payments.
            </p>
            <h3>PayPal</h3>
            <p>
              PayPal is convenient but adds a 3–4% FX spread on top of its 4.49% fee. For a $1,000 payment, this corridor could cost $70–80+ via PayPal.
            </p>
            <h3>Bank Transfer</h3>
            <p>
              SWIFT transfers are reliable for large amounts but slow (3–5 days) with flat fees and hidden exchange rate markups.
            </p>

            <h2>Tips for {corridor.countryName}-Based Businesses</h2>
            <ul>
              <li>Invoice in {corridor.sendCurrency} so clients pay in their local currency.</li>
              <li>Use Wise for regular payments to maximize your {corridor.receiveCurrency} earnings.</li>
              <li>Offer PayPal as a fallback for clients who prefer it.</li>
              <li>Use <Link to="/invoicing" className="text-primary">Invoicemonk</Link> to create multi-currency invoices and track payments automatically.</li>
            </ul>
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

          {/* Other corridors */}
          <section className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-4">Other Payment Corridors</h2>
            <ul className="space-y-2">
              {otherCorridors.slice(0, 6).map((c) => (
                <li key={`${c.currency}-${c.country}`}>
                  <Link to={`/receive-${c.currency}-in-${c.country}-cost`} className="text-primary hover:underline">
                    Receive {c.sendCurrency} in {c.countryName} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8 max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-4">Related Resources</h2>
            <ul className="space-y-2">
              <li><Link to="/international-payment-fee-calculator" className="text-primary hover:underline">International Payment Fee Calculator →</Link></li>
              <li><Link to="/cheapest-way-to-receive-international-payments" className="text-primary hover:underline">Cheapest Way to Receive International Payments →</Link></li>
              <li><Link to="/paypal-vs-wise-fees" className="text-primary hover:underline">PayPal vs Wise Fees →</Link></li>
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
