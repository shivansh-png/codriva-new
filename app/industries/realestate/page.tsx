import Link from "next/link";


export default function RealEstatePage() {
  return (
    <section className="min-h-screen pt-32 pb-20">

      {/* HERO */}
      <section className="hero-section section-full-width relative">
        <img
          src="/assets/images/unsplash_55.png"
          alt="real estate"
          className="bg-image"
        />

        <div className="smallrectangle">
          <img src="/assets/images/Group 66.png" alt="rectangle" />
        </div>

        <Link
          href="/contact"
          className="btn btn-mid-light-primary abtbtn btn-shadow"
        >
          Let's Talk <i className="fas fa-arrow-right"></i>
        </Link>

        <div className="retail-img1 rectangle-img"></div>

        <p className="indtext1">
          Smarter Property Solutions for a Digital World
        </p>
      </section>

      {/* INTRO */}
      <div className="inosec container-max">
        <div className="ino-biglet">
          <h1>Transforming Real Estate into Smart Estate</h1>
        </div>

        <p>
          The Real Estate and Property Technology (PropTech) sector is
          revolutionizing how properties are bought, sold, managed, and
          experienced. Codriva specializes in creating innovative software
          solutions that streamline property management, enhance tenant
          experiences, and optimize real estate transactions through digital
          transformation.
        </p>

        <p>
          Our expertise includes developing smart property management systems,
          virtual tours, IoT-enabled building automation, and data analytics
          platforms that provide valuable insights into market trends and asset
          performance. We also build customizable CRM tools to improve
          communication and engagement between landlords, tenants, and agents.
        </p>

        <p>
          By integrating AI and machine learning, our PropTech solutions enable
          predictive maintenance, dynamic pricing, and personalized customer
          experiences, helping real estate businesses increase efficiency and
          profitability. Codriva’s technology drives transparency, accelerates
          decision-making, and supports sustainable property management
          practices in a competitive market.
        </p>
      </div>

      {/* SOLUTIONS */}
      <div className="main-description container-max">
        <div className="descrip-heading">
          <span>Solutions We Serve</span>
        </div>

        {/* Property Listing Portals */}
        <div className="description-container rest left">
          <div className="sec1 image-left">
            <div className="desimg">
              <img src="/assets/images/unsplash_56.png" alt="listing portals" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Property Listing Portals</span>
            </div>
            <div className="lists">
              <p>
                Dynamic platforms to showcase properties with filters, maps,
                media galleries, and lead-generation tools.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Apps */}
        <div className="description-container rest right">
          <div className="sec1 image-right">
            <div className="desimg">
              <img src="/assets/images/unsplash_57.png" alt="mobile apps" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Real Estate Mobile Apps</span>
            </div>
            <div className="lists">
              <p>
                User-friendly apps for buyers, sellers, and agents to browse
                listings, schedule visits, and communicate in real time.
              </p>
            </div>
          </div>
        </div>

        {/* Rental & Lease Management */}
        <div className="description-container rest left">
          <div className="sec1 image-left">
            <div className="desimg">
              <img
                src="/assets/images/unsplash_58.png"
                alt="lease management"
              />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Rental & Lease Management Systems</span>
            </div>
            <div className="lists">
              <p>
                End-to-end platforms for managing rental applications,
                agreements, payments, and renewals.
              </p>
            </div>
          </div>
        </div>

        {/* Analytics for Agents */}
        <div className="description-container rest right">
          <div className="sec1 image-right">
            <div className="desimg">
              <img
                src="/assets/images/unsplash_59.png"
                alt="analytics tools"
              />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Analytics for Agents & Builders</span>
            </div>
            <div className="lists">
              <p>
                Insights into property demand, buyer behavior, and conversion
                metrics to drive data-backed decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA + NEWS + FOOTER come from global layout */}
    </section>
  );
}
