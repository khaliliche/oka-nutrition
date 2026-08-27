'use client';

import { useOrder } from '@/context/OrderContext';

export default function PricingBand() {
  const { openModal } = useOrder();

  return (
    <section id="offres" className="bg-blue-light py-10 text-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2">
          <span className="text-yellow-400 text-lg">★★★★★</span>
          <span className="text-sm font-semibold text-blue-dark">+ DE 5000 HOMMES SATISFAITS</span>
        </div>

        <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-blue-dark leading-snug">
          CURE DE 3 MOIS
          <br />
          À SEULEMENT <span className="text-blue-bright">349 DH</span>
        </h2>

        <div className="mt-4 inline-flex items-center gap-2 bg-blue-bright text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 8h10v9a1 1 0 01-1 1H6a1 1 0 01-1-1V8z" />
            <path d="M3 5a2 2 0 012-2h1.17a2.5 2.5 0 014.66 0h1.34a2.5 2.5 0 014.66 0H18a2 2 0 012 2v2H3V5z" />
          </svg>
          2 MOIS ACHETÉS + 1 MOIS OFFERT
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={() => openModal()} className="btn-primary py-3 px-8 animate-pulse-blue">
            COMMANDER MAINTENANT
          </button>
          <a href="#formule" className="btn-outline py-3 px-8">
            VOIR LA FORMULE
          </a>
        </div>
      </div>
    </section>
  );
}