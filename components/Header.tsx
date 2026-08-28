"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useOrder } from "@/context/OrderContext";

const tabs = [
  { href: "#dht-control", label: "DHT Control" },
  { href: "#formule", label: "Formule" },
  { href: "#avis", label: "Avis" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useOrder();

  return (
    <header className="sticky top-0 z-50">
      <div style={{ backgroundColor: '#0E1C4D' }}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            type="button"
            className="p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <Link href="/" className="mx-auto">
            <Image
              src="/images/logo-mark.png"
              alt="OKA Nutrition"
              width={70}
              height={70}
              className="rounded-lg"
              priority
            />
          </Link>

          <div className="flex items-center gap-4">
            <button type="button" aria-label="Compte" className="p-1">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
              </svg>
            </button>
            <button type="button" aria-label="Panier" className="p-1" onClick={() => openModal()}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m-10 0a2 2 0 104 0m6 0a2 2 0 104 0" />
              </svg>
            </button>
          </div>
        </div>

        <nav className="flex items-center justify-center gap-5 sm:gap-8 border-t border-white/10 py-3.5 overflow-x-auto px-4">
          {tabs.map((tab, idx) => (
            <a
              key={tab.href}
              href={tab.href}
              className={`text-xs sm:text-sm whitespace-nowrap transition hover:text-white ${
                idx === 0 ? 'font-bold text-white' : 'font-semibold text-white/60'
              }`}
            >
              {tab.label}
            </a>
          ))}
        </nav>

        {isMenuOpen && (
          <nav className="px-4 pb-4 flex flex-col space-y-3 border-t border-white/10">
            {tabs.map((tab) => (
              <a
                key={tab.href}
                href={tab.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-semibold text-white hover:text-white/80 transition"
              >
                {tab.label}
              </a>
            ))}

            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(false);
                openModal();
              }}
              className="btn-primary text-center bg-white text-blue-dark"
            >
              Commander
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}