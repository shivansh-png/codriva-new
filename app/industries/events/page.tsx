import Link from "next/link";


export default function EventsPage() {
  return (
    <section className="min-h-screen pt-32 pb-20">

      {/* HERO SECTION */}
      <section className="hero-section section-full-width relative">
        <img
          src="/assets/images/unsplash_50.png"
          alt="events"
          className="bg-image"
        />

        <div className="smallrectangle">
          <img src="/assets/images/Group 65.png" alt="small-graphic" />
        </div>

        <Link
          href="/contact"
          className="btn btn-mid-light-primary abtbtn btn-shadow"
        >
          Let's Talk <i className="fas fa-arrow-right"></i>
        </Link>

        <div className="retail-img1 rectangle-img"></div>

        <p className="indtext1">Digital Solutions for Smarter Events</p>
      </section>

      {/* INTRO SECTION */}
      <div className="inosec container-max">
        <div className="ino-biglet">
          <h1>End-to-End Solutions for the Event Industry</h1>
        </div>

        <p>
          The Events and Ticketing industry demands seamless solutions that
          simplify event management, ticket sales, and attendee engagement. At
          Codriva, we develop comprehensive software platforms that streamline
          the entire event lifecycle—from planning and promotion to ticketing
          and post-event analytics.
        </p>

        <p>
          Our solutions include intuitive ticket booking systems, secure payment
          processing, real-time seat selection, and digital ticket delivery to
          ensure a smooth and user-friendly experience for attendees. We also
          offer tools for event organizers such as attendee management, access
          control, and marketing automation to maximize reach and operational
          efficiency.
        </p>

        <p>
          By integrating mobile apps, social media, and analytics dashboards,
          Codriva empowers event organizers to boost engagement, track
          performance, and gather valuable insights for future planning. Our
          scalable platforms support a wide range of events, from concerts and
          conferences to sports and community gatherings, ensuring reliability
          and security at every step.
        </p>

        <p>
          With Codriva’s advanced Events & Ticketing solutions, businesses can
          elevate their event experiences, drive higher attendance, and create
          lasting connections with their audiences.
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
              <img src="/assets/images/unsplash_51.png" alt="" />
            </div>
          </div>
          <div className="sec3">
            <div className="desheading2">
              <span>Online Ticket Booking Platforms</span>
            </div>
            <div className="lists">
              <p>
                Custom-built systems for event discovery, real-time seat
                selection, secure payments, and ticket delivery.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCK 2 */}
        <div className="description-container rest right">
          <div className="sec1 image-right">
            <div className="desimg">
              <img src="/assets/images/unsplash_52.png" alt="" />
            </div>
          </div>
          <div className="sec3">
            <div className="desheading2">
              <span>Event Mobile Applications</span>
            </div>
            <div className="lists">
              <p>
                User-friendly apps for attendees to browse events, book tickets,
                get updates, and access digital passes.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCK 3 */}
        <div className="description-container rest left">
          <div className="sec1 image-left">
            <div className="desimg">
              <img src="/assets/images/unsplash_53.png" alt="" />
            </div>
          </div>
          <div className="sec3">
            <div className="desheading2">
              <span>Event Management Dashboards</span>
            </div>
            <div className="lists">
              <p>
                Comprehensive tools for organizers to manage event listings,
                ticket inventory, pricing, and analytics.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCK 4 */}
        <div className="description-container rest right">
          <div className="sec1 image-right">
            <div className="desimg">
              <img src="/assets/images/unsplash_54.png" alt="" />
            </div>
          </div>
          <div className="sec3">
            <div className="desheading2">
              <span>QR Code-Based Check-In Systems</span>
            </div>
            <div className="lists">
              <p>
                Frictionless entry experience with QR code scanning and
                real-time attendance tracking.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA / FOOTER already included in your global layout */}
    </section>
  );
}
