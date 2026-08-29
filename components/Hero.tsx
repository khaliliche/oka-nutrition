'use client';

import Image from 'next/image';
import { useOrder, type Offer } from '@/context/OrderContext';
import { useLocale } from '@/context/LocaleContext';

export default function Hero() {
  const { openModal } = useOrder();
  const { dict, locale } = useLocale();
  const suffix = locale === 'ar' ? '-ar' : '';

  const heroOffre2: Offer & { isBestValue?: boolean } = {
    id: 'offre-2',
    title: dict.hero.packs.offre2.title,
    price: 349,
    badge: dict.hero.packs.offre2.badge,
    description: dict.hero.packs.offre2.description,
    image: `/images/offre-2${suffix}.jpg`,
    isBestValue: true,
  };

  const heroOffre1: Offer & { isBestValue?: boolean } = {
    id: 'offre-1',
    title: dict.hero.packs.offre1.title,
    price: 175,
    badge: dict.hero.packs.offre1.badge,
    description: dict.hero.packs.offre1.description,
    image: `/images/offre-1${suffix}.jpg`,
  };

  const packs: (Offer & { isBestValue?: boolean })[] =
    locale === 'ar' ? [heroOffre1, heroOffre2] : [heroOffre2, heroOffre1];

  const HairIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C9 6 7 9 7 13a5 5 0 0 0 10 0c0-2-1-3.5-2-5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13c0 3-1 6-2 8.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <section id="dht-control" className="relative bg-blue-light overflow-hidden">
      {/* Desktop / laptop layout — split hero, untouched on phone & tablet */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:items-center">
        <div className="py-16 px-10 xl:px-20">
          <h1 className="font-heading text-4xl xl:text-5xl font-bold leading-tight text-blue-dark">
            {dict.hero.desktop.headline1}
          </h1>
          <h1 className="font-heading text-4xl xl:text-5xl font-bold leading-tight text-blue-bright">
            {dict.hero.desktop.headline2}
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-md">
            {dict.hero.desktop.description}
          </p>

          <div className="mt-8 space-y-4">
            {dict.benefits.items.map((b) => (
              <div key={b.label} className="flex items-center gap-3">
                <span className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-blue-bright/40 text-blue-bright shrink-0">
                  <HairIcon />
                </span>
                <span className="font-bold text-sm tracking-wide uppercase text-blue-dark">
                  {b.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-md rounded-2xl border border-black/5 bg-white shadow-lg px-6 py-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-500">{dict.hero.desktop.oneMonthLabel}</p>
                <p className="font-heading text-xl font-bold text-blue-dark">
                  175 DH{' '}
                  <span className="text-gray-400 line-through font-normal text-base">
                    {dict.hero.desktop.originalPrice}
                  </span>
                </p>
              </div>
              <div className="h-10 w-px bg-gray-200 shrink-0" />
              <div>
                <p className="text-sm text-gray-500">{dict.hero.desktop.threeMonthLabel}</p>
                <p className="font-heading text-xl font-bold text-blue-dark">349 DH</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-blue-dark">
              <span aria-hidden="true">🇲🇦</span>
              <span>
                {dict.hero.shipping} — {dict.hero.payment}
              </span>
            </div>
          </div>
        </div>

        <div className="relative self-stretch min-h-[560px] xl:min-h-[640px]">
          <Image
            src="/images/hero-model.jpg"
            alt="OKA Nutrition DHT Control"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Phone & tablet layout — unchanged */}
      <div className="lg:hidden">
      <div className="relative w-full aspect-[500/400] bg-blue-light">
        <Image
          src={`/images/hero-banner${suffix}.png`}
          alt="OKA Nutrition DHT Control"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="bg-blue-light py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 text-blue-dark text-xs sm:text-sm font-bold">
              <span className="text-yellow-400 tracking-tight">★★★★★</span>
              {dict.hero.rating}
            </div>
          </div>

          <h2 className="mt-3 text-center font-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-blue-dark">
            {dict.hero.chooseCure}
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
                  <span className="absolute top-2 start-2 sm:top-4 sm:start-4 bg-blue-dark text-white text-[9px] sm:text-sm font-bold px-2 py-1 sm:px-3.5 sm:py-2 rounded-full z-10">
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
                    {dict.hero.commander}
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
              {dict.hero.seeFormula}
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white py-4">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] sm:text-xs font-bold text-blue-dark text-center">
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden="true">🇲🇦</span>
            {dict.hero.shipping}
          </span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <span>{dict.hero.payment}</span>
        </div>
      </div>
      </div>
    </section>
  );
}