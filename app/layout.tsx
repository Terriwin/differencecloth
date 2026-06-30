import type { Metadata, Viewport } from "next";
import { Fira_Sans_Condensed, Golos_Text } from "next/font/google";
import "./globals.css";
import { CurrencyProvider } from "@/components/CurrencyProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

// Condensed display face for headings; both faces ship full Cyrillic — required
// for the Russian copy. next/font self-hosts at build time, so there is no
// runtime CDN dependency and the app stays portable to a plain Node host.
const display = Fira_Sans_Condensed({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Golos_Text({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.brand} — кастомные джинсы ручной работы, Минск`,
    template: `%s · ${SITE.brand}`,
  },
  description:
    "DIFFERENCE — кастомные джинсы ручной работы из Минска. Каждая вещь в одном экземпляре. Заказ через Telegram.",
};

export const viewport: Viewport = {
  themeColor: "#0E0F0E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-dvh flex-col bg-canvas font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only z-[100] rounded-[var(--radius)] bg-ink px-4 py-2 text-sm text-canvas focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
        >
          Перейти к содержимому
        </a>
        <CurrencyProvider>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
}
