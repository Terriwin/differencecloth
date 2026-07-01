import type { Product } from "./types";

/**
 * Mock catalogue — the single seam between the UI and the data source. Later,
 * replace the array with MySQL queries (same `Product` shape) and make the
 * accessors async; the pages don't depend on synchronous access. Every item is
 * a one-of-a-kind handmade pair of jeans.
 */
const REAL_PRODUCTS: Product[] = [
  {
    slug: "krovavye-dzhinsy",
    name: "Bloody Jeans",
    category: "Джинсы",
    description:
      "Широкие джинсы из плотного хлопка с авторской ручной росписью краской по ткани. Рисунок наносится вручную, поэтому повторить его невозможно — у вас будет ровно одна такая пара.",
    material: "100% хлопок, краска по ткани",
    measurements: [
      { label: "Длина", value: "102 см" },
      { label: "Выход", value: "37 см" },
      { label: "Полуталия", value: "36 см" },
    ],
    prices: { BYN: 180, USD: 60, RUB: 5200 },
    inStock: true,
    images: [
      "/catalog/krovavye-dzhinsy-1.jpg",
      "/catalog/krovavye-dzhinsy-2.jpg",
      "/catalog/krovavye-dzhinsy-3.jpg",
    ],
  },
  {
    slug: "angel-tears-jeans",
    name: "Angel tears jeans",
    category: "Джинсы",
    description:
      "Рваная многослойная бахрома ручной работы в светло-пепельном тоне, верх с фактурной сетчатой отделкой. На джинсах 2 потайных карго-кармана. Единственный экземпляр.",
    material: "98% хлопка, 2% эластана",
    measurements: [
      { label: "Длина", value: "103 см" },
      { label: "Выход", value: "50 см" },
      { label: "Полуталия", value: "39 см" },
    ],
    prices: { BYN: 350, USD: 126, RUB: 9111 },
    inStock: false,
    images: [
      "/catalog/angel-tears-jeans-1.jpg",
      "/catalog/angel-tears-jeans-2.jpg",
      "/catalog/angel-tears-jeans-3.jpg",
    ],
  },
  {
    slug: "cursed-by-hell-jeans",
    name: "Cursed by hell jeans",
    category: "Джинсы",
    description:
      "Чёрная рваная многослойная бахрома ручной работы, длинный струящийся силуэт. Единственный экземпляр.",
    material: "98% хлопка, 2% эластана",
    measurements: [
      { label: "Длина", value: "103 см" },
      { label: "Выход", value: "45 см" },
      { label: "Полуталия", value: "36 см" },
    ],
    prices: { BYN: 350, USD: 126, RUB: 9111 },
    inStock: true,
    images: [
      "/catalog/cursed-by-hell-jeans-1.jpg",
      "/catalog/cursed-by-hell-jeans-2.jpg",
      "/catalog/cursed-by-hell-jeans-3.jpg",
    ],
  },
];

/**
 * Temporary blank placeholders (plain black image, no copy) — added only to
 * preview how the 3-column grid behaves with more in-stock items. Remove once
 * the grid check is done.
 */
const PLACEHOLDER_COUNT = 6;
const PLACEHOLDERS: Product[] = Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => ({
  slug: `placeholder-${i + 1}`,
  name: "NAME",
  category: "—",
  description: "DESCRIPTION",
  material: "—",
  measurements: [
    { label: "Длина", value: "—" },
    { label: "Выход", value: "—" },
    { label: "Полуталия", value: "—" },
  ],
  prices: { BYN: 0, USD: 0, RUB: 0 },
  inStock: true,
  images: ["/catalog/placeholder-empty.svg"],
}));

export const PRODUCTS: Product[] = [...REAL_PRODUCTS, ...PLACEHOLDERS];

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

/** Used by the home "В наличии" block — shows every in-stock item, not a subset. */
export function getInStockProducts(): Product[] {
  return PRODUCTS.filter((p) => p.inStock);
}
