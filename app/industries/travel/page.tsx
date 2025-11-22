"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Travel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
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
              start: "top 85%",
            },
          }
        );

        gsap.fromTo(
          introRef.current,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: introRef.current,
              start: "top 85%",
            },
          }
        );

        gsap.fromTo(
          ".solution-item",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: solutionsRef.current,
              start: "top 85%",
            },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  const solutions = [
    {
      title: "Hotel Booking Platforms",
      image: "/assets/images/unsplash_26.png",
      text:
        "End-to-end systems for room reservations, payment integration, and guest management.",
    },
    {
      title: "Tour & Itinerary Management Apps",
      image: "/assets/images/unsplash_27.png",
      text:
        "Custom apps for travel agencies to manage packages, itineraries, and real-time updates.",
    },
    {
      title: "Customer Experience Portals",
      image: "/assets/images/unsplash_28.png",
      text:
        "Engaging front-end platforms to help guests explore, book, and review services effortlessly.",
    },
    {
      title: "Smart Travel Portals",
      image: "/assets/images/unsplash_29.png",
      text: "Custom-built travel websites and apps with real-time availability.",
    },
  ];

  return (
    <section ref={sectionRef} className="relative">
      {/* HERO */}
      <div ref={heroRef} className="relative h-[90vh] flex items-end pb-24">
        <Image
          src="/assets/images/unsplash_25.png"
          alt="Travel"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center text-white w-full pb-10">
          <div className="mb-6 flex justify-center">
            <Image
              src="/assets/images/Group 67.png"
              alt="shape"
              width={130}
              height={130}
            />
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-medium mb-6"
          >
            Let&apos;s Talk <i className="fas fa-arrow-right" />
          </Link>

          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Redefining Travel Through Technology
          </p>
        </div>
      </div>

      {/* INTRO */}
      <div ref={introRef} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-max max-w-4xl mx-auto space-y-6 text-gray-700 dark:text-gray-300 text-lg">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Bringing the World Closer with Code
          </h2>

          <p>
            The Travel and Hospitality industry thrives on delivering exceptional
            guest experiences while managing complex operations across bookings,
            inventory, and customer service. At Codriva, we create innovative
            software solutions designed to streamline these processes and enhance
            traveler engagement.
          </p>
          <p>
            Our expertise includes developing booking engines, property
            management systems, and customer relationship management (CRM) tools
            tailored for hotels, airlines, travel agencies, and tour operators.
            We also integrate real-time pricing, availability updates, and
            personalized offers to optimize revenue management and satisfaction.
          </p>
          <p>
            By leveraging mobile apps, AI-driven recommendations, and analytics,
            we enable personalized experiences, seamless check-ins, and efficient
            service management.
          </p>
        </div>
      </div>

      {/* SOLUTIONS */}
      <div ref={solutionsRef} className="py-20 bg-white dark:bg-gray-800">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Solutions We Serve
          </h2>

          <div className="space-y-16">
            {solutions.map((item, idx) => (
              <div
                key={idx}
                className={`solution-item flex flex-col ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                <div className="flex-1">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={650}
                    height={450}
                    className="rounded-lg shadow-lg"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Build the Future of Travel?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let’s create seamless travel experiences with cutting-edge technology.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-medium"
        >
          Contact Us <i className="fas fa-arrow-right" />
        </Link>
      </div>
    </section>
  );
}
