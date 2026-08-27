import Image from 'next/image';

export default function Formula() {
  return (
    <section className="py-16 bg-blue-light">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <Image
            src="/images/formula.jpg"
            alt="Formule DHT Control OKA Nutrition"
            width={500}
            height={500}
            className="rounded-3xl shadow-lg object-cover w-full h-auto"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-dark">
            DHT Control – la formule ciblée
          </h2>
          <div className="divider-blue mt-4" />
          <p className="mt-6 text-lg text-gray-700">
            OKA Nutrition DHT Control associe des actifs naturels puissants pour contrer l’action de la DHT, l’hormone responsable de la chute de cheveux chez l’homme.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-bright text-xl">✓</span>
              <strong>Freine la chute</strong> – agit sur les récepteurs de la DHT
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-bright text-xl">✓</span>
              <strong>Augmente la densité</strong> – stimule les follicules capillaires
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-bright text-xl">✓</span>
              <strong>Renforce les cheveux</strong> – apporte nutriments et vitalité
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}