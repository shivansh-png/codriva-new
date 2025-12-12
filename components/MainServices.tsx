'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'react-i18next';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MainServices = () => {
  const { t } = useTranslation(['pages', 'common']);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Get services data from translations
  const allServices = [
    {
      title: t('pages:servicesPage.services.customSoftware.title'),
      slug: "custom-software-development",
      description: t('pages:servicesPage.services.customSoftware.description'),
      image: "/assets/images/custom-soft.png",
    },
    {
      title: t('pages:servicesPage.services.uiUx.title'),
      slug: "ui-ux-design",
      description: t('pages:servicesPage.services.uiUx.description'),
      image: "/assets/images/ui-ux-design.png",
    },
    {
      title: t('pages:servicesPage.services.mobileApp.title'),
      slug: "mobile-app-development",
      description: t('pages:servicesPage.services.mobileApp.description'),
      image: "/assets/images/representations.png",
    },
    {
      title: t('pages:servicesPage.services.productEngineering.title'),
      slug: "product-engineering",
      description: t('pages:servicesPage.services.productEngineering.description'),
      image: "/assets/images/look-this-group.png",
    },
    {
      title: t('pages:servicesPage.services.cloudDevops.title'),
      slug: "cloud-devops",
      description: t('pages:servicesPage.services.cloudDevops.description'),
      image: "/assets/images/saas-concept.png",
    },
    {
      title: t('pages:servicesPage.services.apiIntegration.title'),
      slug: "api-system-integration",
      description: t('pages:servicesPage.services.apiIntegration.description'),
      image: "/assets/images/api-pic.png",
    },
    {
      title: t('pages:servicesPage.services.dataAnalytics.title'),
      slug: "data-analytics",
      description: t('pages:servicesPage.services.dataAnalytics.description'),
      image: "/assets/images/technology-hologram.png",
    },
    {
      title: t('pages:servicesPage.services.aiMl.title'),
      slug: "ai-machine-learning",
      description: t('pages:servicesPage.services.aiMl.description'),
      image: "/assets/images/ai-chip-artificial.png",
    },
    {
      title: t('pages:servicesPage.services.bigData.title'),
      slug: "big-data-solution",
      description: t('pages:servicesPage.services.bigData.description'),
      image: "/assets/images/data-online.png",
    },
    {
      title: t('pages:servicesPage.services.itConsulting.title'),
      slug: "it-consulting",
      description: t('pages:servicesPage.services.itConsulting.description'),
      image: "/assets/images/modern-equipped.png",
    },
    {
      title: t('pages:servicesPage.services.qaTesting.title'),
      slug: "qa-testing",
      description: t('pages:servicesPage.services.qaTesting.description'),
      image: "/assets/images/people-analyzing.png",
    },
    {
      title: t('pages:servicesPage.services.supportMaintenance.title'),
      slug: "support-maintenance",
      description: t('pages:servicesPage.services.supportMaintenance.description'),
      image: "/assets/images/technology-technical.png",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".main-service-card",
          { opacity: 0, y: 60, scale: 0.8, rotationY: 20 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: { amount: 0.8, from: "start" },
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.utils.toArray(".main-service-card").forEach((card: any) => {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              scale: 1.05,
              y: -15,
              rotationY: 5,
              duration: 0.4,
              ease: "power2.out",
            });
          });
          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              rotationY: 0,
              duration: 0.4,
              ease: "power2.out",
            });
          });
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={sectionRef} className="mt-16">
      <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allServices.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="block"
          >
            <div className="main-service-card card hover-card p-8 flex flex-col h-full">
              <div className="flex-grow">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={320}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-4">
                  {service.title}
                </h3>

                <p className="text-[#656d76] dark:text-[#8b949e] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainServices;