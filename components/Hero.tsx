'use client';

import Image from 'next/image';
import { useOrder } from '@/context/OrderContext';

export default function Hero() {
  const { openModal } = useOrder();

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-blue-light to-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block bg-blue-bright/10 text-blue-bright text-sm font-bold px-4 py-1 rounded-full mb-4">
            NOUVEAU
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-blue-dark">
            <span className="text-blue-bright">Formule pour Homme</span>
            <br />
            DHT Control
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-lg mx-auto md:mx-0">
            La formule complète pour lutter contre la chute, augmenter la densité et renforcer vos cheveux.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 justify-center md:justify-start">
            <span className="flex items-center gap-1 text-sm font-medium text-green-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Freine la chute
            </span>
            <span className="flex items-center gap-1 text-sm font-medium text-green-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Augmente la densité
            </span>
            <span className="flex items-center gap-1 text-sm font-medium text-green-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Renforce les cheveux
            </span>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-600 justify-center md:justify-start">
            <span className="text-yellow-400 text-lg">★★★★★</span>
            <span className="font-bold">+5000 hommes satisfaits</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() => openModal()}
              className="btn-primary animate-pulse-blue animate-float"
            >
              Commander la cure 3 mois
            </button>
            <a href="#offres" className="btn-outline">
              Voir les offres
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <Image
              src="/images/hero-product.jpg"
              alt="OKA Nutrition DHT Control"
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