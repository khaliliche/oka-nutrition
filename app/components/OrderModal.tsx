"use client";

import { useState } from "react";
import { useOrderModal } from "./OrderModalContext";

const offers = [
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

  if (!isOpen) return null;

  const offer =
    offers.find((item) => item.id === selectedOffer) || offers[1];

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
      className="fixed inset-0 z-50 bg-navy/70 backdrop-blur-md flex items-center justify-center p-3 md:p-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >

      <div className="bg-white w-full max-w-2xl max-h-[94vh] overflow-y-auto shadow-2xl">

        {/* HEADER */}
        <div className="sticky top-0 z-20 bg-white border-b border-gray-100 px-6 md:px-8 py-5 flex items-center justify-between">

          <div>
            <p className="text-[9px] uppercase tracking-[0.25em] text-charcoal-light">
              OKA Nutrition
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-navy mt-1">
              Votre commande
            </h2>
          </div>

          <button
            type="button"
            onClick={close}
            className="w-10 h-10 flex items-center justify-center border border-gray-200 text-navy text-xl hover:bg-grey-bg transition"
            aria-label="Fermer"
          >
            ×
          </button>

        </div>

        <div className="p-6 md:p-8">

          {/* STEP */}
          <div className="flex items-center gap-3 mb-8">

            <div className="flex items-center gap-2">
              <span className="w-7 h-7 bg-navy text-white flex items-center justify-center text-[10px]">
                1
              </span>

              <span className="text-xs font-medium text-navy">
                Choisir la cure
              </span>
            </div>

            <span className="h-px w-8 bg-gray-200" />

            <div className="flex items-center gap-2">
              <span className="w-7 h-7 bg-grey-bg text-charcoal-light flex items-center justify-center text-[10px]">
                2
              </span>

              <span className="text-xs text-charcoal-light">
                Vos coordonnées
              </span>
            </div>

          </div>

          {/* OFFERS */}
          <div className="grid grid-cols-2 gap-3 mb-9">

            {offers.map((item) => {
              const selected = selectedOffer === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedOffer(item.id)}
                  className={`relative text-left border transition-all duration-300 ${
                    selected
                      ? "border-navy ring-1 ring-navy"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >

                  {item.popular && (
                    <span className="absolute top-0 right-0 z-10 bg-navy text-white px-3 py-1.5 text-[8px] uppercase tracking-wider">
                      Recommandé
                    </span>
                  )}

                  <div className="h-36 md:h-44 bg-[#f3f3f0] flex items-center justify-center">

                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-[72%] h-[85%] object-contain"
                    />

                  </div>

                  <div className="p-4">

                    <div className="flex items-center justify-between">

                      <span className="font-heading text-lg text-navy">
                        {item.label}
                      </span>

                      <span
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          selected
                            ? "border-navy"
                            : "border-gray-300"
                        }`}
                      >
                        {selected && (
                          <span className="w-2.5 h-2.5 rounded-full bg-navy" />
                        )}
                      </span>

                    </div>

                    <div className="flex items-baseline gap-2 mt-2">

                      <span className="font-semibold text-navy">
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

          {/* FORM */}
          <div className="border-t border-gray-100 pt-8">

            <div className="mb-6">
              <p className="text-[9px] uppercase tracking-[0.25em] text-charcoal-light mb-2">
                Livraison
              </p>

              <h3 className="font-heading text-2xl text-navy">
                Où souhaitez-vous recevoir votre commande ?
              </h3>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-3"
            >

              <input
                required
                type="text"
                placeholder="Nom complet"
                value={form.nom}
                onChange={(e) =>
                  setForm({ ...form, nom: e.target.value })
                }
                className="w-full border border-gray-200 px-4 py-4 text-sm outline-none focus:border-navy transition"
              />

              <input
                required
                type="tel"
                placeholder="Numéro de téléphone"
                value={form.telephone}
                onChange={(e) =>
                  setForm({ ...form, telephone: e.target.value })
                }
                className="w-full border border-gray-200 px-4 py-4 text-sm outline-none focus:border-navy transition"
              />

              <input
                required
                type="text"
                placeholder="Ville"
                value={form.ville}
                onChange={(e) =>
                  setForm({ ...form, ville: e.target.value })
                }
                className="w-full border border-gray-200 px-4 py-4 text-sm outline-none focus:border-navy transition"
              />

              <textarea
                required
                placeholder="Adresse de livraison"
                value={form.adresse}
                onChange={(e) =>
                  setForm({ ...form, adresse: e.target.value })
                }
                rows={3}
                className="w-full border border-gray-200 px-4 py-4 text-sm outline-none focus:border-navy transition resize-none"
              />

              {/* SUMMARY */}
              <div className="bg-grey-bg p-5 mt-5 flex items-center justify-between">

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-charcoal-light">
                    Votre sélection
                  </p>

                  <p className="font-heading text-xl text-navy mt-1">
                    {offer.label}
                  </p>
                </div>

                <div className="text-right">

                  <p className="font-heading text-2xl text-navy">
                    {offer.price}
                  </p>

                  <p className="text-[10px] text-charcoal-light">
                    Paiement à la livraison
                  </p>

                </div>

              </div>

              <button
                type="submit"
                className="group w-full bg-navy text-white py-4 mt-2 text-sm font-medium hover:bg-navy-light transition-all duration-300"
              >
                <span className="inline-flex items-center gap-3">
                  Confirmer ma commande
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </button>

              <p className="text-center text-[10px] text-charcoal-light pt-2">
                Votre commande sera confirmée directement sur WhatsApp.
              </p>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}
