import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/about/About";
import Career from "@/components/sections/career/Career";

import { heroContent } from "@/data/hero";
import { aboutContent } from "@/data/about";
import { experienceContent } from "@/data/experience";

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
        <About content={aboutContent[locale]} />
        <Career content={experienceContent[locale]} />
      </main>
    </>
  );
}