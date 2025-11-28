import Image from 'next/image'
import Link from 'next/link'

export default function CustomSoftwareDevelopment() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6">
            Custom Software Development
          </h1>
          <div className="w-24 h-1 bg-[#0969da] mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="relative">
            <Image
              src="/assets/images/custom-soft.png"
              alt="Custom software development"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
              <span className="text-[#0969da] font-semibold">Custom software development</span> is the art of crafting tailored digital solutions that align precisely with a business's unique goals, workflows, and challenges. Unlike generic, off-the-shelf software designed for the masses, custom applications are purpose-built to address specific needs, unlock operational efficiency, and deliver a seamless user experience.
            </p>
            <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
              At Codriva, we specialize in developing robust, scalable, and secure custom software that integrates effortlessly with your existing systems and grows with your organization. From core business applications to innovative digital products, we work closely with clients to design intuitive interfaces, optimize performance, and ensure every feature serves a strategic purpose.
            </p>
            <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
              Whether you're modernizing legacy systems or building from the ground up, our end-to-end approach ensures full control over functionality, architecture, and data — resulting in software that fits your business like a glove and drives long-term value.
            </p>
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
