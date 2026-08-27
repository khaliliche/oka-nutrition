export default function Benefits() {
  const benefits = [
    {
      icon: '🛡️',
      title: 'Anti-DHT',
      description: 'Une formule spécifique pour contrer l’action de la DHT, responsable de la chute.',
    },
    {
      icon: '📈',
      title: 'Densité augmentée',
      description: 'Stimule la repousse et augmente la densité capillaire visiblement.',
    },
    {
      icon: '💪',
      title: 'Renforcement',
      description: 'Les cheveux sont plus forts, plus résistants et moins cassants.',
    },
    {
      icon: '🔬',
      title: 'Efficacité prouvée',
      description: '+5000 hommes ont constaté des résultats dès 4 semaines.',
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