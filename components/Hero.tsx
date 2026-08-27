'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useOrder } from '@/context/OrderContext';

const heroImages = [
  '/images/hero-model.jpg',
  '/images/icon-benefit-1.jpg',
  '/images/product-main.jpg',
];

const quickBenefits = ['Freine la chute', 'Augmente la densité', 'Renforce les cheveux'];

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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="dht-control" className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 pt-8 sm:pt-12 md:pt-16">
        <div className="flex flex-row items-start gap-4 sm:gap-8 md:gap-16">
          {/* Texte */}
          <div className="flex-1 max-w-[52%] sm:max-w-none text-left">
            <p className="text-xs sm:text-sm font-bold text-blue-bright tracking-wide uppercase mb-1">
              Formule pour homme
            </p>

            <h1 className="font-heading text-2xl sm:text-4xl lg:text-6xl font-bold leading-[1.1] text-blue-dark">
              Des cheveux plus forts.
              <br />
              <span className="text-blue-bright">Une routine plus ciblée.</span>
            </h1>

            <p className="mt-3 sm:mt-6 text-xs sm:text-lg text-gray-600 max-w-md">
              DHT Control — la formule complète pour lutter contre la chute et renforcer vos cheveux.
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

          {/* Image — carrousel automatique, fondue dans le fond */}
          <div className="flex-1 max-w-[48%] sm:max-w-none relative -mr-4 md:mr-0">
            <div className="relative w-full h-[320px] sm:h-[480px] md:h-[560px] hero-image-blend">
              {heroImages.map((src, idx) => (
                <Image
                  key={src}
                  src={src}
                  alt="OKA Nutrition DHT Control"
                  fill
                  className={`object-cover transition-opacity duration-1000 ease-in-out ${
                    idx === activeIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  priority={idx === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bandeau offre — étoiles, prix, avantage, CTA */}
      <div className="mt-6 sm:mt-10 bg-blue-light py-8 sm:py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 text-blue-dark text-xs sm:text-sm font-bold">
            <span className="text-yellow-400 tracking-tight">★★★★★</span>
            + de 5000 hommes satisfaits
          </div>

          <h2 className="mt-3 font-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-blue-dark">
            Cure de 3 mois à seulement
            <br />
            <span className="text-blue-bright">349 DH</span>
          </h2>

          <div className="mt-5 inline-flex items-center gap-2 bg-blue-bright text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 8h10v9a1 1 0 01-1 1H6a1 1 0 01-1-1V8z" />
              <path d="M3 5a2 2 0 012-2h1.17a2.5 2.5 0 014.66 0h1.34a2.5 2.5 0 014.66 0H18a2 2 0 012 2v2H3V5z" />
            </svg>
            2 mois achetés + 1 mois offert
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center max-w-md sm:max-w-none mx-auto">
            <button onClick={() => openModal()} className="btn-primary py-3 px-8 animate-pulse-blue">
              Commander maintenant
            </button>
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