import Link from "next/link";



export default function RestaurantPage() {
  return (
    <section className="min-h-screen pt-32 pb-20">

      {/* HERO */}
      <section className="hero-section section-full-width relative">
        <img
          src="/assets/images/unsplash_40.png"
          alt="restaurant tech"
          className="bg-image"
        />

        <div className="smallrectangle">
          <img src="/assets/images/Group 63.png" alt="rectangle" />
        </div>

        <Link
          href="/contact"
          className="btn btn-mid-light-primary abtbtn btn-shadow"
        >
          Let's Talk <i className="fas fa-arrow-right"></i>
        </Link>

        <div className="retail-img1 rectangle-img"></div>

        <p className="indtext1">
          Redefining Dining with Technology
        </p>
      </section>

      {/* INTRO */}
      <div className="inosec container-max">
        <div className="ino-biglet">
          <h1>Elevating Restaurant Operations with Code</h1>
        </div>

        <p>
          The Restaurant and Cloud Kitchen industry is rapidly evolving, driven by
          changing consumer preferences and the rise of digital ordering. Codriva
          delivers innovative software solutions that empower restaurants and cloud
          kitchens to optimize operations, enhance customer engagement, and scale
          efficiently.
        </p>

        <p>
          Our expertise includes developing order management systems, kitchen display
          solutions, delivery tracking, and integrated payment gateways that streamline
          workflows and reduce order errors. We also build customer loyalty programs,
          personalized marketing tools, and analytics platforms to help businesses
          understand customer preferences and drive repeat business.
        </p>

        <p>
          With a focus on seamless online ordering and contactless delivery, Codriva’s
          technology supports both traditional dine-in and delivery-only cloud kitchen
          models. Our solutions improve operational efficiency, reduce costs, and enable
          businesses to adapt quickly to market demands while providing exceptional
          dining experiences.
        </p>
      </div>

      {/* SOLUTIONS */}
      <div className="main-description container-max">
        <div className="descrip-heading">
          <span>Solutions We Serve</span>
        </div>

        {/* Online Ordering */}
        <div className="description-container rest left">
          <div className="sec1 image-left">
            <div className="desimg">
              <img src="/assets/images/unsplash_41.png" alt="ordering" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Online Ordering & Delivery Platforms</span>
            </div>
            <div className="lists">
              <p>
                Custom-built platforms to manage online orders, track deliveries, and
                ensure seamless customer experience.
              </p>
            </div>
          </div>
        </div>

        {/* Kitchen Management */}
        <div className="description-container rest right">
          <div className="sec1 image-right">
            <div className="desimg">
              <img src="/assets/images/unsplash_42.png" alt="kitchen software" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Kitchen Management Software</span>
            </div>
            <div className="lists">
              <p>
                Tools to optimize kitchen workflows, manage inventory, track orders,
                and reduce food wastage.
              </p>
            </div>
          </div>
        </div>

        {/* POS */}
        <div className="description-container rest left">
          <div className="sec1 image-left">
            <div className="desimg">
              <img src="/assets/images/unsplash_43.png" alt="pos" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>POS (Point of Sale) Systems</span>
            </div>
            <div className="lists">
              <p>
                Integrated POS systems for quick order processing, inventory tracking,
                and sales reporting.
              </p>
            </div>
          </div>
        </div>

        {/* Cloud Kitchen Solutions */}
        <div className="description-container rest right">
          <div className="sec1 image-right">
            <div className="desimg">
              <img src="/assets/images/unsplash_44.png" alt="cloud kitchen" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Cloud Kitchen Management Solutions</span>
            </div>
            <div className="lists">
              <p>
                End-to-end solutions for cloud kitchen operations — order routing,
                driver management, and customer feedback.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA + NEWS + FOOTER handled globally */}
    </section>
  );
}
