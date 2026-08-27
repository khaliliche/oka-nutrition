import FadeIn from "./FadeIn";

const ingredients = [
  {
    name: "Saw Palmetto",
    role: "Actif végétal associé à la régulation de la 5-alpha-réductase.",
  },
  {
    name: "Biotine B7",
    role: "Vitamine qui contribue au maintien de cheveux normaux.",
  },
  {
    name: "Zinc",
    role: "Minéral essentiel qui contribue au maintien de cheveux normaux.",
  },
  {
    name: "Pygeum Africanum",
    role: "Extrait végétal utilisé en association avec les autres actifs de la formule.",
  },
];

export default function Formula() {
  return (
    <section id="formula" className="px-6 md:px-8 py-20 md:py-28 bg-navy">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">

          {/* PRODUCT IMAGE */}
          <FadeIn>
            <div className="relative max-w-xl mx-auto w-full">

              <div className="absolute -inset-5 md:-inset-8 bg-navy-light border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem]" />

              <div className="relative bg-navy-light rounded-[2rem] md:rounded-[2.5rem] aspect-square flex items-center justify-center overflow-hidden p-8 md:p-12">

                <img
                  src="/images/product-component.jpg"
                  alt="Formule DHT Control"
                  className="w-[88%] h-[88%] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                />

                <div className="absolute bottom-5 right-5 md:bottom-7 md:right-7 bg-white rounded-2xl px-5 py-4 shadow-lg">
                  <p className="text-xs text-charcoal-light mb-1">
                    Formule
                  </p>

                  <p className="font-heading text-lg text-navy">
                    4 actifs
                  </p>
                </div>

              </div>
            </div>
          </FadeIn>

          {/* CONTENT */}
          <div>
            <FadeIn>
              <p className="text-xs tracking-[0.2em] uppercase text-brass-light mb-4">
                La formule
              </p>

              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-[1.08] mb-5">
                Des actifs sélectionnés pour votre routine.
              </h2>

              <p className="text-charcoal-light leading-relaxed mb-10 max-w-lg">
                DHT Control associe plusieurs actifs dans une formule simple
                à intégrer au quotidien.
              </p>
            </FadeIn>

            <div className="space-y-3">
              {ingredients.map((ingredient, index) => (
                <FadeIn key={ingredient.name} delay={index * 0.08}>
                  <div className="group border border-white/10 rounded-2xl p-5 md:p-6 hover:border-brass/40 hover:bg-white/5 transition-all duration-300">

                    <div className="flex items-start gap-4">

                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy-light border border-white/10 flex items-center justify-center">
                        <span className="text-xs font-medium text-brass-light">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="pt-0.5">
                        <h3 className="font-heading text-lg md:text-xl text-white mb-1.5">
                          {ingredient.name}
                        </h3>

                        <p className="text-sm text-charcoal-light leading-relaxed">
                          {ingredient.role}
                        </p>
                      </div>

                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.35}>
              <div className="mt-7 pt-6 border-t border-white/10">
                <p className="text-xs text-charcoal-light leading-relaxed max-w-xl">
                  Les compléments alimentaires ne remplacent pas une
                  alimentation variée et équilibrée ni un mode de vie sain.
                </p>
              </div>
            </FadeIn>

          </div>

        </div>
      </div>
    </section>
  );
}