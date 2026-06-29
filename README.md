# DIFFERENCE — витрина (прототип)

Статичная витрина бренда кастомной одежды ручной работы (Минск). Этап 1: моковые
данные для показа клиенту. Дальше — переезд на VPS с MySQL, админкой и загрузкой
фото.

Дизайн-система зафиксирована в [`DESIGN.md`](DESIGN.md) — это источник правды.

## Стек

- **Next.js 14** (App Router) · **TypeScript** · **Tailwind CSS**
- Шрифты через `next/font` (self-host на сборке, без CDN)
- Без Vercel-специфичных API. `next.config.mjs` → `output: "standalone"`
  (самодостаточный Node-сервер для VPS).

## Запуск

```bash
npm install
npm run placeholders   # генерирует SVG-заглушки в /public (уже сгенерированы)
npm run dev            # http://localhost:3000
```

Прод:

```bash
npm run build
npm start              # или node .next/standalone/server.js на VPS
```

## Структура

```
app/                 страницы (App Router)
  page.tsx           главная
  catalog/           каталог + [slug] карточка товара
  reviews/           отзывы
  contacts/          контакты
components/           переиспользуемые элементы UI
lib/                  слой данных (моки + типы) — единственный шов к будущему API
  products.ts        каталог
  reviews.ts         отзывы
  site.ts            бренд, навигация, соцсети, ORDER_URL
  currency.ts        валюты BYN/USD/RUB + формат
  types.ts           доменные типы
public/               SVG-заглушки фото (products/, reviews/, hero.svg)
scripts/              генератор заглушек
```

## Что менять перед запуском

- **Контент** — `lib/products.ts`, `lib/reviews.ts`, `lib/site.ts`.
- **Соцсети** — TikTok/ВК/Instagram в `lib/site.ts` сейчас заглушки. Telegram —
  настоящий (`https://t.me/Difference444`).
- **Фото** — заменить файлы в `/public/products`, `/public/reviews`, `/public/hero.svg`
  на реальные по тем же путям (см. `images` в `lib/products.ts`).
- **Тему** — цвета/радиусы/тайминги в `app/globals.css`, маппинг в `tailwind.config.ts`.

## Переезд на MySQL

Заменить тело функций в `lib/products.ts` / `lib/reviews.ts` на запросы к БД,
сохранив возвращаемые типы (`Product`, `Review`). Сделать их `async` и добавить
`await` в страницах — компоненты остаются без изменений.
