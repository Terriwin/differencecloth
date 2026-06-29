import type { ReactNode } from "react";

/** Consistent section header: a small accent-ticked eyebrow + condensed title,
 *  with an optional action slot on the right. */
export function SectionHeading({
  eyebrow,
  title,
  action,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-end justify-between gap-x-6 gap-y-4 ${className}`}>
      <div>
        {eyebrow && (
          <p className="label flex items-center gap-2.5 text-[0.7rem] text-secondary">
            <span aria-hidden className="inline-block h-px w-7 bg-accent" />
            {eyebrow}
          </p>
        )}
        <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink md:text-4xl">
          {title}
        </h2>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
