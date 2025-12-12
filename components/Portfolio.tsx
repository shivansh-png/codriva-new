'use client';

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import DotLottie from "./DotLottie";
import { useTranslation } from 'react-i18next';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Portfolio = () => {
  const { t } = useTranslation(['pages', 'common']);
  
  const categories = [
    { id: "all", name: t('pages:portfolio.categories.all') },
    { id: "retail", name: t('pages:portfolio.categories.retail') },
    { id: "travel", name: t('pages:portfolio.categories.travel') },
    { id: "restaurant", name: t('pages:portfolio.categories.restaurant') },
    { id: "logistics", name: t('pages:portfolio.categories.logistics') },
    { id: "healthcare", name: t('pages:portfolio.categories.healthcare') },
    { id: "ondemand", name: t('pages:portfolio.categories.ondemand') },
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  // Get filtered projects based on active category
  const getFilteredProjects = () => {
    const allProjects = [
      {
        id: 1,
        title: t('pages:portfolio.projects.retail.title'),
        description: t('pages:portfolio.projects.retail.description'),
        image: "/animations/retail.json",
        tags: [
          t('pages:portfolio.projects.retail.tags.ecommerce'),
          t('pages:portfolio.projects.retail.tags.pos'),
          t('pages:portfolio.projects.retail.tags.payment')
        ],
        category: "retail",
        link: "/industries/retail",
      },
      {
        id: 2,
        title: t('pages:portfolio.projects.travel.title'),
        description: t('pages:portfolio.projects.travel.description'),
        image: "/animations/travel.json",
        tags: [
          t('pages:portfolio.projects.travel.tags.booking'),
          t('pages:portfolio.projects.travel.tags.hotel'),
          t('pages:portfolio.projects.travel.tags.checkin'),
          t('pages:portfolio.projects.travel.tags.travel')
        ],
        category: "travel",
        link: "/industries/travel",
      },
      {
        id: 3,
        title: t('pages:portfolio.projects.restaurant.title'),
        description: t('pages:portfolio.projects.restaurant.description'),
        image: "/animations/order.json",
        tags: [
          t('pages:portfolio.projects.restaurant.tags.ordering'),
          t('pages:portfolio.projects.restaurant.tags.pos'),
          t('pages:portfolio.projects.restaurant.tags.kitchen')
        ],
        category: "restaurant",
        link: "/industries/restaurant",
      },
      {
        id: 4,
        title: t('pages:portfolio.projects.logistics.title'),
        description: t('pages:portfolio.projects.logistics.description'),
        image: "/animations/trade.json",
        tags: [
          t('pages:portfolio.projects.logistics.tags.supply'),
          t('pages:portfolio.projects.logistics.tags.warehouse'),
          t('pages:portfolio.projects.logistics.tags.tracking')
        ],
        category: "logistics",
        link: "/industries/logistics",
      },
      {
        id: 5,
        title: t('pages:portfolio.projects.healthcare.title'),
        description: t('pages:portfolio.projects.healthcare.description'),
        image: "/animations/health.json",
        tags: [
          t('pages:portfolio.projects.healthcare.tags.telemedicine'),
          t('pages:portfolio.projects.healthcare.tags.ehr'),
          t('pages:portfolio.projects.healthcare.tags.portals'),
          t('pages:portfolio.projects.healthcare.tags.analytics')
        ],
        category: "healthcare",
        link: "/industries/healthcare",
      },
      {
        id: 6,
        title: t('pages:portfolio.projects.ondemand.title'),
        description: t('pages:portfolio.projects.ondemand.description'),
        image: "/animations/demand.json",
        tags: [
          t('pages:portfolio.projects.ondemand.tags.ride'),
          t('pages:portfolio.projects.ondemand.tags.delivery'),
          t('pages:portfolio.projects.ondemand.tags.platforms')
        ],
        category: "ondemand",
        link: "/industries/ondemand",
      },
    ];

    if (activeCategory === "all") {
      return allProjects;
    }
    return allProjects.filter((project) => project.category === activeCategory);
  };

  const filteredProjects = getFilteredProjects();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ctx = gsap.context(() => {
        // Enhanced title animation with dramatic effect
        gsap.fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 80,
            scale: 0.8,
            rotationX: 45,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 1.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Enhanced project cards with 3D effect and stagger
        gsap.fromTo(
          ".project-card",
          {
            opacity: 0,
            y: 60,
            scale: 0.8,
            rotationY: 20,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: {
              amount: 0.6,
              from: "start",
            },
            scrollTrigger: {
              trigger: projectsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Add hover animations to project cards
        gsap.utils.toArray(".project-card").forEach((card: any) => {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              scale: 1.03,
              y: -10,
              rotationY: 5,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              rotationY: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });

        // Text reveal animation
        gsap.utils.toArray(".portfolio-text").forEach((text: any) => {
          gsap.fromTo(
            text,
            {
              opacity: 0,
              y: 30,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: text,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, [filteredProjects]);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/30"></div>

      {/* Background Image */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("/assets/images/IndustriesHomeBg.jpg")`,
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-16 right-16 w-20 h-20 bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-16 left-16 w-28 h-28 bg-indigo-400/20 dark:bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 left-1/3 w-12 h-12 bg-blue-300/20 dark:bg-blue-400/30 rounded-full blur-xl animate-pulse"></div>
      
      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6 font-display"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600">
              {t('pages:portfolio.title')}
            </span>
          </h2>
          <p className="portfolio-text text-xl text-[#656d76] dark:text-[#f0f6fc] max-w-3xl mx-auto mb-6">
            {t('pages:portfolio.subtitle')}
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  activeCategory === category.id
                    ? "bg-[#0969da] text-white dark:bg-[#58a6ff] dark:text-[#f0f6fc]"
                    : "text-[#656d76] dark:text-[#f0f6fc] hover:bg-[#f0f6fc] dark:hover:bg-[#21262d]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          ref={projectsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card card hover-card overflow-hidden"
            >
              <Link href={project.link}>
                <div className="relative">
                  <DotLottie
                    src={project.image}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#656d76] dark:text-[#f0f6fc] mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="badge badge-primary text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-4">
              {t('pages:portfolio.cta.title')}
            </h3>
            <p className="text-[#656d76] dark:text-[#f0f6fc] mb-6">
              {t('pages:portfolio.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                {t('common:buttons.getFreeConsultation')}
              </Link>
              <Link
                href="/industries"
                className="btn-outline dark:text-white dark:border-white"
              >
                {t('common:buttons.moreServices')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;