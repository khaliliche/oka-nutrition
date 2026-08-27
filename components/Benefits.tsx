const benefits = [
  {
    label: 'Freine la chute',
    desc: 'Agit sur les récepteurs responsables de la chute de cheveux.',
  },
  {
    label: 'Augmente la densité',
    desc: 'Stimule les follicules capillaires pour une chevelure plus fournie.',
  },
  {
    label: 'Renforce les cheveux',
    desc: 'Apporte les nutriments essentiels à la vitalité du cheveu.',
  },
];

function BenefitIcon() {
  return (
    <div className="w-12 h-12 rounded-full bg-blue-light flex items-center justify-center shrink-0">
      <svg className="w-6 h-6 text-blue-bright" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v6m3-6v10m3-10v14M6 21h12" />
      </svg>
    </div>
  );
}

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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.label} className="card-premium text-center flex flex-col items-center">
              <BenefitIcon />
              <h3 className="mt-4 font-bold text-blue-dark">{b.label}</h3>
              <p className="mt-2 text-sm text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}