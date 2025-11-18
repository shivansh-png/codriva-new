'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const projects = [
    {
        id: 1,
        title: 'Retail & E-Commerce',
        description: 'Custom e-commerce platforms with advanced inventory management, payment gateways, and omnichannel retail solutions.',
        image: '/assets/images/retail-ecom.png',
        tags: ['E-commerce', 'POS Systems', 'Payment Integration'],
        category: 'retail',
        link: '/industries/retail'
    },
    {
        id: 2,
        title: 'Telecom',
        description: 'Comprehensive telecom software solutions including billing systems, network management, and customer portals.',
        image: '/assets/images/telecom-pic.png',
        tags: ['Billing Systems', 'Network Management', 'CRM'],
        category: 'telecom',
        link: '/industries/telecom'
    },
    {
        id: 3,
        title: 'FinTech & Banking',
        description: 'Secure financial technology solutions with advanced security, compliance, and real-time transaction processing.',
        image: '/assets/images/fintech-pic.png',
        tags: ['Banking Apps', 'Payment Processing', 'Security'],
        category: 'fintech',
        link: '/industries/fintech'
    },
    {
        id: 4,
        title: 'Logistics & Supply Chain',
        description: 'End-to-end logistics solutions with real-time tracking, warehouse management, and supply chain optimization.',
        image: '/assets/images/logistics-pic.png',
        tags: ['Supply Chain', 'Warehouse Management', 'Tracking'],
        category: 'logistics',
        link: '/industries/logistics'
    },
    {
        id: 5,
        title: 'Real Estate and PropTech',
        description: 'Property technology solutions including property management systems, virtual tours, and real estate marketplaces.',
        image: '/assets/images/real-estate-pic.png',
        tags: ['Property Management', 'Virtual Tours', 'Marketplaces'],
        category: 'realestate',
        link: '/industries/realestate'
    },
    {
        id: 6,
        title: 'On Demand Platforms',
        description: 'Scalable on-demand service platforms for ride-sharing, delivery, and service-based businesses.',
        image: '/assets/images/ondemand-pic.png',
        tags: ['Ride-Sharing', 'Delivery Apps', 'Service Platforms'],
        category: 'ondemand',
        link: '/industries/ondemand'
    }
]

const categories = [
    { id: 'all', name: 'All Industries' },
    { id: 'retail', name: 'Retail & E-Commerce' },
    { id: 'telecom', name: 'Telecom' },
    { id: 'fintech', name: 'FinTech & Banking' },
    { id: 'logistics', name: 'Logistics & Supply Chain' },
    { id: 'realestate', name: 'Real Estate & PropTech' },
    { id: 'ondemand', name: 'On Demand Platforms' }
]

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('all')
    const [filteredProjects, setFilteredProjects] = useState(projects)
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const projectsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (activeCategory === 'all') {
            setFilteredProjects(projects)
        } else {
            setFilteredProjects(projects.filter(project => project.category === activeCategory))
        }
    }, [activeCategory])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const ctx = gsap.context(() => {
                // Enhanced title animation with dramatic effect
                gsap.fromTo(titleRef.current, {
                    opacity: 0,
                    y: 80,
                    scale: 0.8,
                    rotationX: 45
                }, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotationX: 0,
                    duration: 1.2,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                })

                // Enhanced project cards with 3D effect and stagger
                gsap.fromTo('.project-card', {
                    opacity: 0,
                    y: 60,
                    scale: 0.8,
                    rotationY: 20
                }, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotationY: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: {
                        amount: 0.6,
                        from: "start"
                    },
                    scrollTrigger: {
                        trigger: projectsRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                })

                // Add hover animations to project cards
                gsap.utils.toArray('.project-card').forEach((card: any) => {
                    card.addEventListener('mouseenter', () => {
                        gsap.to(card, {
                            scale: 1.03,
                            y: -10,
                            rotationY: 5,
                            duration: 0.3,
                            ease: 'power2.out'
                        })
                    })

                    card.addEventListener('mouseleave', () => {
                        gsap.to(card, {
                            scale: 1,
                            y: 0,
                            rotationY: 0,
                            duration: 0.3,
                            ease: 'power2.out'
                        })
                    })
                })

                // Text reveal animation
                gsap.utils.toArray('.portfolio-text').forEach((text: any) => {
                    gsap.fromTo(text, {
                        opacity: 0,
                        y: 30,
                        scale: 0.9
                    }, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: text,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse'
                        }
                    })
                })

            }, sectionRef)

            return () => ctx.revert()
        }
    }, [filteredProjects])

    return (
        <section id="portfolio" ref={sectionRef} className="section-padding relative overflow-hidden">
            {/* Blue Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/30"></div>

            {/* Background Image */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&auto=format&q=80")`
                }}></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-16 right-16 w-20 h-20 bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-16 left-16 w-28 h-28 bg-indigo-400/20 dark:bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 left-1/3 w-12 h-12 bg-blue-300/20 dark:bg-blue-400/30 rounded-full blur-xl animate-pulse"></div>
            <div className="container-max relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6 font-display">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600">Industries</span>
                    </h2>
                    <p className="portfolio-text text-xl text-[#656d76] dark:text-[#8b949e] max-w-3xl mx-auto mb-6">
                        Discover how we transform businesses across diverse industries with innovative digital solutions.
                    </p>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${activeCategory === category.id
                                    ? 'bg-[#0969da] text-white dark:bg-[#58a6ff] dark:text-[#0d1117]'
                                    : 'text-[#656d76] dark:text-[#8b949e] hover:bg-[#f6f8fa] dark:hover:bg-[#21262d]'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="project-card card hover-card overflow-hidden">
                            <div className="relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                                    <Link
                                        href={project.link}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium"
                                    >
                                        Know more →
                                    </Link>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-[#656d76] dark:text-[#8b949e] mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="badge badge-primary text-xs"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <div className="card p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-4">
                            Ready to Transform Your Industry?
                        </h3>
                        <p className="text-[#656d76] dark:text-[#8b949e] mb-6">
                            Discover how our industry-specific solutions can drive your business forward.
                            Let's discuss your unique challenges and opportunities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/industries"
                                className="btn-primary"
                            >
                                More Industries
                            </Link>
                            <Link
                                href="/contact"
                                className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors duration-200"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio