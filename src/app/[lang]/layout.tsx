import { notFound } from "next/navigation";

import type { Locale } from "@/types/locale";

type LangLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
};

const locales: Locale[] = ["en", "fr"];

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  return (
    <div lang={lang}>
      {children}
    </div>
  );
}