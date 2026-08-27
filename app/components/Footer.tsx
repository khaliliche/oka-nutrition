export default function Footer() {
  return (
    <footer className="bg-charcoal text-white px-6 md:px-8 py-12">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="text-center md:text-left">
            <div className="font-heading text-xl tracking-widest">
              OKA NUTRITION
            </div>

            <p className="text-white/50 text-sm mt-2">
              Votre routine capillaire, simplement.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/60">

            <a
              href="#formula"
              className="hover:text-white transition"
            >
              Formule
            </a>

            <a
              href="#offers"
              className="hover:text-white transition"
            >
              Offres
            </a>

            <a
              href="#faq"
              className="hover:text-white transition"
            >
              FAQ
            </a>

            <a
              href="https://www.instagram.com/okanutrition?igsi=eGp4aXM5MDJqeGp1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Instagram
            </a>

          </div>

        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/35">

          <p>
            © 2026 OKA Nutrition. Tous droits reserves.
          </p>

          <p>
            Paiement a la livraison · Livraison gratuite
          </p>

        </div>

      </div>
    </footer>
  );
}
