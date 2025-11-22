import Link from "next/link";


export default function OnDemandPage() {
  return (
    <section className="min-h-screen pt-32 pb-20">

      {/* HERO */}
      <section className="hero-section section-full-width relative">
        <img
          src="/assets/images/unsplash_35.png"
          alt="on demand"
          className="bg-image"
        />

        <div className="smallrectangle">
          <img src="/assets/images/Group 62.png" alt="graphic" />
        </div>

        <Link
          href="/contact"
          className="btn btn-mid-light-primary abtbtn btn-shadow"
        >
          Let's Talk <i className="fas fa-arrow-right"></i>
        </Link>

        <div className="retail-img1 rectangle-img"></div>

        <p className="indtext1">Powering Instant Access, Anytime Anywhere</p>
      </section>

      {/* INTRO */}
      <div className="inosec container-max">
        <div className="ino-biglet">
          <h1>Fueling Speed, Scale & Convenience</h1>
        </div>

        <p>
          On-demand platforms have reshaped the way consumers access products
          and services, offering instant, convenient solutions that meet today’s
          fast-paced lifestyle. At Codriva, we specialize in designing and
          developing robust on-demand platforms that bridge the gap between
          service providers and customers across diverse industries such as
          transportation, food delivery, healthcare, home services, and more.
        </p>

        <p>
          Our solutions focus on delivering seamless user experiences through
          real-time booking and scheduling, secure and flexible payment
          integration, live geo-location tracking, and dynamic resource
          management. We utilize mobile-first design principles and scalable
          cloud infrastructure to ensure your platform can handle sudden spikes
          in demand while maintaining high performance and reliability.
        </p>

        <p>
          Codriva also integrates intelligent features like personalized
          recommendations, ratings and reviews, and customer support chatbots to
          enhance engagement and trust. Our end-to-end approach ensures efficient
          backend operations, including provider onboarding, order management,
          and analytics, empowering businesses to optimize workflows and scale
          effectively.
        </p>

        <p>
          With a commitment to security, speed, and user-centric design,
          Codriva’s on-demand platforms help companies capture market
          opportunities, increase customer loyalty, and thrive in a rapidly
          evolving digital economy.
        </p>
      </div>

      {/* SOLUTIONS */}
      <div className="main-description container-max">
        <div className="descrip-heading">
          <span>Solutions We Serve</span>
        </div>

        {/* Food Delivery */}
        <div className="description-container rest left">
          <div className="sec1 image-left">
            <div className="desimg">
              <img src="/assets/images/unsplash_36.png" alt="food delivery" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Food Delivery Platforms</span>
            </div>
            <div className="lists">
              <p>
                Real-time order tracking, smart menus, and seamless payment
                integrations to enhance user experience and restaurant
                operations.
              </p>
            </div>
          </div>
        </div>

        {/* Ride Hailing */}
        <div className="description-container rest right">
          <div className="sec1 image-right">
            <div className="desimg">
              <img src="/assets/images/unsplash_37.png" alt="transport apps" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Ride-Hailing & Transport Apps</span>
            </div>
            <div className="lists">
              <p>
                Reliable and scalable apps for taxi and shuttle services with
                driver assignment, live location, and fare calculation.
              </p>
            </div>
          </div>
        </div>

        {/* Hyperlocal Delivery */}
        <div className="description-container rest left">
          <div className="sec1 image-left">
            <div className="desimg">
              <img src="/assets/images/unsplash_38.png" alt="hyperlocal" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>Hyperlocal Delivery Solutions</span>
            </div>
            <div className="lists">
              <p>
                Fast and flexible delivery platforms for groceries, medicines,
                and essentials — powered by smart logistics and route
                optimization.
              </p>
            </div>
          </div>
        </div>

        {/* On Demand Healthcare */}
        <div className="description-container rest right">
          <div className="sec1 image-right">
            <div className="desimg">
              <img src="/assets/images/unsplash_39.png" alt="healthcare apps" />
            </div>
          </div>

          <div className="sec3">
            <div className="desheading2">
              <span>On-Demand Healthcare Apps</span>
            </div>
            <div className="lists">
              <p>
                Teleconsultation and healthcare service apps with appointment
                scheduling, secure video calls, and digital prescriptions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA / FOOTER handled globally */}
    </section>
  );
}
