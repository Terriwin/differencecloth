import type { SocialLink } from "./types";

/** Brand-level constants and copy. Centralised so the prototype reads from one
 *  place; later these can move into a CMS / settings table. */

export const ORDER_URL = "https://t.me/Difference444";

export const SITE = {
  brand: "DIFFERENCE",
  eyebrow: "Ручная работа · Минск",
  heroTitle: "DIFFERENCE",
  heroSlogan:
    "Кастомные джинсы ручной работы. Каждая вещь существует в одном экземпляре.",
  footerTagline: "Кастомная одежда ручной работы",
  city: "Минск, Беларусь",
  ctaLabel: "Заказать",
} as const;

export const NAV = [
  { label: "Каталог", href: "/catalog" },
  { label: "Наличие", href: "/#in-stock" },
  { label: "Отзывы", href: "/reviews" },
  { label: "Контакты", href: "/contacts" },
] as const;

/** Social + contact links. All real accounts. */
export const SOCIALS: SocialLink[] = [
  {
    kind: "telegram",
    label: "Telegram",
    handle: "@Difference444",
    href: ORDER_URL,
  },
  {
    kind: "tiktok",
    label: "TikTok",
    handle: "@difference5055",
    href: "https://www.tiktok.com/@difference5055",
  },
  {
    kind: "vk",
    label: "ВКонтакте",
    handle: "DIFFERENCE",
    href: "https://vk.ru/club237020794",
  },
  {
    kind: "instagram",
    label: "Instagram",
    handle: "@difference5055",
    href: "https://www.instagram.com/difference5055",
  },
];
