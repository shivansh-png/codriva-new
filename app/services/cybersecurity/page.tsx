import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cybersecurity | Codriva",
  description: "Protect your digital assets with advanced cybersecurity practices and tools.",
};

export default function CybersecurityPage() {
  return (
<section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6">
            Cybersecurity
          </h1>
          <div className="w-24 h-1 bg-[#0969da] mx-auto mb-8"></div>
        </div>

        {/* Image + Text Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-4">
          
          {/* Image */}
          <div className="relative">
            <Image
              src="/assets/images/cyber-security-concept-digital-art.jpg" // replace with your image
              alt="Cybersecurity"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
              <span className="text-[#0969da] font-semibold">Cybersecurity</span>
              {" "}is essential for safeguarding your digital assets, protecting sensitive data, 
              and preventing unauthorized access across systems and networks.
            </p>

            <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
              At Codriva, we offer comprehensive security solutions—from proactive threat detection
              and penetration testing to compliance-driven audits and secure architecture design.
              Our team ensures your organization remains resilient against modern cyber threats.
            </p>

            <p className="text-lg text-[#656d76] dark:text-[#8b949e] leading-relaxed">
              Whether you're strengthening your existing security infrastructure or building a 
              new one from scratch, we deliver actionable insights, robust protection, and 
              ongoing monitoring to keep your business secure and compliant.
            </p>

            <ul className="space-y-3 text-[#656d76] dark:text-[#8b949e] list-disc pl-6 pt-2">
              <li>Penetration Testing & Ethical Hacking</li>
              <li>Security Audits & Compliance (ISO, SOC2, GDPR)</li>
              <li>Threat Monitoring & Incident Response</li>
              <li>Data Encryption, IAM, and Access Control</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/contact" className="btn-primary px-8 py-3 inline-block">
            Secure My Business
          </Link>
        </div>

      </div>
    </section>
  );
}
