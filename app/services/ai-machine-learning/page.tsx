import Image from 'next/image'
import Link from 'next/link'

export default function AiMachineLearning() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6">
            AI & Machine Learning
          </h1>
          <div className="w-24 h-1 bg-[#0969da] mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
              <span className="text-[#0969da] font-semibold">Artificial intelligence (AI)</span> is a branch of computer science focused on enabling machines to simulate human intelligence—ranging from language comprehension to autonomous decision-making. A key subset, Machine Learning (ML), empowers systems to learn from data and improve over time without explicit programming. Together, AI and ML are revolutionizing industries by automating processes, enhancing user experiences, and enabling smarter, data-driven decisions.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/assets/images/ai-chip-artificial.png"
              alt="AI & Machine Learning"
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
