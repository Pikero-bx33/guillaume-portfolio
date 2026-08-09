import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";

import { heroContent } from "@/data/hero";
import { navigation } from "@/lib/navigation";

import type { Locale } from "@/types/locale";

type HomePageProps = {
  params: Promise<{
    lang: string;
  }>;
};

const locales: Locale[] = ["en", "fr"];

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  const locale = lang as Locale;

  return (
    <>
      <Header
        navigation={navigation[locale]}
        locale={locale}
      />

      <main>
        <Hero content={heroContent[locale]} />
      </main>
    </>
  );
}