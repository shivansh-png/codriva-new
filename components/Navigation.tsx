
"use client";

import React, { useState, useEffect } from "react";
import SimpleThemeToggle from "./SimpleThemeToggle";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";

import LanguageSwitcher from "./LanguageSwitcher";


const Navigation = () => {
  const { t } = useTranslation(['common', 'pages']);
  const { currentLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Skip translation for careers page as requested
  const isCareersPage = typeof window !== 'undefined' && window.location.pathname.startsWith('/careers');

  const navItems = [
    { name: t('common:navigation.about'), href: "/about" },
    { name: t('common:navigation.services'), href: "/services" },
    { name: t('common:navigation.industries'), href: "/industries" },
    { name: "Careers", href: "/careers" }, // Keep original text for careers page

  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  // Only keep this for same-page scrolls (not routes)
  const scrollToSection = (id: string) => {
    if (!id.startsWith("#")) {
      router.push(id);
      setIsMenuOpen(false);
      return;
    }
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-200 ${isScrolled
        ? "bg-white/80 dark:bg-[#0d1117]/80 backdrop-blur-md border-b border-[#d0d7de] dark:border-[#30363d]"
        : "bg-transparent"
        }`}
    >
      <div className="flex items-center justify-between h-16 px-4 md:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <button
            onClick={() => {
              if (pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                window.location.href = "/";
              }
            }}
            className="flex items-center space-x-3 group"
          >
            {/* responsive logo: height constrained, width auto so it scales proportionally */}
            <img
              src="/images/codriva-logo.svg"
              alt="Codriva Logo"
              className="h-8 md:h-10 lg:h-12 w-auto object-contain group-hover:scale-105 transition-all duration-300"
            />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`
  text-xl nav-link rounded-md hover:bg-[#f6f8fa] dark:hover:bg-[#21262d] hover:text-black
  ${isScrolled ? "text-black" : ""}

  ${
                // highlight active non-root pages
                pathname.startsWith(item.href) && item.href !== "/"
                  ? "bg-[#0969da] text-white hover:bg-[#0969da]/90"
                  : pathname === "/" && item.href === "/"
                    ? "bg-[#0969da] text-white hover:bg-[#0969da]/90"
                    : ""
                }

  ${
                // FORCE BLACK TEXT for ALL /services/* subpages
                pathname.startsWith("/services/") ||
                  pathname === "/contact" ||
                  pathname === "/terms-of-service" ||
                  pathname === "/privacy-policy"
                  ? "text-black"
                  : ""
                }
`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-3">

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* scale wrapper makes the toggle smaller on small screens */}
          <div className="transform scale-90 md:scale-100">
            <SimpleThemeToggle />
          </div>

          {/* responsive button sizing so it matches logo/toggle visually */}
          <button
            onClick={() => router.push("/contact")}
            className="btn-primary text-sm md:text-base px-2 md:px-5 py-1 md:py-3 whitespace-nowrap"
          >
            {t('common:navigation.freeConsultations')}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-[#7c8a9b] dark:text-[#f0f6fc] hover:bg-[#6a9fcaff] dark:hover:bg-[#21262d]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke={
                pathname.startsWith("/services/") ||
                  pathname === "/contact" ||
                  pathname === "/terms-of-service" ||
                  pathname === "/privacy-policy"
                  ? "#000000" // forced black for exceptions
                  : isScrolled
                    ? "#000000" // scrolled
                    : "#ffffff" // default
              }
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#0d1117]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-md ${pathname === item.href
                  ? "bg-[#0969da] text-white"
                  : "text-[#24292f] dark:text-[#f0f6fc] hover:bg-[#f6f8fa] dark:hover:bg-[#21262d] hover:text-black"
                  }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
