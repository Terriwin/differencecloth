"use client";

import { useState } from "react";
import { ProductImage } from "./ProductImage";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

/** Product detail gallery: a main image plus a thumbnail strip. Thumbnails are
 *  real buttons (keyboard reachable); prev/next help on touch. Single image
 *  products render just the cover with no controls. */
export function Gallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const many = images.length > 1;

  const go = (dir: number) =>
    setActive((i) => (i + dir + images.length) % images.length);

  return (
    <div>
      <div className="group relative">
        <ProductImage
          src={images[active]}
          alt={`${name} — фото ${active + 1} из ${images.length}`}
          ratio="4 / 5"
          priority
          className="border border-line"
        />

        {many && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Предыдущее фото"
              className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-canvas/70 text-ink backdrop-blur-sm transition-colors duration-200 hover:bg-canvas cursor-pointer"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Следующее фото"
              className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-canvas/70 text-ink backdrop-blur-sm transition-colors duration-200 hover:bg-canvas cursor-pointer"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {many && (
        <ul className="mt-3 flex gap-3" role="list">
          {images.map((src, i) => {
            const current = i === active;
            return (
              <li key={src}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Показать фото ${i + 1}`}
                  aria-current={current ? "true" : undefined}
                  className={`block w-16 overflow-hidden rounded-[var(--radius)] border transition-colors duration-200 cursor-pointer md:w-20 ${
                    current
                      ? "border-ink"
                      : "border-line opacity-70 hover:opacity-100"
                  }`}
                >
                  <ProductImage
                    src={src}
                    alt=""
                    ratio="4 / 5"
                    imgClassName="pointer-events-none"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
