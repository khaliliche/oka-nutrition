export default function Benefits() {
  const benefits = [
    {
      icon: '🏆',
      title: 'Qualité Premium',
      description: 'Ingrédients sélectionnés avec soin pour une efficacité optimale.',
    },
    {
      icon: '🌿',
      title: '100% Naturel',
      description: 'Formulé à base d\'extraits de plantes et de nutriments essentiels.',
    },
    {
      icon: '📊',
      title: 'Efficacité prouvée',
      description: 'Des résultats cliniquement testés sur la repousse capillaire.',
    },
    {
      icon: '👩‍🔬',
      title: 'Expertise',
      description: 'Développé par des experts en nutrition et en santé capillaire.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-dark">
          Pourquoi choisir OKA Nutrition ?
        </h2>
        <div className="divider-blue mt-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="card-premium text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-blue-dark">{benefit.title}</h3>
              <p className="mt-2 text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}