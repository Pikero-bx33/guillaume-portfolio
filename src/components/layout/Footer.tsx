type FooterProps = {
  tagline: string;
  backToTop: string;
};

export default function Footer({
  tagline,
  backToTop,
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 pb-8 pt-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-sand pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-deep-blue">
            Guillaume Legros
          </p>

          <p className="mt-1 text-sm text-muted">
            {tagline}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-sm text-muted">
            © {year}
          </p>

          <a
            href="#top"
            className="text-sm font-semibold text-ocean hover:underline"
          >
            ↑ {backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}