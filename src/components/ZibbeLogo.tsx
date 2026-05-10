import logoUrl from "@/assets/zibbe-logo.png";

export function ZibbeLogo({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const h = size === "lg" ? "h-14" : size === "sm" ? "h-8" : "h-11";
  return (
    <img
      src={logoUrl}
      alt="Zibbe Ferramentas e Manutenções"
      className={`${h} w-auto object-contain ${className}`}
    />
  );
}
