import Link from "next/link";


export default function HealthcarePage() {
  return (
    <section className="min-h-screen pt-32 pb-20">

      {/* HERO SECTION */}
      <section className="hero-section section-full-width relative">
        <img
          src="/assets/images/unsplash_5.png"
          alt="Healthcare"
          className="bg-image"
        />

        <div className="smallrectangle">
          <img src="/assets/images/Group 56.png" alt="graphic" />
        </div>

        <Link
          href="/contact"
          className="btn btn-mid-light-primary abtbtn btn-shadow"
        >
          Let's Talk <i className="fas fa-arrow-right"></i>
        </Link>

        <div className="retail-img1 rectangle-img"></div>

        <p className="indtext1">Digital Solutions for a Healthier Tomorrow</p>
      </section>

      {/* INTRO SECTION */}
      <div className="inosec container-max">
        <div className="ino-biglet">
          <h1>Empowering Healthcare Through Technology</h1>
        </div>

        <p>
          The Healthcare and Life Sciences sector is at the forefront of digital
          innovation, focused on enhancing patient care, accelerating research,
          and ensuring compliance with complex regulatory standards. Codriva
          delivers comprehensive software solutions tailored to meet the unique
          challenges of hospitals, clinics, pharmaceutical companies, and
          research institutions.
        </p>

        <p>
          Our expertise spans electronic health records (EHR) systems,
          telemedicine platforms, patient engagement portals, clinical trial
          management software, and advanced health analytics. We incorporate AI
          and machine learning to enable predictive diagnostics, personalized
          treatment recommendations, and population health management,
          empowering healthcare providers to make data-driven decisions.
        </p>

        <p>
          Security and compliance are paramount in healthcare; Codriva ensures
          robust data protection measures, HIPAA and GDPR compliance, and
          seamless interoperability across disparate systems. Our solutions
          improve care coordination, optimize workflows, and facilitate real-time
          communication among patients, practitioners, and researchers.
        </p>

        <p>
          By driving innovation in medical research, patient management, and
          healthcare delivery, Codriva helps organizations improve outcomes,
          reduce costs, and adapt to the rapidly evolving healthcare landscape.
        </p>
      </div>

      {/* SOLUTIONS SECTION */}
      <div className="main-description container-max">
        <div className="descrip-heading">
          <span>Solutions We Serve</span>
        </div>

        {/* BLOCK 1 */}
        <div className="description-container rest left">
          <div className="sec1 image-left">
            <div className="desimg">
              <img src="/assets/images/unsplash_6.png" alt="" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Hospital Management Systems</span>
            </div>
            <div className="lists">
              <p>
                Streamline administrative workflows, patient records, billing,
                and scheduling.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCK 2 */}
        <div className="description-container rest right">
          <div className="sec1 image-right">
            <div className="desimg">
              <img src="/assets/images/unsplash_7.png" alt="" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Telemedicine Platforms</span>
            </div>
            <div className="lists">
              <p>
                Support virtual consultations, remote monitoring, and digital
                prescriptions.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCK 3 */}
        <div className="description-container rest left">
          <div className="sec1 image-left">
            <div className="desimg">
              <img src="/assets/images/unsplash_8.png" alt="" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Healthcare Analytics & BI Tools</span>
            </div>
            <div className="lists">
              <p>
                Empower data-driven decisions with real-time dashboards and
                predictive insights.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCK 4 */}
        <div className="description-container rest right">
          <div className="sec1 image-right">
            <div className="desimg">
              <img src="/assets/images/unsplash_9.png" alt="" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Clinical Data Management</span>
            </div>
            <div className="lists">
              <p>
                Facilitate research and trials with accurate data collection and
                analysis tools.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA, NEWS, FOOTER already handled globally */}
    </section>
  );
}
