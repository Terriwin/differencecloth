import type { ElementType, ReactNode } from "react";

/** Consistent page gutter + max width across all sections. */
export function Container({
  as: As = "div",
  className = "",
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <As className={`mx-auto w-full max-w-content px-5 md:px-8 lg:px-12 ${className}`}>
      {children}
    </As>
  );
}
