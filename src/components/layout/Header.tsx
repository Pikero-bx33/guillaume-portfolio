"use client";

import { useState } from "react";
import Link from "next/link";

import type { Locale } from "@/types/locale";
import type { NavItem } from "@/types/navigation";

type HeaderProps = {
  navigation: NavItem[];
  locale: Locale;
};

export default function Header({
  navigation,
  locale,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const alternateLocale = locale === "en" ? "fr" : "en";

  return (
    <header className="w-full border-b border-sand/60 bg-surface">

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
            href={`/${alternateLocale}`}
            className="rounded-full border border-ocean px-4 py-2 text-xs font-semibold uppercase text-deep-blue"
          >
            {alternateLocale}
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
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
                    href={item.href}
                    className="text-sm font-medium text-deep-blue transition-colors hover:text-ocean"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href={`/${alternateLocale}`}
            className="rounded-full border border-ocean px-4 py-2 text-xs font-semibold uppercase text-deep-blue transition-colors hover:bg-ocean hover:text-white"
          >
            {alternateLocale}
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-sand bg-surface px-6 py-5 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
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