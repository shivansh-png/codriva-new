import Link from "next/link";


export default function LogisticsPage() {
  return (
    <section className="min-h-screen pt-32 pb-20">

      {/* HERO SECTION */}
      <section className="hero-section section-full-width relative">
        <img
          src="/assets/images/unsplash_15.png"
          alt="logistics"
          className="bg-image"
        />

        <div className="smallrectangle">
          <img src="/assets/images/Group 58.png" alt="small-graphic" />
        </div>

        <Link
          href="/contact"
          className="btn btn-mid-light-primary abtbtn btn-shadow"
        >
          Let's Talk <i className="fas fa-arrow-right"></i>
        </Link>

        <div className="retail-img1 rectangle-img"></div>

        <p className="indtext1">Optimizing Logistics Through Smart Software</p>
      </section>

      {/* INTRO SECTION */}
      <div className="inosec container-max">
        <div className="ino-biglet">
          <h1>Transforming Supply Chains with Technology</h1>
        </div>

        <p>
          In the fast-paced world of logistics and supply chain management,
          efficiency, visibility, and agility are critical to success. Codriva
          delivers cutting-edge software solutions designed to streamline
          operations, optimize resource allocation, and enhance end-to-end
          supply chain transparency.
        </p>

        <p>
          Our expertise spans inventory management, warehouse automation,
          transportation management systems (TMS), and real-time tracking
          solutions that help businesses reduce costs and improve delivery
          times. By integrating IoT, AI-powered analytics, and cloud
          technologies, we enable proactive decision-making and predictive
          maintenance to minimize disruptions.
        </p>

        <p>
          Codriva’s solutions empower companies to manage complex logistics
          networks, coordinate multi-modal transportation, and achieve seamless
          collaboration between suppliers, partners, and customers. Whether
          enhancing last-mile delivery or optimizing global supply chains, our
          technology drives operational excellence and helps businesses stay
          competitive in a rapidly evolving marketplace.
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
              <img src="/assets/images/unsplash_16.png" alt="" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Order & Delivery Management</span>
            </div>
            <div className="lists">
              <p>Streamlined order processing with live delivery updates.</p>
            </div>
          </div>
        </div>

        {/* BLOCK 2 */}
        <div className="description-container rest right">
          <div className="sec1 image-right">
            <div className="desimg">
              <img src="/assets/images/unsplash_17.png" alt="" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Warehouse Management Systems (WMS)</span>
            </div>
            <div className="lists">
              <p>Efficient inventory tracking and storage automation.</p>
            </div>
          </div>
        </div>

        {/* BLOCK 3 */}
        <div className="description-container rest left">
          <div className="sec1 image-left">
            <div className="desimg">
              <img src="/assets/images/unsplash_18.png" alt="" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Fleet & Transportation Management</span>
            </div>
            <div className="lists">
              <p>Real-time vehicle tracking and route optimization.</p>
            </div>
          </div>
        </div>

        {/* BLOCK 4 */}
        <div className="description-container rest right">
          <div className="sec1 image-right">
            <div className="desimg">
              <img src="/assets/images/unsplash_19.png" alt="" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Supply Chain Visibility Tools</span>
            </div>
            <div className="lists">
              <p>End-to-end tracking across your logistics network.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA + FOOTER handled globally */}
    </section>
  );
}
