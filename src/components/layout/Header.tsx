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
  const alternateLocale = locale === "en" ? "fr" : "en";

  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href={`/${locale}`}
          className="text-lg font-semibold tracking-tight text-deep-blue"
        >
          Guillaume Bx
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href={`/${alternateLocale}`}
            className="text-xs font-semibold uppercase text-muted transition-colors hover:text-ocean"
          >
            {alternateLocale}
          </Link>

          <button
            type="button"
            aria-label="Open navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-sand text-deep-blue md:hidden"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>

        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-7">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-ocean"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}