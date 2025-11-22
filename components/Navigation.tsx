'use client'

import React, { useState, useEffect } from 'react'
import SimpleThemeToggle from './SimpleThemeToggle'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services/all' },
  { name: 'Industries', href: '/industries' },
  { name: 'Contact', href: '/contact' },
]

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname])

  // Only keep this for same-page scrolls (not routes)
  const scrollToSection = (id: string) => {
    if (!id.startsWith('#')) {
      router.push(id)
      setIsMenuOpen(false)
      return
    }
    const element = document.querySelector(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-200 ${isScrolled
          ? 'bg-white/80 dark:bg-[#0d1117]/80 backdrop-blur-md border-b border-[#d0d7de] dark:border-[#30363d]'
          : 'bg-transparent'
        }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => {
                if (pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                } else {
                  window.location.href = '/'
                }
              }}
              className="flex items-center space-x-3 group"
            >
              <img
                src="/images/codriva-logo.svg"
                alt="Codriva Logo"
                className="w-40 h-40 object-contain group-hover:scale-105 transition-all duration-300"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link rounded-md hover:bg-[#f6f8fa] dark:hover:bg-[#21262d] hover:text-black ${isScrolled ? 'text-black' : ''} ${pathname === item.href ? 'bg-[#0969da] text-white hover:bg-[#0969da]/90' : ''
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-3">
            <SimpleThemeToggle />
            <button onClick={() => router.push('/contact')} className="btn-primary">
              Get Started
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-[#24292f] dark:text-[#f0f6fc] hover:bg-[#f6f8fa] dark:hover:bg-[#21262d]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
                      ? 'bg-[#0969da] text-white'
                      : 'text-[#24292f] dark:text-[#f0f6fc] hover:bg-[#f6f8fa] dark:hover:bg-[#21262d] hover:text-black'
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
