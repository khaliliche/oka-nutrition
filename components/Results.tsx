import Image from 'next/image';

export default function Results() {
  const stats = [
    { label: 'Clients satisfaits', value: '250+' },
    { label: 'Efficacité constatée', value: '95%' },
    { label: 'Livraison en 48h', value: '100%' },
    { label: 'Retour clients positifs', value: '4.7/5' },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-blue-dark">
            Des résultats qui parlent
          </h2>
          <div className="divider-blue mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image-led before/after card */}
          <div className="relative">
            <div className="relative w-full h-[280px] sm:h-[360px] md:h-[400px] rounded-[1.75rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/results-2.jpg"
                alt="Résultats avant / après OKA Nutrition DHT Control"
                fill
                className="object-cover"
              />

              {/* Avant / Après labels */}
              <div className="absolute top-4 left-4 bg-blue-dark/85 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">
                AVANT
              </div>
              <div className="absolute top-4 right-4 bg-blue-bright/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">
                APRÈS
              </div>

              {/* Caption bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent pt-10 pb-3 px-4">
                <p className="text-white text-sm font-medium text-center">
                  Résultats constatés après 3 mois d&apos;utilisation
                </p>
              </div>
            </div>

            {/* Floating stat chip overlapping the card */}
            <div className="absolute -bottom-5 right-4 md:-right-6 bg-white rounded-2xl shadow-xl px-4 py-3 text-center">
              <p className="font-heading text-2xl font-bold text-blue-bright leading-none">95%</p>
              <p className="text-[11px] text-gray-500 mt-1">d&apos;efficacité constatée</p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-0">
            {stats.map((stat) => (
              <div key={stat.label} className="card-premium text-center">
                <p className="font-heading text-3xl sm:text-4xl font-bold text-blue-bright">{stat.value}</p>
                <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}