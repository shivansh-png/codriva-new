import Image from 'next/image'
import Link from 'next/link'

export default function BigDataSolution() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6">
            Big Data Solution
          </h1>
          <div className="w-24 h-1 bg-[#0969da] mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="relative">
            <Image
              src="/assets/images/data-online.png"
              alt="Big Data Solution"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
              <span className="text-[#0969da] font-semibold">Big data</span> Solutions enable businesses to process and analyze vast amounts of structured and unstructured data to extract valuable insights. Utilizing advanced tools and technologies, these solutions support smarter decision-making, real-time analytics, and enhanced operational efficiency. From customer behavior analysis to predictive maintenance and market forecasting, big data empowers organizations to stay competitive in today's data-driven landscape.
            </p>
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
