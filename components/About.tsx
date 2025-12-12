'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import AboutUs from "./AboutUs";
import { useTranslation } from 'react-i18next';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const { t } = useTranslation(['pages', 'common']);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const guidingRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const growthRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ctx = gsap.context(() => {
        // Hero section animation
        gsap.fromTo(
          heroRef.current,
          {
            opacity: 0,
            y: 50,
          },
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

        // Guiding principles animation
        gsap.fromTo(
          guidingRef.current,
          {
            opacity: 0,
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: guidingRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Company breakdown animation
        gsap.fromTo(
          ".company-part",
          {
            opacity: 0,
            scale: 0.8,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.2,
            scrollTrigger: {
              trigger: companyRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Growth section animation
        gsap.fromTo(
          growthRef.current,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: growthRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Values section animation
        gsap.fromTo(
          ".value-item",
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: valuesRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative min-h-screen bg-[#C9E0F1] dark:bg-slate-900">
      {/* ============================= */}
      {/* UPDATED ABOUT HERO SECTION    */}
      {/* ============================= */}

      <div
        ref={heroRef}
        className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/unsplash_60.png"
            alt={t('pages:aboutPage.hero.alt')}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Dark + Gradient Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70"></div>

        {/* HERO TEXT */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-display">
            {t('pages:aboutPage.hero.title.firstPart')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100">
              {" "}{t('pages:aboutPage.hero.title.highlight')}
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            {t('pages:aboutPage.hero.subtitle')}
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 
      text-white px-8 py-3 rounded-lg text-lg font-medium shadow-lg transition-colors"
          >
            {t('common:buttons.letsTalk')} <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      {/* Guiding Principles */}
      <div ref={guidingRef} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {t('pages:aboutPage.guidingPrinciples.title.firstLine')}
                <br />
                <span className="text-blue-600">
                  {t('pages:aboutPage.guidingPrinciples.title.highlight')}
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {t('pages:aboutPage.guidingPrinciples.description')}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {t('common:buttons.letsTalk')} <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/assets/images/group-people-working-team.png"
                alt={t('pages:aboutPage.guidingPrinciples.imageAlt')}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Company Name Breakdown */}
      <AboutUs />

      {/* Growth Section */}
      <div ref={growthRef} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {t('pages:aboutPage.growth.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('pages:aboutPage.growth.description')}
              </p>
            </div>
            <div className="relative">
              <Image
                src="/assets/images/worldmap.png"
                alt={t('pages:aboutPage.growth.imageAlt')}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div
        ref={valuesRef}
        className="py-20"
        style={{
          color: "#ffffff",
          fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('pages:aboutPage.values.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-black-300 mb-12">
            {t('pages:aboutPage.values.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="value-item">
              <Image
                src="/assets/images/Group 46.png"
                alt={t('pages:aboutPage.values.quality')}
                width={250}
                height={250}
                className="mx-auto transition-transform hover:scale-105 duration-300 contrast-125"
              />
            </div>
            <div className="value-item">
              <Image
                src="/assets/images/Group 47.png"
                alt={t('pages:aboutPage.values.transparency')}
                width={250}
                height={250}
                className="mx-auto transition-transform hover:scale-105 duration-300 contrast-125"
              />
            </div>
            <div className="value-item">
              <Image
                src="/assets/images/Group 48.png"
                alt={t('pages:aboutPage.values.collaboration')}
                width={250}
                height={250}
                className="mx-auto transition-transform hover:scale-105 duration-300 contrast-125"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="value-item">
              <Image
                src="/assets/images/Group 49.png"
                alt={t('pages:aboutPage.values.integrity')}
                width={250}
                height={250}
                className="mx-auto transition-transform hover:scale-105 duration-300 contrast-125"
              />
            </div>
            <div className="value-item">
              <Image
                src="/assets/images/Group 50.png"
                alt={t('pages:aboutPage.values.ownership')}
                width={250}
                height={250}
                className="mx-auto transition-transform hover:scale-105 duration-300 contrast-300 contrast-125"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;