import { notFound } from "next/navigation";

import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/about/About";
import Career from "@/components/sections/career/Career";
import Skills from "@/components/sections/skills/Skills";
import BusinessTech from "@/components/sections/business-tech/BusinessTech";
import Projects from "@/components/sections/projects/Projects";
import Beyond from "@/components/sections/beyond/Beyond";
import Contact from "@/components/sections/contact/Contact";
import Footer from "@/components/layout/Footer";


import { heroContent } from "@/data/home/hero";
import { aboutContent } from "@/data/home/about";
import { experienceContent } from "@/data/home/experience";
import { skillsContent } from "@/data/home/skills";
import { businessTechContent } from "@/data/home/businessTech";
import { projectsContent } from "@/data/home/projectsSection";
import { beyondContent } from "@/data/home/hobbies";
import { contactContent } from "@/data/home/contact";
import { footerContent } from "@/data/home/footer";



import { navigation } from "@/lib/navigation";

import type { Locale } from "@/types/locale";



type HomePageProps = {
  params: Promise<{
    lang: string;
  }>;
};

const locales: Locale[] = ["en", "fr"];

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { lang } = await params;

  if (lang === "fr") {
    return {
      title: "Portfolio",
      description:
        "Portfolio de Guillaume Legros — profil hybride business, e-commerce et développement web.",
    };
  }

  return {
    title: "Portfolio",
    description:
      "Portfolio of Guillaume Legros — combining business, e-commerce and web development.",
  };
}

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
        <Career content={experienceContent[locale]} locale={locale} />
        <Skills content={skillsContent[locale]} />
        <BusinessTech content={businessTechContent[locale]} />
        <Projects content={projectsContent[locale]} locale={locale} />
        <Beyond content={beyondContent[locale]} />
        <Contact content={contactContent[locale]} />

        <Footer
          tagline={footerContent[locale].tagline}
          backToTop={footerContent[locale].backToTop}
        />
      </main>
    </>
  );
}