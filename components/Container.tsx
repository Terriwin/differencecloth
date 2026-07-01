import type { ElementType, ReactNode } from "react";

/** Consistent page gutter + max width across all sections. Pass `wide` for the
 *  product grids (home + catalog), which intentionally use a much roomier
 *  frame than the standard content width so more full-size cards fit per row —
 *  independent of the grid used by headings/text/nav elsewhere on the page. */
export function Container({
  as: As = "div",
  wide = false,
  className = "",
  children,
}: {
  as?: ElementType;
  wide?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <As
      className={`mx-auto w-full px-5 md:px-8 lg:px-12 ${wide ? "max-w-wide" : "max-w-content"} ${className}`}
    >
      {children}
    </As>
  );
}
