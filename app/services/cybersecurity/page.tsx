import Link from 'next/link'

export const metadata = {
  title: 'Cybersecurity | Codriva',
  description: 'Protect your digital assets with advanced cybersecurity practices and tools.',
}

export default function CybersecurityPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 container-max">
      <div className="max-w-4xl mx-auto">
        <Link href="/services" className="inline-flex items-center text-[#24292f] dark:text-[#f0f6fc] hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 mb-8">
          <span className="mr-2">←</span> Back to Services
        </Link>

        <h1 className="text-4xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6">Cybersecurity</h1>

        <p className="text-lg text-[#656d76] dark:text-[#8b949e] mb-8 leading-relaxed">
          Codriva offers end-to-end security assessments, vulnerability testing, and compliance audits to keep your systems safe.
        </p>

        <ul className="space-y-3 text-[#656d76] dark:text-[#8b949e] list-disc pl-6">
          <li>Penetration Testing</li>
          <li>Security Audits & Compliance</li>
          <li>Threat Monitoring & Response</li>
          <li>Data Encryption & Access Control</li>
        </ul>

        <div className="mt-12">
          <Link href="/contact" className="btn-primary px-8 py-3 inline-block">Secure My Business</Link>
        </div>
      </div>
    </section>
  )
}
