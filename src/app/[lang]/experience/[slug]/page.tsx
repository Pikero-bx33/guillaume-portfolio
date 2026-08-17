import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import ExperienceHero from "@/components/experience/ExperienceHero";
import ExperienceOverview from "@/components/experience/ExperienceOverview";
import ExperienceResponsibilities from "@/components/experience/ExperienceResponsibilities";
import ExperienceAchievements from "@/components/experience/ExperienceAchievements";
import ExperienceSkills from "@/components/experience/ExperienceSkills";
import ExperienceCareerPath from "@/components/experience/ExperienceCareerPath";
import ExperienceLessons from "@/components/experience/ExperienceLessons";
import ExperienceActions from "@/components/experience/ExperienceActions";

import ScrollToTop from "@/components/navigation/ScrollToTop";

import { experiences } from "@/data/experiences";
import { experienceUi } from "@/data/experiences/ui";
import { footerContent } from "@/data/home/footer";
import { navigation } from "@/lib/navigation";



import type { Locale } from "@/types/locale";

type ExperiencePageProps = {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ExperiencePageProps): Promise<Metadata> {
  const { lang, slug } = await params;

  const locale = lang as Locale;
  const experience = experiences[slug]?.[locale];

  if (!experience) {
    return {
      title: "Experience",
    };
  }

  return {
    title: `${experience.company} — ${experience.title}`,
    description: experience.subtitle,
  };
}

export default async function ExperiencePage({
  params,
}: ExperiencePageProps) {
  const { lang, slug } = await params;

  const locale = lang as Locale;
  const labels = experienceUi[locale];
  const experience = experiences[slug]?.[locale];

  if (!experience || !labels) {
    notFound();
  }

  const alternateLocale = locale === "en" ? "fr" : "en";

  return (
    <>
      <ScrollToTop trigger={slug} />

      <Header
        navigation={navigation[locale]}
        locale={locale}
        navigationBasePath={`/${locale}`}
        alternateLocaleHref={`/${alternateLocale}/experience/${slug}`}
      />

      <main id="top" className="mx-auto max-w-5xl px-6 py-12">
        <ExperienceHero
          label={
            experience.category === "training"
              ? labels.training
              : labels.experience
          }
          company={experience.company}
          title={experience.title}
          subtitle={experience.subtitle}
          period={experience.period}
          location={experience.location}
          logo={experience.logo}
          logoAlt={experience.logoAlt}
        />

        <ExperienceOverview
          title={labels.overview}
          overview={experience.overview}
        />

        {experience.careerSteps && (
          <ExperienceCareerPath
            title={labels.careerPath}
            steps={experience.careerSteps}
          />
        )}

        <ExperienceResponsibilities
          title={labels.responsibilities}
          responsibilities={experience.responsibilities}
        />

        {experience.achievements && (
          <ExperienceAchievements
            title={labels.achievements}
            achievements={experience.achievements}
          />
        )}

        <ExperienceSkills
          title={labels.skills}
          skills={experience.skills}
        />

        {experience.lessons && (
          <ExperienceLessons
            title={labels.lessons}
            lessons={experience.lessons}
          />
        )}

        <ExperienceActions
          backLabel={labels.back}
          backHref={`/${locale}#experience`}
        />
      </main>

      <Footer
        tagline={footerContent[locale].tagline}
        backToTop={footerContent[locale].backToTop}
      />
    </>
  );
}