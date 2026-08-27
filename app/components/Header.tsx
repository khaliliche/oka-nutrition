"use client";

import { useState } from "react";
import { useOrderModal } from "./OrderModalContext";

export default function Header() {
  const { open } = useOrderModal();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        <a href="#" aria-label="OKA Nutrition" className="shrink-0">
          <img
            src="/images/logo.jpg"
            alt="OKA Nutrition"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-9">
          <a href="#formula" className="text-[13px] tracking-wide text-white/75 hover:text-brass-light transition-colors">
            Formule
          </a>
          <a href="#offers" className="text-[13px] tracking-wide text-white/75 hover:text-brass-light transition-colors">
            Offres
          </a>
          <a href="#reviews" className="text-[13px] tracking-wide text-white/75 hover:text-brass-light transition-colors">
            Avis
          </a>
          <a href="#faq" className="text-[13px] tracking-wide text-white/75 hover:text-brass-light transition-colors">
            FAQ
          </a>
        </nav>

        <button
          type="button"
          onClick={() => open("3mois")}
          className="hidden md:inline-flex bg-brass text-navy px-6 py-3 text-[13px] font-medium tracking-wide hover:bg-brass-light transition-colors"
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
        <div className="md:hidden bg-navy border-t border-white/10">
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
              className="mt-5 bg-brass text-navy py-4 text-sm font-medium tracking-wide"
            >
              Commander maintenant
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}