"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import DotLottie from "@/components/DotLottie";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Industries = () => {
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
      name: "Retail & E-Commerce",
      href: "/industries/retail",
      lottie:
        "https://lottie.host/45aec96d-c60f-48e2-bcab-caca2d4faee1/JgNqUG4t1M.lottie",
    },
    {
      name: "EdTech",
      href: "/industries/edtech",
      lottie:
        "https://lottie.host/ec99b463-a384-4c6c-ad6c-e855caed9da6/mLC7PWXoZw.lottie",
    },
    {
      name: "FinTech & Banking",
      href: "/industries/fintech",
      lottie:
        "https://lottie.host/9f1ea2cf-0e7b-4dad-8277-b1809846f4fd/5De4ysgqVx.lottie",
    },
    {
      name: "Logistics & Supply Chain",
      href: "/industries/logistics",
      lottie:
        "https://lottie.host/8578b848-0614-4e6d-8e69-59d10eef7409/POo2B7iI12.lottie",
    },
    {
      name: "Real Estate and PropTech",
      href: "/industries/realestate",
      lottie:
        "https://lottie.host/6d7c6dd5-064a-4848-ba96-edf17c2f44d2/wugQgJQdSv.lottie",
    },
    {
      name: "On Demand Platforms",
      href: "/industries/ondemand",
      lottie:
        "https://lottie.host/270fdcae-11f5-46a1-998b-c9941ccb23ac/LEZKTOZ4xI.lottie",
    },

    // Leave remaining as-is (no lottie given)
    {
      name: "Telecom",
      href: "/industries/telecom",
      lottie:
        "https://lottie.host/478e9da4-c089-40bf-93d7-8eb0d50b1719/6KIKfPUi7o.lottie",
    },
    {
      name: "Events & Ticketing",
      href: "/industries/events",
      lottie:
        "https://lottie.host/a5383162-c8c4-445a-a91f-9b93b3e31e70/5cbIhu0xHE.lottie",
    },
    {
      name: "Media & news",
      href: "/industries/media",
      lottie:
        "https://lottie.host/ed3cf8c2-df61-40ee-adec-a2ea28ea2213/HkDMPYa2JE.lottie",
    },
    {
      name: "Travel & Hospitality",
      href: "/industries/travel",
      lottie:
        "https://lottie.host/2f63fcca-4205-4593-bb7e-a24e0cf7a2f9/ZmzFxUyN6F.lottie",
    },
    {
      name: "Restaurant & Cloud kitchen",
      href: "/industries/restaurant",
      lottie:
        "https://lottie.host/00431ad0-ac06-4ffb-ac30-267d7784ced1/mMYyHBa6xX.lottie",
    },
    {
      name: "Healthcare & life Science",
      href: "/industries/healthcare",
      lottie:
        "https://lottie.host/5e0afd1a-a128-4b66-9e1e-0a6fcae83fb9/IEbLAlQjUc.lottie",
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
      alt="Industries Hero"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  {/* HERO CONTENT */}
  <div className="relative z-10 max-w-4xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
      Empowering Industries with Innovative Solutions
    </h1>

    <p className="text-lg md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
      From FinTech and Retail to Healthcare and Travel, we build scalable digital
      solutions tailored to your industry's needs.
    </p>

    {/* CTA Button */}
    <Link
      href="/contact"
      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
    >
      Let&apos;s Talk <i className="fas fa-arrow-right"></i>
    </Link>
  </div>
</div>


      {/* INDUSTRIES GRID */}
      <div ref={focusedRef} className="py-20  bg-[#C9E0F1] dark:bg-gray-900">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Industries Focused Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <span className="text-sm">Know more →</span>
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
