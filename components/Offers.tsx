'use client';

import Image from 'next/image';
import { useOrder } from '@/context/OrderContext';
import { Offer } from '@/types';

export default function Offers() {
  const { openModal } = useOrder();

  const offers: Offer[] = [
    {
      id: 'offre-1',
      title: 'Découverte',
      price: 199,
      badge: '🌟 Populaire',
      description: '1 flacon – cure 1 mois',
      image: '/images/offre-1.jpg',
    },
    {
      id: 'offre-2',
      title: 'Cure complète',
      price: 349,
      badge: '⭐ Meilleure valeur',
      description: '3 flacons – 2 achetés + 1 offert !',
      image: '/images/offre-2.jpg',
    },
  ];

  return (
    <section id="offres" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-dark">
          Nos offres
        </h2>
        <div className="divider-blue mt-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`card-premium flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 ${
                offer.id === 'offre-2' ? 'border-2 border-blue-bright' : ''
              }`}
            >
              <div className="relative w-48 h-48 mb-4">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="inline-block bg-blue-bright text-white text-sm font-bold px-4 py-1 rounded-full mb-2">
                {offer.badge}
              </span>
              <h3 className="text-2xl font-bold text-blue-dark">{offer.title}</h3>
              <p className="text-gray-600">{offer.description}</p>
              {offer.id === 'offre-2' && (
                <p className="text-sm text-green-600 font-semibold mt-1">
                  Économisez 50 DH
                </p>
              )}
              <p className="text-3xl font-extrabold text-blue-bright mt-2">
                {offer.price} DH
              </p>
              <button
                onClick={() => openModal(offer)}
                className="btn-primary mt-4 w-full"
              >
                Choisir cette offre
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}