import Image from 'next/image'
import Link from 'next/link'

export default function QaTesting() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6">
            QA & Testing
          </h1>
          <div className="w-24 h-1 bg-[#0969da] mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <Image
              src="/assets/images/people-analyzing.png"
              alt="QA & Testing"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
              <span className="text-[#0969da] font-semibold">Quality assurance</span> & Testing ensure that software applications are reliable, secure, and perform optimally before release. Using a blend of manual and automated testing techniques, QA teams detect bugs, performance bottlenecks, and usability issues to deliver a seamless, error-free user experience. A robust QA process enhances product quality while reducing time-to-market and long-term costs.
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
