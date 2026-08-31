"use client";

import { useState, useEffect } from "react";
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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = navigation
      .map((item) => item.href.replace("#", ""))
      .filter(Boolean);

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navigation]);

  const alternateLocale = locale === "en" ? "fr" : "en";

  function getNavigationHref(href: string) {
    return navigationBasePath
      ? `${navigationBasePath}${href}`
      : href;
  }

  function getLocaleHref(targetLocale: Locale) {
    if (alternateLocaleHref) {
      return alternateLocaleHref.replace(
        `/${alternateLocale}/`,
        `/${targetLocale}/`
      );
    }

    return `/${targetLocale}#top`;
  }

  function handleLocaleSwitch() {
    sessionStorage.setItem(
      "locale-switch-scroll",
      String(window.scrollY)
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sand/60 bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href={`/${locale}#top`}
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
          <div className="flex items-center rounded-full border border-ocean bg-surface p-1">
            {(["fr", "en"] as Locale[]).map((lang) => (
              <Link
                key={lang}
                href={getLocaleHref(lang)}
                onClick={handleLocaleSwitch}
                scroll={false}
                className={`rounded-full px-2.5 py-1.5 text-[11px] font-semibold uppercase transition-all ${locale === lang
                  ? "bg-ocean text-white shadow-sm"
                  : "text-deep-blue hover:text-ocean"
                  }`}
              >
                {lang}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-sand bg-background text-deep-blue shadow-sm transition-all hover:border-ocean hover:text-ocean"
          >
            <span className="text-xl leading-none">
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
                    className={`rounded-sm border-b-2 px-1 pb-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-4 ${activeSection === item.href.replace("#", "")
                      ? "border-ocean text-ocean"
                      : "border-transparent text-deep-blue hover:text-ocean"
                      }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center rounded-full border border-ocean bg-surface p-1 shadow-sm">
            {(["fr", "en"] as Locale[]).map((lang) => (
              <Link
                key={lang}
                href={getLocaleHref(lang)}
                onClick={handleLocaleSwitch}
                scroll={false}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase transition-all ${locale === lang
                  ? "bg-ocean text-white shadow-sm"
                  : "text-deep-blue hover:text-ocean"
                  }`}
              >
                {lang}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-sand bg-surface/95 px-6 py-6 shadow-lg backdrop-blur md:hidden"
        >
          <ul className="flex flex-col gap-2">
            {navigation.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li key={item.href}>
                  <Link
                    href={getNavigationHref(item.href)}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 font-medium transition-all ${isActive
                      ? "bg-background text-ocean"
                      : "text-deep-blue hover:bg-background hover:text-ocean"
                      }`}
                  >
                    <span>{item.label}</span>

                    <span
                      className={`text-sm transition-transform ${isActive ? "translate-x-0 text-ocean" : "text-muted"
                        }`}
                    >
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}