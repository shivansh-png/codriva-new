import Image from 'next/image'
import Link from 'next/link'

export default function ProductEngineering() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6">
            Product Engineering
          </h1>
          <div className="w-24 h-1 bg-[#0969da] mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
              <span className="text-[#0969da] font-semibold">Product engineering</span> is the comprehensive process of designing, developing, testing, and launching a product by applying engineering principles throughout its lifecycle. It begins with understanding user needs and defining technical specifications, followed by prototyping, rigorous quality testing, and market release. The primary goal is to deliver a high-quality, cost-effective product that fulfills both user expectations and business objectives. Applicable to software and hardware, product engineering encompasses all stages—from design and development to deployment and ongoing maintenance.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/assets/images/look-this-group.png"
              alt="Product engineering"
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
