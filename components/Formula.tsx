import Image from 'next/image';

export default function Formula() {
  return (
    <section id="formule" className="py-16 md:py-24 bg-blue-light">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 w-full">
          <div className="relative w-full h-[320px] md:h-[420px] rounded-[2rem] overflow-hidden shadow-lg">
            <Image
              src="/images/formula.jpg"
              alt="Formule DHT Control OKA Nutrition"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-blue-dark">
            DHT Control — la formule ciblée
          </h2>
          <div className="divider-blue mt-4 mx-auto md:mx-0" />
          <p className="mt-6 text-lg text-gray-700">
            OKA Nutrition DHT Control associe des actifs naturels puissants pour contrer l&apos;action de la DHT, l&apos;hormone responsable de la chute de cheveux chez l&apos;homme.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700 text-left inline-block">
            <li className="flex items-start gap-3">
              <span className="text-blue-bright text-xl leading-none">✓</span>
              <span><strong>Freine la chute</strong> — agit sur les récepteurs de la DHT</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-bright text-xl leading-none">✓</span>
              <span><strong>Augmente la densité</strong> — stimule les follicules capillaires</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-bright text-xl leading-none">✓</span>
              <span><strong>Renforce les cheveux</strong> — apporte nutriments et vitalité</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}