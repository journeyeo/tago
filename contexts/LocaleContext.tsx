'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import ja from '@/messages/ja.json';
import en from '@/messages/en.json';
import ko from '@/messages/ko.json';

export type Locale = 'ja' | 'en' | 'ko';

const messages: Record<Locale, typeof ja> = { ja, en, ko };

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof ja;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: 'ja',
  setLocale: () => {},
  t: ja,
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ja');

  useEffect(() => {
    const saved = localStorage.getItem('tago-locale') as Locale;
    if (saved === 'ja' || saved === 'en' || saved === 'ko') {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    localStorage.setItem('tago-locale', next);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: messages[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useLocale = () => useContext(LocaleContext);
