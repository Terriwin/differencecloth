import type { ReactNode } from "react";
import { Container } from "./Container";

/** Shared header for inner pages — carries the single <h1>. */
export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-line py-14 md:py-20">
      <Container>
        {eyebrow && (
          <p className="label text-[0.7rem] text-secondary">{eyebrow}</p>
        )}
        <h1 className="mt-4 font-display text-5xl font-bold uppercase tracking-tight text-ink md:text-6xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-secondary">
            {lead}
          </p>
        )}
        {children}
      </Container>
    </header>
  );
}
