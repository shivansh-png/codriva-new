import Image from 'next/image'
import Link from 'next/link'

export default function CloudDevOps() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6">
            Cloud & DevOps
          </h1>
          <div className="w-24 h-1 bg-[#0969da] mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="relative">
            <Image
              src="/assets/images/saas-concept.png"
              alt="Cloud & DevOps"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
              <span className="text-[#0969da] font-semibold">Cloud DevOps</span> combines cloud computing with DevOps practices to streamline the development, deployment, and management of applications in cloud environments. It involves automating infrastructure setup, continuous integration and delivery (CI/CD), monitoring, and scaling using platforms like AWS, Azure, and Google Cloud. The goal is to accelerate software delivery, enhance reliability, and foster seamless collaboration between development and operations teams. By adopting Cloud DevOps, organizations can deploy updates faster, resolve issues promptly, and optimize resource management efficiently.
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
