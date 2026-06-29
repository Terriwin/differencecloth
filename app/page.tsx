import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { ReviewCard } from "@/components/ReviewCard";
import { OrderButton } from "@/components/OrderButton";
import { ArrowRightIcon } from "@/components/icons";
import { getFeaturedProducts } from "@/lib/products";
import { getFeaturedReviews } from "@/lib/reviews";
import { SITE, ORDER_URL } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedProducts(4);
  const reviews = getFeaturedReviews(3);

  return (
    <>
      {/* ---- Hero ---- */}
      <section className="relative isolate flex min-h-[82dvh] items-end overflow-hidden border-b border-line">
        <div className="grain absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero.svg"
            alt="Кастомные джинсы DIFFERENCE ручной работы"
            className="h-full w-full object-cover"
          />
          {/* Functional scrim for text legibility, not decoration. */}
          <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/70 to-canvas/20" />
        </div>

        <Container className="pb-14 pt-32 md:pb-20">
          <p className="label text-xs text-secondary">{SITE.eyebrow}</p>
          <h1 className="mt-4 font-display font-bold uppercase leading-[0.86] tracking-tightest text-ink text-[clamp(3.5rem,18vw,11rem)]">
            {SITE.heroTitle}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-secondary md:text-lg">
            {SITE.heroSlogan}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/catalog"
              className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[var(--radius)] bg-ink px-7 font-display text-sm font-semibold uppercase tracking-[0.12em] text-canvas transition-[background-color,transform] duration-200 ease-out-soft hover:bg-secondary active:translate-y-px cursor-pointer"
            >
              Смотреть каталог
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out-soft group-hover:translate-x-1" />
            </Link>
            <OrderButton variant="outline" size="lg" />
          </div>
        </Container>
      </section>

      {/* ---- В наличии ---- */}
      <section id="in-stock" className="scroll-mt-24 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Сейчас"
            title="В наличии"
            action={
              <Link
                href="/catalog"
                className="group inline-flex items-center gap-2 label text-xs text-secondary transition-colors duration-200 hover:text-ink"
              >
                Весь каталог
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out-soft group-hover:translate-x-1" />
              </Link>
            }
          />
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 xs:grid-cols-2 lg:grid-cols-4"
          >
            {featured.map((product, i) => (
              <li key={product.slug}>
                <ProductCard product={product} priority={i < 2} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---- Отзывы ---- */}
      <section className="border-t border-line bg-surface/40 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Кто уже носит"
            title="Отзывы"
            action={
              <Link
                href="/reviews"
                className="group inline-flex items-center gap-2 label text-xs text-secondary transition-colors duration-200 hover:text-ink"
              >
                Все отзывы
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out-soft group-hover:translate-x-1" />
              </Link>
            }
          />
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {reviews.map((review) => (
              <li key={review.id}>
                <ReviewCard review={review} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---- Низ: призыв заказать ---- */}
      <section className="border-t border-line py-20 md:py-28">
        <Container>
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink md:text-5xl">
                Сделаем вашу пару
              </h2>
              <p className="mt-5 text-base leading-relaxed text-secondary">
                Отшиваем под ваши мерки. Напишите в Telegram — подберём крой,
                ткань и роспись, рассчитаем сроки. Оплаты на сайте нет.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <OrderButton size="lg" />
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-sm text-muted transition-colors duration-200 hover:text-ink md:text-right"
              >
                t.me/Difference444
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
