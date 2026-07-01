import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Gallery } from "@/components/Gallery";
import { Price } from "@/components/Price";
import { CurrencySwitcher } from "@/components/CurrencySwitcher";
import { StockBadge } from "@/components/StockBadge";
import { OrderButton } from "@/components/OrderButton";
import { ChevronRightIcon } from "@/components/icons";
import { getAllProducts, getProductBySlug } from "@/lib/products";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Товар не найден" };
  return {
    title: product.name,
    description: `${product.name} — ${product.description}`,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <article className="py-10 md:py-14">
      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Хлебные крошки" className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-muted">
            <li>
              <Link
                href="/catalog"
                className="label text-[0.7rem] transition-colors duration-200 hover:text-ink"
              >
                Каталог
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRightIcon className="h-3.5 w-3.5" />
            </li>
            <li className="label text-[0.7rem] text-secondary">{product.name}</li>
          </ol>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Gallery */}
          <Gallery images={product.images} name={product.name} />

          {/* Info */}
          <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start">
            <p className="label text-xs text-secondary">{product.category}</p>
            <h1 className="mt-3 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink md:text-5xl">
              {product.name}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Price
                prices={product.prices}
                className="font-display text-3xl font-bold text-ink"
              />
              <CurrencySwitcher size="sm" />
            </div>
            <div className="mt-4">
              <StockBadge inStock={product.inStock} />
            </div>

            <p className="mt-8 max-w-prose text-base leading-relaxed text-ink/90">
              {product.description}
            </p>

            {/* Spec sheet */}
            <dl className="mt-8 border-t border-line">
              <div className="flex items-baseline justify-between gap-4 border-b border-line py-3.5">
                <dt className="label text-[0.7rem] text-muted">Материал</dt>
                <dd className="text-right text-sm text-ink">
                  {product.material}
                </dd>
              </div>
              {product.measurements.map((m) => (
                <div
                  key={m.label}
                  className="flex items-baseline justify-between gap-4 border-b border-line py-3.5"
                >
                  <dt className="label text-[0.7rem] text-muted">{m.label}</dt>
                  <dd className="nums text-right text-sm text-ink">{m.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-9">
              <OrderButton size="lg" className="w-full sm:w-auto" />
              <p className="mt-3 text-xs text-muted">
                Заказ и оплата — в Telegram. На сайте оплата не принимается.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
