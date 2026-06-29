import type { SocialLink } from "./types";

/** Brand-level constants and copy. Centralised so the prototype reads from one
 *  place; later these can move into a CMS / settings table. */

export const ORDER_URL = "https://t.me/Difference444";

export const SITE = {
  brand: "DIFFERENCE",
  eyebrow: "Ручная работа · Минск",
  heroTitle: "DIFFERENCE",
  heroSlogan:
    "Кастомные джинсы и юбки ручной работы. Каждая вещь существует в одном экземпляре.",
  city: "Минск, Беларусь",
  ctaLabel: "Заказать",
} as const;

export const NAV = [
  { label: "Каталог", href: "/catalog" },
  { label: "Наличие", href: "/#in-stock" },
  { label: "Отзывы", href: "/reviews" },
  { label: "Контакты", href: "/contacts" },
] as const;

/** Social + contact links. TikTok/VK/Instagram handles are placeholders for the
 *  prototype — swap for the real accounts before launch. Telegram is real. */
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
    handle: "@difference",
    href: "https://www.tiktok.com/@difference",
  },
  {
    kind: "vk",
    label: "ВКонтакте",
    handle: "difference",
    href: "https://vk.com/difference",
  },
  {
    kind: "instagram",
    label: "Instagram",
    handle: "@difference",
    href: "https://www.instagram.com/difference",
  },
];
