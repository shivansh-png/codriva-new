'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)
    const ctaRef = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const ctx = gsap.context(() => {
                // Set initial states
                gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
                    opacity: 0,
                    y: 50,
                    scale: 0.8
                })

                // Create enhanced timeline
                const tl = gsap.timeline()

                // Animate title with dramatic effect
                tl.to(titleRef.current, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: 'back.out(1.7)'
                })

                    // Animate subtitle with stagger effect
                    .to(subtitleRef.current, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: 'power3.out'
                    }, '-=0.6')

                    // Animate CTA buttons with bounce
                    .to(ctaRef.current, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: 'bounce.out'
                    }, '-=0.4')

                // Add continuous floating animation to floating elements
                gsap.to('.floating-element', {
                    y: -20,
                    rotation: 5,
                    duration: 3,
                    ease: 'sine.inOut',
                    yoyo: true,
                    repeat: -1,
                    stagger: {
                        amount: 0.5,
                        from: "random"
                    }
                })

                // Slow down the video playback speed
                if (videoRef.current) {
                    videoRef.current.playbackRate = 0.5; // 50% of normal speed for a subtle slow effect
                }

                // Add text reveal animation on scroll
                gsap.utils.toArray('.hero-text').forEach((element: any) => {
                    gsap.fromTo(element, {
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
                            trigger: element,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse'
                        }
                    })
                })

            }, heroRef)

            return () => ctx.revert()
        }
    }, [])

    return (
        <section
            id="home"
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Video */}
            <div className="absolute inset-0">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/videos/Landing_Page2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Overlay Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Floating Elements */}
            <div className="floating-element absolute top-20 left-20 w-32 h-32 bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-3xl"></div>
            <div className="floating-element absolute bottom-20 right-20 w-40 h-40 bg-indigo-400/20 dark:bg-indigo-500/30 rounded-full blur-3xl"></div>
            <div className="floating-element absolute top-1/2 left-1/4 w-24 h-24 bg-blue-300/20 dark:bg-blue-400/30 rounded-full blur-2xl"></div>

            <div className="container-max relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <h1
                        ref={titleRef}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-display"
                    >
                        Transform your business with{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200">
                            digital innovation
                        </span>
                    </h1>

                    <p
                        ref={subtitleRef}
                        className="hero-text text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        We deliver exceptional software solutions, digital transformation services,
                        and technology consulting to help your business scale and succeed.
                    </p>

                    <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="btn-primary text-lg px-8 py-3 magnetic"
                        >
                            Start your project
                        </Link>
                        <Link
                            href="/portfolio"
                            className="btn-outline text-lg px-8 py-3 magnetic"
                        >
                            View our work
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="animate-bounce">
                    <svg className="w-6 h-6 text-[#656d76] dark:text-[#8b949e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default Hero