"use client";
import Image from "next/image";
import Advantages from "@/components/Advantages";
import CTA from "@/components/CTA";
import { useTranslation } from 'react-i18next';

export default function CloudDevOps() {
  const { t } = useTranslation(['pages', 'common']);

  return (
    <>  
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6">
              {t('pages:servicesPage.services.cloudDevops.title')}
            </h1>
            <div className="w-24 h-1 bg-[#0969da] mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-4">
            <div className="relative">
              <Image
                src="/assets/images/saas-concept.png"
                alt={t('pages:servicesPage.services.cloudDevops.title')}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
                <span className="text-[#0969da] font-semibold">
                  {t('pages:servicesDetail.cloudDevops.highlight')}
                </span>{" "}
                {t('pages:servicesDetail.cloudDevops.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Advantages />
      <CTA />
    </>
  );
}