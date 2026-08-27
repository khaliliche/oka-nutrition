const benefits = [
  { label: 'FREINE\nLA CHUTE' },
  { label: 'AUGMENTE\nLA DENSITÉ' },
  { label: 'RENFORCE\nLES CHEVEUX' },
];

function BenefitIcon() {
  return (
    <div className="w-11 h-11 rounded-full border-2 border-blue-bright flex items-center justify-center shrink-0 bg-white">
      <svg className="w-5 h-5 text-blue-bright" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v6m3-6v10m3-10v14M6 21h12" />
      </svg>
    </div>
  );
}

export default function Benefits() {
  return (
    <section className="bg-white pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 max-w-xs">
          {benefits.map((b) => (
            <div key={b.label} className="flex items-center gap-3">
              <BenefitIcon />
              <span className="text-sm font-extrabold text-blue-dark leading-tight whitespace-pre-line">
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}