export default function TopBanner() {
  return (
    <div className="bg-blue-light text-blue-dark text-xs sm:text-sm font-bold py-2">
      <div className="container mx-auto px-4 flex items-center justify-center gap-2">
        <svg className="w-4 h-4 text-blue-bright" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5 8h10v9a1 1 0 01-1 1H6a1 1 0 01-1-1V8z" />
          <path d="M3 5a2 2 0 012-2h1.17a2.5 2.5 0 014.66 0h1.34a2.5 2.5 0 014.66 0H18a2 2 0 012 2v2H3V5z" />
        </svg>
        <span>CURE 3 MOIS&nbsp;·&nbsp;2 ACHETÉS + 1 OFFERT</span>
      </div>
    </div>
  );
}