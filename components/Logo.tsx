import Link from "next/link";
import { SITE } from "@/lib/site";

/**
 * Wordmark: a stroked "Đ" monogram (crossbar through the stem, echoing the
 * brand logo) plus the DIFFERENCE wordmark set in the condensed display face.
 * Live text rather than a baked image, so it inherits theme color and the
 * design tokens. The logo is a placeholder per the brief — easy to swap.
 */
export function Logo({
  showWordmark = true,
  className = "",
}: {
  showWordmark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label={`${SITE.brand} — на главную`}
      className={`group inline-flex items-center gap-2.5 text-ink ${className}`}
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path d="M10 5h6.5a11 11 0 0 1 0 22H10z" />
        <path d="M5 16h9" />
      </svg>
      {showWordmark && (
        <span className="font-display text-[1.35rem] font-bold uppercase leading-none tracking-[0.2em] text-ink">
          {SITE.brand}
        </span>
      )}
    </Link>
  );
}
