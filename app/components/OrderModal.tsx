"use client";

import { useState } from "react";
import { useOrderModal } from "./OrderModalContext";

type OfferId = "1mois" | "3mois";

type Offer = {
  id: OfferId;
  label: string;
  price: string;
  oldPrice: string;
  image: string;
  popular?: boolean;
};

const offers: Offer[] = [
  {
    id: "1mois",
    label: "1 mois",
    price: "199 DH",
    oldPrice: "249 DH",
    image: "/images/product-1month.jpg",
  },
  {
    id: "3mois",
    label: "3 mois",
    price: "349 DH",
    oldPrice: "747 DH",
    image: "/images/product-3months.jpg",
    popular: true,
  },
];

const WHATSAPP_NUMBER = "212661972751";

export default function OrderModal() {
  const {
    isOpen,
    selectedOffer,
    setSelectedOffer,
    close,
  } = useOrderModal();

  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    ville: "",
    adresse: "",
  });

  if (!isOpen) {
    return null;
  }

  const offer =
    offers.find((item) => item.id === selectedOffer) ?? offers[1];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = [
      "Bonjour OKA Nutrition,",
      "",
      "Je souhaite commander DHT Control.",
      "",
      `Offre : ${offer.label}`,
      `Prix : ${offer.price}`,
      "",
      `Nom : ${form.nom}`,
      `Téléphone : ${form.telephone}`,
      `Ville : ${form.ville}`,
      `Adresse : ${form.adresse}`,
      "",
      "Merci de confirmer ma commande.",
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    close();

    setForm({
      nom: "",
      telephone: "",
      ville: "",
      adresse: "",
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          close();
        }
      }}
    >
      <div className="bg-navy-light border border-white/10 w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl rounded-2xl">

        <div className="sticky top-0 z-20 bg-navy-light/95 backdrop-blur border-b border-white/10 px-6 md:px-8 py-5 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-charcoal-light">
              OKA Nutrition
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-white mt-1">
              Votre commande
            </h2>
          </div>

          <button
            type="button"
            onClick={close}
            className="w-10 h-10 flex items-center justify-center border border-white/15 rounded-full text-white text-xl hover:bg-white/5 transition"
            aria-label="Fermer"
          >
            ×
          </button>
        </div>

        <div className="p-6 md:p-8">

          <div className="flex items-center gap-3 mb-7">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-brass text-white flex items-center justify-center text-[10px]">
                1
              </span>

              <span className="text-xs font-medium text-white">
                Choisir la cure
              </span>
            </div>

            <span className="h-px w-8 bg-white/15" />

            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-navy text-charcoal-light flex items-center justify-center text-[10px]">
                2
              </span>

              <span className="text-xs text-charcoal-light">
                Vos coordonnées
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {offers.map((item) => {
              const selected = selectedOffer === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedOffer(item.id)}
                  className={`relative text-left rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    selected
                      ? "border-brass"
                      : "border-white/10 hover:border-white/25"
                  }`}
                >
                  {item.popular && (
                    <span className="absolute top-2 left-2 z-10 bg-brass text-white text-[9px] px-2 py-1 rounded-full">
                      RECOMMANDÉ
                    </span>
                  )}

                  <div className="h-32 sm:h-40 bg-navy flex items-center justify-center p-4">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="p-4 bg-navy-light">
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-lg text-white">
                        {item.label}
                      </span>

                      <span
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selected
                            ? "border-brass"
                            : "border-white/25"
                        }`}
                      >
                        {selected && (
                          <span className="w-2.5 h-2.5 rounded-full bg-brass" />
                        )}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="font-semibold text-white">
                        {item.price}
                      </span>

                      <span className="text-[10px] text-charcoal-light line-through">
                        {item.oldPrice}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="border-t border-white/10 pt-7">
            <div className="mb-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-charcoal-light mb-2">
                Livraison
              </p>

              <h3 className="font-heading text-xl md:text-2xl text-white">
                Vos coordonnées
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">

              <input
                required
                type="text"
                placeholder="Nom complet"
                value={form.nom}
                onChange={(e) =>
                  setForm({ ...form, nom: e.target.value })
                }
                className="w-full bg-navy border border-white/15 rounded-lg px-4 py-3.5 text-sm text-white placeholder:text-charcoal-light outline-none focus:border-brass transition"
              />

              <input
                required
                type="tel"
                placeholder="Téléphone"
                value={form.telephone}
                onChange={(e) =>
                  setForm({ ...form, telephone: e.target.value })
                }
                className="w-full bg-navy border border-white/15 rounded-lg px-4 py-3.5 text-sm text-white placeholder:text-charcoal-light outline-none focus:border-brass transition"
              />

              <input
                required
                type="text"
                placeholder="Ville"
                value={form.ville}
                onChange={(e) =>
                  setForm({ ...form, ville: e.target.value })
                }
                className="w-full bg-navy border border-white/15 rounded-lg px-4 py-3.5 text-sm text-white placeholder:text-charcoal-light outline-none focus:border-brass transition"
              />

              <textarea
                required
                placeholder="Adresse de livraison"
                value={form.adresse}
                onChange={(e) =>
                  setForm({ ...form, adresse: e.target.value })
                }
                rows={3}
                className="w-full bg-navy border border-white/15 rounded-lg px-4 py-3.5 text-sm text-white placeholder:text-charcoal-light outline-none focus:border-brass transition resize-none"
              />

              <div className="bg-navy rounded-lg p-4 mt-5 flex items-center justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-charcoal-light">
                    Votre sélection
                  </p>

                  <p className="font-heading text-lg text-white mt-1">
                    {offer.label}
                  </p>
                </div>

                <p className="font-heading text-xl text-brass-light">
                  {offer.price}
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-brass text-white py-4 rounded-full text-sm font-medium hover:bg-brass-light transition-all mt-1"
              >
                Confirmer ma commande
              </button>

              <p className="text-center text-[10px] text-charcoal-light pt-1">
                Paiement à la livraison · Livraison gratuite
              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}