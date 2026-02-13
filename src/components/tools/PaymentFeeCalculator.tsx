import { useState, useMemo } from 'react';
import { currencies, countries, calculateFees, type CalculationResult } from '@/config/paymentFeeModels';
import { PaymentMethodComparison } from './PaymentMethodComparison';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calculator } from 'lucide-react';

interface PaymentFeeCalculatorProps {
  /** Pre-select only certain methods (e.g. ['wise','paypal']) */
  filterMethods?: string[];
  /** Pre-fill defaults */
  defaultSendCurrency?: string;
  defaultReceiveCurrency?: string;
  defaultAmount?: number;
  onCalculate?: (results: CalculationResult[]) => void;
}

function formatCurrency(amount: number, currency: string) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function PaymentFeeCalculator({
  filterMethods,
  defaultSendCurrency = 'USD',
  defaultReceiveCurrency = 'NGN',
  defaultAmount = 1000,
  onCalculate,
}: PaymentFeeCalculatorProps) {
  const [amount, setAmount] = useState<number>(defaultAmount);
  const [sendCurrency, setSendCurrency] = useState(defaultSendCurrency);
  const [receiveCurrency, setReceiveCurrency] = useState(defaultReceiveCurrency);
  const [senderCountry, setSenderCountry] = useState('US');
  const [receiverCountry, setReceiverCountry] = useState('NG');
  const [hasCalculated, setHasCalculated] = useState(false);

  const results = useMemo(() => {
    if (!hasCalculated || amount <= 0) return [];
    let res = calculateFees(amount, sendCurrency, receiveCurrency);
    if (filterMethods && filterMethods.length > 0) {
      res = res.filter((r) => filterMethods.includes(r.method.id));
    }
    return res;
  }, [amount, sendCurrency, receiveCurrency, hasCalculated, filterMethods]);

  const handleCalculate = () => {
    setHasCalculated(true);
    if (onCalculate) {
      const res = calculateFees(amount, sendCurrency, receiveCurrency);
      onCalculate(filterMethods ? res.filter((r) => filterMethods.includes(r.method.id)) : res);
    }
  };

  return (
    <div className="space-y-6">
      {/* Input form */}
      <Card className="border border-border">
        <CardContent className="p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Amount */}
            <div className="space-y-2">
              <label htmlFor="calc-amount" className="text-sm font-medium text-foreground">
                Amount to Send
              </label>
              <Input
                id="calc-amount"
                type="number"
                min={1}
                value={amount}
                onChange={(e) => {
                  setAmount(Number(e.target.value));
                  setHasCalculated(false);
                }}
                placeholder="1000"
                aria-label="Amount to send"
              />
            </div>

            {/* Send currency */}
            <div className="space-y-2">
              <label htmlFor="send-currency" className="text-sm font-medium text-foreground">
                Sending Currency
              </label>
              <Select value={sendCurrency} onValueChange={(v) => { setSendCurrency(v); setHasCalculated(false); }}>
                <SelectTrigger id="send-currency" aria-label="Sending currency">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((c) => (
                    <SelectItem key={c.code} value={c.code}>
                      {c.symbol} {c.code} – {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Receive currency */}
            <div className="space-y-2">
              <label htmlFor="receive-currency" className="text-sm font-medium text-foreground">
                Receiving Currency
              </label>
              <Select value={receiveCurrency} onValueChange={(v) => { setReceiveCurrency(v); setHasCalculated(false); }}>
                <SelectTrigger id="receive-currency" aria-label="Receiving currency">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((c) => (
                    <SelectItem key={c.code} value={c.code}>
                      {c.symbol} {c.code} – {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sender country */}
            <div className="space-y-2">
              <label htmlFor="sender-country" className="text-sm font-medium text-foreground">
                Sender Country
              </label>
              <Select value={senderCountry} onValueChange={setSenderCountry}>
                <SelectTrigger id="sender-country" aria-label="Sender country">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((c) => (
                    <SelectItem key={c.code} value={c.code}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Receiver country */}
            <div className="space-y-2">
              <label htmlFor="receiver-country" className="text-sm font-medium text-foreground">
                Receiver Country
              </label>
              <Select value={receiverCountry} onValueChange={setReceiverCountry}>
                <SelectTrigger id="receiver-country" aria-label="Receiver country">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((c) => (
                    <SelectItem key={c.code} value={c.code}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Calculate button */}
            <div className="flex items-end">
              <Button onClick={handleCalculate} className="w-full" size="lg" disabled={amount <= 0}>
                <Calculator className="w-4 h-4 mr-2" />
                Calculate Fees
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {hasCalculated && results.length > 0 && (
        <div className="space-y-6">
          {/* Summary cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {results.map((result) => (
              <Card key={result.method.id} className={`border ${result.badges.includes('Cheapest') ? 'border-primary ring-1 ring-primary/20' : 'border-border'}`}>
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">{result.method.name}</span>
                    {result.badges.includes('Cheapest') && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Best Value</span>
                    )}
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {formatCurrency(result.estimatedNetReceived, receiveCurrency)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Estimated net received</p>
                  </div>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div className="flex justify-between">
                      <span>Fees</span>
                      <span>{formatCurrency(result.estimatedFees, sendCurrency)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>FX spread</span>
                      <span>{result.method.estimatedFxSpreadPercent > 0 ? `~${result.method.estimatedFxSpreadPercent}%` : 'None'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Speed</span>
                      <span>{result.method.processingTime}</span>
                    </div>
                  </div>
                  <a
                    href={`https://app.invoicemonk.com/signup?currency=${sendCurrency}&method=${result.method.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-2"
                  >
                    Create invoice <ArrowRight className="w-3 h-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Comparison table */}
          <Card className="border border-border">
            <CardContent className="p-0 sm:p-2">
              <PaymentMethodComparison results={results} receiveCurrency={receiveCurrency} />
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto">
            These estimates are based on average public fee data. Actual rates depend on provider pricing and timing.
            Final costs are calculated inside your Invoicemonk account.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`https://app.invoicemonk.com/signup?currency=${sendCurrency}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">
                Create a Free Invoice
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <a
              href="https://app.invoicemonk.com/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                Open a Free Account
              </Button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
