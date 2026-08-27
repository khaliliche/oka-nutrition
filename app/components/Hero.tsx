"use client";

import FadeIn from "./FadeIn";
import { useOrderModal } from "./OrderModalContext";

export default function Hero() {
  const { open } = useOrderModal();

  return (
    <section className="bg-navy overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

        <div className="flex flex-col-reverse gap-8 lg:grid lg:grid-cols-[1fr_0.9fr] lg:gap-14 xl:gap-20 items-center">

          {/* TEXT */}
          <FadeIn>
            <div className="max-w-xl mx-auto lg:mx-0">

              {/* Rating */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <span className="text-brass-light text-sm tracking-tight">
                  ★★★★★
                </span>

                <span className="text-[11px] text-white/60">
                  Des clients satisfaits partout au Maroc
                </span>
              </div>

              {/* Heading */}
              <h1 className="font-heading text-[2.25rem] leading-[1.04] sm:text-5xl lg:text-[3.9rem] xl:text-[4.2rem] tracking-tight text-white text-center lg:text-left">
                Reprenez le contrôle de votre
                <span className="block mt-1">
                  chute de cheveux.
                </span>
              </h1>

              {/* Description */}
              <p className="text-white/65 text-sm sm:text-base leading-7 max-w-lg mt-5 text-center lg:text-left mx-auto lg:mx-0">
                DHT Control cible la DHT, l'une des principales hormones
                impliquées dans la chute de cheveux chez l'homme, avec une
                formule pensée pour une routine quotidienne simple.
              </p>

              {/* OFFER MESSAGE */}
              <div className="border-l-2 border-brass pl-4 mt-6 max-w-lg mx-auto lg:mx-0 text-left">
                <p className="text-sm sm:text-[15px] leading-6 text-white/90">
                  Une boîte pour une cure complète d'un mois à seulement{" "}
                  <strong className="text-brass-light">199 DH</strong>{" "}
                  au lieu{" "}
                  <span className="line-through text-white/40">
                    249 DH
                  </span>
                  .
                </p>

                <p className="text-sm sm:text-[15px] leading-6 text-white/90 mt-2">
                  Vous souhaitez suivre la cure complète ? Profitez du pack
                  de 3 mois à seulement{" "}
                  <strong className="text-brass-light">349 DH</strong>.
                </p>

                <p className="text-sm sm:text-[15px] leading-6 text-white/80 mt-2">
                  🇲🇦 Livraison gratuite partout au Maroc et paiement
                  uniquement à la réception.
                </p>
              </div>

              {/* CTA */}
              <div className="grid grid-cols-2 gap-3 mt-7 max-w-lg mx-auto lg:mx-0">

                <button
                  type="button"
                  onClick={() => open("3mois")}
                  className="bg-brass text-white px-5 py-3.5 rounded-full text-sm font-medium shadow-md hover:bg-brass-light hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  Commander
                </button>

                <a
                  href="#formula"
                  className="inline-flex items-center justify-center px-5 py-3.5 rounded-full border border-white/15 text-white text-sm hover:border-brass hover:bg-white/5 transition-all duration-200 text-center"
                >
                  Voir la formule
                </a>

              </div>

              {/* Trust */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 mt-6 text-[11px] text-white/55">
                <span>✓ Paiement à la livraison</span>
                <span>✓ Livraison gratuite</span>
                <span>✓ Commande simple</span>
              </div>

            </div>
          </FadeIn>

          {/* PRODUCT */}
          <FadeIn delay={0.12}>
            <div className="relative w-full max-w-[540px] mx-auto lg:ml-auto">

              <div className="absolute inset-4 sm:inset-7 bg-navy-light border border-white/10 rounded-2xl" />

              <div className="relative min-h-[320px] sm:min-h-[410px] lg:min-h-[500px] flex items-center justify-center">

                <img
                  src="/images/product-main.jpg"
                  alt="DHT Control - OKA Nutrition"
                  className="relative z-10 w-[72%] sm:w-[70%] lg:w-[76%] max-h-[410px] lg:max-h-[455px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-[1.025]"
                />

                {/* Offer badge */}
                <div className="absolute right-0 top-8 sm:top-12 bg-brass text-white px-4 py-3 shadow-lg rounded-l-lg z-20">
                  <p className="text-[8px] uppercase tracking-[0.18em] text-white/70">
                    Cure complète
                  </p>

                  <p className="font-heading text-lg mt-0.5">
                    3 mois
                  </p>

                  <p className="text-[11px] text-white/80 mt-0.5">
                    349 DH
                  </p>
                </div>

                {/* Product label */}
                <div className="absolute left-0 bottom-7 sm:bottom-10 bg-white px-4 py-3 shadow-lg rounded-r-lg z-20">
                  <p className="text-[9px] uppercase tracking-[0.16em] text-charcoal-light">
                    OKA Nutrition
                  </p>

                  <p className="font-heading text-base text-navy mt-1">
                    DHT Control
                  </p>
                </div>

              </div>
            </div>
          </FadeIn>

        </div>
      </div>

      <div className="h-px bg-white/10" />
    </section>
  );
}
