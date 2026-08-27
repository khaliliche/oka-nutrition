'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useOrder } from '@/context/OrderContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useOrder();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
  { href: '#offres', label: 'Nos Offres' },
  // { href: '#commendet', label: 'Commendet' }, // À supprimer
  { href: '#avis', label: 'Avis' },
  { href: '#contact', label: 'Contact' },
];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-dark">
          OKA<span className="text-blue-bright">Nutrition</span>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-blue-dark hover:text-blue-bright transition">
            Accueil
          </a>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-blue-dark hover:text-blue-bright transition"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => openModal()}
            className="btn-primary text-sm py-2 px-6"
          >
            Commander
          </button>
        </nav>

        {/* Bouton hamburger */}
        <button
          className="md:hidden flex flex-col space-y-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-blue-dark transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-6 h-0.5 bg-blue-dark transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-blue-dark transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md shadow-lg px-4 py-6 flex flex-col space-y-4">
          <a href="/" className="text-blue-dark hover:text-blue-bright transition">
            Accueil
          </a>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-blue-dark hover:text-blue-bright transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
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
    </header>
  );
}