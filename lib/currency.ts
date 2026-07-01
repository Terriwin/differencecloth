import type { CurrencyCode, PriceSet } from "./types";

/** Display order in the switcher. BYN first — the shop is based in Minsk. */
export const CURRENCIES: CurrencyCode[] = ["BYN", "USD", "RUB"];

export const DEFAULT_CURRENCY: CurrencyCode = "BYN";

/** Symbol shown after the amount, matching how the maker writes prices. */
const SYMBOL: Record<CurrencyCode, string> = {
  BYN: "BYN",
  USD: "$",
  RUB: "₽",
};

const nf = new Intl.NumberFormat("ru-RU");

/** Format an amount in the given currency, e.g. formatPrice(5200, "RUB") -> "5 200 ₽".
 *  A price of exactly 0 is never real (nothing is sold for free) — treated as
 *  "not set yet" and rendered as a dash, e.g. for placeholder/draft products. */
export function formatPrice(amount: number, code: CurrencyCode): string {
  if (amount === 0) return "—";
  return `${nf.format(amount)} ${SYMBOL[code]}`;
}

export function priceIn(prices: PriceSet, code: CurrencyCode): string {
  return formatPrice(prices[code], code);
}

export const CURRENCY_STORAGE_KEY = "difference.currency";

export function isCurrencyCode(value: unknown): value is CurrencyCode {
  return value === "BYN" || value === "USD" || value === "RUB";
}
