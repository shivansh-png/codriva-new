'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import Image from 'next/image'
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const About = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const heroRef = useRef<HTMLDivElement>(null)
    const guidingRef = useRef<HTMLDivElement>(null)
    const companyRef = useRef<HTMLDivElement>(null)
    const growthRef = useRef<HTMLDivElement>(null)
    const valuesRef = useRef<HTMLDivElement>(null)

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

                // Guiding principles animation
                gsap.fromTo(guidingRef.current, {
                    opacity: 0,
                    x: -50
                }, {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: guidingRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                })

                // Company breakdown animation
                gsap.fromTo('.company-part', {
                    opacity: 0,
                    scale: 0.8
                }, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: 'back.out(1.7)',
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: companyRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                })

                // Growth section animation
                gsap.fromTo(growthRef.current, {
                    opacity: 0,
                    y: 50
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: growthRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                })

                // Values section animation
                gsap.fromTo('.value-item', {
                    opacity: 0,
                    y: 30
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: valuesRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                })

            }, sectionRef)

            return () => ctx.revert()
        }
    }, [])

    return (
        <section id="about" ref={sectionRef} className="relative">
            {/* Hero Section */}
            <div ref={heroRef} className="relative h-screen flex items-end justify-center pb-32 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/images/unsplash_60.png"
                        alt="Fintech background"
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
                        Get to know us a little better and see what we're all about
                    </p>
                </div>
                {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <Image
                        src="/assets/images/two arrow.png"
                        alt="Arrow"
                        width={50}
                        height={50}
                        className="animate-bounce"
                    />
                </div> */}
            </div>

            {/* Guiding Principles */}
            <div ref={guidingRef} className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container-max">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                                Our Guiding<br />
                                <span className="text-blue-600">Principles</span>
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                At Codriva, our guiding principles shape every decision and drive our commitment to excellence. We believe
                                in innovation, integrity, and collaboration as the foundation for building lasting partnerships and
                                delivering impactful solutions. Our customer-centric approach ensures that we always prioritize your needs,
                                while our dedication to quality and continuous improvement empowers us to stay ahead in a rapidly evolving
                                digital landscape. These principles inspire our team to create technology that not only meets but exceeds
                                expectations, fostering trust and long-term success.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                            >
                                Let's Talk <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                        <div className="relative">
                            <Image
                                src="/assets/images/group-people-working-team.png"
                                alt="Guiding principles"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Company Name Breakdown */}
            <div ref={companyRef} className="py-20" style={{color: "#ffffff", fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"}}>
                <div className="container-max text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">
                        We are shaping the company of tomorrow
                    </h2>

                    <div className="flex justify-center mb-8">
                        <Image
                            src="/images/codriva-logo.svg"
                            alt="Codriva Logo"
                            width={200}
                            height={60}
                        />
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                        <div className="company-part text-center">
                            <h3 className="text-3xl font-bold text-blue-600 mb-2">Cod</h3>
                            <p className="text-gray-600 dark:text-gray-300">An evident connection to coding, software development & technology.</p>
                        </div>
                        <div className="company-part text-2xl font-bold text-gray-400">+</div>
                        <div className="company-part text-center">
                            <h3 className="text-3xl font-bold text-blue-600 mb-2">riva</h3>
                            <p className="text-gray-600 dark:text-gray-300">A smooth flow (like a river) — representing innovation, delivery & agility.</p>
                        </div>
                    </div>

                    <div className="mb-12">
                        <p className="text-xl text-gray-700 dark:text-gray-200 mb-2">
                            "Where code meets innovation" &<br />
                            <span className="text-blue-600">"Flow of smart solutions through code"</span>
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/services/all"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            View all Services
                        </Link>
                        <Link
                            href="/portfolio"
                            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            View all Industries
                        </Link>
                    </div>

                    <p className="text-gray-500 dark:text-gray-400 mt-8">
                        Implying "we help you arrive at success through code."
                    </p>
                </div>
            </div>

            {/* Growth Section */}
            <div ref={growthRef} className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container-max">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                                Our Growth
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                At Codriva, growth is more than just numbers — it's a reflection of our unwavering commitment to innovation,
                                quality, and client success. Since our inception, we have consistently expanded our capabilities, embraced
                                emerging technologies, and forged strong partnerships to deliver exceptional digital solutions. Our growth
                                story is fueled by a passionate team, forward-thinking strategies, and a customer-first mindset that drives us
                                to exceed expectations. As we evolve, we remain dedicated to empowering businesses worldwide and shaping the
                                future of technology.
                            </p>
                        </div>
                        <div className="relative">
                            <Image
                                src="/assets/images/worldmap.png"
                                alt="Growth chart illustration"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div ref={valuesRef} className="py-20" style={{color: "#ffffff", fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"}}>
                <div className="container-max text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        The Value We Stand For
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                        Our core values lie at the heart of everything we do and define who we are.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="value-item">
                            <Image
                                src="/assets/images/Group 46.png"
                                alt="Quality value"
                                width={200}
                                height={200}
                                className="mx-auto"
                            />
                        </div>
                        <div className="value-item">
                            <Image
                                src="/assets/images/Group 47.png"
                                alt="Transparency value"
                                width={200}
                                height={200}
                                className="mx-auto"
                            />
                        </div>
                        <div className="value-item">
                            <Image
                                src="/assets/images/Group 48.png"
                                alt="Collaboration value"
                                width={200}
                                height={200}
                                className="mx-auto"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                        <div className="value-item">
                            <Image
                                src="/assets/images/Group 49.png"
                                alt="Integrity value"
                                width={200}
                                height={200}
                                className="mx-auto"
                            />
                        </div>
                        <div className="value-item">
                            <Image
                                src="/assets/images/Group 50.png"
                                alt="Ownership value"
                                width={200}
                                height={200}
                                className="mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
