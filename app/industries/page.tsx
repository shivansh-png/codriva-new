'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import Image from 'next/image'
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const Industries = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const heroRef = useRef<HTMLDivElement>(null)
    const focusedRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const ctx = gsap.context(() => {
                // Hero section animation
                gsap.fromTo(heroRef.current, {
                    opacity: 0,
                    y: 50
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                })

                // Focused expertise animation
                gsap.fromTo('.focus-image', {
                    opacity: 0,
                    scale: 0.8
                }, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: 'back.out(1.7)',
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: focusedRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                })

            }, sectionRef)

            return () => ctx.revert()
        }
    }, [])

    const industries = [
        { name: 'Retail & E-Commerce', href: '/industries/retail', img: '/assets/images/retail-ecom.png' },
        { name: 'Telecom', href: '/industries/telecom', img: '/assets/images/telecom-pic.png' },
        { name: 'FinTech & Banking', href: '/industries/fintech', img: '/assets/images/fintech-pic.png' },
        { name: 'Logistics & Supply Chain', href: '/industries/logistics', img: '/assets/images/logistics-pic.png' },
        { name: 'Real Estate and PropTech', href: '/industries/realestate', img: '/assets/images/real-estate-pic.png' },
        { name: 'On Demand Platforms', href: '/industries/ondemand', img: '/assets/images/ondemand-pic.png' },
        { name: 'Events & Ticketing', href: '/industries/events', img: '/assets/images/events-pic.png' },
        { name: 'Media & news', href: '/industries/media', img: '/assets/images/media-pic.png' },
        { name: 'EdTech', href: '/industries/edtech', img: '/assets/images/edtech-pic.png' },
        { name: 'Travel & Hospitality', href: '/industries/travel', img: '/assets/images/travel-pic.png' },
        { name: 'Restaurant & Cloud kitchen', href: '/industries/restaurant', img: '/assets/images/restaurant-pic.png' },
        { name: 'Healthcare & life Science', href: '/industries/healthcare', img: '/assets/images/healthcare-pic.png' },
    ]

    return (
        <section id="industries" ref={sectionRef} className="relative">
            {/* Hero Section */}
            <div ref={heroRef} className="relative h-screen flex items-end justify-center pb-32 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/images/supervisor.png"
                        alt="Industries"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-10 text-center text-white px-4 pb-20">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors mb-8"
                    >
                        Let's Talk <i className="fas fa-arrow-right"></i>
                    </Link>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                        Transforming Industries with Digital Solutions
                    </p>
                </div>
            </div>

            {/* Industries focused expertise */}
            <div ref={focusedRef} className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container-max">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Industries Focused Expertise
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry, index) => (
                            <div key={index} className="focus-image group">
                                <Link href={industry.href} className="block relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                    <Image
                                        src={industry.img}
                                        alt={industry.name}
                                        width={400}
                                        height={300}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute bottom-4 left-4 right-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                        <h3 className="text-white text-lg font-bold bg-gradient-to-r from-black/70 to-transparent px-3 py-1 rounded-md">{industry.name}</h3>
                                    </div>
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="text-center text-white">
                                            <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
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
    )
}

export default Industries
