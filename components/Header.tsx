"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV } from "@/lib/site";
import { Logo } from "./Logo";
import { CurrencySwitcher } from "./CurrencySwitcher";
import { OrderButton } from "./OrderButton";
import { MenuIcon, CloseIcon } from "./icons";

function isActive(pathname: string, href: string): boolean {
  if (href.startsWith("/#")) return false; // in-page anchor, never "active"
  return pathname === href;
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeBtn = useRef<HTMLButtonElement>(null);

  // On the home page the bar is a transparent overlay on top of the full-bleed
  // hero; it condenses into a solid bar once the user scrolls past the fold.
  // Inner pages always render the solid bar.
  const overlay = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll + wire Escape while the drawer is open; move focus to the
  // close button so keyboard users land somewhere sensible.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-out-soft ${
          overlay
            ? "bg-transparent"
            : "border-b border-line bg-canvas/85 backdrop-blur-md"
        }`}
      >
        {/* Legibility scrim behind the overlay nav (only when transparent). */}
        {overlay && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-canvas/85 via-canvas/40 to-transparent"
          />
        )}

        <div className="mx-auto flex h-[var(--header-h)] max-w-content items-center justify-between gap-4 px-5 md:px-8 lg:px-12">
          <Logo />

          {/* Desktop navigation */}
          <nav aria-label="Основная навигация" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {NAV.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`label text-xs transition-colors duration-200 ease-out-soft hover:text-ink ${
                        active ? "text-ink" : "text-secondary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop right cluster */}
          <div className="hidden items-center gap-4 lg:flex">
            <CurrencySwitcher size="sm" />
            <OrderButton size="md" />
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Открыть меню"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius)] text-ink transition-colors duration-200 hover:bg-surface-2 lg:hidden cursor-pointer"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Spacer so fixed bar doesn't cover content on inner pages. Home places
          the full-bleed hero directly under the transparent bar instead. */}
      {!isHome && <div aria-hidden style={{ height: "var(--header-h)" }} />}

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[60] flex flex-col bg-canvas lg:hidden animate-fade-up"
          role="dialog"
          aria-modal="true"
          aria-label="Меню"
        >
          <div className="flex h-[var(--header-h)] items-center justify-between border-b border-line px-5">
            <Logo />
            <button
              ref={closeBtn}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Закрыть меню"
              className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius)] text-ink transition-colors duration-200 hover:bg-surface-2 cursor-pointer"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>

          <nav
            aria-label="Мобильная навигация"
            className="flex flex-1 flex-col gap-1 px-5 py-8"
          >
            {NAV.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`font-display text-3xl font-semibold uppercase tracking-wide transition-colors duration-200 ${
                    active ? "text-ink" : "text-secondary hover:text-ink"
                  } py-2`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center justify-between gap-4 border-t border-line px-5 py-6">
            <CurrencySwitcher size="md" />
            <OrderButton size="md" />
          </div>
        </div>
      )}
    </>
  );
}
