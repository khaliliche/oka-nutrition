'use client';

import { useOrder } from '@/context/OrderContext';
import { useLocale } from '@/context/LocaleContext';

export default function FinalCTA() {
  const { openModal } = useOrder();
  const { dict } = useLocale();

  return (
    <section className="py-10 md:py-28 bg-blue-light text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white border-2 border-blue-bright/40 rounded-2xl shadow-lg px-6 py-8 md:px-12 md:py-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-blue-dark">
            {dict.finalCta.heading} <span className="text-blue-bright">{dict.finalCta.price}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {dict.finalCta.body}
          </p>
          <button
            onClick={() => openModal()}
            className="btn-primary mt-8 animate-pulse-blue"
          >
            {dict.finalCta.cta}
          </button>
        </div>
      </div>
    </section>
  );
}