export default function Results() {
  const stats = [
    { label: 'Clients satisfaits', value: '10 000+' },
    { label: 'Efficacité constatée', value: '95%' },
    { label: 'Livraison en 48h', value: '100%' },
    { label: 'Retour clients positifs', value: '4.8/5' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold text-blue-bright">{stat.value}</p>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}