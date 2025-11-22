import Link from "next/link";

export default function FintechPage() {
  return (
    <section className="min-h-screen pt-32 pb-20">

      {/* HERO SECTION */}
      <section className="hero-section section-full-width relative">
        <img
          src="/assets/images/unsplash_10.png"
          alt="fintech"
          className="bg-image"
        />

        <div className="smallrectangle">
          <img src="/assets/images/Group 57.png" alt="small-graphic" />
        </div>

        <Link
          href="/contact"
          className="btn btn-mid-light-primary abtbtn btn-shadow"
        >
          Let's Talk <i className="fas fa-arrow-right"></i>
        </Link>

        <div className="retail-img1 rectangle-img"></div>

        <p className="indtext1">Shaping the Future of Digital Finance</p>
      </section>

      {/* INTRO SECTION */}
      <div className="inosec container-max">
        <div className="ino-biglet">
          <h1>Powering FinTech with Scalable Software</h1>
        </div>

        <p>
          The FinTech and Banking sector is transforming financial services by
          integrating cutting-edge technology with traditional banking practices
          to enhance customer experience, security, and operational efficiency.
          At Codriva, we develop tailored software solutions that empower
          financial institutions, startups, and payment providers to innovate
          rapidly and adapt to evolving regulatory landscapes.
        </p>

        <p>
          Our expertise covers a wide range of services including digital banking
          platforms, payment processing systems, fraud detection, risk
          management, and compliance automation. We leverage technologies such as
          blockchain, artificial intelligence, and advanced analytics to deliver
          secure, transparent, and scalable financial solutions.
        </p>

        <p>
          Codriva helps FinTech and banking organizations streamline customer
          onboarding, enable seamless transactions, and provide personalized
          financial products through mobile and web applications. Our solutions
          ensure robust data security and privacy, helping clients build trust
          and meet stringent industry regulations while driving growth in a
          competitive market.
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
              <img src="/assets/images/unsplash_11.png" alt="" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Wealth & Investment Management Platforms</span>
            </div>
            <div className="lists">
              <p>
                Help clients manage assets, portfolios, and financial planning
                digitally.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCK 2 */}
        <div className="description-container rest right">
          <div className="sec1 image-right">
            <div className="desimg">
              <img src="/assets/images/unsplash_12.png" alt="" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Digital Payment Solutions</span>
            </div>
            <div className="lists">
              <p>
                Enable seamless online transactions, wallets, and payment
                gateway integrations.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCK 3 */}
        <div className="description-container rest left">
          <div className="sec1 image-left">
            <div className="desimg">
              <img src="/assets/images/unsplash_13.png" alt="" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Mobile & Internet Banking Platforms</span>
            </div>
            <div className="lists">
              <p>
                Deliver smooth and secure user experiences across devices.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCK 4 */}
        <div className="description-container rest right">
          <div className="sec1 image-right">
            <div className="desimg">
              <img src="/assets/images/unsplash_14.png" alt="" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Core Banking Software Development</span>
            </div>
            <div className="lists">
              <p>
                Build secure, scalable systems to manage accounts, transactions,
                and customer data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA / FOOTER handled globally in layout */}
    </section>
  );
}
