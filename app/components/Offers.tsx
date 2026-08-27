"use client";

import FadeIn from "./FadeIn";
import { useOrderModal } from "./OrderModalContext";

const offers = [
  {
    id: "1mois",
    number: "01",
    label: "1 mois",
    price: "199 DH",
    oldPrice: "249 DH",
    image: "/images/product-1month.jpg",
    description: "Une boîte pour une cure complète d’un mois.",
  },
  {
    id: "3mois",
    number: "03",
    label: "3 mois",
    price: "349 DH",
    oldPrice: "747 DH",
    image: "/images/product-3months.jpg",
    description: "La cure complète au meilleur tarif.",
    popular: true,
  },
];

export default function Offers() {
  const { selectedOffer, setSelectedOffer, open } = useOrderModal();

  return (
    <section
      id="offers"
      className="bg-grey-bg px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-6xl mx-auto">

        <FadeIn>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-14">

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-charcoal-light mb-4">
                Votre cure
              </p>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[3.2rem] leading-[1] text-navy">
                Choisissez votre
                <span className="block italic font-normal">
                  routine.
                </span>
              </h2>
            </div>

            <p className="text-sm text-charcoal-light leading-relaxed max-w-md lg:pb-1">
              Commencez avec un mois ou profitez directement de la cure
              complète de 3 mois à seulement 349 DH.
            </p>

          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">

          {offers.map((offer, index) => {
            const selected = selectedOffer === offer.id;

            return (
              <FadeIn key={offer.id} delay={index * 0.12}>

                <article
                  onClick={() => setSelectedOffer(offer.id)}
                  className={`group relative cursor-pointer bg-white overflow-hidden transition-all duration-500 ${
                    selected
                      ? "ring-2 ring-navy"
                      : "hover:-translate-y-1"
                  }`}
                >

                  {offer.popular && (
                    <div className="absolute top-0 right-0 z-10 bg-navy text-white px-4 py-2 text-[8px] uppercase tracking-[0.2em]">
                      Recommandé
                    </div>
                  )}

                  <div className="relative bg-[#f3f3f0] h-[280px] sm:h-[320px] lg:h-[370px] flex items-center justify-center overflow-hidden">

                    <img
                      src={offer.image}
                      alt={offer.label}
                      className="w-[62%] sm:w-[68%] lg:w-[72%] h-[82%] object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                    />

                    <span className="absolute top-5 left-5 font-heading text-xs text-charcoal-light">
                      {offer.number}
                    </span>

                  </div>

                  <div className="p-6 sm:p-7 lg:p-8">

                    <div className="flex items-start justify-between gap-5">

                      <div>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-charcoal-light mb-2">
                          Cure
                        </p>

                        <h3 className="font-heading text-2xl sm:text-3xl text-navy">
                          {offer.label}
                        </h3>
                      </div>

                      <span
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-1 ${
                          selected
                            ? "border-navy"
                            : "border-gray-300"
                        }`}
                      >
                        {selected && (
                          <span className="w-2.5 h-2.5 bg-navy rounded-full" />
                        )}
                      </span>

                    </div>

                    <div className="flex items-baseline gap-3 mt-5">

                      <span className="font-heading text-3xl sm:text-4xl lg:text-5xl text-navy">
                        {offer.price}
                      </span>

                      <span className="text-xs text-charcoal-light line-through">
                        {offer.oldPrice}
                      </span>

                    </div>

                    <p className="text-sm text-charcoal-light leading-relaxed mt-3">
                      {offer.description}
                    </p>

                    <div className="border-t border-gray-100 mt-6 pt-5 space-y-2">

                      <p className="text-xs text-charcoal">
                        ✓ Livraison gratuite
                      </p>

                      <p className="text-xs text-charcoal">
                        ✓ Paiement à la livraison
                      </p>

                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        open(offer.id);
                      }}
                      className={`mt-7 w-full py-3.5 text-sm font-medium transition-all duration-300 ${
                        selected
                          ? "bg-navy text-white hover:bg-navy-light"
                          : "border border-gray-200 text-navy hover:border-navy"
                      }`}
                    >
                      Choisir cette cure
                    </button>

                  </div>

                </article>

              </FadeIn>
            );
          })}

        </div>

        <FadeIn delay={0.25}>
          <div className="mt-8 pt-6 border-t border-gray-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

            <p className="text-xs text-charcoal-light">
              🇲🇦 Livraison gratuite partout au Maroc · Paiement à la réception
            </p>

            <button
              type="button"
              onClick={() => open(selectedOffer)}
              className="group text-sm font-medium text-navy"
            >
              <span className="inline-flex items-center gap-2">
                Commander maintenant
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
            </button>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
