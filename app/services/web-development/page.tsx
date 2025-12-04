import React from "react";
import Link from "next/link";
import Advantages from "@/components/Advantages";
import CTA from "@/components/CTA";
export default function WebDevelopmentPage() {
  return (
    <>
    <section className="min-h-screen pt-32 pb-20 container-max">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/services"
          className="inline-flex items-center text-[#24292f] dark:text-[#f0f6fc] hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 mb-8"
        >
          <span className="mr-2">←</span>
          Back to Services
        </Link>

        <h1 className="text-4xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6">
          Web Development
        </h1>

        <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed mb-8">
          We craft high-performance web applications using the latest
          technologies — including Next.js, Node.js, and cloud-native
          infrastructure. Our solutions are built for scalability, SEO, and
          modern UX.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-4">
              What We Offer
            </h2>
            <ul className="space-y-3 text-[#656d76] dark:text-[#8b949e] list-disc pl-6">
              <li>
                Responsive front-end development with React and Tailwind CSS
              </li>
              <li>Next.js SSR/ISR for SEO-friendly, fast-loading websites</li>
              <li>REST and GraphQL API integration</li>
              <li>CMS-based solutions (Headless WordPress, Sanity, Strapi)</li>
              <li>Custom dashboards and portals</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-4">
              Technologies
            </h2>
            <div className="grid grid-cols-2 gap-4 text-[#656d76] dark:text-[#8b949e]">
              <div>Next.js</div>
              <div>React</div>
              <div>Node.js</div>
              <div>TypeScript</div>
              <div>Tailwind CSS</div>
              <div>PostgreSQL</div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/contact"
            className="btn-primary inline-block text-center px-8 py-3"
          >
            Start a Project
          </Link>
        </div>
       </div>
    </section>
      <Advantages />
      <CTA />
</>
  );
}
