import Link from "next/link";
import type { Product } from "@/lib/types";
import { ProductImage } from "./ProductImage";
import { Price } from "./Price";
import { StockBadge } from "./StockBadge";
import { ArrowRightIcon } from "./icons";

/**
 * Editorial, broken-grid presentation of the in-stock highlights. Images sit
 * inside the page container (with a margin from the screen edge) and alternate
 * sides with differing column widths; the copy column is offset for asymmetry.
 * Mobile-first: on small screens each item is a clean image with copy beneath.
 *
 * Render inside the page <Container>.
 */
export function FeaturedShowcase({ products }: { products: Product[] }) {
  return (
    <div className="space-y-16 md:space-y-28">
      {products.map((product, i) => {
        const imageRight = i % 2 === 1;
        return (
          <article
            key={product.slug}
            className="md:grid md:grid-cols-12 md:items-center md:gap-x-8"
          >
            {/* Image */}
            <Link
              href={`/catalog/${product.slug}`}
              aria-label={product.name}
              tabIndex={-1}
              className={`group block ${
                imageRight
                  ? "md:order-2 md:col-span-8 md:col-start-5"
                  : "md:order-1 md:col-span-7 md:col-start-1"
              }`}
            >
              <ProductImage
                src={product.images[0]}
                alt={`${product.name} — ${product.tagline}`}
                ratio="4 / 5"
                priority={i === 0}
                className="border border-line transition-colors duration-200 ease-out-soft group-hover:border-line-strong"
                imgClassName="transition-transform duration-[800ms] ease-out-soft group-hover:scale-[1.03]"
              />
            </Link>

            {/* Copy */}
            <div
              className={`mt-6 md:mt-0 ${
                imageRight
                  ? "md:order-1 md:col-span-4 md:col-start-1 md:pl-8 lg:pl-12"
                  : "md:order-2 md:col-span-4 md:col-start-9 md:pr-8 lg:pr-12 md:text-right"
              }`}
            >
              <span className="label nums block text-[0.7rem] text-muted">
                {String(i + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
              </span>

              <Link
                href={`/catalog/${product.slug}`}
                className="mt-3 inline-block rounded-[var(--radius)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                <h3 className="font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-ink transition-colors duration-200 hover:text-secondary md:text-4xl lg:text-5xl">
                  {product.name}
                </h3>
              </Link>

              <p className="mt-4 text-sm leading-relaxed text-secondary">
                {product.tagline}
              </p>

              <div
                className={`mt-5 flex items-center gap-4 ${
                  imageRight ? "" : "md:justify-end"
                }`}
              >
                <Price
                  prices={product.prices}
                  className="font-display text-xl font-semibold text-ink"
                />
                <StockBadge inStock={product.inStock} />
              </div>

              <Link
                href={`/catalog/${product.slug}`}
                className={`group mt-6 inline-flex items-center gap-2 label text-xs text-ink transition-colors duration-200 hover:text-secondary ${
                  imageRight ? "" : "md:flex-row-reverse"
                }`}
              >
                Смотреть
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out-soft group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
