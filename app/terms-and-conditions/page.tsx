export default function TermsPage() {
  return (
    <section className="section-padding container-max py-20">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-4 text-[#24292f] dark:text-[#f0f6fc]">
        Terms of Service
      </h1>

      <p className="text-[#656d76] dark:text-[#8b949e] mb-10 text-sm border-b border-gray-300/40 dark:border-gray-700/40 pb-4">
        Last Updated: 01-12-2025
      </p>

      <div className="space-y-12 text-[#464d55] dark:text-[#9ba4b4] leading-relaxed">

        {/* Intro */}
        <div className="bg-gray-100/60 dark:bg-white/5 p-5 rounded-lg text-[15px]">
          <p>
            Welcome to Codriva Technologies Pvt. Ltd. (“Company”, “we”, “our”, “us”). 
            These Terms of Service (“Terms”) govern your use of our website 
            <strong> www.codriva.com </strong> and related platforms, tools, and services.
          </p>
          <p className="mt-3">
            By accessing or using our website or services, you (“User”, “Client”, “you”) 
            agree to be bound by these Terms and our Privacy Policy.  
            <span className="font-semibold">
              If you do not agree, please stop using our website immediately.
            </span>
          </p>
        </div>

        {/* SECTION TEMPLATE */}
        <div className="space-y-6">

          {/* 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
              1. Acceptance of Terms
            </h2>
            <p>You confirm that:</p>
            <ul className="list-disc ml-6 mt-3 space-y-1 text-[15px]">
              <li>You are at least 18 years old</li>
              <li>You can enter a legally binding agreement</li>
              <li>Your use complies with laws and regulations</li>
              <li>If on behalf of a company, you are authorized to bind that company</li>
            </ul>
          </div>

          {/* Divider */}
          <hr className="border-gray-300/40 dark:border-gray-700/40" />

          {/* 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
              2. Scope of Services
            </h2>
            <p>Codriva Technologies may provide:</p>
            <ul className="list-disc ml-6 mt-3 space-y-1 text-[15px]">
              <li>IT consulting</li>
              <li>Software development</li>
              <li>Mobile & web app development</li>
              <li>UI/UX design</li>
              <li>Cloud, DevOps & technical services</li>
              <li>Support, maintenance & deployment</li>
              <li>Enterprise solutions & technology advisory</li>
              <li>Staff augmentation / dedicated resource assignments</li>
            </ul>
            <p className="mt-3 text-[15px]">
              Full deliverables, pricing, acceptance criteria, and timelines are defined 
              in an SOW, Proposal, or Agreement.
            </p>
          </div>

          <hr className="border-gray-300/40 dark:border-gray-700/40" />

          {/* 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
              3. Website Use
            </h2>
            <p>You agree NOT to:</p>
            <ul className="list-disc ml-6 mt-3 space-y-1 text-[15px]">
              <li>Use the website for illegal activities</li>
              <li>Attack, breach, or test the security of our systems</li>
              <li>Disrupt or overload servers</li>
              <li>Crawl, scrape, or copy content without authorization</li>
              <li>Upload malware, harmful files, or malicious code</li>
            </ul>
            <p className="mt-3">We may restrict access for violations.</p>
          </div>

          <hr className="border-gray-300/40 dark:border-gray-700/40" />

          {/* 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
              4. Client Responsibilities
            </h2>
            <p>Clients agree to:</p>
            <ul className="list-disc ml-6 mt-3 space-y-1 text-[15px]">
              <li>Provide accurate, up-to-date information</li>
              <li>Respond promptly to project communications</li>
              <li>Supply necessary files, content, and credentials</li>
              <li>Ensure lawful ownership of provided materials</li>
            </ul>

            <div className="bg-yellow-100/70 dark:bg-yellow-600/20 p-4 rounded-lg mt-4 text-[14px]">
              Note: Delays caused by incomplete inputs are not the responsibility of Codriva Technologies.
            </div>
          </div>

          <hr className="border-gray-300/40 dark:border-gray-700/40" />

          {/* 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
              5. Intellectual Property (IP Rights)
            </h2>

            <h3 className="font-semibold text-[#24292f] dark:text-white mt-3">5.1 Pre-Existing IP</h3>
            <p className="text-[15px]">Each party retains ownership of its pre-existing IP.</p>

            <h3 className="font-semibold text-[#24292f] dark:text-white mt-4">5.2 Project Deliverables</h3>
            <p className="text-[15px]">
              Unless agreed otherwise, IP rights transfer to the Client only after full & final payment.
              Codriva may use project details in portfolios unless restricted by an NDA.
            </p>

            <h3 className="font-semibold text-[#24292f] dark:text-white mt-4">5.3 Company Tools</h3>
            <p className="text-[15px]">
              Internal tools, frameworks, or libraries used in development remain Codriva’s property.
            </p>
          </div>

          <hr className="border-gray-300/40 dark:border-gray-700/40" />

          {/* 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
              6. Payments & Fees
            </h2>
            <p className="text-[15px]">
              All fees and milestones are defined in the SOW/Proposal. Taxes and gateway charges apply unless specified otherwise.
            </p>
            <p className="mt-2 text-[15px]">
              Failure to pay may lead to suspension or withholding of deliverables. Late fees may apply.
            </p>
          </div>

          <hr className="border-gray-300/40 dark:border-gray-700/40" />

          {/* 7 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
              7. Confidentiality
            </h2>
            <p className="text-[15px]">
              Both parties agree to protect all confidential information. Obligations remain even after termination.
            </p>
          </div>

          <hr className="border-gray-300/40 dark:border-gray-700/40" />

          {/* 8 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
              8. Data Protection & Privacy
            </h2>
            <p className="text-[15px]">
              We comply with applicable privacy laws (India DPDP Act, GDPR, CCPA).
              Clients must ensure lawful usage of the data they provide.
            </p>
          </div>

          <hr className="border-gray-300/40 dark:border-gray-700/40" />

          {/* 9 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
              9. Third-Party Tools & Integrations
            </h2>
            <p className="text-[15px]">
              We may integrate third-party APIs, SDKs, cloud platforms, and payment gateways.
              Codriva is not responsible for outages, API changes, policy changes, or third-party breaches.
            </p>
          </div>

          <hr className="border-gray-300/40 dark:border-gray-700/40" />

          {/* 10 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
              10. Service Modifications & Updates
            </h2>
            <p className="text-[15px]">
              We may modify website content, features, or services with or without notice.
            </p>
          </div>

          <hr className="border-gray-300/40 dark:border-gray-700/40" />

          {/* 11 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
              11. Limitation of Liability
            </h2>
            <p className="text-[15px]">
              Codriva is not liable for indirect, incidental, or consequential damages 
              including loss of profits, business, data, or reputation.
            </p>
            <p className="mt-2 text-[15px]">
              Total liability is limited to the fees paid for the specific service.
            </p>
          </div>

          <hr className="border-gray-300/40 dark:border-gray-700/40" />

          {/* 12 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
              12. No Warranty
            </h2>
            <p className="text-[15px]">
              Services are provided “as-is” without warranties.  
              We do not guarantee uptime, error-free delivery, or specific outcomes.
            </p>
          </div>

          <hr className="border-gray-300/40 dark:border-gray-700/40" />

          {/* 13 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
              13. Portfolio Rights
            </h2>
            <p className="text-[15px]">
              Unless restricted by NDA, Codriva may showcase project details in portfolios or case studies.
            </p>
          </div>

          <hr className="border-gray-300/40 dark:border-gray-700/40" />

          {/* 14 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
              14. Termination
            </h2>
            <p className="text-[15px]">
              We may suspend or terminate access for violations, illegal activity, or non-payment.
            </p>
            <p className="mt-2 text-[15px]">
              Upon termination, all pending fees become immediately due.
            </p>
          </div>

          <hr className="border-gray-300/40 dark:border-gray-700/40" />

          {/* 15 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
              15. Governing Law & Jurisdiction
            </h2>
            <p className="text-[15px]">
              These Terms are governed by the laws of India.  
              Disputes fall under the exclusive jurisdiction of courts in Noida, Uttar Pradesh.
            </p>
          </div>

          <hr className="border-gray-300/40 dark:border-gray-700/40" />

          {/* 16 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
              16. Changes to These Terms
            </h2>
            <p className="text-[15px]">
              These Terms may be updated periodically. Continued use constitutes acceptance of updated Terms.
            </p>
          </div>

          <hr className="border-gray-300/40 dark:border-gray-700/40" />

          {/* 17 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
              17. Contact Information
            </h2>

            <div className="bg-gray-100/70 dark:bg-white/5 rounded-lg p-5 border border-gray-300/40 dark:border-gray-700/50 text-[15px]">
              <p className="mb-1">Codriva Technologies Pvt. Ltd.</p>
              <p>Office No: 616 & 617, 6th Floor, Tower B, Ithum</p>
              <p>Plot A-40, Sector 62, Noida, Uttar Pradesh 201309</p>
              <p className="mt-2">
                Email:{" "}
                <a href="mailto:info@codriva.com" className="underline">
                  info@codriva.com
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
