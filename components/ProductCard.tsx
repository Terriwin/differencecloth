import Link from "next/link";
import type { Product } from "@/lib/types";
import { ProductImage } from "./ProductImage";
import { Price } from "./Price";
import { StockBadge } from "./StockBadge";

/** Catalogue tile: cover, name, price (current currency), availability badge. */
export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/catalog/${product.slug}`}
      className="group block rounded-[var(--radius)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
    >
      <ProductImage
        src={product.images[0]}
        alt={`${product.name} — ${product.tagline}`}
        ratio="4 / 5"
        priority={priority}
        className="border border-line transition-colors duration-200 ease-out-soft group-hover:border-line-strong"
        imgClassName="transition-transform duration-500 ease-out-soft group-hover:scale-[1.03]"
      />

      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3 className="font-display text-lg font-semibold uppercase leading-tight tracking-wide text-ink">
          {product.name}
        </h3>
        <Price
          prices={product.prices}
          className="shrink-0 font-display text-base font-semibold text-ink"
        />
      </div>

      <div className="mt-2.5">
        <StockBadge inStock={product.inStock} />
      </div>
    </Link>
  );
}
