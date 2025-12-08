'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import Image from 'next/image'
import Advantages from '@/components/Advantages'
import CTA from '@/components/CTA'
import News from '@/components/News'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const RealEstate = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const heroRef = useRef<HTMLDivElement>(null)
    const innovateRef = useRef<HTMLDivElement>(null)
    const solutionsRef = useRef<HTMLDivElement>(null)

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

                // Innovate section animation
                gsap.fromTo(innovateRef.current, {
                    opacity: 0,
                    x: -50
                }, {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: innovateRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                })

                // Solutions section animation
                gsap.fromTo('.solution-item', {
                    opacity: 0,
                    y: 30
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: solutionsRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                })

            }, sectionRef)

            return () => ctx.revert()
        }
    }, [])

    const solutions = [
        {
            title: 'Property Management Systems',
            image: '/assets/images/unsplash_58.png',
            points: [
                'Comprehensive property listing and management',
                'Tenant screening and lease management',
                'Maintenance request and work order tracking'
            ]
        },
        {
            title: 'Real Estate Marketplaces',
            image: '/assets/images/unsplash_56.png',
            points: [
                'Advanced property search and filtering',
                'Virtual tours and 3D property visualization',
                'Real-time market data and pricing analytics'
            ]
        },
        {
            title: 'PropTech Analytics Platforms',
            image: '/assets/images/unsplash_57.png',
            points: [
                'Market trend analysis and investment insights',
                'Portfolio performance tracking and reporting',
                'Predictive analytics for property values'
            ]
        },
        {
            title: 'Smart Building Management',
            image: '/assets/images/real-estate-pic.png',
            points: [
                'IoT integration for building automation',
                'Energy management and sustainability tracking',
                'Occupant experience and facility management'
            ]
        }
    ]

    return (
        <section id="realestate" ref={sectionRef} className="relative">
            {/* Hero Section */}
            <div ref={heroRef} className="relative h-screen flex items-end justify-center pb-32 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/images/unsplash_55.png"
                        alt="Real Estate and PropTech"
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
                    <div className="retail-img1 rectangle-img"></div>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                        Transforming Real Estate with Technology
                    </p>
                </div>
            </div>

            {/* Innovate section */}
            <div ref={innovateRef} className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container-max">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Revolutionizing Property Management and Transactions
                        </h2>
                    </div>
                    <div className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
                        <p>The Real Estate and PropTech industry is embracing digital transformation to streamline transactions, enhance property management, and improve tenant experiences. At Codriva, we develop innovative real estate technology solutions that connect buyers, sellers, landlords, and tenants in efficient, transparent marketplaces.</p>
                        <p>Our expertise includes property management systems, real estate marketplaces, PropTech analytics, and smart building solutions. We leverage AI, IoT, and advanced data analytics to create platforms that optimize property values, reduce operational costs, and enhance user experiences.</p>
                        <p>Codriva's real estate solutions feature virtual tours, predictive pricing models, automated valuation systems, and comprehensive property analytics. Our platforms support the entire real estate lifecycle from property listing and marketing to transaction processing and ongoing management.</p>
                        <p>With a focus on innovation and user-centric design, Codriva helps real estate professionals, property managers, and investors leverage technology to make informed decisions, maximize returns, and deliver exceptional experiences in a competitive market.</p>
                    </div>
                </div>
            </div>

            {/* Solutions section */}
            <div ref={solutionsRef} className="py-20 bg-white dark:bg-gray-800">
                <div className="container-max">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Solutions We Serve
                        </h2>
                    </div>
                    <div className="space-y-16">
                        {solutions.map((solution, index) => (
                            <div key={index} className={`solution-item flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                                <div className="flex-1">
                                    <Image
                                        src={solution.image}
                                        alt={solution.title}
                                        width={600}
                                        height={400}
                                        className="rounded-lg shadow-lg"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                        {solution.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {solution.points.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <i className="fas fa-check text-blue-600 mt-1"></i>
                                                <span className="text-gray-600 dark:text-gray-300">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Advantages />
            <CTA />
             
        </section>
    )
}

export default RealEstate
