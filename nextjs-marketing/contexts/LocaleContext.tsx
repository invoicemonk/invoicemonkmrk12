import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import { 
  LocaleConfig, 
  SupportedCountry, 
  locales, 
  defaultCountry, 
  getLocale, 
  formatCurrency as formatCurrencyUtil,
  formatPrice as formatPriceUtil,
  supportedCountries 
} from '@/locales';

const LOCALE_STORAGE_KEY = 'invoicemonk-country';

interface LocaleContextType {
  locale: LocaleConfig;
  countryCode: SupportedCountry;
  setCountry: (country: SupportedCountry) => void;
  formatCurrency: (amount: number) => string;
  formatPrice: (amount: number, period?: string) => string;
  isLoading: boolean;
  supportedCountries: SupportedCountry[];
}

export const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  children: React.ReactNode;
}

// Map of timezone prefixes to country codes
const timezoneToCountry: Record<string, SupportedCountry> = {
  'Africa/Lagos': 'NG',
  'Africa/': 'NG', // Default African timezones to Nigeria
  'America/New_York': 'US',
  'America/Chicago': 'US',
  'America/Denver': 'US',
  'America/Los_Angeles': 'US',
  'America/Phoenix': 'US',
  'America/Toronto': 'CA',
  'America/Vancouver': 'CA',
  'America/Montreal': 'CA',
  'America/Edmonton': 'CA',
  'America/Winnipeg': 'CA',
  'Europe/London': 'GB',
  'Europe/Belfast': 'GB',
  'Australia/Sydney': 'AU',
  'Australia/Melbourne': 'AU',
  'Australia/Brisbane': 'AU',
  'Australia/Perth': 'AU',
  'Australia/Adelaide': 'AU',
};

// Map locale codes to country codes
const localeToCountry: Record<string, SupportedCountry> = {
  'en-NG': 'NG',
  'en-US': 'US',
  'en-GB': 'GB',
  'en-CA': 'CA',
  'en-AU': 'AU',
};

function getLocaleFromURLParam(): SupportedCountry | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const localeParam = urlParams.get('locale');
    
    if (localeParam && localeToCountry[localeParam]) {
      return localeToCountry[localeParam];
    }
    
    // Also support direct country codes in URL
    if (localeParam && supportedCountries.includes(localeParam as SupportedCountry)) {
      return localeParam as SupportedCountry;
    }
    
    return null;
  } catch {
    return null;
  }
}

function detectCountryFromTimezone(): SupportedCountry | null {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // Check exact match first
    if (timezoneToCountry[timezone]) {
      return timezoneToCountry[timezone];
    }
    
    // Check prefix matches for broader regions
    for (const [tz, country] of Object.entries(timezoneToCountry)) {
      if (timezone.startsWith(tz.split('/')[0] + '/')) {
        // More specific matching for regions
        if (timezone.startsWith('America/')) {
          // Canadian cities
          if (['America/Toronto', 'America/Vancouver', 'America/Montreal', 'America/Edmonton', 'America/Winnipeg', 'America/Halifax', 'America/St_Johns', 'America/Regina', 'America/Whitehorse', 'America/Yellowknife'].some(tz => timezone === tz)) {
            return 'CA';
          }
          return 'US'; // Default American timezones to US
        }
        if (timezone.startsWith('Australia/')) return 'AU';
        if (timezone.startsWith('Europe/London') || timezone === 'Europe/Belfast') return 'GB';
      }
    }
    
    return null;
  } catch {
    return null;
  }
}

async function detectCountryFromIP(): Promise<SupportedCountry | null> {
  try {
    // Using ip-api.com free tier (no API key needed, 45 requests/minute limit)
    const response = await fetch('http://ip-api.com/json/?fields=countryCode', {
      signal: AbortSignal.timeout(3000), // 3 second timeout
    });
    
    if (!response.ok) return null;
    
    const data = await response.json();
    const countryCode = data.countryCode as string;
    
    // Check if it's a supported country
    if (supportedCountries.includes(countryCode as SupportedCountry)) {
      return countryCode as SupportedCountry;
    }
    
    return null;
  } catch {
    return null;
  }
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [countryCode, setCountryCode] = useState<SupportedCountry>(() => {
    if (typeof window !== 'undefined') {
      // Priority 1: Check URL parameter first (highest priority for SEO/hreflang)
      const urlLocale = getLocaleFromURLParam();
      if (urlLocale) {
        return urlLocale;
      }
      
      // Priority 2: Check localStorage for returning users
      const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (saved && supportedCountries.includes(saved as SupportedCountry)) {
        return saved as SupportedCountry;
      }
    }
    return defaultCountry;
  });
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectCountry = async () => {
      // Priority 1: URL parameter takes precedence (for hreflang/SEO targeting)
      const urlLocale = getLocaleFromURLParam();
      if (urlLocale) {
        setCountryCode(urlLocale);
        localStorage.setItem(LOCALE_STORAGE_KEY, urlLocale);
        setIsLoading(false);
        return;
      }
      
      // Priority 2: If already saved in localStorage, use that
      const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (saved && supportedCountries.includes(saved as SupportedCountry)) {
        setCountryCode(saved as SupportedCountry);
        setIsLoading(false);
        return;
      }

      // Priority 3: Try timezone detection (instant, no network)
      const timezoneCountry = detectCountryFromTimezone();
      if (timezoneCountry) {
        setCountryCode(timezoneCountry);
        localStorage.setItem(LOCALE_STORAGE_KEY, timezoneCountry);
        setIsLoading(false);
        return;
      }

      // Priority 4: Fall back to IP-based detection
      const ipCountry = await detectCountryFromIP();
      if (ipCountry) {
        setCountryCode(ipCountry);
        localStorage.setItem(LOCALE_STORAGE_KEY, ipCountry);
      }
      
      setIsLoading(false);
    };

    detectCountry();
  }, []);

  const setCountry = useCallback((country: SupportedCountry) => {
    setCountryCode(country);
    localStorage.setItem(LOCALE_STORAGE_KEY, country);
  }, []);

  const locale = useMemo(() => getLocale(countryCode), [countryCode]);

  const formatCurrency = useCallback(
    (amount: number) => formatCurrencyUtil(amount, locale),
    [locale]
  );

  const formatPrice = useCallback(
    (amount: number, period?: string) => formatPriceUtil(amount, locale, period),
    [locale]
  );

  const value = useMemo(
    () => ({
      locale,
      countryCode,
      setCountry,
      formatCurrency,
      formatPrice,
      isLoading,
      supportedCountries,
    }),
    [locale, countryCode, setCountry, formatCurrency, formatPrice, isLoading]
  );

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}
