import Image from 'next/image'
import Link from 'next/link'

export default function DataAnalytics() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6">
            Data & Analytics
          </h1>
          <div className="w-24 h-1 bg-[#0969da] mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <Image
              src="/assets/images/technology-hologram.png"
              alt="Data & Analytics"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
              <span className="text-[#0969da] font-semibold">Data analytics</span> is the process of gathering, organizing, and analyzing raw data to uncover valuable insights, patterns, and trends that drive informed decision-making. Using advanced tools and techniques, it transforms complex data into clear, actionable information. Businesses leverage data analytics to enhance performance, forecast outcomes, understand customer behavior, and solve challenges efficiently. This field encompasses various types, including descriptive, diagnostic, predictive, and prescriptive analytics.
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
