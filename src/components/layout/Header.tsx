import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Beyond", href: "#beyond" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-deep-blue"
        >
          Guillaume Bx
        </Link>

        {/* Mobile navigation button */}
        <button
          type="button"
          aria-label="Open navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-sand text-deep-blue md:hidden"
        >
          <span className="text-xl">☰</span>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
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