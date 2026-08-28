import Image from 'next/image';

const benefits = [
  {
    label: 'Freine la chute',
    desc: 'Agit sur les récepteurs responsables de la chute de cheveux.',
    image: '/images/icon-benefit-1.jpg',
  },
  {
    label: 'Augmente la densité',
    desc: 'Stimule les follicules capillaires pour une chevelure plus fournie.',
    image: '/images/icon-benefit-2.jpg',
  },
  {
    label: 'Renforce les cheveux',
    desc: 'Apporte les nutriments essentiels à la vitalité du cheveu.',
    image: '/images/icon-benefit-3.jpg',
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-blue-dark">
            Une formule, trois actions
          </h2>
          <div className="divider-blue mt-4" />
        </div>

        <div className="flex sm:grid sm:grid-cols-3 gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-auto sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {benefits.map((b) => (
            <div
              key={b.label}
              className="card-premium text-center flex flex-col items-center shrink-0 w-[85%] sm:w-auto snap-center"
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                <Image src={b.image} alt={b.label} fill className="object-cover" />
              </div>
              <h3 className="mt-4 font-bold text-blue-dark">{b.label}</h3>
              <p className="mt-2 text-sm text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex sm:hidden items-center justify-center gap-1.5 mt-4">
          {benefits.map((b) => (
            <span key={b.label} className="w-1.5 h-1.5 rounded-full bg-blue-bright/30" />
          ))}
        </div>
      </div>
    </section>
  );
}