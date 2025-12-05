"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    icon: "💻",
    title: "Custom Software Development",
    description:
      "Tailored solutions built from the ground up to meet your unique business needs.",
    features: [
      "Web Applications",
      "Mobile Apps",
      "API Development",
      "System Integration",
    ],
    link: "/services/custom-software-development",
    bg: "/assets/images/4380747.jpg",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "High-performance mobile applications built for great usability, scalability, and engagement across devices.",
    features: [
      "Native iOS & Android Apps",
      "Cross-platform Solutions",
      "UI/UX for Mobile",
      "App Store Deployment & Optimization",
    ],
    link: "/services/mobile-app-development",
    bg: "/assets/images/Mobile-dev.jpg",
  },
  {
    icon: "🔗",
    title: "API & System Integration",
    description:
      "Seamless connectivity between your products, tools, and platforms to ensure smooth data flow and optimized operations.",
    features: [
      "Third-party API Integration",
      "Custom API Development",
      "Legacy System Integration",
      "Workflow Automation",
    ],
    link: "/services/api-system-integration",
    bg: "/assets/images/7015995.jpg",
  },
  {
    icon: "🧠",
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions that automate processes and provide valuable insights.",
    features: ["Predictive Analytics", "NLP", "Computer Vision", "Automation"],
    link: "/services/ai-machine-learning",
    bg: "/assets/images/43868976_2304.i039.016.F.m004.c9.AI generated art AI powered content creation isometric.jpg",
  },
  {
    icon: "📊",
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights for better decision making.",
    features: [
      "Data Visualization",
      "Business Intelligence",
      "Reporting",
      "Dashboards",
    ],
    link: "/services/data-analytics",
    bg: "/assets/images/12643932_5031659.jpg",
  },
  {
    icon: "🔧",
    title: "Support & Maintenance",
    description:
      "Proactive, reliable support to keep your systems secure, updated, and performing at their best.",
    features: [
      "Bug Fixes & Issue Resolution",
      "Performance Optimization",
      "Security Patching",
      "Continuous Monitoring",
    ],
    link: "/services/support-maintenance",
    bg: "/assets/images/21502.jpg",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 80, scale: 0.8, rotationX: 45 },
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

        gsap.fromTo(
          ".service-card",
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

        gsap.utils.toArray(".service-card").forEach((card: any) => {
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

        gsap.utils.toArray(".services-text").forEach((text: any) => {
          gsap.fromTo(
            text,
            { opacity: 0, y: 30, scale: 0.9 },
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
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Backgrounds and floating elements unchanged */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 dark:from-slate-800 dark:via-blue-900/30 dark:to-indigo-900/40"></div>
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&auto=format&q=80")`,
          }}
        ></div>
      </div>
      <div className="absolute top-20 left-20 w-24 h-24 bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-36 h-36 bg-indigo-400/20 dark:bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-300/20 dark:bg-blue-400/30 rounded-full blur-xl animate-pulse"></div>

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6 font-display"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600">
              Services
            </span>
          </h2>
          <p className="services-text text-xl text-[#656d76] dark:text-[#f0f6fc] max-w-3xl mx-auto">
            We offer a comprehensive range of digital services to help your
            business thrive in the modern world.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <Link key={service.title} href={service.link} className="">
              <div className="service-card card hover-card p-8 flex flex-col h-full relative overflow-hidden rounded-2xl">
                {/* Background Image */}
                <Image
                  src={service.bg} // "/assets/images/ai-chip-artificial.png"
                  alt={service.title}
                  fill
                  className="object-cover"
                />

                {/* Optional overlay for readability */}
                <div className="absolute inset-0 bg-white/40 dark:bg-black/30 backdrop-blur-sm"></div>

                {/* Foreground content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{service.icon}</div>

                  <h3 className="text-xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-4">
                    {service.title}
                  </h3>

                  <p className="text-[#24292f] dark:text-[#f0f6fc] mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-[#24292f] dark:text-[#f0f6fc]"
                      >
                        <svg
                          className="w-4 h-4 text-[#0969da] dark:text-[#58a6ff] mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-16">
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-4">
              Ready to start your project?
            </h3>
            <p className="text-[#656d76] dark:text-[#f0f6fc] mb-6">
              Let's discuss how we can help bring your vision to life with our
              cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get a free Consultation
              </Link>
              <Link
                href="/services"
                className="btn-outline dark:text-white dark:border-white"
              >
                More Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
