'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import DotLottie from "@/components/DotLottie";
import Image from "next/image";
import { useTranslation } from 'react-i18next';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Industries = () => {
  const { t } = useTranslation(['pages', 'common']);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const focusedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".focus-image",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: focusedRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const industries = [
    {
      name: t('pages:industriesPage.industries.retail.name'),
      href: "/industries/retail",
      lottie: "/animations/retail.json",
    },
    {
      name: t('pages:industriesPage.industries.edtech.name'),
      href: "/industries/edtech",
      lottie: "/animations/quiz.json",
    },
    {
      name: t('pages:industriesPage.industries.fintech.name'),
      href: "/industries/fintech",
      lottie: "/animations/Business.json",
    },
    {
      name: t('pages:industriesPage.industries.logistics.name'),
      href: "/industries/logistics",
      lottie: "/animations/trade.json",
    },
    {
      name: t('pages:industriesPage.industries.realestate.name'),
      href: "/industries/realestate",
      lottie: "/animations/prop.json",
    },
    {
      name: t('pages:industriesPage.industries.ondemand.name'),
      href: "/industries/ondemand",
      lottie: "/animations/demand.json",
    },
    {
      name: t('pages:industriesPage.industries.telecom.name'),
      href: "/industries/telecom",
      lottie: "/animations/telecom.json",
    },
    {
      name: t('pages:industriesPage.industries.events.name'),
      href: "/industries/events",
      lottie: "/animations/ticket.json",
    },
    {
      name: t('pages:industriesPage.industries.media.name'),
      href: "/industries/media",
      lottie: "/animations/media.json",
    },
    {
      name: t('pages:industriesPage.industries.travel.name'),
      href: "/industries/travel",
      lottie: "/animations/travel.json",
    },
    {
      name: t('pages:industriesPage.industries.restaurant.name'),
      href: "/industries/restaurant",
      lottie: "/animations/order.json",
    },
    {
      name: t('pages:industriesPage.industries.healthcare.name'),
      href: "/industries/healthcare",
      lottie: "/animations/health.json",
    },
  ];

  return (
    <section id="industries" ref={sectionRef} className="relative bg-[#C9E0F1]">
      {/* HERO */}
      <div
        ref={heroRef}
        className="relative h-[85vh] flex items-center justify-center text-center px-6 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/supervisor.png"
            alt={t('pages:industriesPage.hero.imageAlt')}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('pages:industriesPage.hero.title')}
          </h1>

          <p className="text-lg md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            {t('pages:industriesPage.hero.subtitle')}
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            {t('common:buttons.letsTalk')} <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      {/* INDUSTRIES GRID */}
      <div ref={focusedRef} className="py-20  bg-[#C9E0F1] dark:bg-gray-900">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('pages:industriesPage.grid.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {industries.map((industry, index) => (
              <div key={index} className="focus-image group bg-gray-50 dark:bg-gray-800">
                <Link
                  href={industry.href}
                  className="block relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-white-700"
                >
                  {/* Lottie or Image */}
                  <DotLottie
                    src={industry.lottie}
                    className="w-full h-64 object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-white text-lg font-bold bg-gradient-to-r from-black/70 to-transparent px-3 py-1 rounded-md">
                      {industry.name}
                    </h3>
                  </div>

                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-bold mb-2">
                        {industry.name}
                      </h3>
                      <span className="text-sm">{t('pages:industriesPage.grid.knowMore')} →</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;