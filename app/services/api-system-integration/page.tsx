import Image from 'next/image'
import Link from 'next/link'

export default function ApiSystemIntegration() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6">
            API & System Integration
          </h1>
          <div className="w-24 h-1 bg-[#0969da] mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
              <span className="text-[#0969da] font-semibold">API system integration</span> involves connecting diverse software systems and applications through Application Programming Interfaces (APIs) to enable seamless communication and data sharing. This integration allows disparate systems—such as payment gateways, customer databases, or third-party services—to function together as a unified platform. By automating workflows and enabling real-time data exchange, API integration reduces manual effort, enhances operational efficiency, and delivers a cohesive user experience across multiple platforms.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/assets/images/api-pic.png"
              alt="API & System Integration"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}
