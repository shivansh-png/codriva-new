"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import AboutUs from "./AboutUs";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
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
            src="/assets/images/unsplash_60.png" // ← same image you want to keep
            alt="About Background"
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
            Get To Know
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100">
              {" "}
              Codriva
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Learn who we are, what we believe in, and how we work to create
            meaningful technology that empowers businesses worldwide.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 
      text-white px-8 py-3 rounded-lg text-lg font-medium shadow-lg transition-colors"
          >
            Let's Talk <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      {/* Guiding Principles */}
      <div ref={guidingRef} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our Guiding
                <br />
                <span className="text-blue-600">Principles</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                At Codriva, our guiding principles shape every decision and
                drive our commitment to excellence. We believe in innovation,
                integrity, and collaboration as the foundation for building
                lasting partnerships and delivering impactful solutions. Our
                customer-centric approach ensures that we always prioritize your
                needs, while our dedication to quality and continuous
                improvement empowers us to stay ahead in a rapidly evolving
                digital landscape. These principles inspire our team to create
                technology that not only meets but exceeds expectations,
                fostering trust and long-term success.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Let's Talk <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/assets/images/group-people-working-team.png"
                alt="Guiding principles"
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
                Our Growth
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                At Codriva, growth is more than just numbers — it's a reflection
                of our unwavering commitment to innovation, quality, and client
                success. Since our inception, we have consistently expanded our
                capabilities, embraced emerging technologies, and forged strong
                partnerships to deliver exceptional digital solutions. Our
                growth story is fueled by a passionate team, forward-thinking
                strategies, and a customer-first mindset that drives us to
                exceed expectations. As we evolve, we remain dedicated to
                empowering businesses worldwide and shaping the future of
                technology.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/assets/images/worldmap.png"
                alt="Growth chart illustration"
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
            The Value We Stand For
          </h2>
          <p className="text-xl text-gray-600 dark:text-black-300 mb-12">
            Our core values lie at the heart of everything we do and define who
            we are.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="value-item">
              <Image
                src="/assets/images/Group 46.png"
                alt="Quality value"
                width={250}
                height={250}
                className="mx-auto transition-transform hover:scale-105 duration-300 contrast-125"
              />
            </div>
            <div className="value-item">
              <Image
                src="/assets/images/Group 47.png"
                alt="Transparency value"
                width={250}
                height={250}
                className="mx-auto transition-transform hover:scale-105 duration-300 contrast-125"
              />
            </div>
            <div className="value-item">
              <Image
                src="/assets/images/Group 48.png"
                alt="Collaboration value"
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
                alt="Integrity value"
                width={250}
                height={250}
                className="mx-auto transition-transform hover:scale-105 duration-300 contrast-125"
              />
            </div>
            <div className="value-item">
              <Image
                src="/assets/images/Group 50.png"
                alt="Ownership value"
                width={250}
                height={250}
                className="mx-auto transition-transform hover:scale-105 duration-300 contrast-125"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
