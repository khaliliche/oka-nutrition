"use client";

import { useState } from "react";
import Link from "next/link";
import { useOrder } from "@/context/OrderContext";

const tabs = [
  { href: "#dht-control", label: "DHT CONTROL" },
  { href: "#formule", label: "FORMULE" },
  { href: "#avis", label: "AVIS" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useOrder();

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-blue-dark text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            type="button"
            className="p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
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

          <Link
            href="/"
            className="flex flex-col items-center leading-none"
          >
            <span className="text-2xl font-extrabold tracking-wide">
              OKA
            </span>
            <span className="text-[10px] tracking-[0.35em] text-white/70 -mt-0.5">
              NUTRITION
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <button type="button" aria-label="Compte">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            <button type="button" aria-label="Panier">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m-10 0a2 2 0 104 0m6 0a2 2 0 104 0"
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="bg-blue-dark/95 backdrop-blur-md px-4 pb-4 flex flex-col space-y-3 border-t border-white/10">
            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(false);
                openModal();
              }}
              className="btn-primary text-center"
            >
              Commander
            </button>
          </nav>
        )}
      </div>

      <nav className="flex bg-white border-b border-gray-100 justify-between px-6 py-4 overflow-x-auto">
        {tabs.map((tab) => (
          <a
            key={tab.href}
            href={tab.href}
            className="text-xs sm:text-sm font-bold tracking-wide text-blue-dark hover:text-blue-bright transition whitespace-nowrap"
          >
            {tab.label}
          </a>
        ))}
      </nav>
    </header>
  );
}