import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useLocale } from '@/hooks/useLocale';
import { locales, SupportedCountry } from '@/locales';
import { cn } from '@/lib/utils';

interface CountrySelectorProps {
  variant?: 'default' | 'compact';
  className?: string;
}

export function CountrySelector({ variant = 'default', className }: CountrySelectorProps) {
  const { countryCode, setCountry, supportedCountries } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLocale = locales[countryCode];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleSelect = (country: SupportedCountry) => {
    setCountry(country);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 transition-all duration-200 rounded-full",
          variant === 'default' 
            ? "px-3 py-2 hover:bg-muted border border-border hover:border-primary/20" 
            : "px-2 py-1.5 hover:bg-muted/50"
        )}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-lg leading-none" role="img" aria-label={currentLocale.country}>
          {currentLocale.flag}
        </span>
        {variant === 'default' && (
          <span className="text-body-sm font-medium text-foreground hidden sm:inline">
            {currentLocale.countryCode}
          </span>
        )}
        <ChevronDown 
          className={cn(
            "w-3.5 h-3.5 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 top-full mt-2 z-50"
          >
            <div 
              className="bg-card rounded-xl shadow-soft-xl border border-border overflow-hidden min-w-[200px]"
              role="listbox"
              aria-label="Select country"
            >
              <div className="py-1">
                {supportedCountries.map((code) => {
                  const locale = locales[code];
                  const isSelected = code === countryCode;
                  
                  return (
                    <button
                      key={code}
                      onClick={() => handleSelect(code)}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors duration-150",
                        isSelected 
                          ? "bg-primary/5 text-primary" 
                          : "hover:bg-muted text-foreground"
                      )}
                      role="option"
                      aria-selected={isSelected}
                    >
                      <span className="text-xl leading-none" role="img" aria-label={locale.country}>
                        {locale.flag}
                      </span>
                      <div className="flex-1 min-w-0">
                        <span className="text-body-sm font-medium block">
                          {locale.country}
                        </span>
                        <span className="text-caption text-muted-foreground">
                          {locale.currency.symbol} {locale.currency.code}
                        </span>
                      </div>
                      {isSelected && (
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
