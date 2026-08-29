'use client';

import Image from 'next/image';
import { useOrder, type Offer } from '@/context/OrderContext';
import { useLocale } from '@/context/LocaleContext';

export default function ProductOffers() {
  const { openModal } = useOrder();
  const { dict, locale } = useLocale();
  const suffix = locale === 'ar' ? '-ar' : '';

  const offre2: Offer = {
    id: 'offre-2',
    title: dict.productOffers.offre2.title,
    price: 349,
    badge: dict.productOffers.offre2.badge,
    description: dict.productOffers.offre2.description,
    image: `/images/offre-2${suffix}.jpg`,
  };

  const offre1: Offer = {
    id: 'offre-1',
    title: dict.productOffers.offre1.title,
    price: 175,
    badge: dict.productOffers.offre1.badge,
    description: dict.productOffers.offre1.description,
    image: `/images/offre-1${suffix}.jpg`,
  };

  const offers: Offer[] = locale === 'ar' ? [offre1, offre2] : [offre2, offre1];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-blue-dark">
            {dict.productOffers.heading}
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
                <div className="relative aspect-[4/5] bg-blue-light">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-contain"
                  />
                  <span className="absolute top-4 start-4 bg-blue-dark text-white text-xs font-bold px-3 py-1.5 rounded-full">
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
                    {dict.productOffers.cta}
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