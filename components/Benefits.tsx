import Image from 'next/image';

const benefits = [
  {
    label: 'Freine la chute',
    image: '/images/icon-benefit-1.jpg',
  },
  {
    label: 'Augmente la densité',
    image: '/images/icon-benefit-2.jpg',
  },
  {
    label: 'Renforce les cheveux',
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

        <div className="max-w-4xl mx-auto flex sm:grid sm:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-auto sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {benefits.map((b) => (
            <div
              key={b.label}
              className="relative aspect-square rounded-xl overflow-hidden shrink-0 w-full sm:w-auto snap-center"
            >
              <Image src={b.image} alt={b.label} fill className="object-cover" />
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