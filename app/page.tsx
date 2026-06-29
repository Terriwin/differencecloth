import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FeaturedShowcase } from "@/components/FeaturedShowcase";
import { ReviewCard } from "@/components/ReviewCard";
import { OrderButton } from "@/components/OrderButton";
import { ArrowRightIcon } from "@/components/icons";
import { getFeaturedProducts } from "@/lib/products";
import { getFeaturedReviews } from "@/lib/reviews";
import { SITE } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedProducts(4);
  const [leadReview, ...restReviews] = getFeaturedReviews(3);

  return (
    <>
      {/* ---- Hero: full-bleed photo, nav overlays via the global header ---- */}
      <section className="grain relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/catalog/krovavye-dzhinsy-1.jpg"
          alt="«Кровавые джинсы» DIFFERENCE — ручная роспись краской по ткани"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[center_30%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-canvas via-canvas/60 to-canvas/10"
        />

        <div className="relative z-10 pb-12 md:pb-16">
          <Container>
            <p className="label text-xs text-secondary">{SITE.eyebrow}</p>
          </Container>

          {/* Oversized wordmark, flush to the left edge, offset against the image */}
          <h1 className="mt-4 whitespace-nowrap pl-5 font-display text-[clamp(3rem,17vw,15rem)] font-bold uppercase leading-[0.78] tracking-tightest text-ink [text-shadow:0_6px_50px_rgba(0,0,0,0.55)] md:pl-8 lg:pl-12">
            {SITE.heroTitle}
          </h1>

          <Container className="mt-6 md:mt-8">
            <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <p className="max-w-sm text-base leading-relaxed text-secondary md:text-lg">
                {SITE.heroSlogan}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/catalog"
                  className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[var(--radius)] bg-ink px-7 font-display text-sm font-semibold uppercase tracking-[0.12em] text-canvas transition-[background-color,transform] duration-200 ease-out-soft hover:bg-secondary active:translate-y-px cursor-pointer"
                >
                  Смотреть каталог
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out-soft group-hover:translate-x-1" />
                </Link>
                <OrderButton variant="outline" size="lg" />
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ---- Outlined wordmark band: a graphic divider, not a slab ---- */}
      <div
        aria-hidden
        className="overflow-hidden border-y border-line py-5 md:py-7"
      >
        <p className="-ml-[3vw] select-none whitespace-nowrap font-display text-[clamp(2.5rem,11vw,8rem)] font-bold uppercase leading-none tracking-tight text-transparent [-webkit-text-stroke:1px_rgb(var(--c-line-strong))]">
          Ручная работа · DIFFERENCE · Минск · Ручная работа · DIFFERENCE · Минск ·
        </p>
      </div>

      {/* ---- В наличии: editorial broken grid ---- */}
      <section id="in-stock" className="scroll-mt-24 overflow-hidden py-20 md:py-28">
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
        </Container>
        <div className="mt-12 md:mt-20">
          <FeaturedShowcase products={featured} />
        </div>
      </section>

      {/* ---- Отзывы: asymmetric — one large pull-quote + two compact ---- */}
      <section className="border-t border-line bg-surface/30 py-20 md:py-28">
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

          <div className="mt-10 md:mt-14 md:grid md:grid-cols-12 md:gap-8">
            {leadReview && (
              <figure className="relative overflow-hidden rounded-[var(--radius)] border border-line bg-surface p-8 md:col-span-7 md:p-12">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-10 select-none font-display text-[12rem] leading-none text-accent/15"
                >
                  &rdquo;
                </span>
                <blockquote className="relative text-xl leading-relaxed text-ink md:text-2xl">
                  «{leadReview.text}»
                </blockquote>
                <figcaption className="relative mt-8 flex items-center gap-3 border-t border-line pt-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={leadReview.photo}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-12 w-12 shrink-0 rounded-full object-cover"
                  />
                  <span>
                    <span className="block label text-xs text-ink">
                      {leadReview.author}
                    </span>
                    {leadReview.product && (
                      <span className="mt-0.5 block text-xs text-secondary">
                        {leadReview.product}
                      </span>
                    )}
                  </span>
                </figcaption>
              </figure>
            )}

            <ul
              role="list"
              className="mt-6 space-y-6 md:col-span-4 md:col-start-9 md:mt-0"
            >
              {restReviews.map((review) => (
                <li key={review.id}>
                  <ReviewCard review={review} />
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
