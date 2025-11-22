import Link from "next/link";

export default function EdTechPage() {
  return (
    <section className="min-h-screen pt-32 pb-20">

      {/* HERO SECTION */}
      <section className="hero-section section-full-width relative">
        <img
          src="/assets/images/unsplash_24.png"
          alt="edtech"
          className="bg-image"
        />

        <div className="smallrectangle">
          <img src="/assets/images/Group 59.png" alt="containersm" />
        </div>

        <Link
          href="/contact"
          className="btn btn-mid-light-primary abtbtn btn-shadow"
        >
          Let's Talk <i className="fas fa-arrow-right"></i>
        </Link>

        <div className="retail-img1 rectangle-img"></div>

        <p className="indtext1">Digital Tools That Empower Education</p>
      </section>

      {/* INDUSTRY INTRO */}
      <div className="inosec container-max">
        <div className="ino-biglet">
          <h1>EdTech That Engages, Educates, and Evolves</h1>
        </div>

        <p>
          The Education Technology (EdTech) sector is revolutionizing learning
          by integrating innovative digital tools that enhance accessibility,
          engagement, and personalized education. At Codriva, we develop
          comprehensive EdTech solutions that empower educational institutions,
          training providers, and corporate learning teams to deliver effective
          and scalable learning experiences.
        </p>

        <p>
          Our expertise includes building learning management systems (LMS),
          virtual classrooms, interactive content platforms, and assessment
          tools that support diverse teaching methodologies. We leverage AI and
          data analytics to offer personalized learning paths, real-time
          feedback, and progress tracking to improve student outcomes.
        </p>

        <p>
          Codriva’s EdTech solutions also facilitate seamless integration with
          existing systems, mobile accessibility, and collaboration tools to
          foster communication between learners, educators, and administrators.
          Our technology supports remote and hybrid learning models, helping
          institutions adapt to the evolving educational landscape while driving
          engagement and retention.
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
              <img src="/assets/images/unsplash_20.png" alt="" />
            </div>
          </div>
          <div className="sec3">
            <div className="desheading2">
              <span>E-commerce Solutions</span>
            </div>
            <div className="lists">
              <p>
                Custom online stores with smooth checkout, inventory management,
                and performance-driven design.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCK 2 */}
        <div className="description-container rest right">
          <div className="sec1 image-right">
            <div className="desimg">
              <img src="/assets/images/unsplash_21.png" alt="" />
            </div>
          </div>
          <div className="sec3">
            <div className="desheading2">
              <span>Enterprise Software</span>
            </div>
            <div className="lists">
              <p>
                Tailor-made internal tools and dashboards that improve workflows
                and boost productivity.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCK 3 */}
        <div className="description-container rest left">
          <div className="sec1 image-left">
            <div className="desimg">
              <img src="/assets/images/unsplash_22.png" alt="" />
            </div>
          </div>
          <div className="sec3">
            <div className="desheading2">
              <span>Data & Analytics Dashboards</span>
            </div>
            <div className="lists">
              <p>
                Powerful visual dashboards to help businesses make smarter,
                data-driven decisions.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCK 4 */}
        <div className="description-container rest right">
          <div className="sec1 image-right">
            <div className="desimg">
              <img src="/assets/images/unsplash_23.png" alt="" />
            </div>
          </div>
          <div className="sec3">
            <div className="desheading2">
              <span>Website Design & Development</span>
            </div>
            <div className="lists">
              <p>
                Modern, responsive websites optimized for speed, UX, and
                conversion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA + FOOTER ARE ALREADY INCLUDED BY layout.tsx */}
    </section>
  );
}
