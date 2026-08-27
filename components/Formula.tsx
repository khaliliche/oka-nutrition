import Image from 'next/image';

export default function Formula() {
  return (
    <section id="formule" className="py-16 md:py-24 bg-blue-light">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 w-full flex justify-center">
          <div className="relative w-full max-w-[380px] md:max-w-[440px] aspect-[461/562] rounded-[2rem] overflow-hidden shadow-xl bg-white">
            <Image
              src="/images/formula.jpg"
              alt="Formule DHT Control OKA Nutrition — Saw Palmetto, L-Cystéine, L-Méthionine, Zinc, Sélénium, Vitamine D3"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-blue-dark">
            Formule DHT Control — <span className="text-blue-bright">Pour Homme</span>
          </h2>
          <div className="divider-blue mt-4 mx-auto md:mx-0" />

          <p className="mt-6 text-xl font-semibold text-blue-dark">
            Une formule pensée pour les cheveux des hommes.
          </p>
          <p className="mt-3 text-lg text-gray-700">
            DHT Control associe des actifs sélectionnés pour accompagner la santé et la force du cheveu au quotidien.
          </p>

          <p className="mt-6 text-sm font-bold tracking-[0.15em] text-blue-bright uppercase">
            DHT · Force · Densité · Épaisseur · Protection
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Avec notamment Saw Palmetto, L-Cystéine, L-Méthionine, Zinc, Sélénium et Vitamine D3.
          </p>
        </div>
      </div>
    </section>
  );
}