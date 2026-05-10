import logoUrl from "@/assets/zibbe-logo.png";

export function ZibbeLogo({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const h =
    size === "lg"
      ? "h-16 md:h-20"
      : size === "sm"
        ? "h-9"
        : "h-12 md:h-14";
  return (
    <img
      src={logoUrl}
      alt="Zibbe Ferramentas e Manutenções"
      width={1853}
      height={454}
      decoding="async"
      loading="eager"
      draggable={false}
      className={`${h} w-auto object-contain select-none [image-rendering:auto] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] ${className}`}
    />
  );
}
