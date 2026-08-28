'use client';

import Image from 'next/image';
import { useOrder, type Offer } from '@/context/OrderContext';

const offers: Offer[] = [
  {
    id: 'offre-1',
    title: 'Découverte',
    price: 199,
    badge: '🌟 Populaire',
    description: '1 flacon — cure 1 mois',
    image: '/images/offre-1.jpg',
  },
  {
    id: 'offre-2',
    title: 'Cure complète',
    price: 349,
    badge: '⭐ Meilleure valeur — 1 mois offert',
    description: '3 flacons — 2 achetés + 1 offert',
    image: '/images/offre-2.jpg',
  },
];

export default function ProductOffers() {
  const { openModal } = useOrder();

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-blue-dark">
            Choisissez votre cure
          </h2>
          <div className="divider-blue mt-4" />
        </div>

        <div className="flex sm:grid sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-auto sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {offers.map((offer) => {
            const isBestValue = offer.id === 'offre-2';
            return (
              <div
                key={offer.id}
                className={`relative bg-white rounded-[1.75rem] shadow-xl overflow-hidden border-2 transition-all hover:shadow-2xl shrink-0 w-[85%] sm:w-auto snap-center ${
                  isBestValue ? 'border-blue-bright' : 'border-transparent'
                }`}
              >
                <div className="relative h-56 md:h-64 bg-blue-light flex items-center justify-center p-6">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-contain p-8"
                  />
                  <span className="absolute top-4 left-4 bg-blue-dark text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {offer.badge}
                  </span>
                </div>

                <div className="p-6 text-center">
                  <h3 className="font-heading text-xl font-bold text-blue-dark">
                    {offer.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{offer.description}</p>

                  <p className="mt-4 font-heading text-3xl font-extrabold text-blue-bright">
                    {offer.price} DH
                  </p>

                  <button
                    onClick={() => openModal(offer)}
                    className="btn-primary w-full mt-5 py-3"
                  >
                    Commander maintenant
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex sm:hidden items-center justify-center gap-1.5 mt-4">
          {offers.map((offer) => (
            <span key={offer.id} className="w-1.5 h-1.5 rounded-full bg-blue-bright/30" />
          ))}
        </div>
      </div>
    </section>
  );
}