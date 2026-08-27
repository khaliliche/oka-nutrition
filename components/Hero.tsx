'use client';

import Image from 'next/image';
import { useOrder } from '@/context/OrderContext';

export default function Hero() {
  const { openModal } = useOrder();

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-blue-light to-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Texte */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-blue-dark">
            Retrouvez une chevelure <br />
            <span className="text-blue-bright">forte et en pleine santé</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-lg mx-auto md:mx-0">
            OKA Nutrition, le complément alimentaire 100% naturel qui agit sur la chute de cheveux. Résultats visibles dès 4 semaines.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() => openModal()}
              className="btn-primary animate-pulse-blue animate-float"
            >
              Je découvre les offres
            </button>
            <a href="#offres" className="btn-outline">
              Voir les offres
            </a>
          </div>
        </div>

        {/* Image produit */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <Image
              src="/images/hero-product.jpg"
              alt="Produit OKA Nutrition"
              fill
              className="object-contain drop-shadow-2xl animate-float"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}