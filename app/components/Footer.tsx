export default function Footer() {
  return (
    <footer className="bg-navy text-white px-5 sm:px-6 md:px-8 py-10 md:py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

          <div className="text-center md:text-left">
            <div className="font-heading text-lg md:text-xl tracking-[0.16em]">
              OKA NUTRITION
            </div>

            <p className="text-white/50 text-sm mt-2">
              Votre routine capillaire, simplement.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm text-white/60">

            <a
              href="#formula"
              className="hover:text-brass-light transition-colors"
            >
              Formule
            </a>

            <a
              href="#offers"
              className="hover:text-brass-light transition-colors"
            >
              Offres
            </a>

            <a
              href="#reviews"
              className="hover:text-brass-light transition-colors"
            >
              Avis
            </a>

            <a
              href="#faq"
              className="hover:text-brass-light transition-colors"
            >
              FAQ
            </a>

            <a
              href="https://www.instagram.com/okanutrition?igsi=eGp4aXM5MDJqeGp1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brass-light transition-colors"
            >
              Instagram
            </a>

          </nav>

        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row items-center md:justify-between gap-3 text-center md:text-left text-xs text-white/35">

          <p>
            © 2026 OKA Nutrition. Tous droits réservés.
          </p>

          <p>
            Paiement à la livraison · Livraison gratuite
          </p>

        </div>

      </div>
    </footer>
  );
}
