"use client";

import { useState } from "react";
import Link from "next/link";

import type { Locale } from "@/types/locale";
import type { NavItem } from "@/types/navigation";

type HeaderProps = {
  navigation: NavItem[];
  locale: Locale;
  navigationBasePath?: string;
  alternateLocaleHref?: string;
};

export default function Header({
  navigation,
  locale,
  navigationBasePath = "",
  alternateLocaleHref,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const alternateLocale = locale === "en" ? "fr" : "en";

  const languageHref =
    alternateLocaleHref ?? `/${alternateLocale}`;

  function getNavigationHref(href: string) {
    return navigationBasePath
      ? `${navigationBasePath}${href}`
      : href;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sand/60 bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href={`/${locale}`}
          className="shrink-0"
        >
          <p className="text-lg font-bold tracking-tight text-deep-blue">
            Guillaume Legros
          </p>

          <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ocean">
            Business × Code
          </p>
        </Link>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href={languageHref}
            className="rounded-full border border-ocean px-4 py-2 text-xs font-semibold uppercase text-deep-blue"
          >
            {alternateLocale}
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-sand text-deep-blue"
          >
            <span className="text-xl">
              {isMenuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>

        {/* Desktop */}
        <div className="hidden items-center gap-4 md:flex">
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-5 lg:gap-7">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={getNavigationHref(item.href)}
                    className="rounded-sm text-sm font-medium text-deep-blue transition-colors hover:text-ocean focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-4"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href={languageHref}
            className="rounded-full border border-ocean px-4 py-2 text-xs font-semibold uppercase text-deep-blue transition-all hover:bg-ocean hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-4"
          >
            {alternateLocale}
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-sand bg-surface px-6 py-5 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={getNavigationHref(item.href)}
                  onClick={() => setIsMenuOpen(false)}
                  className="block font-medium text-deep-blue transition-colors hover:text-ocean"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}