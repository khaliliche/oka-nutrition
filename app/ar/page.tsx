'use client';

import { LocaleProvider } from '@/context/LocaleContext';
import HomePage from '@/components/HomePage';

export default function HomeAr() {
  return (
    <LocaleProvider locale="ar">
      <HomePage />
    </LocaleProvider>
  );
}