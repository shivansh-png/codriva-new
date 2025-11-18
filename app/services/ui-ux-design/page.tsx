import Image from 'next/image'
import Link from 'next/link'

export default function UiUxDesign() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6">
            UI/UX Design
          </h1>
          <div className="w-24 h-1 bg-[#0969da] mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
              <span className="text-[#0969da] font-semibold">User interface (UI)</span> and user experience (UX) design are at the heart of impactful digital products. At Codriva, we create intuitive, responsive, and aesthetically engaging interfaces that enhance usability and ensure seamless user journeys across all platforms and devices.
            </p>
            <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
              In the context of support systems and business applications, effective UI design simplifies complex interactions — enabling users to report issues, request assistance, and track progress with ease. Our design approach balances visual appeal with functional clarity, using purposeful layouts, meaningful iconography, and interactive elements that guide users effortlessly through your software.
            </p>
            <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
              With a focus on accessibility, responsiveness, and user behavior, our UI/UX solutions don't just look good — they make every digital touchpoint more efficient, enjoyable, and aligned with your brand's values.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/assets/images/ui-ux-design.png"
              alt="UI/UX Design"
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
