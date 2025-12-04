"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Lottie from "lottie-react";
import DotLottie from "./DotLottie";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: 1,
    title: "Retail & E-Commerce",
    description:
      "Custom e-commerce platforms with advanced inventory management, payment gateways, and omnichannel retail solutions.",
    image:
      "https://lottie.host/45aec96d-c60f-48e2-bcab-caca2d4faee1/JgNqUG4t1M.lottie",
    tags: ["E-commerce", "POS Systems", "Payment Integration"],
    category: "retail",
    link: "/industries/retail",
  },

  // UPDATED
  {
    id: 2,
    title: "Travel & Hospitality",
    description:
      "End-to-end travel and hospitality solutions including booking engines, hotel management systems, digital check-in, and customer experience automation.",
    image:
      "https://lottie.host/2f63fcca-4205-4593-bb7e-a24e0cf7a2f9/ZmzFxUyN6F.lottie",
    tags: ["Booking Systems", "Hotel Management", "Digital Check-in", "Travel Apps"],
    category: "travel",
    link: "/industries/travel",
  },

  // UPDATED
  {
    id: 3,
    title: "Restaurant & Cloud Kitchen",
    description:
      "Smart restaurant and cloud kitchen solutions featuring online ordering, POS integration, menu management, and real-time delivery tracking.",
    image:
      "https://lottie.host/00431ad0-ac06-4ffb-ac30-267d7784ced1/mMYyHBa6xX.lottie",
    tags: ["Online Ordering", "POS Integration", "Kitchen Automation"],
    category: "restaurant",
    link: "/industries/restaurant",
  },

  {
    id: 4,
    title: "Logistics & Supply Chain",
    description:
      "End-to-end logistics solutions with real-time tracking, warehouse management, and supply chain optimization.",
    image:
      "https://lottie.host/8578b848-0614-4e6d-8e69-59d10eef7409/POo2B7iI12.lottie",
    tags: ["Supply Chain", "Warehouse Management", "Tracking"],
    category: "logistics",
    link: "/industries/logistics",
  },

  // UPDATED
  {
    id: 5,
    title: "Healthcare & life Science",
    description:
      "Advanced healthcare and life science platforms including patient management systems, telemedicine, EHR/EMR, and health analytics dashboards.",
    image:
      "https://lottie.host/5e0afd1a-a128-4b66-9e1e-0a6fcae83fb9/IEbLAlQjUc.lottie",
    tags: ["Telemedicine", "EHR/EMR", "Patient Portals", "Health Analytics"],
    category: "healthcare",
    link: "/industries/healthcare",
  },

  {
    id: 6,
    title: "On Demand Platforms",
    description:
      "Scalable on-demand service platforms for ride-sharing, delivery, and service-based businesses.",
    image:
      "https://lottie.host/270fdcae-11f5-46a1-998b-c9941ccb23ac/LEZKTOZ4xI.lottie",
    tags: ["Ride-Sharing", "Delivery Apps", "Service Platforms"],
    category: "ondemand",
    link: "/industries/ondemand",
  },
];


const categories = [
  { id: "all", name: "Top Industries" },
  { id: "retail", name: "Retail & E-Commerce" },
  { id: "travel", name: "Travel & Hospitality" },
  { id: "restaurant", name: "Restaurant & Cloud Kitchen" },
  { id: "logistics", name: "Logistics & Supply Chain" },
  { id: "healthcare", name: "Healthcare & Life Science" },
  { id: "ondemand", name: "On Demand Platforms" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeCategory)
      );
    }
  }, [activeCategory]);

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
            backgroundImage: `url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&auto=format&q=80")`,
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
              Industries
            </span>
          </h2>
          <p className="portfolio-text text-xl text-[#656d76] dark:text-[#f0f6fc] max-w-3xl mx-auto mb-6">
            Discover how we transform businesses across diverse industries with
            innovative digital solutions.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  activeCategory === category.id
                    ? "bg-[#0969da] text-white dark:bg-[#58a6ff] dark:text-[#f0f6fc ]"
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
              <Link
                href={project.link}
                //className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium"
              >
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
              Ready to Transform Your Industry?
            </h3>
            <p className="text-[#656d76] dark:text-[#f0f6fc] mb-6">
              Discover how our industry-specific solutions can drive your
              business forward. Let's discuss your unique challenges and
              opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get a free Consultation
              </Link>
              <Link
                href="/industries"
                className="btn-outline dark:text-white dark:border-white"
              >
                More Industries
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
