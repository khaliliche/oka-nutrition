"use client";

import FadeIn from "./FadeIn";
import { useOrderModal } from "./OrderModalContext";

export default function FinalCTA() {
  const { open } = useOrderModal();

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-t border-black/10">
      <div className="max-w-4xl mx-auto text-center">

        <FadeIn>

          <p className="text-brass text-[10px] tracking-[0.25em] uppercase mb-5">
            Commencez maintenant
          </p>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.04]">
            Votre nouvelle routine
            <span className="block italic font-normal">
              commence ici.
            </span>
          </h2>

          <p className="text-slate text-sm sm:text-base max-w-lg mx-auto leading-relaxed mt-5">
            Choisissez votre cure DHT Control et commandez simplement,
            avec paiement à la livraison.
          </p>

          <button
            type="button"
            onClick={() => open("3mois")}
            className="bg-brass text-white px-8 py-3.5 mt-7 rounded-full text-sm font-medium hover:bg-brass-light hover:-translate-y-0.5 transition-all duration-300 shadow-xl shadow-brass/20"
          >
            Commander la cure 3 mois
          </button>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-5 text-[10px] sm:text-xs text-slate">
            <span>✓ 349 DH</span>
            <span>✓ Livraison gratuite</span>
            <span>✓ Paiement à la livraison</span>
          </div>

        </FadeIn>

      </div>
    </section>
  );
}