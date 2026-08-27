import Image from 'next/image';

export default function Reviews() {
  const reviews = [
    {
      name: 'Marie D.',
      avatar: '/images/avatar-1.jpg',
      text: 'Après 1 mois de cure, la chute a diminué de 70% ! Mes cheveux sont plus épais. Je recommande vivement.',
      rating: 5,
    },
    {
      name: 'Karim B.',
      avatar: '/images/avatar-2.jpg',
      text: 'Produit efficace et naturel. Je vois une nette amélioration après 6 semaines. Livraison rapide.',
      rating: 5,
    },
    {
      name: 'Sophie M.',
      avatar: '/images/avatar-3.jpg',
      text: 'J\'ai essayé plusieurs produits, OKA Nutrition est le seul qui a vraiment fonctionné. Je suis conquise !',
      rating: 5,
    },
  ];

  return (
    <section id="avis" className="py-16 bg-blue-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-dark">
          Avis clients
        </h2>
        <div className="divider-blue mt-4" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {reviews.map((review, idx) => (
            <div key={idx} className="card-premium">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-blue-dark">{review.name}</p>
                  <div className="flex text-yellow-400">
                    {'★'.repeat(review.rating)}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-700 italic">« {review.text} »</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}