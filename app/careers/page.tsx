"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ExpertiseCard from "@/components/ExpertiseCard";
import OpenPositions from "@/components/OpenPositions";
import CareersApplicationForm from "@/components/CareersApplicationForm";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    phone: "",
    linkedin: "",
    location: "",
    message: "",
    resume: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const expertiseData = [
    {
      image: "/assets/images/5599109_56683.jpg",
      title: "Growth-Driven Workplace",
      subtitle: "Clear career paths, mentorship, and continuous upskilling.",
    },
    {
      image: "/assets/images/2455802_331199-PACCJR-924.jpg",
      title: "Innovation-First Culture",
      subtitle: "Work with cutting-edge tools and build future-ready products.",
    },
    {
      image: "/assets/images/13641500_5301618.jpg",
      title: "Work-Life Flexibility",
      subtitle:
        "Hybrid and remote options designed for balance and productivity.",
    },
    {
      image: "/assets/images/13514343_SL.112119.25250.41.jpg",
      title: "Real-World Impact",
      subtitle:
        "Build solutions used across industries that create measurable value.",
    },
  ];

  const openPositions = [
    {
      title: "Frontend Developer",
      type: "Full-time",
      location: "Noida, India (Hybrid)",
      description:
        "React, Next.js, Tailwind, GSAP animation experience preferred.",
    },
    {
      title: "Backend Developer",
      type: "Full-time",
      location: "Noida, India (Hybrid)",
      description: "Node.js, Express, PostgreSQL, Microservices architecture.",
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Remote",
      description: "Figma, wireframing, prototyping, design systems.",
    },
  ];

  const [messageCount, setMessageCount] = useState(0);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;

    // Limits like Contact page
    const limits: Record<string, number> = {
      Name: 30,
      phone: 15,
      linkedin: 150,
      location: 50,
      message: 2000,
    };

    // Block input beyond max length
    if (limits[name] && value.length > limits[name]) return;

    if (name === "message") {
      setMessageCount(value.length);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");

    // --- Email validation ---
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("error");
      alert("Please enter a valid email address.");
      return;
    }

    // --- Phone validation (10–15 digits allowed) ---
    const phoneRegex = /^[0-9]{7,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      setSubmitStatus("error");
      alert("Please enter a valid phone number.");
      return;
    }

    // --- LinkedIn validation ---
    const linkedinRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/.+$/i;
    if (!linkedinRegex.test(formData.linkedin)) {
      setSubmitStatus("error");
      alert("Please enter a valid LinkedIn profile URL.");
      return;
    }

    // --- Location required ---
    if (formData.location.trim().length < 2) {
      setSubmitStatus("error");
      alert("Location is required.");
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSd2e1L5CF3vLX9Ed5992i6HbBZG9WsKTDZWyXblVViCYD6e7g/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: (() => {
            const body = new FormData();
            body.append("entry.913437780", formData.Name);
            body.append("entry.2024542103", formData.email);
            body.append("entry.1701224700", formData.phone);
            body.append("entry.1190405057", formData.message);
            body.append("entry.1740960277", formData.linkedin);
            body.append("entry.1645537285", formData.location);
            return body;
          })(),
        }
      );

      setSubmitStatus("success");

      // Reset form
      setFormData({
        Name: "",
        email: "",
        phone: "",
        linkedin: "",
        location: "",
        message: "",
        resume: null,
      });
      setMessageCount(0);
    } catch (error) {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="relative overflow-hidden bg-[#C9E0F1] dark:bg-[#0d1117]">
      {/* ================================================= */}
      {/* HERO — FULL SCREEN WIDTH WITH BACKGROUND ONLY HERE */}
      {/* ================================================= */}
      <section
        id="careers-hero"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/Rectangle 46.png"
            alt="Careers Background"
            fill
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
        </div>

        {/* Overlay Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Floating Blobs (same style as homepage) */}
        <div className="floating-element absolute top-20 left-20 w-32 h-32 bg-blue-400/20 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="floating-element absolute bottom-20 right-20 w-40 h-40 bg-indigo-400/20 dark:bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="floating-element absolute top-1/2 right-1/4 w-24 h-24 bg-blue-300/20 dark:bg-blue-400/20 rounded-full blur-2xl"></div>

        {/* ------------------------------------------------------------- */}
        {/* HERO TITLE + SUBTITLE (matching homepage typography + spacing) */}
        {/* ------------------------------------------------------------- */}
        <div className="relative z-10 mt-20 container-max mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-display">
            Join a Team That Builds the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200">
              Future
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
            At Codriva, we don’t just develop software — we create meaningful
            solutions that transform industries.
          </p>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            We're more than just a workplace — we're a community built on
            innovation, growth, and collaboration.
          </p>

          {/* CTA Buttons (optional – remove if not needed) */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/careers/openings"
              className="btn-primary text-lg px-8 py-3 magnetic"
            >
              View Open Positions
            </Link>
            <Link
              href="/about"
              className="btn-outline text-lg px-8 py-3 magnetic"
            >
              Learn About Our Culture
            </Link>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* CARDS — styled EXACTLY like home expertise cards */}
        {/* ------------------------------------------------------------- */}
        <div className="relative z-10 w-full mt-20 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-12 max-w-7xl mx-auto px-6">
            {expertiseData.map((item) => (
              <ExpertiseCard
                key={item.title}
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      <div className="">
        {/* ================================================= */}
        {/* TEXT + SIDE IMAGE */}
        {/* ================================================= */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-28 mt-16 h-screen container-max dark:bg-[#0d1117]">
          <div className="space-y-9">
            <h1 className="text-3xl font-bold text-[#24292f] dark:text-[#f0f6fc]">
              Discover Your Next Big Opportunity at Codriva
            </h1>

            <p className="text-lg text-[#656d76] dark:text-[#8b949e]">
              At Codriva, we’re more than a technology company — we’re a hub of
              innovation that empowers businesses across industries to grow,
              scale, and transform. From FinTech and Healthcare to E-Commerce,
              EdTech, Logistics, and Real Estate, our diverse domain expertise
              allows our teams to work on impactful projects that shape the
              future of digital experiences.
            </p>
            <p className="text-lg text-[#656d76] dark:text-[#8b949e]">
              With a strong foundation in custom software development, cloud
              solutions, UI/UX design, mobile app development, data analytics,
              and emerging technologies like IoT and AI, we offer a dynamic
              environment where talent thrives.
            </p>
            <p className="text-lg text-[#656d76] dark:text-[#8b949e]">
              oin us and unlock your potential through continuous learning,
              cross-functional collaboration, and a culture that values
              innovation, ownership, and excellence.
            </p>
          </div>

          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/4667026_16.jpg"
              alt="Career Opportunity"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* ================================================= */}
        {/* ALTERNATING VALUES SECTION (FULL WIDTH IMAGES) */}
        {/* ================================================= */}
        <section className="mb-32 w-full hidden">
          <h1 className="text-center text-3xl font-bold mb-16 text-[#24292f] dark:text-[#f0f6fc]">
            Building Tomorrow’s Technology, Today
          </h1>

          <div className="flex flex-col space-y-24">
            {[
              {
                title: "Client-Focused Innovation",
                text: "We blend cutting-edge technology with deep business insight to deliver tailored solutions that solve real client challenges and drive measurable impact. Your goals shape our innovations — every solution starts with your vision. Whether you’re an engineer, designer, analyst, or strategist, you’ll have the opportunity to solve real-world problems, build scalable products, and grow your career alongside passionate, skilled professionals.",
                img: "Rectangle 48.png",
              },
              {
                title: "Collaborative Partnerships",
                text: "We work as an extension of your team, fostering transparent, long-term partnerships built on trust, collaboration, and shared success. Together, we co-create solutions that deliver value and lasting impact.",
                img: "Rectangle 47.png",
              },
              {
                title: "Cutting-Edge Technologies",
                text: "We leverage the latest tools, frameworks, and platforms to build future-ready solutions that keep our clients ahead of the curve. From AI and cloud to IoT and advanced analytics, we harness innovation to drive transformation.",
                img: "Rectangle 42.png",
              },
              {
                title: "Sustainable IT Practices",
                text: "We prioritize scalable, energy-efficient, and future-proof solutions that align with environmental and business sustainability goals. Our approach to technology is rooted in responsibility, efficiency, and long-term impact.",
                img: "Rectangle 45.png",
              },
              {
                title: "Agile & Adaptive Approach",
                text: "We embrace agile methodologies to deliver faster, smarter, and more flexible solutions that evolve with your business needs. Our adaptive mindset ensures continuous improvement, quick pivots, and maximum value at every stage.",
                img: "ChatGPT Image Dec 2, 2025, 04_12_20 PM.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`
          flex flex-col lg:flex-row w-full
          ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}
        `}
              >
                {/* TEXT SIDE */}
                <div className="w-full lg:w-1/2 flex items-center px-10 py-10">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>

                {/* IMAGE SIDE – UNCROPPED */}
                <div className="w-full lg:w-1/2  dark:bg-[#0d1117] flex py-10">
                  <div className="relative w-full h-full  flex ">
                    <Image
                      src={`/assets/images/${item.img}`}
                      alt={item.title}
                      width={900}
                      height={600}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <OpenPositions />

        {/* ================================================= */}
        {/* WORK FROM ANYWHERE */}
        {/* ================================================= */}
        <section className="mb-32 w-full">
          <h1 className="text-center text-3xl font-bold mb-12 text-[#24292f] dark:text-[#f0f6fc]">
            Don't see a position that fits you?.
          </h1>
         <h2 className="text-center text-2xl font-bold mb-12 text-[#24292f] dark:text-[#f0f6fc]">
  <Link
    href="#apply"
    className="text-transparent bg-clip-text bg-gradient-to-r 
               from-blue-600 via-blue-700 to-blue-800
               dark:from-blue-400 dark:via-blue-500 dark:to-blue-600
               underline decoration-transparent hover:decoration-blue-600 
               dark:hover:decoration-blue-400 transition"
  >
    Apply anyway
  </Link>{" "}
  and we will notify you when a position opens.
</h2>


          {/* FULL WIDTH IMAGE */}
          <div className="w-full h-[620px] relative rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/assets/images/28159246_team.jpg"
              alt="Remote Work"
              fill
              className="object-cover"
            />
          </div>

          {/* CONTENT CARD — attached to image */}
          <div
            className="max-w-4xl mx-auto p-10 rounded-2xl bg-white/80 dark:bg-[#0d1117]/80 
                  border border-gray-200 dark:border-gray-700 shadow-xl -mt-4"
          >
            <h2 className="text-2xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-4">
              More than a job — a part of something bigger.
            </h2>

            <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
              At Codriva, work is about purpose, impact, and growth. We empower
              individuals to innovate freely, collaborate meaningfully, and
              thrive in a flexible work culture designed for balance and
              creativity.
            </p>
          </div>
        </section>

        {/* ================================================= */}
        {/* APPLICATION FORM — UNCHANGED */}
        {/* ================================================= */}
      <CareersApplicationForm presetPosition={"Other / Not Listed"}/>
      </div>
    </div>
  );
}
