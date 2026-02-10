import { useContext } from 'react';
import { LocaleContext } from '@/contexts/LocaleContext';

export function useLocale() {
  const context = useContext(LocaleContext);
  
  // Context now has a default value, so it's always defined
  return context;
}
