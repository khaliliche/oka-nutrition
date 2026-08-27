"use client";

import { useState } from "react";
import { useOrderModal } from "./OrderModalContext";

export default function Header() {
  const { open } = useOrderModal();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#10253d] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        <a href="#" aria-label="OKA Nutrition" className="shrink-0">
          <img
            src="/images/logo.jpg"
            alt="OKA Nutrition"
            className="h-14 md:h-16 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#formula" className="text-sm text-white/80 hover:text-white transition">
            Formule
          </a>
          <a href="#offers" className="text-sm text-white/80 hover:text-white transition">
            Offres
          </a>
          <a href="#reviews" className="text-sm text-white/80 hover:text-white transition">
            Avis
          </a>
          <a href="#faq" className="text-sm text-white/80 hover:text-white transition">
            FAQ
          </a>
        </nav>

        <button
          type="button"
          onClick={() => open("3mois")}
          className="hidden md:inline-flex bg-white text-[#10253d] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#f3f3f0] transition"
        >
          Commander
        </button>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Menu"
        >
          <span className="w-5 h-0.5 bg-white" />
          <span className="w-5 h-0.5 bg-white" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#10253d] border-t border-white/10">
          <nav className="px-5 py-5 flex flex-col">
            <a href="#formula" onClick={() => setMenuOpen(false)} className="py-4 text-white/85 border-b border-white/10">
              Formule
            </a>
            <a href="#offers" onClick={() => setMenuOpen(false)} className="py-4 text-white/85 border-b border-white/10">
              Offres
            </a>
            <a href="#reviews" onClick={() => setMenuOpen(false)} className="py-4 text-white/85 border-b border-white/10">
              Avis
            </a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="py-4 text-white/85 border-b border-white/10">
              FAQ
            </a>

            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                open("3mois");
              }}
              className="mt-5 bg-white text-[#10253d] py-4 rounded-full text-sm font-medium"
            >
              Commander maintenant
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
