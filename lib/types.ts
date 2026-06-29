/**
 * Shared domain types. The whole UI depends only on these shapes — not on where
 * the data comes from. When the project moves to a VPS with MySQL + an admin
 * panel, swap the mock modules (products.ts / reviews.ts) for async data access
 * that returns these same types, and the components keep working unchanged.
 */

export type CurrencyCode = "BYN" | "USD" | "RUB";

/** A price is stored explicitly per currency (hand-set by the maker), never
 *  derived from a single base via live FX — these are real shop prices. */
export type PriceSet = Record<CurrencyCode, number>;

export interface Measurement {
  label: string;
  /** Value with unit already applied, e.g. "102 см". */
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  /** Product family, e.g. "Джинсы". */
  category: string;
  /** One-line hook shown on cards / hero. */
  tagline: string;
  description: string;
  material: string;
  measurements: Measurement[];
  prices: PriceSet;
  inStock: boolean;
  /** Paths under /public. First image is the cover. */
  images: string[];
}

export interface Review {
  id: string;
  author: string;
  /** Optional product reference for context. */
  product?: string;
  text: string;
  /** Avatar path under /public. */
  photo: string;
}

export type SocialKind = "telegram" | "tiktok" | "vk" | "instagram";

export interface SocialLink {
  kind: SocialKind;
  label: string;
  handle: string;
  href: string;
}
