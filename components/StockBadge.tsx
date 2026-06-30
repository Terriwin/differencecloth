/** Availability indicator. Every piece is one-of-a-kind, so a sold-out item
 *  reads as "Продано". Availability is signalled by brightness + a marker, never
 *  by a red dot (which read as "unavailable"): in stock is clean bright text,
 *  sold is dimmed and flagged with a hollow ring. */
export function StockBadge({
  inStock,
  className = "",
}: {
  inStock: boolean;
  className?: string;
}) {
  if (inStock) {
    return (
      <span className={`label text-[0.7rem] text-secondary ${className}`}>
        В наличии
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2 label text-[0.7rem] text-muted ${className}`}
    >
      <span
        aria-hidden="true"
        className="h-2 w-2 rounded-full border border-line-strong"
      />
      Продано
    </span>
  );
}
