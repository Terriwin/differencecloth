import { ORDER_URL, SITE } from "@/lib/site";
import { ArrowUpRightIcon } from "./icons";

/** The single primary CTA used across the whole site. Always opens the brand's
 *  Telegram in a new tab. There is no on-site checkout. */
export function OrderButton({
  variant = "primary",
  size = "lg",
  label = SITE.ctaLabel,
  className = "",
  showIcon = true,
}: {
  variant?: "primary" | "outline";
  size?: "md" | "lg";
  label?: string;
  className?: string;
  showIcon?: boolean;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 font-display uppercase font-semibold tracking-[0.12em] cursor-pointer rounded-[var(--radius)] transition-[background-color,color,transform] duration-200 ease-out-soft active:translate-y-px";
  const sizing =
    size === "lg"
      ? "min-h-[52px] px-7 text-sm"
      : "min-h-[44px] px-5 text-[0.8rem]";
  const variants =
    variant === "primary"
      ? "bg-ink text-canvas hover:bg-secondary"
      : "border border-line-strong text-ink hover:bg-surface-2";

  return (
    <a
      href={ORDER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizing} ${variants} ${className}`}
    >
      {label}
      {showIcon && (
        <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-200 ease-out-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </a>
  );
}
