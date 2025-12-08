'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Retail() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const innovateRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          heroRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        gsap.fromTo(
          innovateRef.current,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: innovateRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        gsap.fromTo(
          '.solution-item',
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.2,
            scrollTrigger: {
              trigger: solutionsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  const solutions = [
    {
      title: 'E-commerce Website & App Development',
      image: '/assets/images/retail-ecom.png',
      points: [
        'Custom e-commerce portals (B2B / B2C)',
        'Shopify, WooCommerce, Magento, OpenCart development',
        'Mobile app development (Android/iOS) for shopping',
      ],
    },
    {
      title: 'POS (Point of Sale) System Integration',
      image: '/assets/images/unsplash_2.png',
      points: [
        'Cloud-based POS system for retail stores',
        'Multi-store & multi-user support',
        'Inventory sync with e-commerce platform',
      ],
    },
    {
      title: 'Payment Gateway & Wallet Integration',
      image: '/assets/images/unsplash_4.png',
      points: [
        'Razorpay, Paytm, Stripe, PayPal, etc.',
        'Support for UPI, credit/debit card, BNPL',
      ],
    },
  ];

  return (
    <section id="retail" ref={sectionRef} className="relative">

      {/* HERO SECTION */}
      <div ref={heroRef} className="relative h-screen flex items-end justify-center pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/woman-paying-clothes-store (1).png"
            alt="Retail & E-Commerce"
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
            Smart Software Solutions for Modern Retail
          </p>
        </div>
      </div>

      {/* INNOVATE SECTION */}
      <div ref={innovateRef} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-max text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Innovate Your Retail Journey with Us
          </h2>
        </div>

        <div className="container-max max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
          <p>In today's fast-paced digital marketplace, Retail and E-Commerce businesses face unique challenges...</p>
          <p>We empower retailers with data-driven insights, mobile-first solutions, omnichannel systems...</p>
          <p>Whether launching a new store or modernizing, Codriva helps you stay competitive...</p>
        </div>
      </div>

      {/* SOLUTIONS SECTION */}
      <div ref={solutionsRef} className="py-20 bg-white dark:bg-gray-800">
        <div className="container-max text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Solutions We Serve
          </h2>
        </div>

        <div className="container-max space-y-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`solution-item flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
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

      {/* CTA */}
      <div className="py-20 bg-blue-600 text-white text-center">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Retail Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you innovate and grow.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get a free consultation <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>

    </section>
  );
}
