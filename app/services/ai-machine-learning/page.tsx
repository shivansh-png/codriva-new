import Link from 'next/link'

export const metadata = {
  title: 'AI & Machine Learning | Codriva',
  description: 'Smart automation and predictive systems powered by AI and ML.',
}

export default function AIMLPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 container-max">
      <div className="max-w-4xl mx-auto">
        <Link href="/services" className="inline-flex items-center text-[#24292f] dark:text-[#f0f6fc] hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 mb-8">
          <span className="mr-2">←</span> Back to Services
        </Link>

        <h1 className="text-4xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6">AI & Machine Learning</h1>

        <p className="text-lg text-[#656d76] dark:text-[#8b949e] mb-8 leading-relaxed">
          Harness the power of machine learning to automate workflows, predict trends, and drive smarter business decisions.
        </p>

        <ul className="space-y-3 text-[#656d76] dark:text-[#8b949e] list-disc pl-6">
          <li>Predictive Analytics & Forecasting</li>
          <li>Natural Language Processing (NLP)</li>
          <li>Computer Vision</li>
          <li>Intelligent Automation</li>
        </ul>

        <div className="mt-12">
          <Link href="/contact" className="btn-primary px-8 py-3 inline-block">Explore AI Solutions</Link>
        </div>
      </div>
    </section>
  )
}
