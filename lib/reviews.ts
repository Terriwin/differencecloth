import type { Review } from "./types";

/** Mock reviews. Same data-seam pattern as products.ts. */
export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Дмитрий",
    product: "Кровавые джинсы",
    text: "Получил джинсы, круто получилось, очень понравилось, спасибо.",
    photo: "/reviews/r1.svg",
  },
  {
    id: "r2",
    author: "Алина",
    product: "Пепельные джинсы",
    text: "Сидят идеально, ткань плотная, цвет вживую ещё лучше, чем на фото. Шили под мои мерки — попали точно.",
    photo: "/reviews/r2.svg",
  },
  {
    id: "r3",
    author: "Кирилл",
    product: "Дымчатые джинсы",
    text: "Заказывал из другого города, всё объяснили по меркам, отправили быстро. Носятся уже месяц — как новые.",
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
