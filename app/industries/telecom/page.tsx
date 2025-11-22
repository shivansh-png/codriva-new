'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}



export default function Telecom() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ctx = gsap.context(() => {

        gsap.fromTo(
          heroRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: heroRef.current, start: "top 80%" }
          }
        );

        gsap.fromTo(
          introRef.current,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: introRef.current, start: "top 80%" }
          }
        );

        gsap.fromTo(
          ".solution-item",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.25,
            ease: "power3.out",
            scrollTrigger: { trigger: solutionsRef.current, start: "top 80%" }
          }
        );

      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  const solutions = [
    {
      title: "Chatbots & AI Support Systems",
      image: "/assets/images/unsplash_31.png",
      text:
        "Automated customer service tools to handle FAQs, complaints, and account queries — reducing support load and improving response time."
    },
    {
      title: "Network Monitoring Dashboards",
      image: "/assets/images/unsplash_32.png",
      text:
        "Real-time dashboards to visualize network health, track outages, and generate performance analytics for telecom engineers."
    },
    {
      title: "Billing & Payment Systems",
      image: "/assets/images/unsplash_33.png",
      text:
        "Robust billing engines with usage-based charging, invoice generation, and secure payment integration."
    },
    {
      title: "CRM for Telecom Providers",
      image: "/assets/images/unsplash_34.png",
      text:
        "Custom CRM systems to manage customers, track usage, resolve issues, and improve retention with targeted communication."
    },
  ];

  return (
    <section ref={sectionRef} className="relative">

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="hero-section section-full-width relative"
      >
        <img
          src="/assets/images/unsplash_30.png"
          alt="telecom"
          className="bg-image"
        />

        <div className="smallrectangle tele">
          <img src="/assets/images/Group 111.png" alt="telecom badge" />
          <span className="telecom-text">Telecom</span>
        </div>

        <Link href="/contact" className="btn btn-mid-light-primary abtbtn btn-shadow">
          Let's Talk <i className="fas fa-arrow-right"></i>
        </Link>

        <div className="retail-img1 rectangle-img"></div>

        <p className="indtext1">
          Connecting the World, One Line of Code at a Time
        </p>
      </section>

      {/* INTRO SECTION */}
      <div ref={introRef} className="inosec container-max">
        <div className="ino-biglet">
          <h1>Powering the Pulse of Global Communication</h1>
        </div>

        <p>
          The telecommunications industry is the backbone of global connectivity,
          driving communication and data exchange across the world. At Codriva,
          we deliver advanced software solutions designed to meet the unique
          demands of telecom providers, enabling them to optimize network performance,
          manage complex infrastructure, and deliver superior customer experiences.
        </p>

        <p>
          Our expertise includes scalable platforms for billing and revenue management,
          CRM, and service assurance systems. We also support network automation,
          real-time monitoring, and analytics to improve operational efficiency
          and reduce downtime. With 5G, IoT, and cloud technologies, we help telecom
          companies stay ahead in a rapidly evolving market.
        </p>

        <p>
          Codriva empowers telecom providers to launch new services faster, enhance
          network security, and deliver personalized experiences that drive customer
          satisfaction and loyalty.
        </p>
      </div>

      {/* SOLUTIONS */}
      <div ref={solutionsRef} className="main-description container-max">
        <div className="descrip-heading">
          <span>Solutions We Serve</span>
        </div>

        {solutions.map((sol, i) => (
          <div
            key={i}
            className={`solution-item description-container rest ${
              i % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className={`sec1 ${i % 2 === 0 ? "image-left" : "image-right"}`}>
              <div className="desimg">
                <img src={sol.image} alt={sol.title} />
              </div>
            </div>

            <div className="sec3">
              <div className="desheading2">
                <span>{sol.title}</span>
              </div>
              <div className="lists">
                <p>{sol.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* OTHER GLOBAL SECTIONS (included by layout) */}
    </section>
  );
}
