'use client';

import Image from 'next/image';
import { useLocale } from '@/context/LocaleContext';

export default function Formula() {
  const { dict, locale } = useLocale();
  const suffix = locale === 'ar' ? '-ar' : '';

  return (
    <section id="formule" className="py-16 md:py-24 bg-blue-light">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 w-full flex justify-center">
          <div className="relative w-full max-w-[380px] md:max-w-[440px] aspect-[461/562] rounded-[2rem] overflow-hidden shadow-xl bg-white">
            <Image
              src={`/images/formula${suffix}.jpg`}
              alt={dict.formula.heading}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-start">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-blue-dark">
            {dict.formula.heading} <span className="text-blue-bright">{dict.formula.headingHighlight}</span>
          </h2>
          <div className="divider-blue mt-4 mx-auto md:mx-0" />

          <p className="mt-6 text-xl font-semibold text-blue-dark">
            {dict.formula.lead}
          </p>
          <p className="mt-3 text-lg text-gray-700">
            {dict.formula.body}
          </p>

          <p className="mt-6 text-sm font-bold tracking-[0.15em] text-blue-bright uppercase">
            {dict.formula.tags}
          </p>

          <p className="mt-4 text-sm text-gray-500">
            {dict.formula.ingredients}
          </p>
        </div>
      </div>
    </section>
  );
}