import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { OrderButton } from "@/components/OrderButton";
import { SOCIAL_ICONS, MapPinIcon, ArrowUpRightIcon } from "@/components/icons";
import { SITE, SOCIALS, ORDER_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Связаться с DIFFERENCE: Telegram, соцсети. Минск, Беларусь. Заказы — через Telegram.",
};

export default function ContactsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Связаться"
        title="Контакты"
        lead="Все заказы и вопросы — через Telegram. Отвечаем и подбираем крой лично."
      />

      <section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            {/* Primary contact: Telegram */}
            <div className="flex flex-col justify-between gap-8 rounded-[var(--radius)] border border-line bg-surface p-7 md:p-9">
              <div>
                <p className="label text-[0.7rem] text-secondary">
                  Основной контакт
                </p>
                <p className="mt-4 font-display text-4xl font-bold uppercase tracking-tight text-ink md:text-5xl">
                  Telegram
                </p>
                <p className="mt-3 text-base text-secondary">
                  Пишите по заказам — обсудим мерки, ткань, роспись и сроки.
                </p>
                <p className="mt-2 nums text-lg text-ink">@Difference444</p>
              </div>
              <OrderButton size="lg" label="Написать в Telegram" className="w-full sm:w-fit" />
            </div>

            {/* Location */}
            <div className="rounded-[var(--radius)] border border-line bg-surface p-7 md:p-9">
              <p className="label text-[0.7rem] text-secondary">Где мы</p>
              <p className="mt-4 inline-flex items-center gap-2.5 font-display text-2xl font-semibold uppercase tracking-tight text-ink">
                <MapPinIcon className="h-6 w-6 text-accent" />
                {SITE.city}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-secondary">
                Шьём в Минске. Отправляем по Беларуси и за её пределы — детали
                доставки обсуждаем в переписке.
              </p>
            </div>
          </div>

          {/* Socials */}
          <div className="mt-10">
            <h2 className="label text-[0.7rem] text-muted">Мы в соцсетях</h2>
            <ul
              role="list"
              className="mt-5 grid grid-cols-1 gap-4 xs:grid-cols-2 lg:grid-cols-4"
            >
              {SOCIALS.map((s) => {
                const Icon = SOCIAL_ICONS[s.kind];
                return (
                  <li key={s.kind}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 rounded-[var(--radius)] border border-line bg-surface p-5 transition-colors duration-200 ease-out-soft hover:border-line-strong hover:bg-surface-2"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="h-6 w-6 text-secondary transition-colors duration-200 group-hover:text-ink" />
                        <span>
                          <span className="block label text-xs text-ink">
                            {s.label}
                          </span>
                          <span className="block text-xs text-muted">
                            {s.handle}
                          </span>
                        </span>
                      </span>
                      <ArrowUpRightIcon className="h-4 w-4 text-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 text-xs text-muted">
              TikTok, ВКонтакте и Instagram указаны как заглушки — замените на
              реальные аккаунты в lib/site.ts.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
