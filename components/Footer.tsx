export default function Footer() {
  return (
    <footer id="contact" className="bg-blue-dark text-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-heading text-xl font-bold">
            OKA Nutrition
          </h3>

          <p className="mt-3 text-blue-light text-sm leading-relaxed">
            Complément alimentaire 100% naturel pour la santé de vos cheveux.
            Livraison gratuite au Maroc.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">
            Liens utiles
          </h4>

          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#offres"
                className="text-blue-light hover:text-white transition"
              >
                Nos offres
              </a>
            </li>

            <li>
              <a
                href="#avis"
                className="text-blue-light hover:text-white transition"
              >
                Avis
              </a>
            </li>

            <li>
              <a
                href="#faq"
                className="text-blue-light hover:text-white transition"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">
            Suivez-nous
          </h4>

          <a
            href="https://www.instagram.com/okanutrition?igsi=eGp4aXM5MDJqeGp1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-light hover:text-white transition"
          >
            <span className="text-xl">📸</span>
            Instagram
          </a>

          <p className="mt-4 text-sm text-blue-light">
            Contact :{" "}
            <a
              href="tel:+212661972751"
              className="hover:text-white transition"
            >
              066 197 2751
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-blue-light/20 mt-10 pt-6 text-center text-sm text-blue-light">
        © {new Date().getFullYear()} OKA Nutrition. Tous droits réservés.
      </div>
    </footer>
  );
}