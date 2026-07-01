"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/types";
import { Container } from "./Container";
import { ProductCard } from "./ProductCard";

/** Russian plural for "модель": 1 модель, 2–4 модели, 5+ моделей. */
function pluralModels(n: number): string {
  const mod100 = n % 100;
  const mod10 = n % 10;
  if (mod10 === 1 && mod100 !== 11) return "модель";
  if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14))
    return "модели";
  return "моделей";
}

/** Catalogue listing with an "only in stock" switch. Filtering is client-side
 *  over the props it's handed, so the page that renders it stays a server
 *  component and the data source can change without touching this UI. */
export function CatalogGrid({
  products,
  initialInStockOnly = false,
}: {
  products: Product[];
  initialInStockOnly?: boolean;
}) {
  const [inStockOnly, setInStockOnly] = useState(initialInStockOnly);

  const visible = useMemo(
    () => (inStockOnly ? products.filter((p) => p.inStock) : products),
    [products, inStockOnly]
  );

  return (
    <div>
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5">
          <p className="text-sm text-secondary">
            <span className="nums text-ink">{visible.length}</span>{" "}
            {pluralModels(visible.length)}
          </p>

          <button
            type="button"
            role="switch"
            aria-checked={inStockOnly}
            onClick={() => setInStockOnly((v) => !v)}
            className="group inline-flex items-center gap-3 cursor-pointer"
          >
            <span className="label text-xs text-secondary transition-colors duration-200 group-hover:text-ink">
              Только в наличии
            </span>
            <span
              aria-hidden="true"
              className={`relative h-6 w-11 rounded-full border transition-colors duration-200 ease-out-soft ${
                inStockOnly
                  ? "border-accent bg-accent/30"
                  : "border-line-strong bg-surface-2"
              }`}
            >
              <span
                className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full transition-[left] duration-200 ease-out-soft ${
                  inStockOnly ? "left-[24px] bg-accent" : "left-[3px] bg-secondary"
                }`}
              />
            </span>
          </button>
        </div>
        {visible.length === 0 && (
          <p className="mt-16 text-center text-secondary">
            Сейчас нет моделей в наличии. Напишите нам — отшиваем под заказ.
          </p>
        )}
      </Container>

      {/* Wide frame, independent of the standard content width above, so 5
          full-size cards fit per row on desktop; still 3 on mobile. */}
      {visible.length > 0 && (
        <Container wide>
          <ul
            role="list"
            className="mt-8 grid grid-cols-3 gap-x-3 gap-y-8 md:gap-x-6 md:gap-y-10 lg:grid-cols-5 lg:gap-x-8 lg:gap-y-14"
          >
            {visible.map((product, i) => (
              <li key={product.slug}>
                <ProductCard product={product} priority={i < 3} />
              </li>
            ))}
          </ul>
        </Container>
      )}
    </div>
  );
}
