"use client";

import FadeIn from "./FadeIn";
import { useOrderModal } from "./OrderModalContext";

export default function FinalCTA() {
  const { open } = useOrderModal();

  return (
    <section className="bg-navy px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto text-center">

        <FadeIn>

          <p className="text-white/50 text-[10px] tracking-[0.25em] uppercase mb-5">
            Commencez maintenant
          </p>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.04]">
            Votre nouvelle routine
            <span className="block italic font-normal">
              commence ici.
            </span>
          </h2>

          <p className="text-white/65 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mt-5">
            Choisissez votre cure DHT Control et commandez simplement,
            avec paiement à la livraison.
          </p>

          <button
            type="button"
            onClick={() => open("3mois")}
            className="bg-white text-navy px-8 py-3.5 mt-7 text-sm font-medium hover:bg-grey-bg hover:-translate-y-0.5 transition-all duration-300 shadow-xl"
          >
            Commander la cure 3 mois
          </button>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-5 text-[10px] sm:text-xs text-white/45">
            <span>✓ 349 DH</span>
            <span>✓ Livraison gratuite</span>
            <span>✓ Paiement à la livraison</span>
          </div>

        </FadeIn>

      </div>
    </section>
  );
}
