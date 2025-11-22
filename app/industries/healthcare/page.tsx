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

const Healthcare = () => {
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
            title: 'Electronic Health Records (EHR)',
            image: '/assets/images/unsplash_9.png',
            points: [
                'Comprehensive patient data management systems',
                'HIPAA-compliant secure data storage',
                'Interoperable health information exchange'
            ]
        },
        {
            title: 'Telemedicine Platforms',
            image: '/assets/images/unsplash_10.png',
            points: [
                'Video consultation and remote monitoring',
                'Secure messaging and prescription management',
                'Integration with wearable health devices'
            ]
        },
        {
            title: 'Healthcare Analytics & AI',
            image: '/assets/images/unsplash_11.png',
            points: [
                'Predictive analytics for patient outcomes',
                'AI-powered diagnostic assistance tools',
                'Population health management dashboards'
            ]
        },
        {
            title: 'Medical Practice Management',
            image: '/assets/images/unsplash_12.png',
            points: [
                'Appointment scheduling and billing systems',
                'Patient portal and communication tools',
                'Regulatory compliance and reporting'
            ]
        }
    ]

    return (
        <section id="healthcare" ref={sectionRef} className="relative">
            {/* Hero Section */}
            <div ref={heroRef} className="relative h-screen flex items-end justify-center pb-32 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/images/unsplash_13.png"
                        alt="Healthcare & Life Science"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-10 text-center text-white px-4 pb-20">
                    <div className="smallrectangle absolute top-20 right-20">
                        <Image
                            src="/assets/images/Group 56.png"
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
                        Advancing Healthcare Through Technology
                    </p>
                </div>
            </div>

            {/* Innovate section */}
            <div ref={innovateRef} className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container-max">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Transforming Healthcare with Digital Innovation
                        </h2>
                    </div>
                    <div className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
                        <p>The Healthcare and Life Science industry is at the forefront of digital transformation, where technology can literally save lives. At Codriva, we develop sophisticated healthcare software solutions that prioritize patient safety, data security, and operational efficiency.</p>
                        <p>Our expertise includes electronic health records (EHR) systems, telemedicine platforms, medical imaging solutions, and clinical decision support tools. We ensure all our solutions comply with stringent healthcare regulations like HIPAA, GDPR, and other international standards.</p>
                        <p>Codriva's healthcare solutions leverage AI and machine learning to improve diagnostics, predict patient outcomes, and streamline administrative processes. Our platforms support everything from patient management and telemedicine to research data analysis and pharmaceutical development.</p>
                        <p>With a commitment to innovation and patient-centric design, Codriva helps healthcare providers, pharmaceutical companies, and research institutions deliver better care, accelerate medical discoveries, and improve health outcomes worldwide.</p>
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
            <News />
        </section>
    )
}

export default Healthcare
