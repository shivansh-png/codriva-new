"use client";
import Image from "next/image";
import Link from "next/link";
import Advantages from "@/components/Advantages";
import CTA from "@/components/CTA";
import { useTranslation } from 'react-i18next'; // or your i18n library

export default function UiUxDesign() {
  const { t } = useTranslation('pages'); // assuming your pages.json is under 'pages' namespace

  // Or if you're using next-i18next:
  // const { t } = useTranslation('common');

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6">
              {t('uiUxDesignPage.hero.title')}
            </h1>
            <div className="w-24 h-1 bg-[#0969da] mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-4">
            <div className="space-y-6">
              <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
                <span className="text-[#0969da] font-semibold">
                  {t('uiUxDesignPage.hero.description1Part1')}
                </span>{" "}
                {t('uiUxDesignPage.hero.description1Part2')}
              </p>

              <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
                {t('uiUxDesignPage.hero.description2')}
              </p>

              <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
                {t('uiUxDesignPage.hero.description3')}
              </p>
            </div>

            <div className="relative">
              <Image
                src="/assets/images/ui-ux-design.png"
                alt={t('uiUxDesignPage.hero.imageAlt')}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Advantages />
      <CTA />
    </>
  );
}