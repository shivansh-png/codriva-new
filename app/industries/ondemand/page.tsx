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

const OnDemand = () => {
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
            title: 'Ride-Sharing Platforms',
            image: '/assets/images/2149236739.jpg',
            points: [
                'Real-time ride matching and dispatch systems',
                'GPS tracking and route optimization',
                'Driver and passenger rating systems'
            ]
        },
        {
            title: 'Delivery Management Systems',
            image: '/assets/images/unsplash_36.png',
            points: [
                'Order tracking and delivery scheduling',
                'Multi-stop route optimization',
                'Real-time delivery status updates'
            ]
        },
        {
            title: 'Service Marketplace Platforms',
            image: '/assets/images/unsplash_37.png',
            points: [
                'Service provider onboarding and verification',
                'Dynamic pricing and availability management',
                'Customer service and dispute resolution'
            ]
        },
        {
            title: 'On-Demand Analytics',
            image: '/assets/images/industries1.png',
            points: [
                'Performance analytics and demand forecasting',
                'Revenue optimization and pricing strategies',
                'Customer behavior and retention insights'
            ]
        }
    ]

    return (
        <section id="ondemand" ref={sectionRef} className="relative">
            {/* Hero Section */}
            <div ref={heroRef} className="relative h-screen flex items-end justify-center pb-32 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/images/2150169844.jpg"
                        alt="On Demand Platforms"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-10 text-center text-white px-4 pb-20">
                    <div className="smallrectangle absolute top-20 right-20">
                        <Image
                            src="/assets/images/Group 60.png"
                            alt="containersm"
                            width={100}
                            height={100}
                        />
                    </div>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors mb-8"
                    >
                        Let's Talk <i className="fas fa-arrow-right"></i>
                    </Link>
                    <div className="retail-img1 rectangle-img"></div>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                        Powering the On-Demand Economy
                    </p>
                </div>
            </div>

            {/* Innovate section */}
            <div ref={innovateRef} className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container-max">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Connecting Consumers with Instant Services
                        </h2>
                    </div>
                    <div className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
                        <p>The On-Demand economy is transforming how consumers access goods and services, creating unprecedented opportunities for businesses. At Codriva, we develop robust on-demand platforms that connect service providers with customers in real-time, ensuring seamless experiences and operational efficiency.</p>
                        <p>Our expertise includes ride-sharing platforms, food delivery systems, home services marketplaces, and logistics solutions. We leverage advanced technologies like real-time GPS tracking, AI-powered matching algorithms, and secure payment processing to create reliable and scalable on-demand ecosystems.</p>
                        <p>Codriva's on-demand solutions feature dynamic pricing, real-time availability, and comprehensive analytics to optimize operations and maximize revenue. Our platforms support multi-sided marketplaces with sophisticated matching algorithms, rating systems, and dispute resolution mechanisms.</p>
                        <p>With a focus on user experience and operational excellence, Codriva helps on-demand businesses scale rapidly, maintain high service quality, and build trust in competitive markets where customer satisfaction is paramount.</p>
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

export default OnDemand
