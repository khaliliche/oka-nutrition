'use client';

import Image from 'next/image';
import { useOrder } from '@/context/OrderContext';

export default function Offers() {
  const { openModal } = useOrder();

  return (
    <section id="offres" className="relative bg-blue-dark py-16 md:py-20 text-center text-white overflow-hidden">
      {/* Image décorative gauche */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 w-48 h-72 rounded-[2rem] overflow-hidden shadow-2xl rotate-[-4deg]">
        <Image
          src="/images/product-main.jpg"
          alt="OKA Nutrition DHT Control"
          fill
          className="object-cover"
        />
      </div>

      {/* Image décorative droite */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-48 h-72 rounded-[2rem] overflow-hidden shadow-2xl rotate-[4deg]">
        <Image
          src="/images/offre-2.jpg"
          alt="Cure OKA Nutrition 3 mois"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="inline-flex items-center gap-2 bg-white/10 text-xs font-bold px-4 py-2 rounded-full mb-6">
          <span className="text-yellow-400">★★★★★</span>
          + de 5000 hommes satisfaits
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Cure de 3 mois à seulement
          <br />
          <span className="text-blue-bright">349 DH</span>
        </h2>

        <div className="mt-6 inline-flex items-center gap-2 bg-blue-bright text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 8h10v9a1 1 0 01-1 1H6a1 1 0 01-1-1V8z" />
            <path d="M3 5a2 2 0 012-2h1.17a2.5 2.5 0 014.66 0h1.34a2.5 2.5 0 014.66 0H18a2 2 0 012 2v2H3V5z" />
          </svg>
          2 mois achetés + 1 mois offert
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => openModal()}
            className="btn-primary py-3 px-8 bg-white text-blue-dark hover:bg-blue-light animate-pulse-blue"
          >
            Commander maintenant
          </button>
          <a href="#formule" className="btn-outline py-3 px-8 border-white text-white hover:bg-white hover:text-blue-dark">
            Voir la formule
          </a>
        </div>

        {/* Images visibles sur mobile/tablette, empilées sous le contenu */}
        <div className="lg:hidden flex justify-center gap-4 mt-10">
          <div className="relative w-28 h-40 sm:w-36 sm:h-52 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/product-main.jpg" alt="OKA Nutrition DHT Control" fill className="object-cover" />
          </div>
          <div className="relative w-28 h-40 sm:w-36 sm:h-52 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/offre-2.jpg" alt="Cure OKA Nutrition 3 mois" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}