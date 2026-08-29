'use client';

import { useState } from 'react';
import { useLocale } from '@/context/LocaleContext';

export default function FAQ() {
  const { dict } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-blue-dark">
            {dict.faq.heading}
          </h2>
          <div className="divider-blue mt-4" />
        </div>

        <div className="space-y-3">
          {dict.faq.items.map((faq, idx) => (
            <div key={idx} className="card-premium py-4">
              <button
                type="button"
                className="flex justify-between items-center w-full text-start font-semibold text-blue-dark hover:text-blue-bright transition"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {faq.q}
                <span className="text-xl ms-4 shrink-0">{openIndex === idx ? '−' : '+'}</span>
              </button>
              {openIndex === idx && (
                <p className="mt-3 text-gray-600 leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}