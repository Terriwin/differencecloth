/** Availability indicator. Shape (filled dot vs hollow ring) differs alongside
 *  the label text, so the meaning never depends on color alone. */
export function StockBadge({
  inStock,
  className = "",
}: {
  inStock: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 label text-[0.7rem] ${className}`}
    >
      <span
        aria-hidden="true"
        className={
          inStock
            ? "h-2 w-2 rounded-full bg-accent"
            : "h-2 w-2 rounded-full border border-line-strong"
        }
      />
      <span className={inStock ? "text-secondary" : "text-muted"}>
        {inStock ? "В наличии" : "Нет в наличии"}
      </span>
    </span>
  );
}
