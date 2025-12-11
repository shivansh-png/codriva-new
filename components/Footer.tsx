"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { useLayoutEffect } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!footerRef.current) return;

    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      }
    );
  }, []);

  const footerLinks = {
    Company: [
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Industries", href: "/industries" },
      { name: "Careers", href: "/careers" },
      { name: "Contact Us", href: "/contact" },
    ],

    Industries: [
      {
        name: "Retail & E-Commerce",
        href: "/industries/retail",
      },
      {
        name: "Travel & Hospitality",
        href: "/industries/travel",
      },
      {
        name: "Restaurant & Cloud Kitchen",
        href: "/industries/restaurant",
      },
      {
        name: "Logistics & Supply Chain",
        href: "/industries/logistics",
      },
      {
        name: "Healthcare & life Science",
        href: "/industries/healthcare",
      },
      {
        name: "On Demand Platforms",
        href: "/industries/ondemand",
      },
      {
        name: "View More ↗",
        href: "/industries",
        viewMore: true,
      },
    ],

    Services: [
      {
        name: "Custom Software Development",
        href: "/services/custom-software-development",
      },
      {
        name: "Mobile App Development",
        href: "/services/mobile-app-development",
      },
      {
        name: "API & System Integration",
        href: "/services/api-system-integration",
      },
      {
        name: "AI & Machine Learning",
        href: "/services/ai-machine-learning",
      },
      {
        name: "Data Analytics",
        href: "/services/data-analytics",
      },
      {
        name: "Support & Maintenance",
        href: "/services/support-maintenance",
      },
      {
        name: "View More ↗",
        href: "/services",
        viewMore: true,
      },
    ],
  };

  return (
    <footer ref={footerRef} className="relative text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900"></div>

      {/* Background dotted pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="px-10 relative z-10">
        <div className="footer-content pt-10">
          {/* FIXED GRID: left column + right 3-column block */}
          <div className="grid md:grid-cols-2 lg:grid-cols-[1fr_2fr] gap-12">
            {/* LEFT SIDE — Logo + description + icons + connect */}
            <div className="max-w-sm">
              <a href="/" className="flex items-center mb-4 group">
                <Image
                  src="/images/codriva-logo.svg"
                  alt="Codriva Logo"
                  width={160}
                  height={160}
                  className="object-contain group-hover:scale-105 transition-all duration-300"
                />
              </a>

              <p className="text-[#f0f6fc] mb-6 leading-relaxed">
                Your trusted technology partner. We deliver custom software
                solutions, digital transformation services, and innovative
                technology consulting.
              </p>

              {/* Social icons */}
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://linkedin.com/company/codriva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f0f6fc] hover:text-white transition"
                >
                  <svg className="w-6 h-6" fill="currentColor">
                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59z" />
                  </svg>
                </a>

                <a
                  href="mailto:info@codriva.com"
                  className="text-[#f0f6fc] hover:text-white transition"
                >
                  <svg className="w-6 h-6" fill="currentColor">
                    <path d="M2.94 4.44A2 2 0 0 1 4.32 4h11.36a2 2 0 0 1 1.38.44L10 10.12 2.94 4.44zM18 6.12v7.76A2 2 0 0 1 16 16H4a2 2 0 0 1-2-2V6.12l7.62 5.77a1 1 0 0 0 1.24 0L18 6.12z" />
                  </svg>
                </a>
              </div>

              {/* CONNECT */}
              <h3 className="text-white font-bold text-xl tracking-wide mb-3 uppercase">Connect</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://linkedin.com/company/codriva"
                    className="text-lg text-[#f0f6fc] hover:text-white transition"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@codriva.com?subject=Consultation%20Request%20%E2%80%93%20Technology%20%26%20Software%20Services"
                    className="text-lg text-[#f0f6fc] hover:text-white transition"
                  >
                    Mail
                  </a>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE — perfectly aligned 3 columns */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <h3 className="text-white font-bold text-xl tracking-wide mb-3 uppercase">
                    {title}
                  </h3>

                  <ul className="space-y-3">
                    {links.map((link: any) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className={`text-lg text-[#f0f6fc] hover:text-white transition ${
                            link.viewMore ? "underline underline-offset-4" : ""
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-9">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#f0f6fc] text-sm mb-4 md:mb-0">
              Copyright ©{new Date().getFullYear()} Codriva All Rights Reserved.
            </p>

            <div className="flex space-x-6 text-sm">
              <a
                href="/privacy-policy"
                className="text-[#f0f6fc] hover:text-white transition"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-[#f0f6fc] hover:text-white transition"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
