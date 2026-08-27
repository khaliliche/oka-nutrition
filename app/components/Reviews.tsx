import FadeIn from "./FadeIn";

const reviews = [
  {
    name: "Youssef",
    age: "34 ans",
    text: "Après 2 mois, j'ai surtout remarqué que ma routine était beaucoup plus simple à suivre. Je continue ma cure.",
    stars: 5,
  },
  {
    name: "Amine",
    age: "28 ans",
    text: "La commande et le paiement à la livraison m'ont rassuré. Le produit est facile à intégrer dans ma routine.",
    stars: 5,
  },
  {
    name: "Karim",
    age: "41 ans",
    text: "J'apprécie surtout la simplicité de la cure. Je suis régulier depuis plusieurs semaines maintenant.",
    stars: 4,
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-white px-5 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24"
    >
      <div className="max-w-6xl mx-auto">

        <FadeIn>
          <div className="max-w-xl mb-10 md:mb-14">
            <p className="text-[10px] uppercase tracking-[0.22em] text-brass mb-3">
              Avis clients
            </p>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.05]">
              Une routine pensée pour durer.
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-px bg-black/10 rounded-2xl overflow-hidden">
          {reviews.map((review, index) => (
            <FadeIn key={review.name} delay={index * 0.1}>
              <article className="bg-white p-6 sm:p-7 md:p-8 h-full flex flex-col">

                <div className="flex gap-1 mb-7">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <span key={starIndex} className="text-sm text-brass">
                      {starIndex < review.stars ? "★" : "☆"}
                    </span>
                  ))}
                </div>

                <blockquote className="font-heading text-lg md:text-xl text-ink leading-relaxed flex-1">
                  "{review.text}"
                </blockquote>

                <div className="border-t border-black/10 mt-7 pt-5">
                  <p className="text-sm font-medium text-ink">
                    {review.name}
                  </p>

                  <p className="text-xs text-slate mt-1">
                    {review.age}
                  </p>
                </div>

              </article>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}