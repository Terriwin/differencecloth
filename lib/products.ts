import type { Product } from "./types";

/**
 * Mock catalogue. This is the single seam between the UI and the data source.
 * Later, replace the array below with queries against MySQL (same `Product`
 * shape) and turn the accessor functions async — pages already `await` nothing
 * synchronous that would block that change.
 *
 * Per the brief, all items are jeans for this prototype; the brand also makes
 * skirts, which can be added as more `Product` entries with no code changes.
 */
export const PRODUCTS: Product[] = [
  {
    slug: "krovavye-dzhinsy",
    name: "Кровавые джинсы",
    category: "Джинсы",
    tagline: "Ручная роспись по ткани, единственный экземпляр",
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
      "/products/krovavye-dzhinsy-1.svg",
      "/products/krovavye-dzhinsy-2.svg",
      "/products/krovavye-dzhinsy-3.svg",
    ],
  },
  {
    slug: "pepelnye-dzhinsy",
    name: "Пепельные джинсы",
    category: "Джинсы",
    tagline: "Ручная варка, приглушённый серый тон",
    description:
      "Прямые джинсы с ручной варкой: пепельно-серый, чуть выгоревший оттенок, который ложится неравномерно и живёт по-своему. Никакого фабричного глянца — только характер ткани.",
    material: "100% хлопок, ручная варка",
    measurements: [
      { label: "Длина", value: "104 см" },
      { label: "Выход", value: "38 см" },
      { label: "Полуталия", value: "37 см" },
    ],
    prices: { BYN: 170, USD: 57, RUB: 4900 },
    inStock: true,
    images: [
      "/products/pepelnye-dzhinsy-1.svg",
      "/products/pepelnye-dzhinsy-2.svg",
    ],
  },
  {
    slug: "grafitovye-dzhinsy",
    name: "Графитовые джинсы",
    category: "Джинсы",
    tagline: "Глубокий графит, роспись по ткани",
    description:
      "Тёмно-графитовые джинсы с плотной авторской росписью. Глубокий, почти угольный тон с матовой фактурой. Шьются под заказ по индивидуальным меркам.",
    material: "100% хлопок, краска по ткани",
    measurements: [
      { label: "Длина", value: "101 см" },
      { label: "Выход", value: "36 см" },
      { label: "Полуталия", value: "35 см" },
    ],
    prices: { BYN: 190, USD: 63, RUB: 5500 },
    inStock: false,
    images: [
      "/products/grafitovye-dzhinsy-1.svg",
      "/products/grafitovye-dzhinsy-2.svg",
    ],
  },
  {
    slug: "dymchatye-dzhinsy",
    name: "Дымчатые джинсы",
    category: "Джинсы",
    tagline: "Чистый крой, дымчатый серый",
    description:
      "Минималистичные джинсы без декора — ставка на крой и фактуру плотного хлопка. Спокойный дымчатый оттенок, который собирается с чем угодно.",
    material: "100% хлопок",
    measurements: [
      { label: "Длина", value: "103 см" },
      { label: "Выход", value: "37 см" },
      { label: "Полуталия", value: "36 см" },
    ],
    prices: { BYN: 165, USD: 55, RUB: 4800 },
    inStock: true,
    images: [
      "/products/dymchatye-dzhinsy-1.svg",
      "/products/dymchatye-dzhinsy-2.svg",
    ],
  },
  {
    slug: "ugolnye-dzhinsy",
    name: "Угольные джинсы",
    category: "Джинсы",
    tagline: "Самый тёмный тон линейки",
    description:
      "Угольно-чёрные джинсы с ручной росписью по краю. Самый тёмный оттенок в линейке — почти без отражений, с матовой, «обугленной» фактурой.",
    material: "100% хлопок, краска по ткани",
    measurements: [
      { label: "Длина", value: "100 см" },
      { label: "Выход", value: "36 см" },
      { label: "Полуталия", value: "34 см" },
    ],
    prices: { BYN: 200, USD: 67, RUB: 5800 },
    inStock: false,
    images: [
      "/products/ugolnye-dzhinsy-1.svg",
      "/products/ugolnye-dzhinsy-2.svg",
    ],
  },
];

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getInStockProducts(): Product[] {
  return PRODUCTS.filter((p) => p.inStock);
}

/** Items featured in the home "В наличии" block. */
export function getFeaturedProducts(limit = 4): Product[] {
  return getInStockProducts().slice(0, limit);
}
