import Link from 'next/link'

export const metadata = {
  title: 'Data Analytics | Codriva',
  description: 'Transform data into actionable insights through advanced analytics and visualization.',
}

export default function DataAnalyticsPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 container-max">
      <div className="max-w-4xl mx-auto">
        <Link href="/services" className="inline-flex items-center text-[#24292f] dark:text-[#f0f6fc] hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 mb-8">
          <span className="mr-2">←</span> Back to Services
        </Link>

        <h1 className="text-4xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6">Data Analytics</h1>

        <p className="text-lg text-[#656d76] dark:text-[#8b949e] mb-8 leading-relaxed">
          Turn complex data into meaningful insights through custom dashboards, reports, and business intelligence tools.
        </p>

        <ul className="space-y-3 text-[#656d76] dark:text-[#8b949e] list-disc pl-6">
          <li>Data Visualization & Reporting</li>
          <li>Business Intelligence Systems</li>
          <li>ETL & Data Warehousing</li>
          <li>Interactive Dashboards</li>
        </ul>

        <div className="mt-12">
          <Link href="/contact" className="btn-primary px-8 py-3 inline-block">Discuss Analytics</Link>
        </div>
      </div>
    </section>
  )
}
