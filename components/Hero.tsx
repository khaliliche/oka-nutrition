'use client';

import Image from 'next/image';
import { useOrder } from '@/context/OrderContext';

export default function Hero() {
  const { openModal } = useOrder();

  return (
    <section className="pt-16 md:pt-20 bg-white">
      <div className="flex flex-col md:flex-row-reverse">
        {/* Image produit - plein cadre, collée sous le header */}
        <div className="relative w-full h-[62vh] max-h-[560px] md:w-1/2 md:h-[620px] md:max-h-none">
          <Image
            src="/images/hero-product.jpg"
            alt="Homme souriant tenant OKA Nutrition DHT Control"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Bloc texte */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 py-10 md:px-14 lg:px-20 bg-blue-light">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-blue-bright text-lg tracking-wide">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </span>
            <span className="text-xs md:text-sm font-semibold text-blue-dark uppercase tracking-wide">
              +1 200 clients satisfaits
            </span>
          </div>

          <h1 className="font-heading italic text-3xl sm:text-4xl md:text-5xl leading-tight text-blue-dark">
            Une chevelure forte
            <br />
            commence avec
            <br />
            OKA Nutrition.
          </h1>

          <p className="mt-5 text-gray-700 max-w-sm">
            Complexe folliculaire 100% naturel. Abonnez-vous et economisez +
            15 DH offerts sur votre premier mois*.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 w-full max-w-sm">
            <button
              onClick={() => openModal()}
              className="border-2 border-blue-dark text-blue-dark font-semibold uppercase text-xs tracking-wide py-3.5 hover:bg-blue-dark hover:text-white transition"
            >
              Meilleure vente
            </button>
            <a
              href="#offres"
              className="border-2 border-blue-dark text-blue-dark font-semibold uppercase text-xs tracking-wide py-3.5 text-center hover:bg-blue-dark hover:text-white transition"
            >
              Voir l&apos;offre
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}