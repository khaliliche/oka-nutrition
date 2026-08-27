import Image from 'next/image';

export default function Hero() {
  return (
    <section id="dht-control" className="relative pt-10 pb-6 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <span className="block text-sm font-bold tracking-wide text-blue-bright mb-2">
          FORMULE POUR HOMME
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
          <span className="text-blue-dark">DES CHEVEUX<br />PLUS FORTS.</span>
          <br />
          <span className="text-blue-bright">UNE ROUTINE<br />PLUS CIBLÉE.</span>
        </h1>

        <p className="mt-4 text-gray-600 max-w-sm">
          DHT CONTROL – La formule complète pour lutter contre la chute et renforcer vos cheveux.
        </p>

        <div className="relative mt-4 min-h-[320px] sm:min-h-[420px] -mx-4">
          <Image
            src="/images/hero-model.jpg"
            alt="OKA Nutrition DHT Control"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
}