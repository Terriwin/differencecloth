"use client";

import { CURRENCIES } from "@/lib/currency";
import { useCurrency } from "./CurrencyProvider";

/** Segmented BYN / USD / RUB control. Uses aria-pressed so screen readers
 *  announce the active currency; selection is meaning-bearing, not color-only. */
export function CurrencySwitcher({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md";
  className?: string;
}) {
  const { currency, setCurrency } = useCurrency();
  const cell =
    size === "md"
      ? "min-h-[44px] min-w-[44px] px-3 text-[0.7rem]"
      : "min-h-[36px] min-w-[40px] px-2.5 text-[0.65rem]";

  return (
    <div
      role="group"
      aria-label="Валюта"
      className={`inline-flex items-stretch overflow-hidden rounded-[var(--radius)] border border-line ${className}`}
    >
      {CURRENCIES.map((code) => {
        const active = code === currency;
        return (
          <button
            key={code}
            type="button"
            aria-pressed={active}
            onClick={() => setCurrency(code)}
            className={`label inline-flex items-center justify-center transition-colors duration-200 ease-out-soft cursor-pointer ${cell} ${
              active
                ? "bg-ink text-canvas"
                : "text-secondary hover:bg-surface-2 hover:text-ink"
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
