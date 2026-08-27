'use client';

import Image from 'next/image';
import { useOrder } from '@/context/OrderContext';

export default function Hero() {
  const { openModal } = useOrder();

  return (
    <section className="relative pt-24 pb-10 md:pt-32 md:pb-16 bg-gradient-to-b from-blue-light to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Colonne texte */}
          <div className="flex-1 text-center md:text-left z-10">
            <span className="inline-block bg-blue-bright/10 text-blue-bright text-xs font-bold px-3 py-1 rounded-full mb-3">
              NOUVEAU
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-blue-dark">
              <span className="text-blue-bright">Formule pour Homme</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">DHT Control</span>
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-gray-700 max-w-lg mx-auto md:mx-0">
              La formule complète pour lutter contre la chute, augmenter la densité et renforcer vos cheveux.
            </p>

            {/* 3 bénéfices avec check */}
            <div className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-5">
              <span className="flex items-center gap-1.5 text-sm font-medium text-green-700">
                <svg className="w-5 h-5 text-blue-bright" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Freine la chute
              </span>
              <span className="flex items-center gap-1.5 text-sm font-medium text-green-700">
                <svg className="w-5 h-5 text-blue-bright" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Augmente la densité
              </span>
              <span className="flex items-center gap-1.5 text-sm font-medium text-green-700">
                <svg className="w-5 h-5 text-blue-bright" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Renforce les cheveux
              </span>
            </div>

            {/* Avis étoiles */}
            <div className="mt-4 flex items-center justify-center md:justify-start gap-3">
              <span className="text-yellow-400 text-xl">★★★★★</span>
              <span className="text-base font-semibold text-gray-700">+5000 hommes satisfaits</span>
            </div>

            {/* Offre en évidence */}
            <div className="mt-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-5 max-w-sm mx-auto md:mx-0 border border-blue-bright/30">
              <p className="text-xs uppercase tracking-wider text-gray-500">Offre spéciale</p>
              <p className="text-2xl font-extrabold text-blue-dark">
                Cure 3 mois à <span className="text-blue-bright">349 DH</span>
              </p>
              <p className="text-base text-green-600 font-semibold">2 mois achetés + 1 mois offert</p>
            </div>

            {/* Boutons */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              <button
                onClick={() => openModal()}
                className="btn-primary text-base py-3 px-8 animate-pulse-blue"
              >
                Commander maintenant
              </button>
              <a href="#offres" className="btn-outline text-base py-3 px-8">
                Voir la formule
              </a>
            </div>
          </div>

          {/* Colonne image - encore plus grande et fondue à droite */}
          <div className="flex-1 flex justify-center md:justify-end relative">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
              <Image
                src="/images/hero-product.jpg"
                alt="OKA Nutrition DHT Control"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
              {/* Dégradé de fusion sur le côté droit (visible sur desktop) */}
              <div className="absolute inset-0 bg-gradient-to-l from-white/80 via-transparent to-transparent mix-blend-overlay pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}