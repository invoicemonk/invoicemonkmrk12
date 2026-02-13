import { enNG } from './en-NG';
import { enUS } from './en-US';
import { enCA } from './en-CA';
import { enGB } from './en-GB';
import { enAU } from './en-AU';
import { LocaleConfig, SupportedCountry } from './types';

export * from './types';

export const locales: Record<SupportedCountry, LocaleConfig> = {
  NG: enNG,
  US: enUS,
  CA: enCA,
  GB: enGB,
  AU: enAU,
};

export const supportedCountries: SupportedCountry[] = ["NG", "US", "CA", "GB", "AU"];

export const defaultCountry: SupportedCountry = "US";

export function getLocale(countryCode: SupportedCountry): LocaleConfig {
  return locales[countryCode] || locales[defaultCountry];
}

export function formatCurrency(amount: number, locale: LocaleConfig): string {
  const { symbol, position } = locale.currency;
  const formattedAmount = amount.toLocaleString();
  
  return position === "before" 
    ? `${symbol}${formattedAmount}` 
    : `${formattedAmount}${symbol}`;
}

export function formatPrice(amount: number, locale: LocaleConfig, period: string = "/mo"): string {
  return `${formatCurrency(amount, locale)}${period}`;
}
