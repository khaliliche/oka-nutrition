'use client';

import Image from 'next/image';
import { useOrder } from '@/context/OrderContext';
import { useLocale } from '@/context/LocaleContext';

export default function Offers() {
  const { openModal } = useOrder();
  const { dict, locale } = useLocale();
  const suffix = locale === 'ar' ? '-ar' : '';

  return (
    <section id="offres" className="relative bg-blue-dark py-16 md:py-20 text-center text-white overflow-hidden">
      <div className="absolute -top-24 -start-16 w-72 h-72 rounded-full bg-blue-bright/25 blur-3xl" />
      <div className="absolute -bottom-24 -end-16 w-72 h-72 rounded-full bg-blue-bright/20 blur-3xl" />

      <div className="hidden lg:flex absolute start-8 top-1/2 -translate-y-1/2 w-52 aspect-[407/497] rounded-[2rem] overflow-hidden shadow-2xl rotate-[-4deg] bg-white items-center justify-center ring-4 ring-white/10">
        <Image
          src={`/images/product-main${suffix}.jpg`}
          alt="OKA Nutrition DHT Control"
          fill
          className="object-contain"
        />
      </div>

      <div className="hidden lg:flex absolute end-8 top-1/2 -translate-y-1/2 w-52 aspect-[441/350] rounded-[2rem] overflow-hidden shadow-2xl rotate-[4deg] bg-white items-center justify-center ring-4 ring-white/10">
        <Image
          src={`/images/offre-2${suffix}.jpg`}
          alt="Cure OKA Nutrition 3 mois"
          fill
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-xs font-bold px-4 py-2 rounded-full mb-6 ring-1 ring-white/10">
          <span className="text-yellow-400">★★★★★</span>
          {dict.offers.ratingBadge}
        </div>

        <p className="text-blue-bright text-xs sm:text-sm font-bold uppercase tracking-widest mb-2">
          {dict.offers.limitedOffer}
        </p>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          {dict.offers.heading1}
          <br />
          <span className="text-blue-bright drop-shadow-[0_0_25px_rgba(74,144,217,0.6)]">{dict.offers.price}</span>
        </h2>

        <div className="mt-6 inline-flex items-center gap-2 bg-blue-bright text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-lg shadow-blue-bright/30">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 8h10v9a1 1 0 01-1 1H6a1 1 0 01-1-1V8z" />
            <path d="M3 5a2 2 0 012-2h1.17a2.5 2.5 0 014.66 0h1.34a2.5 2.5 0 014.66 0H18a2 2 0 012 2v2H3V5z" />
          </svg>
          {dict.offers.badge}
        </div>

        <div className="relative mx-auto mt-6 w-44 sm:w-60" style={{ aspectRatio: 441 / 350 }}>
          <Image
            src={`/images/offre-2${suffix}.jpg`}
            alt="Pack 3 mois OKA Nutrition DHT Control"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => openModal()}
            className="btn-primary py-3 px-8 bg-white text-blue-dark hover:bg-blue-light animate-pulse-blue"
          >
            {dict.offers.ctaMain}
          </button>
          <a href="#formule" className="btn-outline py-3 px-8 border-white text-white hover:bg-white hover:text-blue-dark">
            {dict.offers.ctaOutline}
          </a>
        </div>

        <div className="lg:hidden flex justify-center items-center gap-2 mt-12">
          <div className="relative w-36 sm:w-44 aspect-[407/497] rounded-2xl overflow-hidden shadow-2xl bg-white -rotate-6 ring-4 ring-white/10 z-10">
            <Image src={`/images/product-main${suffix}.jpg`} alt="OKA Nutrition DHT Control" fill className="object-contain" />
          </div>
          <div className="relative w-36 sm:w-44 aspect-[441/350] rounded-2xl overflow-hidden shadow-2xl bg-white rotate-6 -ml-4 ring-4 ring-white/10">
            <Image src={`/images/offre-2${suffix}.jpg`} alt="Cure OKA Nutrition 3 mois" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}