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

const Telecom = () => {
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
            title: 'Network Management Systems',
            image: '/assets/images/unsplash_30.png',
            points: [
                'Real-time network monitoring and performance tracking',
                'Automated fault detection and resolution',
                'Capacity planning and resource optimization'
            ]
        },
        {
            title: 'Customer Experience Platforms',
            image: '/assets/images/unsplash_40.png',
            points: [
                'Unified customer service and support portals',
                'Self-service billing and account management',
                'Personalized service recommendations and offers'
            ]
        },
        {
            title: 'IoT Connectivity Solutions',
            image: '/assets/images/telecom-pic.png',
            points: [
                'Device management and connectivity platforms',
                'IoT data analytics and insights',
                'Security and compliance for connected devices'
            ]
        },
        {
            title: 'Telecom Analytics & BI',
            image: '/assets/images/services2.png',
            points: [
                'Network performance and usage analytics',
                'Customer behavior and churn prediction',
                'Revenue optimization and market insights'
            ]
        }
    ]

    return (
        <section id="telecom" ref={sectionRef} className="relative">
            {/* Hero Section */}
            <div ref={heroRef} className="relative h-screen flex items-end justify-center pb-32 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/images/unsplash_35.png"
                        alt="Telecom"
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
                        Connecting the World with Advanced Technology
                    </p>
                </div>
            </div>

            {/* Innovate section */}
            <div ref={innovateRef} className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container-max">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Enabling Seamless Communication and Connectivity
                        </h2>
                    </div>
                    <div className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
                        <p>The Telecom industry is the backbone of modern connectivity, enabling communication, data transfer, and IoT ecosystems worldwide. At Codriva, we develop sophisticated telecom software solutions that enhance network performance, improve customer experiences, and drive digital transformation in the telecommunications sector.</p>
                        <p>Our expertise includes network management systems, customer experience platforms, IoT connectivity solutions, and advanced analytics. We leverage AI, machine learning, and big data analytics to optimize network operations, predict maintenance needs, and personalize customer services.</p>
                        <p>Codriva's telecom solutions support 5G networks, IoT device management, cloud communications, and unified customer platforms. Our platforms ensure high availability, security, and scalability to meet the demands of modern telecommunications infrastructure.</p>
                        <p>With a focus on innovation and reliability, Codriva helps telecom operators modernize their infrastructure, enhance service quality, and create new revenue streams in an increasingly competitive and technology-driven industry.</p>
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

export default Telecom
