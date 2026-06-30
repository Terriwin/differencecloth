import { SITE, SOCIALS } from "@/lib/site";
import { Logo } from "./Logo";
import { SOCIAL_ICONS, MapPinIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      {/* Slightly larger left inset than the content grid, so the footer reads
          intentionally off-line rather than ruler-aligned. */}
      <div className="mx-auto max-w-content py-14 pl-9 pr-5 md:py-16 md:pl-16 md:pr-8 lg:pl-24 lg:pr-12">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-secondary">
              {SITE.heroSlogan}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted">
              <MapPinIcon className="h-4 w-4" />
              {SITE.city}
            </p>
          </div>

          <div>
            <h2 className="label text-[0.7rem] text-muted">Соцсети</h2>
            <ul className="mt-4 space-y-2.5">
              {SOCIALS.map((s) => {
                const Icon = SOCIAL_ICONS[s.kind];
                return (
                  <li key={s.kind}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 text-sm text-secondary transition-colors duration-200 hover:text-ink"
                    >
                      <Icon className="h-4 w-4 text-muted transition-colors duration-200 group-hover:text-ink" />
                      <span>{s.label}</span>
                      <span className="text-muted">{s.handle}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {SITE.brand}. Кастомная одежда ручной работы.
          </p>
          <p>Оплата и заказ — через Telegram.</p>
        </div>
      </div>
    </footer>
  );
}
