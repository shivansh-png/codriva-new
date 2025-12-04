'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import Image from 'next/image'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const AboutUs = () => {
    const companyRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const ctx = gsap.context(() => {
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
            }, companyRef)

            return () => ctx.revert()
        }
    }, [])

    return (
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
                        href="/services"
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
    )
}

export default AboutUs
