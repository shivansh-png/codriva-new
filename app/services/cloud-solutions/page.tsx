import Link from 'next/link'

export const metadata = {
  title: 'Cloud Solutions | Codriva',
  description: 'Cloud infrastructure and DevOps solutions that scale with your business.',
}

export default function CloudSolutionsPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 container-max">
      <div className="max-w-4xl mx-auto">
        <Link href="/services" className="inline-flex items-center text-[#24292f] dark:text-[#f0f6fc] hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 mb-8">
          <span className="mr-2">←</span> Back to Services
        </Link>

        <h1 className="text-4xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6">Cloud Solutions</h1>

        <p className="text-lg text-[#656d76] dark:text-[#8b949e] mb-8 leading-relaxed">
          We design, deploy, and manage scalable cloud environments using AWS, Azure, and Google Cloud — optimized for performance and security.
        </p>

        <ul className="space-y-3 text-[#656d76] dark:text-[#8b949e] list-disc pl-6">
          <li>Infrastructure as Code (IaC)</li>
          <li>Serverless and containerized architectures</li>
          <li>CI/CD and DevOps automation</li>
          <li>Cloud cost optimization and monitoring</li>
        </ul>

        <div className="mt-12">
          <Link href="/contact" className="btn-primary px-8 py-3 inline-block">Get Cloud Consultation</Link>
        </div>
      </div>
    </section>
  )
}
