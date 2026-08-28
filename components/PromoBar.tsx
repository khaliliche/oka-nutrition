export default function PromoBar() {
  return (
    <div className="bg-blue-light text-blue-dark text-[11px] sm:text-sm font-bold py-2.5">
      <div className="container mx-auto px-4 flex items-center justify-center gap-2 sm:gap-3 tracking-wide">
        <span className="hidden xs:block flex-1 max-w-[36px] sm:max-w-[64px] border-t border-dashed border-blue-dark/40" />
        <span className="flex items-center gap-1.5 whitespace-nowrap">
          <span aria-hidden="true">🎁</span>
          CURE 3 MOIS · 2 ACHETÉS + 1 OFFERT
        </span>
        <span className="hidden xs:block flex-1 max-w-[36px] sm:max-w-[64px] border-t border-dashed border-blue-dark/40" />
      </div>
    </div>
  );
}