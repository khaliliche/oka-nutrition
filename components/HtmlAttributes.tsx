'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function HtmlAttributes() {
  const pathname = usePathname();

  useEffect(() => {
    const isAr = pathname?.startsWith('/ar');
    document.documentElement.lang = isAr ? 'ar' : 'fr';
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    document.body.classList.toggle('font-arabic', !!isAr);
  }, [pathname]);

  return null;
}