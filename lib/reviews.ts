import type { Review } from "./types";

/** Real customer reviews forwarded to the brand's Telegram channel. */
export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "женя",
    text: "привет, заказ забрал, все заебись очень крутые джинсы!",
    photo: "/reviews/r1.svg",
  },
  {
    id: "r2",
    author: "DO30RIA",
    text: "Еба штаны имбовые, теперь знаю где заказывать)",
    photo: "/reviews/r2.svg",
  },
  {
    id: "r3",
    author: "OdinDvaTvari",
    text: "Хорошая сумка, ждал не долго, очень приятный парень в общении.",
    photo: "/reviews/r3.svg",
  },
];

export function getAllReviews(): Review[] {
  return REVIEWS;
}

/** Reviews highlighted on the home page. */
export function getFeaturedReviews(limit = 3): Review[] {
  return REVIEWS.slice(0, limit);
}
