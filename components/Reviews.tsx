export default function Reviews() {
  const reviews = [
    {
      name: 'Karim B.',
      text: 'Après 2 mois, la chute a nettement diminué. Mes cheveux sont plus épais. Je recommande !',
      rating: 5,
    },
    {
      name: 'Youssef M.',
      text: 'Produit efficace et naturel. Je vois une nette amélioration après 6 semaines.',
      rating: 5,
    },
    {
      name: 'Mehdi S.',
      text: 'J\u2019ai essayé plusieurs produits, OKA Nutrition DHT Control est le seul qui a vraiment fonctionné.',
      rating: 5,
    },
  ];

  return (
    <section id="avis" className="py-16 md:py-24 bg-blue-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-blue-dark">
            Ils ont retrouvé confiance
          </h2>
          <div className="divider-blue mt-4" />
        </div>

        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
            <span className="text-yellow-400 text-2xl">★★★★★</span>
            <span className="font-bold text-lg text-blue-dark">+276 hommes satisfaits</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {reviews.map((review, idx) => (
            <div key={idx} className="card-premium">
              <span className="font-heading text-5xl text-blue-bright/30 leading-none">&ldquo;</span>
              <p className="-mt-4 text-gray-700 italic">{review.text}</p>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-12 h-12 rounded-full shrink-0 bg-blue-dark text-white flex items-center justify-center font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-blue-dark text-sm">{review.name}</p>
                  <div className="flex text-yellow-400 text-sm">{'★'.repeat(review.rating)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}