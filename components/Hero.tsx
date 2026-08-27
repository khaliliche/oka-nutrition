'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useOrder } from '@/context/OrderContext';

const heroImages = [
  '/images/hero-model.jpg',
  '/images/icon-benefit-1.jpg',
  '/images/product-main.jpg',
];

export default function Hero() {
  const { openModal } = useOrder();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="dht-control" className="relative bg-white pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Image — carrousel automatique */}
          <div className="order-1 md:order-2 flex-1 relative w-full -mx-4 md:mx-0">
            <div className="absolute -inset-6 bg-blue-light rounded-[3rem] -z-10 hidden md:block" />
            <div className="relative w-full h-[420px] sm:h-[520px] md:h-[500px] md:rounded-[2rem] overflow-hidden md:shadow-xl">
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

              {/* Indicateurs */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {heroImages.map((src, idx) => (
                  <button
                    key={src}
                    type="button"
                    aria-label={`Voir l'image ${idx + 1}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === activeIndex ? 'bg-white w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Texte */}
          <div className="order-2 md:order-1 flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-light text-blue-dark text-xs font-bold px-4 py-2 rounded-full mb-5">
              <span className="text-yellow-400">★★★★★</span>
              +5000 hommes satisfaits
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-blue-dark">
              Des cheveux plus forts.
              <br />
              <span className="text-blue-bright">Une routine plus ciblée.</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-md mx-auto md:mx-0">
              DHT Control — la formule complète pour lutter contre la chute, augmenter la densité et renforcer vos cheveux.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button onClick={() => openModal()} className="btn-primary py-3 px-8 animate-pulse-blue">
                Commander maintenant
              </button>
              <a href="#formule" className="btn-outline py-3 px-8">
                Voir la formule
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}