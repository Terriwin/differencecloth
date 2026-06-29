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
      "/catalog/krovavye-dzhinsy-1.jpg",
      "/catalog/krovavye-dzhinsy-2.jpg",
      "/catalog/krovavye-dzhinsy-3.jpg",
    ],
  },
  {
    slug: "angel-tears-jeans",
    name: "Angel tears jeans",
    category: "Джинсы",
    tagline: "Светло-пепельная многослойная бахрома, фактурный верх",
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
    slug: "cursed-by-hell-jeans",
    name: "Cursed by hell jeans",
    category: "Джинсы",
    tagline: "Чёрная многослойная бахрома, длинный силуэт",
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
