'use client';

import Image from 'next/image';
import { useLocale } from '@/context/LocaleContext';

export default function Footer() {
  const { dict } = useLocale();

  return (
    <footer
      id="contact"
      style={{ backgroundColor: '#0E1C4D' }}
      className="text-white pt-6 pb-3 md:pt-8 md:pb-4 border-t border-white/10"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Logo & Description */}
        <div>
          <Image
            src="/images/logo-new.png"
            alt="OKA Nutrition"
            width={110}
            height={110}
            className="h-20 w-auto object-contain"
          />

          <p className="mt-4 text-blue-light/80 text-sm leading-relaxed max-w-xs">
            {dict.footer.description}
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/90">
            {dict.footer.usefulLinks}
          </h4>

          <div className="w-8 h-0.5 bg-blue-bright rounded-full mt-2 mb-4" />

          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#offres"
                className="text-blue-light/80 hover:text-white transition"
              >
                {dict.footer.offresLink}
              </a>
            </li>

            <li>
              <a
                href="#avis"
                className="text-blue-light/80 hover:text-white transition"
              >
                {dict.footer.avisLink}
              </a>
            </li>

            <li>
              <a
                href="#faq"
                className="text-blue-light/80 hover:text-white transition"
              >
                {dict.footer.faqLink}
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/90">
            {dict.footer.followUs}
          </h4>

          <div className="w-8 h-0.5 bg-blue-bright rounded-full mt-2 mb-4" />

          {/* Instagram */}
          <a
            href="https://www.instagram.com/okanutrition"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-blue-light/80 hover:text-white transition group"
          >
            <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-bright transition shrink-0">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </span>

            {dict.footer.instagram}
          </a>

          {/* Phone */}
          <a
            href="tel:+212663822682"
            className="mt-4 inline-flex items-center gap-3 text-blue-light/80 hover:text-white transition group"
          >
            <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-bright transition shrink-0">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.02l-2.2 2.21z" />
              </svg>
            </span>

            066 382 2682
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4">
        <div className="border-t border-white/10 mt-3 pt-3 md:mt-4 md:pt-3 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-blue-light/60 text-center">
          <span>
            © {new Date().getFullYear()} OKA Nutrition.{' '}
            {dict.footer.copyright}
          </span>
        </div>
      </div>
    </footer>
  );
}
