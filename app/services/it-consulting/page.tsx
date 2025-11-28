import Image from 'next/image'
import Link from 'next/link'

export default function ItConsulting() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6">
            IT Consulting
          </h1>
          <div className="w-24 h-1 bg-[#0969da] mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
              <span className="text-[#0969da] font-semibold">IT consulting</span> helps businesses align their technology strategies with core business objectives. From selecting the right software and infrastructure to enhancing cybersecurity and optimizing operations, IT consultants provide expert guidance for effective and efficient technology use. Whether planning a digital transformation or seeking ongoing tech support, IT consulting delivers customized solutions that drive growth, innovation, and competitive advantage.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/assets/images/modern-equipped.png"
              alt="IT Consulting"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="btn-primary">
            Get a free consultation
          </Link>
        </div>
      </div>
    </section>
  )
}
