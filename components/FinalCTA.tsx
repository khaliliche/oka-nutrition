'use client';

import { useOrder } from '@/context/OrderContext';

export default function FinalCTA() {
  const { openModal } = useOrder();

  return (
    <section className="py-20 bg-blue-dark text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold">
          Prêt à dire adieu à la chute de cheveux ?
        </h2>
        <p className="mt-4 text-lg text-blue-light max-w-2xl mx-auto">
          Rejoignez des milliers de clients satisfaits et offrez à vos cheveux le meilleur de la nature.
        </p>
        <button
          onClick={() => openModal()}
          className="btn-primary mt-8 bg-white text-blue-dark hover:bg-blue-light hover:text-blue-dark animate-pulse-blue"
        >
          Commander maintenant
        </button>
      </div>
    </section>
  );
}