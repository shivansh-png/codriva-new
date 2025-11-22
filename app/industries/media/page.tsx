import Link from "next/link";


export default function MediaNewsPage() {
  return (
    <section className="min-h-screen pt-32 pb-20">

      {/* HERO SECTION */}
      <section className="hero-section section-full-width relative">
        <img
          src="/assets/images/unsplash_45.png"
          alt="media news"
          className="bg-image"
        />

        <div className="smallrectangle">
          <img src="/assets/images/Group 64.png" alt="smallrectangle" />
        </div>

        <Link
          href="/contact"
          className="btn btn-mid-light-primary abtbtn btn-shadow"
        >
          Let's Talk <i className="fas fa-arrow-right"></i>
        </Link>

        <div className="retail-img1 rectangle-img"></div>

        <p className="indtext1">Tech-Driven Solutions for the News Industry</p>
      </section>

      {/* INTRO SECTION */}
      <div className="inosec container-max">
        <div className="ino-biglet">
          <h1>Bridging Information Gaps with Technology</h1>
        </div>

        <p>
          In the rapidly evolving Media and News industry, delivering timely,
          accurate, and engaging content across multiple platforms is essential.
          Codriva develops advanced software solutions tailored to the unique
          needs of media companies, publishers, and broadcasters, helping them
          streamline content creation, management, and distribution.
        </p>

        <p>
          Our solutions include content management systems (CMS), digital
          publishing platforms, multimedia streaming, and personalized news
          delivery powered by AI-driven recommendations. We also provide tools
          for audience engagement, subscription management, and analytics to
          help media organizations understand viewer preferences and optimize
          content strategies.
        </p>

        <p>
          With a focus on scalability and security, Codriva supports real-time
          content updates, multi-channel publishing, and monetization models
          such as paywalls and targeted advertising. Our technology enables
          media companies to adapt quickly to changing consumer behaviors and
          maintain a competitive edge in a crowded digital landscape.
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
              <img src="/assets/images/unsplash_46.png" alt="" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Content Management Systems (CMS)</span>
            </div>
            <div className="lists">
              <p>
                Custom CMS platforms to manage and distribute content across
                multiple channels, enabling easy editing, scheduling, and
                publishing.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCK 2 */}
        <div className="description-container rest right">
          <div className="sec1 image-right">
            <div className="desimg">
              <img src="/assets/images/unsplash_47.png" alt="" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>News Aggregation Platforms</span>
            </div>
            <div className="lists">
              <p>
                Build platforms that aggregate and curate news from multiple
                sources, with smart algorithms to push real-time content to
                users.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCK 3 */}
        <div className="description-container rest left">
          <div className="sec1 image-left">
            <div className="desimg">
              <img src="/assets/images/unsplash_48.png" alt="" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Mobile Apps for News Delivery</span>
            </div>
            <div className="lists">
              <p>
                Custom-built mobile applications to deliver breaking news,
                notifications, and media content directly to users.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCK 4 */}
        <div className="description-container rest right">
          <div className="sec1 image-right">
            <div className="desimg">
              <img src="/assets/images/unsplash_49.png" alt="" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Real-Time Analytics & Insights</span>
            </div>
            <div className="lists">
              <p>
                Powerful analytics platforms that track user engagement, content
                performance, and audience behavior across digital platforms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA & FOOTER already handled globally */}
    </section>
  );
}
