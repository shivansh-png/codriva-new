"use client";

import { useEffect, useRef } from "react";
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
    ],
    Services: [
      { name: "Custom Software", href: "services/custom-software-development" },
      { name: "AI & Machine Learning", href: "services/ai-machine-learning" },
      { name: "Product Engineering", href: "services/product-engineering" },
      { name: "Cloud Solutions", href: "services/cloud-devops" },
    ],
    Resources: [{ name: "Privacy Policy", href: "#" }],
    Connect: [
      { name: "LinkedIn", href: "https://linkedin.com/company/codriva" },
      { name: "Mail", href: "mailto:info@codriva.com" },
    ],
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer ref={footerRef} className="relative text-white overflow-hidden">
      {/* Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>
      <div className="container-max relative z-10">
        <div className="footer-content py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#home");
                }}
                className="flex items-center space-x-3 group mb-4"
              >
                <Image
                  src="/images/codriva-logo.svg"
                  alt="Codriva Logo"
                  width={160}
                  height={160}
                  className="w-200 h-200 rounded-lg object-contain group-hover:scale-105 transition-all duration-300"
                />
              </a>
              <p className="text-[#f0f6fc] mb-6 leading-relaxed">
                Your trusted technology partner. We deliver custom software
                solutions, digital transformation services, and innovative
                technology consulting.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/company/codriva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f0f6fc] hover:text-white transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="mailto:info@codriva.com"
                  className="text-[#f0f6fc] hover:text-white transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.94 4.44A2 2 0 0 1 4.32 4h11.36a2 2 0 0 1 1.38.44L10 10.12 2.94 4.44zM18 6.12v7.76A2 2 0 0 1 16 16H4a2 2 0 0 1-2-2V6.12l7.62 5.77a1 1 0 0 0 1.24 0L18 6.12z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-semibold text-white mb-4">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => {
                    const isInternal = link.href.startsWith("/");
                    return (
                      <li key={link.name}>
                        {isInternal ? (
                          <Link
                            href={link.href}
                            className="text-[#f0f6fc] hover:text-white transition-colors duration-200 text-sm"
                          >
                            {link.name}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            target={
                              link.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              link.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-[#f0f6fc] hover:text-white transition-colors duration-200 text-sm"
                          >
                            {link.name}
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#30363d] py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#f0f6fc] text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Codriva copy right
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="./privacy-policy"
                className="text-[#f0f6fc] hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="./terms-and-conditions"
                className="text-[#f0f6fc] hover:text-white transition-colors duration-200"
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
