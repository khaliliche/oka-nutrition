import FadeIn from "./FadeIn";

const results = [
  {
    img: "/images/results-1.jpg",
    alt: "Résultat DHT Control",
  },
  {
    img: "/images/results-2.jpg",
    alt: "Résultat DHT Control",
  },
];

export default function Results() {
  return (
    <section className="bg-white px-5 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">

          {results.map((result, index) => (
            <FadeIn key={result.img} delay={index * 0.1}>
              <div className="group overflow-hidden bg-grey-bg aspect-[4/5]">
                <img
                  src={result.img}
                  alt={result.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </FadeIn>
          ))}

        </div>

      </div>
    </section>
  );
}
