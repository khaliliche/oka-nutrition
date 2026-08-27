"use client";

import FadeIn from "./FadeIn";
import { useOrderModal } from "./OrderModalContext";

export default function Hero() {
  const { open } = useOrderModal();

  return (
    <section className="bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">

        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10 lg:gap-16 xl:gap-20 items-center">

          {/* LEFT */}
          <FadeIn>
            <div className="max-w-xl">

              <div className="inline-flex items-center gap-2 bg-grey-bg px-3.5 py-2 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-navy" />
                <span className="text-[11px] sm:text-xs text-charcoal">
                  La routine capillaire des hommes
                </span>
              </div>

              <h1 className="font-heading text-[2.65rem] sm:text-5xl lg:text-[4rem] xl:text-[4.3rem] leading-[0.98] tracking-tight text-navy">
                Reprenez le contrôle de votre
                <span className="block mt-2">
                  chute de cheveux.
                </span>
              </h1>

              <p className="text-charcoal-light text-sm sm:text-base leading-7 max-w-lg mt-6">
                DHT Control cible la DHT, l'une des principales hormones
                impliquées dans la chute de cheveux chez l'homme, avec une
                formule pensée pour une routine quotidienne simple.
              </p>

              {/* OFFER MESSAGE */}
              <div className="border-l-2 border-navy pl-4 mt-6 max-w-lg">
                <p className="text-sm sm:text-[15px] leading-6 text-charcoal">
                  Une boîte pour une cure complète d’un mois à seulement{" "}
                  <strong className="text-navy">199 DH</strong>{" "}
                  au lieu de <span className="line-through">249 DH</span>.
                </p>

                <p className="text-sm sm:text-[15px] leading-6 text-charcoal mt-2">
                  Vous souhaitez suivre la cure complète ? Profitez du pack
                  de 3 mois à seulement{" "}
                  <strong className="text-navy">349 DH</strong>.
                </p>

                <p className="text-sm sm:text-[15px] leading-6 text-charcoal mt-2">
                  🇲🇦 Livraison gratuite partout au Maroc et paiement
                  uniquement à la réception.
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 mt-7">

                <button
                  type="button"
                  onClick={() => open("3mois")}
                  className="bg-navy text-white px-7 py-3.5 rounded-full text-sm font-medium shadow-md hover:bg-navy-light hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  Commander maintenant
                </button>

                <a
                  href="#formula"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-gray-200 text-navy text-sm hover:border-navy hover:bg-grey-bg transition-all"
                >
                  Découvrir la formule
                </a>

              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6 text-[11px] text-charcoal-light">
                <span>✓ Paiement à la livraison</span>
                <span>✓ Livraison gratuite</span>
                <span>✓ Commande simple</span>
              </div>

            </div>
          </FadeIn>

          {/* RIGHT */}
          <FadeIn delay={0.12}>
            <div className="relative w-full max-w-[560px] mx-auto lg:ml-auto">

              <div className="absolute inset-4 sm:inset-7 bg-grey-bg" />

              <div className="relative min-h-[360px] sm:min-h-[450px] lg:min-h-[520px] flex items-center justify-center">

                <img
                  src="/images/product-main.jpg"
                  alt="DHT Control - OKA Nutrition"
                  className="relative z-10 w-[76%] sm:w-[72%] lg:w-[78%] max-h-[470px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.14)] transition-transform duration-500 hover:scale-[1.025]"
                />

                <div className="absolute right-0 top-8 sm:top-12 bg-navy text-white px-4 py-3 shadow-lg">
                  <p className="text-[8px] uppercase tracking-[0.18em] text-white/60">
                    Cure complète
                  </p>
                  <p className="font-heading text-lg mt-0.5">
                    3 mois
                  </p>
                  <p className="text-[11px] text-white/70 mt-0.5">
                    349 DH
                  </p>
                </div>

                <div className="absolute left-0 bottom-7 sm:bottom-10 bg-white px-4 py-3 shadow-lg">
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

      <div className="h-px bg-gray-100" />

    </section>
  );
}
