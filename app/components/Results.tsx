import FadeIn from "./FadeIn";

const results = [
  {
    img: "/images/results-1.jpg",
    alt: "Résultat DHT Control - avant",
    label: "Avant",
  },
  {
    img: "/images/results-2.jpg",
    alt: "Résultat DHT Control - après",
    label: "Après",
  },
];

export default function Results() {
  return (
    <section className="bg-white px-5 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto">

        <FadeIn>
          <div className="max-w-xl mb-10 sm:mb-14 mx-auto text-center">
            <p className="text-[10px] uppercase tracking-[0.25em] text-brass mb-4">
              Résultats
            </p>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.08] text-ink">
              Des résultats constatés par nos utilisateurs.
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">

          {results.map((result, index) => (
            <FadeIn key={result.img} delay={index * 0.1}>
              <div className="group relative rounded-2xl overflow-hidden border border-black/10 bg-mist shadow-xl shadow-black/5 hover:border-brass/40 transition-colors duration-300">

                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={result.img}
                    alt={result.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                <div className="absolute top-4 left-4 bg-brass text-white text-[11px] font-medium tracking-wide px-3 py-1.5 rounded-full shadow-lg">
                  {result.label}
                </div>

                <div className="absolute bottom-0 left-0 right-0 px-4 py-4">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/70">
                    OKA Nutrition
                  </p>
                  <p className="font-heading text-base text-white mt-0.5">
                    DHT Control
                  </p>
                </div>

              </div>
            </FadeIn>
          ))}

        </div>

        <FadeIn delay={0.25}>
          <p className="text-[11px] text-slate text-center mt-8 max-w-lg mx-auto leading-relaxed">
            Résultats individuels, non contractuels. Les effets peuvent
            varier d'une personne à l'autre.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}