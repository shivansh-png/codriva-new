'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const allServices = [
  {
    title: 'Custom software development',
    slug: 'custom-software-development',
    description: 'Custom software development is the art of crafting tailored digital solutions that align precisely with a business\'s unique goals, workflows, and challenges. Unlike generic, off-the-shelf software designed for the masses, custom applications are purpose-built to address specific needs, unlock operational efficiency, and deliver a seamless user experience.',
    image: '/assets/images/custom-soft.png',
  },
  {
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    description: 'User interface (UI) and user experience (UX) design are at the heart of impactful digital products. At Codriva, we create intuitive, responsive, and aesthetically engaging interfaces that enhance usability and ensure seamless user journeys across all platforms and devices.',
    image: '/assets/images/ui-ux-design.png',
  },
  {
    title: 'Mobile app development',
    slug: 'mobile-app-development',
    description: 'Mobile app development is the creation of seamless, high-performing applications designed for smartphones, tablets, and other mobile devices. At Codriva, we specialize in building intuitive, feature-rich mobile apps that help businesses connect with users on the go — across Android, iOS, or both through cross-platform solutions.',
    image: '/assets/images/representations.png',
  },
  {
    title: 'Product engineering',
    slug: 'product-engineering',
    description: 'Product engineering is the comprehensive process of designing, developing, testing, and launching a product by applying engineering principles throughout its lifecycle. It begins with understanding user needs and defining technical specifications, followed by prototyping, rigorous quality testing, and market release.',
    image: '/assets/images/look-this-group.png',
  },
  {
    title: 'Cloud & devOps',
    slug: 'cloud-devops',
    description: 'Cloud devOps combines cloud computing with DevOps practices to streamline the development, deployment, and management of applications in cloud environments. It involves automating infrastructure setup, continuous integration and delivery (CI/CD), monitoring, and scaling using platforms like AWS, Azure, and Google Cloud.',
    image: '/assets/images/saas-concept.png',
  },
  {
    title: 'API & system integration',
    slug: 'api-system-integration',
    description: 'API system integration involves connecting diverse software systems and applications through Application Programming Interfaces (APIs) to enable seamless communication and data sharing. This integration allows disparate systems—such as payment gateways, customer databases, or third-party services—to function together as a unified platform.',
    image: '/assets/images/api-pic.png',
  },
  {
    title: 'Data & analytics',
    slug: 'data-analytics',
    description: 'Data analytics is the process of gathering, organizing, and analyzing raw data to uncover valuable insights, patterns, and trends that drive informed decision-making. Using advanced tools and techniques, it transforms complex data into clear, actionable information.',
    image: '/assets/images/technology-hologram.png',
  },
  {
    title: 'AI & machine learning',
    slug: 'ai-machine-learning',
    description: 'Artificial intelligence (AI) is a branch of computer science focused on enabling machines to simulate human intelligence—ranging from language comprehension to autonomous decision-making. A key subset, Machine Learning (ML), empowers systems to learn from data and improve over time without explicit programming.',
    image: '/assets/images/ai-chip-artificial.png',
  },
  {
    title: 'Big data solution',
    slug: 'big-data-solution',
    description: 'Big data Solutions enable businesses to process and analyze vast amounts of structured and unstructured data to extract valuable insights. Utilizing advanced tools and technologies, these solutions support smarter decision-making, real-time analytics, and enhanced operational efficiency.',
    image: '/assets/images/data-online.png',
  },
  {
    title: 'IT consulting',
    slug: 'it-consulting',
    description: 'IT consulting helps businesses align their technology strategies with core business objectives. From selecting the right software and infrastructure to enhancing cybersecurity and optimizing operations, IT consultants provide expert guidance for effective and efficient technology use.',
    image: '/assets/images/modern-equipped.png',
  },
  {
    title: 'QA & testing',
    slug: 'qa-testing',
    description: 'Quality assurance & Testing ensure that software applications are reliable, secure, and perform optimally before release. Using a blend of manual and automated testing techniques, QA teams detect bugs, performance bottlenecks, and usability issues to deliver a seamless, error-free user experience.',
    image: '/assets/images/people-analyzing.png',
  },
  {
    title: 'Support & maintenance',
    slug: 'support-maintenance',
    description: 'Support & maintenance services ensure your software remains reliable and efficient long after deployment. This includes regular updates, bug fixes, performance monitoring, and responsive technical support to promptly resolve any issues.',
    image: '/assets/images/technology-technical.png',
  },
]

const MainServices = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.main-service-card',
          { opacity: 0, y: 60, scale: 0.8, rotationY: 20 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: { amount: 0.8, from: 'start' },
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )

        gsap.utils.toArray('.main-service-card').forEach((card: any) => {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, { scale: 1.05, y: -15, rotationY: 5, duration: 0.4, ease: 'power2.out' })
          })
          card.addEventListener('mouseleave', () => {
            gsap.to(card, { scale: 1, y: 0, rotationY: 0, duration: 0.4, ease: 'power2.out' })
          })
        })
      }, sectionRef)

      return () => ctx.revert()
    }
  }, [])

  return (
    <div ref={sectionRef} className="mt-16">
      <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allServices.map((service, index) => (
          <div key={index} className="main-service-card card hover-card p-8">
            <div className="mb-4 overflow-hidden rounded-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-4">
              {service.title}
            </h3>
            <p className="text-[#656d76] dark:text-[#8b949e] leading-relaxed mb-6">
              {service.description}
            </p>
            <Link href={`/services/${service.slug}`} className="btn-secondary">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainServices
