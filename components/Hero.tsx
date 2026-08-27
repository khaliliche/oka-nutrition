'use client';

import Image from 'next/image';
import { useOrder } from '@/context/OrderContext';

export default function Hero() {
  const { openModal } = useOrder();

  return (
    <section className="bg-white pt-14 sm:pt-16 md:pt-20">
      <div className="md:flex md:flex-row-reverse md:items-stretch">
        {/* Image produit */}
        <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:w-1/2 md:aspect-auto">
          <Image
            src="/images/hero-product.jpg"
            alt="Homme souriant tenant OKA Nutrition DHT Control"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Bloc texte */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 py-8 sm:px-8 sm:py-10 md:px-14 lg:px-20 bg-blue-light">
          <div className="flex items-center gap-1.5 mb-3">
            <span className="text-blue-bright text-base tracking-wide">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-blue-dark uppercase tracking-wide">
              +1 200 clients satisfaits
            </span>
          </div>

          <h1 className="font-heading italic text-[28px] leading-[1.15] sm:text-4xl md:text-5xl md:leading-tight text-blue-dark max-w-xs sm:max-w-sm">
            Une chevelure forte commence avec OKA Nutrition.
          </h1>

          <p className="mt-4 text-sm sm:text-base text-gray-700 max-w-xs sm:max-w-sm">
            Complexe folliculaire 100% naturel. Abonnez-vous et économisez +
            15 DH offerts sur votre premier mois*.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-2.5 w-full max-w-xs sm:max-w-sm">
            <button
              onClick={() => openModal()}
              className="border-2 border-blue-dark text-blue-dark font-semibold uppercase text-[11px] sm:text-xs tracking-wide py-3 hover:bg-blue-dark hover:text-white transition"
            >
              Meilleure vente
            </button>
            <a
              href="#offres"
              className="border-2 border-blue-dark text-blue-dark font-semibold uppercase text-[11px] sm:text-xs tracking-wide py-3 text-center hover:bg-blue-dark hover:text-white transition"
            >
              Voir l&apos;offre
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}