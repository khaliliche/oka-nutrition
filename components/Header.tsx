"use client";

import { useState } from "react";
import Link from "next/link";
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
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            type="button"
            className="p-1 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6 text-blue-dark"
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
            className="flex flex-col items-center leading-none mx-auto md:mx-0"
          >
            <span className="font-heading text-2xl font-bold text-blue-dark">
              OKA
            </span>
            <span className="text-[10px] tracking-[0.35em] text-blue-bright -mt-0.5">
              NUTRITION
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {tabs.map((tab) => (
              <a
                key={tab.href}
                href={tab.href}
                className="text-sm font-semibold text-blue-dark hover:text-blue-bright transition"
              >
                {tab.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => openModal()}
            className="btn-primary hidden md:inline-flex text-sm py-2 px-6"
          >
            Commander
          </button>

          <button
            type="button"
            aria-label="Commander"
            className="md:hidden"
            onClick={() => openModal()}
          >
            <svg
              className="w-5 h-5 text-blue-dark"
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

        {isMenuOpen && (
          <nav className="md:hidden bg-white px-4 pb-4 flex flex-col space-y-3 border-t border-gray-100">
            {tabs.map((tab) => (
              <a
                key={tab.href}
                href={tab.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-semibold text-blue-dark hover:text-blue-bright transition"
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
              className="btn-primary text-center"
            >
              Commander
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}