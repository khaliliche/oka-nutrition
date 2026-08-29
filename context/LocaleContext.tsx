'use client';

import React, { createContext, useContext } from 'react';
import { Locale, Dictionary } from '@/types/i18n';
import { dictionaries } from '@/lib/i18n/dictionaries';

type LocaleContextType = {
  locale: Locale;
  dict: Dictionary;
  otherLocaleHref: string;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider = ({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) => {
  const dict = dictionaries[locale];
  const otherLocaleHref = locale === 'fr' ? '/ar' : '/';

  return (
    <LocaleContext.Provider value={{ locale, dict, otherLocaleHref }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};