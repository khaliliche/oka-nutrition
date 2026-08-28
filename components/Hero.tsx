'use client';

import Image from 'next/image';
import { useOrder, type Offer } from '@/context/OrderContext';

const packs: (Offer & { isBestValue?: boolean })[] = [
  {
    id: 'offre-2',
    title: 'Cure complète',
    price: 349,
    badge: '1 mois offert',
    description: '3 flacons — 2+1',
    image: '/images/offre-2.jpg',
    isBestValue: true,
  },
  {
    id: 'offre-1',
    title: 'Découverte',
    price: 199,
    badge: '',
    description: '1 flacon — 1 mois',
    image: '/images/offre-1.jpg',
  },
];

export default function Hero() {
  const { openModal } = useOrder();

  return (
    <section id="dht-control" className="relative bg-blue-light overflow-hidden">
      <div className="relative w-full max-w-2xl mx-auto aspect-[495/543] bg-blue-light">
        <Image
          src="/images/hero-banner.png"
          alt="OKA Nutrition DHT Control — Des cheveux plus forts, une routine plus ciblée"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Bandeau offre — 2 packs côte à côte, chacun avec prix + CTA */}
      <div className="mt-6 sm:mt-10 bg-blue-light py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 text-blue-dark text-xs sm:text-sm font-bold">
              <span className="text-yellow-400 tracking-tight">★★★★★</span>
              + de 276 hommes satisfaits
            </div>
          </div>

          <h2 className="mt-3 text-center font-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-blue-dark">
            Choisissez votre cure
          </h2>

          <div className="mt-6 flex sm:grid sm:grid-cols-2 gap-3 sm:gap-8 max-w-3xl mx-auto overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-auto sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {packs.map((pack) => (
              <div
                key={pack.id}
                className={`relative bg-white rounded-2xl sm:rounded-[1.75rem] shadow-lg overflow-hidden border-2 shrink-0 w-[70%] sm:w-auto snap-center ${
                  pack.isBestValue ? 'border-blue-bright' : 'border-transparent'
                }`}
              >
                {pack.badge && (
                  <span className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-blue-dark text-white text-[9px] sm:text-sm font-bold px-2 py-1 sm:px-3.5 sm:py-2 rounded-full z-10">
                    {pack.badge}
                  </span>
                )}

                <div className="relative aspect-[4/5] bg-blue-light">
                  <Image
                    src={pack.image}
                    alt={pack.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="p-4 sm:p-8 text-center">
                  <h3 className="font-heading text-sm sm:text-2xl font-bold text-blue-dark">
                    {pack.title}
                  </h3>
                  <p className="mt-0.5 text-xs sm:text-base text-gray-600 leading-tight">
                    {pack.description}
                  </p>
                  <p className="mt-2 sm:mt-3 font-heading text-xl sm:text-3xl font-extrabold text-blue-bright">
                    {pack.price} DH
                  </p>
                  <button
                    onClick={() => openModal(pack)}
                    className="btn-primary w-full mt-3 sm:mt-5 py-2 sm:py-4 text-xs sm:text-base"
                  >
                    Commander
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex sm:hidden items-center justify-center gap-1.5 mt-4">
            {packs.map((pack) => (
              <span key={pack.id} className="w-1.5 h-1.5 rounded-full bg-blue-bright/30" />
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <a href="#formule" className="btn-outline py-3 px-8">
              Voir la formule
            </a>
          </div>
        </div>
      </div>

      {/* Barre de confiance */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] sm:text-xs font-bold text-blue-dark text-center">
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden="true">🇲🇦</span>
            Livraison gratuite partout au Maroc
          </span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <span>Paiement à la réception</span>
        </div>
      </div>
    </section>
  );
}