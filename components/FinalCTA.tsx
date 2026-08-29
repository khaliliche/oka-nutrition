'use client';

import { useOrder } from '@/context/OrderContext';
import { useLocale } from '@/context/LocaleContext';

export default function FinalCTA() {
  const { openModal } = useOrder();
  const { dict } = useLocale();

  return (
    <section className="py-20 md:py-28 bg-blue-dark text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-5xl font-bold">
          {dict.finalCta.heading} <span className="text-blue-bright">{dict.finalCta.price}</span>
        </h2>
        <p className="mt-4 text-lg text-blue-light max-w-2xl mx-auto">
          {dict.finalCta.body}
        </p>
        <button
          onClick={() => openModal()}
          className="btn-primary mt-8 bg-white text-blue-dark hover:bg-blue-light hover:text-blue-dark animate-pulse-blue"
        >
          {dict.finalCta.cta}
        </button>
      </div>
    </section>
  );
}