'use client';

import Image from 'next/image';
import { useOrder, type Offer } from '@/context/OrderContext';

const quickBenefits = ['Freine la chute', 'Augmente la densité', 'Renforce les cheveux'];

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

function QuickBenefitIcon() {
  return (
    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-blue-bright/20 flex items-center justify-center shrink-0">
      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-bright" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v6m3-6v10m3-10v14M6 21h12" />
      </svg>
    </div>
  );
}

export default function Hero() {
  const { openModal } = useOrder();

  return (
    <section id="dht-control" className="relative bg-blue-light overflow-hidden">
      <div className="container mx-auto px-4 pt-6 sm:pt-12 md:pt-16">
        <div className="flex flex-row items-center gap-4 sm:gap-10 md:gap-14">
          {/* Texte */}
          <div className="w-[42%] sm:w-auto sm:flex-none sm:max-w-[360px] md:max-w-[440px] lg:max-w-[500px] text-left">
            <p className="text-xs sm:text-sm font-bold text-blue-bright tracking-wide uppercase mb-1">
              Formule pour homme
            </p>

            <h1 className="font-heading text-[22px] sm:text-4xl lg:text-[52px] font-bold leading-[1.15] text-blue-dark">
              Des cheveux
              <br />
              plus forts.
              <br />
              <span className="text-blue-bright">
                Une routine
                <br />
                plus ciblée.
              </span>
            </h1>

            <p className="mt-3 sm:mt-6 text-xs sm:text-lg text-gray-600 max-w-md">
              DHT Control – La formule complète pour lutter contre la chute et renforcer vos cheveux.
            </p>

            <div className="mt-5 sm:mt-8 flex flex-col gap-3 sm:gap-4">
              {quickBenefits.map((label) => (
                <div key={label} className="flex items-center gap-2 sm:gap-3">
                  <QuickBenefitIcon />
                  <span className="text-[11px] sm:text-sm font-bold text-blue-dark uppercase tracking-wide leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image produit — fondu sur les bords pour se fondre dans le fond */}
          <div className="w-[58%] sm:w-auto sm:flex-1 relative -mr-4 md:mr-0">
            <div
              className="relative w-full h-[380px] sm:h-[480px] md:h-[540px] lg:h-[600px]"
              style={{
                WebkitMaskImage:
                  'radial-gradient(ellipse 90% 85% at 62% 45%, black 50%, transparent 100%)',
                maskImage:
                  'radial-gradient(ellipse 90% 85% at 62% 45%, black 50%, transparent 100%)',
              }}
            >
              <Image
                src="/images/hero-model.jpg"
                alt="OKA Nutrition DHT Control"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
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

          <div className="mt-6 flex sm:grid sm:grid-cols-2 gap-3 sm:gap-6 max-w-2xl mx-auto overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-auto sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {packs.map((pack) => (
              <div
                key={pack.id}
                className={`relative bg-white rounded-2xl sm:rounded-[1.75rem] shadow-lg overflow-hidden border-2 shrink-0 w-[70%] sm:w-auto snap-center ${
                  pack.isBestValue ? 'border-blue-bright' : 'border-transparent'
                }`}
              >
                {pack.badge && (
                  <span className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-blue-dark text-white text-[9px] sm:text-xs font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full z-10">
                    {pack.badge}
                  </span>
                )}

                <div className="relative h-32 sm:h-44 bg-blue-light flex items-center justify-center p-3 sm:p-6">
                  <Image
                    src={pack.image}
                    alt={pack.title}
                    fill
                    className="object-contain p-4 sm:p-8"
                  />
                </div>

                <div className="p-3 sm:p-5 text-center">
                  <h3 className="font-heading text-sm sm:text-lg font-bold text-blue-dark">
                    {pack.title}
                  </h3>
                  <p className="mt-0.5 text-xs sm:text-sm text-gray-600 leading-tight">
                    {pack.description}
                  </p>
                  <p className="mt-2 font-heading text-xl sm:text-2xl font-extrabold text-blue-bright">
                    {pack.price} DH
                  </p>
                  <button
                    onClick={() => openModal(pack)}
                    className="btn-primary w-full mt-3 py-2 sm:py-3 text-xs sm:text-sm"
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