'use client';

import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      q: 'Comment prendre OKA Nutrition ?',
      a: "Prenez 2 gélules par jour avec un grand verre d'eau, de préférence au cours d'un repas. Une cure de 3 mois est recommandée pour des résultats optimaux.",
    },
    {
      q: 'OKA Nutrition est-il sans danger ?',
      a: 'Oui, notre complément est 100% naturel et sans effets secondaires. Il est fabriqué dans des laboratoires certifiés et respecte les normes de qualité.',
    },
    {
      q: 'Quels sont les délais de livraison ?',
      a: 'La livraison est gratuite partout au Maroc et se fait sous 48 à 72 heures ouvrables après validation de votre commande.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-blue-dark">
            Questions fréquentes
          </h2>
          <div className="divider-blue mt-4" />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="card-premium py-4">
              <button
                type="button"
                className="flex justify-between items-center w-full text-left font-semibold text-blue-dark hover:text-blue-bright transition"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {faq.q}
                <span className="text-xl ml-4 shrink-0">{openIndex === idx ? '−' : '+'}</span>
              </button>
              {openIndex === idx && (
                <p className="mt-3 text-gray-600 leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}