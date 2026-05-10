export function ZibbeLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 48 48"
        className="h-9 w-9 shrink-0"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="44" height="44" rx="8" fill="oklch(0.85 0.22 130)" />
        <path
          d="M14 14 H34 L18 32 H34"
          stroke="oklch(0.18 0.07 255)"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-black tracking-tight text-lg sm:text-xl text-primary-foreground">
          ZIBBE
        </span>
        <span className="text-[9px] uppercase tracking-[0.2em] text-accent font-semibold mt-0.5">
          Ferramentas · EPIs
        </span>
      </div>
    </div>
  );
}
