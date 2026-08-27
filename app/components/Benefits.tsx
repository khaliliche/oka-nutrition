import FadeIn from "./FadeIn";

const benefits = [
  {
    number: "01",
    title: "Cible la DHT",
    text: "Une formule pensée autour de la DHT, l'une des principales hormones impliquées dans la chute de cheveux chez l'homme.",
    img: "/images/icon-benefit-1.jpg",
  },
  {
    number: "02",
    title: "Soutient le follicule",
    text: "Des actifs sélectionnés pour accompagner la santé du cheveu et du cuir chevelu au quotidien.",
    img: "/images/icon-benefit-2.jpg",
  },
  {
    number: "03",
    title: "Simple au quotidien",
    text: "Une routine facile à intégrer dans votre quotidien, sans procédure compliquée.",
    img: "/images/icon-benefit-3.jpg",
  },
];

export default function Benefits() {
  return (
    <section className="bg-grey-bg px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto">

        <FadeIn>
          <div className="max-w-xl mb-12 lg:mb-16">
            <p className="text-[10px] uppercase tracking-[0.25em] text-charcoal-light mb-4">
              Pourquoi DHT Control
            </p>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.8rem] leading-[1.05] text-navy">
              Une approche simple pour prendre soin de vos cheveux.
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 border-t border-gray-300">

          {benefits.map((benefit, index) => (
            <FadeIn key={benefit.number} delay={index * 0.1}>
              <article className="group border-b md:border-b-0 md:border-r last:border-r-0 border-gray-300 p-6 sm:p-7 lg:p-8 hover:bg-white transition-colors duration-500">

                <div className="flex items-start justify-between mb-10">
                  <div className="w-12 h-12 overflow-hidden bg-white">
                    <img
                      src={benefit.img}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <span className="font-heading text-xs text-charcoal-light">
                    {benefit.number}
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl text-navy mb-3">
                  {benefit.title}
                </h3>

                <p className="text-sm text-charcoal-light leading-relaxed max-w-sm">
                  {benefit.text}
                </p>

                <div className="mt-7 w-7 h-px bg-navy/30 group-hover:w-12 transition-all duration-300" />

              </article>
            </FadeIn>
          ))}

        </div>

      </div>
    </section>
  );
}
