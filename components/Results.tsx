export default function Results() {
  const stats = [
    { label: 'Clients satisfaits', value: '10 000+' },
    { label: 'Efficacité constatée', value: '95%' },
    { label: 'Livraison en 48h', value: '100%' },
    { label: 'Retour clients positifs', value: '4.8/5' },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-blue-dark">
            Des résultats qui parlent
          </h2>
          <div className="divider-blue mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="card-premium text-center">
              <p className="font-heading text-3xl sm:text-4xl font-bold text-blue-bright">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}