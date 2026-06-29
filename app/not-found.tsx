import Link from "next/link";
import { Container } from "@/components/Container";
import { ArrowRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="flex min-h-[60dvh] items-center py-20">
      <Container>
        <p className="label text-xs text-secondary">Ошибка 404</p>
        <h1 className="mt-4 font-display text-5xl font-bold uppercase tracking-tight text-ink md:text-6xl">
          Страница не найдена
        </h1>
        <p className="mt-5 max-w-md text-base text-secondary">
          Похоже, такой страницы нет или её перенесли. Вернитесь в каталог.
        </p>
        <Link
          href="/catalog"
          className="group mt-8 inline-flex min-h-[48px] items-center gap-2 rounded-[var(--radius)] border border-line-strong px-6 font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink transition-colors duration-200 hover:bg-surface-2 cursor-pointer"
        >
          В каталог
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out-soft group-hover:translate-x-1" />
        </Link>
      </Container>
    </section>
  );
}
