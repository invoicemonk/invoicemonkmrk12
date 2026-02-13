// Static fee models for payment intelligence tools
// All data is advisory/estimated - no live API calls

export interface FeeModel {
  id: string;
  name: string;
  description: string;
  baseFeePercent: number;
  fixedFee: Record<string, number>; // by currency
  estimatedFxSpreadPercent: number;
  processingTime: string;
  processingDays: [number, number]; // min-max days
  bestFor: string;
  transparency: 'high' | 'medium' | 'low';
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Country {
  code: string;
  name: string;
  currency: string;
  region: string;
}

export const currencies: Currency[] = [
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'GBP', name: 'British Pound', symbol: '£' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'NGN', name: 'Nigerian Naira', symbol: '₦' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'CA$' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
];

export const countries: Country[] = [
  { code: 'US', name: 'United States', currency: 'USD', region: 'North America' },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP', region: 'Europe' },
  { code: 'DE', name: 'Germany', currency: 'EUR', region: 'Europe' },
  { code: 'FR', name: 'France', currency: 'EUR', region: 'Europe' },
  { code: 'NG', name: 'Nigeria', currency: 'NGN', region: 'Africa' },
  { code: 'CA', name: 'Canada', currency: 'CAD', region: 'North America' },
  { code: 'AU', name: 'Australia', currency: 'AUD', region: 'Oceania' },
  { code: 'NL', name: 'Netherlands', currency: 'EUR', region: 'Europe' },
  { code: 'IE', name: 'Ireland', currency: 'EUR', region: 'Europe' },
  { code: 'GH', name: 'Ghana', currency: 'USD', region: 'Africa' },
  { code: 'KE', name: 'Kenya', currency: 'USD', region: 'Africa' },
  { code: 'ZA', name: 'South Africa', currency: 'USD', region: 'Africa' },
];

export const feeModels: FeeModel[] = [
  {
    id: 'wise',
    name: 'Wise',
    description: 'Low-cost transfers using the mid-market exchange rate with transparent, upfront fees.',
    baseFeePercent: 0.6,
    fixedFee: { USD: 0, GBP: 0, EUR: 0, NGN: 0, CAD: 0, AUD: 0 },
    estimatedFxSpreadPercent: 0,
    processingTime: '1–2 business days',
    processingDays: [1, 2],
    bestFor: 'Cost-conscious freelancers & businesses',
    transparency: 'high',
  },
  {
    id: 'paypal',
    name: 'PayPal',
    description: 'Widely accepted with instant transfers, but higher fees and unfavourable exchange rates.',
    baseFeePercent: 4.49,
    fixedFee: { USD: 0.49, GBP: 0.39, EUR: 0.39, NGN: 150, CAD: 0.59, AUD: 0.59 },
    estimatedFxSpreadPercent: 3.5,
    processingTime: 'Instant to 1 day',
    processingDays: [0, 1],
    bestFor: 'Quick convenience payments',
    transparency: 'low',
  },
  {
    id: 'bank_transfer',
    name: 'Bank Transfer (SWIFT)',
    description: 'Traditional wire transfers through the banking network. Reliable but slow with hidden FX markups.',
    baseFeePercent: 0,
    fixedFee: { USD: 35, GBP: 25, EUR: 30, NGN: 5000, CAD: 35, AUD: 30 },
    estimatedFxSpreadPercent: 3.0,
    processingTime: '3–5 business days',
    processingDays: [3, 5],
    bestFor: 'Large one-off transfers',
    transparency: 'medium',
  },
  {
    id: 'card',
    name: 'Card Payment',
    description: 'Accept payments via credit or debit card through a payment processor. Fast but with processing fees.',
    baseFeePercent: 2.9,
    fixedFee: { USD: 0.30, GBP: 0.20, EUR: 0.25, NGN: 100, CAD: 0.30, AUD: 0.30 },
    estimatedFxSpreadPercent: 1.5,
    processingTime: 'Instant',
    processingDays: [0, 0],
    bestFor: 'Online invoices & e-commerce',
    transparency: 'medium',
  },
];

// Estimated indicative FX rates (static, for illustration only)
export const indicativeRates: Record<string, Record<string, number>> = {
  USD: { USD: 1, GBP: 0.79, EUR: 0.92, NGN: 1550, CAD: 1.36, AUD: 1.54 },
  GBP: { USD: 1.27, GBP: 1, EUR: 1.17, NGN: 1960, CAD: 1.72, AUD: 1.95 },
  EUR: { USD: 1.09, GBP: 0.86, EUR: 1, NGN: 1680, CAD: 1.48, AUD: 1.67 },
  NGN: { USD: 0.000645, GBP: 0.00051, EUR: 0.000595, NGN: 1, CAD: 0.000877, AUD: 0.000993 },
  CAD: { USD: 0.74, GBP: 0.58, EUR: 0.68, NGN: 1140, CAD: 1, AUD: 1.13 },
  AUD: { USD: 0.65, GBP: 0.51, EUR: 0.60, NGN: 1007, CAD: 0.88, AUD: 1 },
};

export interface CalculationResult {
  method: FeeModel;
  sendAmount: number;
  sendCurrency: string;
  receiveCurrency: string;
  estimatedFees: number;
  estimatedFxCost: number;
  estimatedNetReceived: number;
  badges: string[];
}

export function calculateFees(
  amount: number,
  sendCurrency: string,
  receiveCurrency: string,
): CalculationResult[] {
  const rate = indicativeRates[sendCurrency]?.[receiveCurrency] ?? 1;
  const isSameCurrency = sendCurrency === receiveCurrency;

  const results: CalculationResult[] = feeModels.map((model) => {
    const fixedFee = model.fixedFee[sendCurrency] ?? 0;
    const percentFee = amount * (model.baseFeePercent / 100);
    const totalFees = fixedFee + percentFee;

    const afterFees = amount - totalFees;

    // FX spread cost (only when currencies differ)
    const fxSpreadCost = isSameCurrency ? 0 : afterFees * (model.estimatedFxSpreadPercent / 100);
    const afterFx = afterFees - fxSpreadCost;

    const netReceived = afterFx * rate;

    return {
      method: model,
      sendAmount: amount,
      sendCurrency,
      receiveCurrency,
      estimatedFees: totalFees,
      estimatedFxCost: fxSpreadCost * rate,
      estimatedNetReceived: netReceived,
      badges: [],
    };
  });

  // Sort by net received descending
  results.sort((a, b) => b.estimatedNetReceived - a.estimatedNetReceived);

  // Assign badges
  if (results.length > 0) {
    results[0].badges.push('Cheapest');
  }

  // Fastest badge
  const fastest = [...results].sort(
    (a, b) => a.method.processingDays[0] - b.method.processingDays[0],
  )[0];
  if (fastest) fastest.badges.push('Fastest');

  // Most transparent
  const transparent = results.find((r) => r.method.transparency === 'high');
  if (transparent) transparent.badges.push('Most Transparent');

  return results;
}

// Key corridors for dynamic pages
export const keyCorridor = [
  { currency: 'usd', country: 'nigeria', sendCurrency: 'USD', receiveCurrency: 'NGN', countryName: 'Nigeria' },
  { currency: 'gbp', country: 'nigeria', sendCurrency: 'GBP', receiveCurrency: 'NGN', countryName: 'Nigeria' },
  { currency: 'eur', country: 'nigeria', sendCurrency: 'EUR', receiveCurrency: 'NGN', countryName: 'Nigeria' },
  { currency: 'usd', country: 'uk', sendCurrency: 'USD', receiveCurrency: 'GBP', countryName: 'United Kingdom' },
  { currency: 'eur', country: 'uk', sendCurrency: 'EUR', receiveCurrency: 'GBP', countryName: 'United Kingdom' },
  { currency: 'usd', country: 'canada', sendCurrency: 'USD', receiveCurrency: 'CAD', countryName: 'Canada' },
  { currency: 'usd', country: 'australia', sendCurrency: 'USD', receiveCurrency: 'AUD', countryName: 'Australia' },
  { currency: 'gbp', country: 'us', sendCurrency: 'GBP', receiveCurrency: 'USD', countryName: 'United States' },
  { currency: 'eur', country: 'us', sendCurrency: 'EUR', receiveCurrency: 'USD', countryName: 'United States' },
];

export function getCorridorData(currency: string, country: string) {
  return keyCorridor.find(
    (c) => c.currency === currency.toLowerCase() && c.country === country.toLowerCase(),
  );
}
