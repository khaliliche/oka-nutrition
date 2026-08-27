"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "Combien de temps avant de voir des résultats ?",
    a: "Les résultats peuvent varier selon les personnes. Une routine régulière est importante pour évaluer son évolution dans le temps.",
  },
  {
    q: "Le paiement à la livraison est-il disponible partout au Maroc ?",
    a: "Oui, nous livrons dans toutes les villes du Maroc avec paiement à la réception.",
  },
  {
    q: "Y a-t-il des effets secondaires ?",
    a: "La tolérance peut varier selon les personnes. Respectez la dose recommandée et demandez conseil à un professionnel de santé en cas de doute.",
  },
  {
    q: "Combien de temps dure un flacon ?",
    a: "Un flacon correspond à une cure d'un mois avec la posologie recommandée.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-3xl mx-auto">

        <FadeIn>
          <div className="mb-10 sm:mb-12">
            <p className="text-[10px] uppercase tracking-[0.25em] text-charcoal-light mb-4 text-center">
              FAQ
            </p>

            <h2 className="font-heading text-3xl sm:text-4xl text-navy text-center">
              Questions fréquentes
            </h2>
          </div>
        </FadeIn>

        <div className="border-t border-gray-200">

          {faqs.map((f, i) => (
            <FadeIn key={f.q} delay={i * 0.06}>

              <div className="border-b border-gray-200">

                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center gap-5 text-left py-5 sm:py-6"
                >
                  <span className="font-heading text-base sm:text-lg text-navy">
                    {f.q}
                  </span>

                  <span className="shrink-0 text-navy text-xl">
                    {open === i ? "−" : "+"}
                  </span>
                </button>

                {open === i && (
                  <p className="text-sm text-charcoal-light leading-relaxed pb-6 pr-8">
                    {f.a}
                  </p>
                )}

              </div>

            </FadeIn>
          ))}

        </div>

      </div>
    </section>
  );
}
