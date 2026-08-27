'use client';

import { useOrder } from '@/context/OrderContext';
import Image from 'next/image';

export default function OrderModal() {
  const { isOpen, selectedOffer, closeModal } = useOrder();

  if (!isOpen) return null;

  const offers = [
    {
      id: 'offre-1',
      title: 'Découverte',
      price: 199,
      badge: '🌟 Populaire',
      description: '1 flacon – cure 1 mois',
      image: '/images/offre-1.jpg',
    },
    {
      id: 'offre-2',
      title: 'Cure complète',
      price: 349,
      badge: '⭐ Meilleure valeur',
      description: '3 flacons – 2 achetés + 1 offert',
      image: '/images/offre-2.jpg',
    },
  ];

  const handleOrder = (offer: typeof offers[0]) => {
    const message = `Bonjour, je souhaite commander l'offre "${offer.title}" (${offer.description}) au prix de ${offer.price} DH.`;
    const url = `https://wa.me/212661972751?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-dark">Choisissez votre offre</h2>
          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="space-y-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`flex flex-col sm:flex-row items-center gap-6 p-4 rounded-2xl border-2 transition-all ${
                selectedOffer?.id === offer.id
                  ? 'border-blue-bright bg-blue-light'
                  : 'border-gray-100 hover:border-blue-bright/50'
              }`}
            >
              <div className="relative w-32 h-32 flex-shrink-0">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <span className="inline-block bg-blue-bright text-white text-xs font-bold px-3 py-1 rounded-full mb-1">
                  {offer.badge}
                </span>
                <h3 className="text-xl font-bold text-blue-dark">{offer.title}</h3>
                <p className="text-gray-600">{offer.description}</p>
                <p className="text-2xl font-extrabold text-blue-bright mt-1">
                  {offer.price} DH
                </p>
              </div>
              <button
                onClick={() => handleOrder(offer)}
                className="btn-primary text-sm py-2 px-6 whitespace-nowrap"
              >
                Commander
              </button>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          En cliquant sur "Commander", vous serez redirigé vers WhatsApp pour finaliser votre commande.
        </p>
      </div>
    </div>
  );
}