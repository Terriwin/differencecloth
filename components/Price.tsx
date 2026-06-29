"use client";

import { useCurrency } from "./CurrencyProvider";
import { priceIn } from "@/lib/currency";
import type { PriceSet } from "@/lib/types";

/** Renders a price in the globally-selected currency. Client island so it can
 *  live inside otherwise-static server-rendered cards and pages. */
export function Price({
  prices,
  className = "",
}: {
  prices: PriceSet;
  className?: string;
}) {
  const { currency } = useCurrency();
  return <span className={`nums ${className}`}>{priceIn(prices, currency)}</span>;
}
