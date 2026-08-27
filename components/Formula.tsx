import Image from 'next/image';

export default function Formula() {
  return (
    <section className="py-16 bg-blue-light">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <Image
            src="/images/formula.jpg"
            alt="Formule OKA Nutrition"
            width={500}
            height={500}
            className="rounded-3xl shadow-lg object-cover w-full h-auto"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-dark">
            Une formule unique pour vos cheveux
          </h2>
          <div className="divider-blue mt-4" />
          <p className="mt-6 text-lg text-gray-700">
            OKA Nutrition associe des actifs naturels puissants : <br />
            <strong>Biotine</strong>, <strong>Zinc</strong>, <strong>Vitamine E</strong> et
            <strong> extraits de plantes</strong> pour nourrir le bulbe capillaire et stimuler la pousse.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-bright text-xl">✓</span>
              Réduit la chute de cheveux dès 4 semaines
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-bright text-xl">✓</span>
              Renforce la fibre capillaire
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-bright text-xl">✓</span>
              Améliore la brillance et la densité
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}