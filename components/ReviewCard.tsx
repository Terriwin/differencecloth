import type { Review } from "@/lib/types";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-[var(--radius)] border border-line bg-surface p-6 md:p-7">
      <blockquote className="flex-1 text-[0.975rem] leading-relaxed text-ink/90">
        «{review.text}»
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={review.photo}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-11 w-11 shrink-0 rounded-full object-cover"
        />
        <div className="min-w-0">
          <div className="label text-xs text-ink">{review.author}</div>
          {review.product && (
            <div className="mt-0.5 truncate text-xs text-secondary">
              {review.product}
            </div>
          )}
        </div>
      </figcaption>
    </figure>
  );
}
