import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

import heroImg from "../assets/images/ware.jpg";
import companyImg from "../assets/images/careers1.jpg";
import chairmanImg from "../assets/images/owner.jpg";

const AboutUs = () => {

return (

<div className="about-page">

    {/* ================= HERO ================= */}

    <section
      className="about-hero"
      style={{
        backgroundImage: `url(${heroImg})`
      }}
    >
      <div className="about-overlay"></div>

      <div className="container">

        <div className="about-hero-content">

          <span>WELCOME TO</span>

        <h1>World Wide Courier Cargo</h1>

<p>
  World Wide Courier Cargo provides reliable domestic and
  international courier, cargo and logistics solutions with
  a commitment to speed, safety and customer satisfaction.
</p>

          <Link
            to="/contact-us"
            className="btn-primary"
          >
            Contact Us
          </Link>

        </div>

      </div>

    </section>

    {/* ================= COMPANY INTRO ================= */}

    <section className="company-section">

      <div className="container">

        <div className="about-company-grid">

          {/* ================= LEFT ================= */}

<div className="company-content">

<span className="section-tag">
  ABOUT COMPANY
</span>

<h2>
  Your Trusted Courier & Cargo Partner Across India
</h2>

<p>
  World Wide Courier Cargo is a leading courier, cargo and
  logistics company committed to providing fast, secure and
  reliable transportation solutions across India. Backed by
  a strong delivery network, advanced tracking technology
  and an experienced team, we ensure every shipment reaches
  its destination safely and on time.
</p>

<p>
  From important documents and parcels to commercial cargo
  and bulk consignments, we offer customized logistics
  solutions designed to meet the unique requirements of
  businesses and individuals. Our focus on quality service,
  timely delivery and customer satisfaction has made us a
  trusted logistics partner nationwide.
</p>
<div className="company-points">

  <div className="point">
    ✔ Domestic & International Network
  </div>

  <div className="point">
    ✔ Fast, Safe & On-Time Delivery
  </div>

  <div className="point">
    ✔ Real-Time Shipment Tracking
  </div>

  <div className="point">
    ✔ Customer-Focused Logistics Solutions
  </div>

</div>

</div>

{/* ================= RIGHT IMAGE ================= */}

<div className="company-image">

  <img
    src={companyImg}
    alt="WWW Express"
  />

</div>

</div>

</div>

</section>

{/* ================= WHY CHOOSE US ================= */}

<section className="why-us">

  <div className="container">

    <div className="about-section-heading">

      <span>WHY CHOOSE US</span>

      <h2>
        Delivering Excellence, Every Step Of The Way
      </h2>

      <p>
        World Wide Courier Cargo combines speed, security and
        technology to provide dependable courier, cargo and
        logistics solutions for businesses and individuals.
      </p>

    </div>

    <div className="about-why-grid">

      <div className="why-card">

        <div className="why-icon">🚚</div>

        <h3>Fast & On-Time Delivery</h3>

        <p>
          Our dedicated transportation network ensures every
          shipment is delivered safely and within the promised
          delivery schedule.
        </p>

      </div>

      <div className="why-card">

        <div className="why-icon">📦</div>

        <h3>Secure Cargo Handling</h3>

        <p>
          Every parcel and cargo shipment is handled with
          professional care to ensure maximum safety during
          transit and delivery.
        </p>

      </div>

      <div className="why-card">

        <div className="why-icon">📍</div>

        <h3>Real-Time Shipment Tracking</h3>

        <p>
          Track your shipment anytime with our advanced
          tracking system and receive timely delivery updates.
        </p>

      </div>

      <div className="why-card">

        <div className="why-icon">🌍</div>

        <h3>Nationwide & Worldwide Network</h3>

        <p>
          We provide reliable domestic and international
          courier and cargo services through our extensive
          logistics network.
        </p>

      </div>

    </div>

  </div>

</section>

{/* ================= CHAIRMAN MESSAGE ================= */}

<section className="chairman-section">

  <div className="container">

    <div className="chairman-grid">

      {/* ================= CHAIRMAN IMAGE ================= */}

<div className="chairman-image">

  <img
    src={chairmanImg}
    alt="Chairman"
  />

</div>

{/* ================= MESSAGE ================= */}

<div className="chairman-content">

  <span className="section-tag">
    CHAIRMAN'S MESSAGE
  </span>

  <h2>
    A Message From Our Founder & Chairman
  </h2>

  <p>
    At World Wide Courier Cargo, we believe that every shipment
    represents a promise of trust, reliability and customer
    satisfaction. Our mission is to provide fast, secure and
    efficient courier, cargo and logistics solutions that
    consistently exceed our customers' expectations.
  </p>

  <p>
    Through continuous investment in advanced technology,
    a strong transportation network and a dedicated team of
    professionals, we strive to deliver excellence in every
    shipment. Our focus has always been on building long-term
    relationships through quality service, transparency and
    operational excellence.
  </p>

  <p>
    I sincerely thank our valued customers, business partners
    and employees for their continued trust and support.
    Together, we will continue expanding our network and
    delivering world-class courier and cargo solutions for
    many years to come.
  </p>

  <div className="signature">

    <h4>Shashi Ranjan Panday</h4>

    <span>Founder & Chairman</span>

    <p>World Wide Courier Cargo</p>

  </div>

</div>

</div>

</div>

</section>

{/* ================= VISION • MISSION • VALUES ================= */}

<section className="vmv-section">

  <div className="container">

    <div className="about-vmv-grid">

      {/* ================= VISION ================= */}

      <div className="vmv-card">

        <div className="vmv-icon">🌍</div>

        <h3>Our Vision</h3>

        <p>
          To become a globally trusted courier, cargo and
          logistics company by delivering innovative,
          reliable and customer-centric transportation
          solutions that connect businesses and people
          across India and the world.
        </p>

      </div>

      {/* ================= MISSION ================= */}

      <div className="vmv-card">

        <div className="vmv-icon">🚀</div>

        <h3>Our Mission</h3>

        <p>
          To provide fast, secure and cost-effective courier,
          cargo and logistics services through advanced
          technology, an experienced team and an efficient
          transportation network while exceeding customer
          expectations.
        </p>

      </div>

      {/* ================= VALUES ================= */}

      <div className="vmv-card">

        <div className="vmv-icon">🤝</div>

        <h3>Our Core Values</h3>

        <p>
          Integrity, reliability, customer satisfaction,
          transparency, innovation and operational
          excellence are the values that guide every
          shipment we deliver.
        </p>

      </div>

    </div>

  </div>

</section>

{/* ================= COMPANY STATS ================= */}

<section className="company-stats">

  <div className="container">

    <div className="about-stats-grid">

      <div className="about-stat-card">
        <h2>15+</h2>
        <span>Years of Industry Experience</span>
      </div>

      <div className="about-stat-card">
        <h2>10K+</h2>
        <span>Successful Shipments Delivered</span>
      </div>

      <div className="about-stat-card">
        <h2>5000+</h2>
        <span>Satisfied Customers</span>
      </div>

      <div className="about-stat-card">
        <h2>24×7</h2>
        <span>Customer Support</span>
      </div>

    </div>

  </div>

</section>

{/* ================= CTA ================= */}

<section className="about-cta">

  <div className="container">

    <h2>
      Ready To Ship With World Wide Courier Cargo?
    </h2>

    <p>
      Whether you need domestic courier services,
      international cargo solutions or customized
      logistics support, our team is ready to help
      your business move faster with reliable and
      cost-effective transportation services.
    </p>

    <Link
      to="/NotFound"
      className="btn-primary"
    >
      Request a Free Quote
    </Link>

  </div>

</section>

</div>

);

};

export default AboutUs;


