import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

import heroImg from "../assets/images/ware.jpg";
import companyImg from "../assets/images/main.jpg";
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

          <h1>R A LOGISTICS</h1>

          <p>
            Delivering reliable logistics, transportation and
            supply chain solutions across India with
            speed, safety and commitment.
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
    Your Trusted Logistics Partner Across India
  </h2>

  <p>
    R A LOGISTICS has been providing reliable transportation,
    courier and supply chain solutions to businesses across
    India. We combine modern technology, experienced
    professionals and a strong transportation network to
    deliver every shipment safely and on time.
  </p>

  <p>
    From small parcels to large commercial consignments,
    our team ensures secure handling, live tracking and
    cost-effective logistics solutions that help our
    customers grow their business.
  </p>

  <div className="company-points">

    <div className="point">
      ✔ PAN India Network
    </div>

    <div className="point">
      ✔ Fast & Secure Delivery
    </div>

    <div className="point">
      ✔ Experienced Logistics Team
    </div>

    <div className="point">
      ✔ Real-Time Shipment Tracking
    </div>

  </div>

</div>

{/* ================= RIGHT IMAGE ================= */}

<div className="company-image">

  <img
    src={companyImg}
    alt="RA Logistics"
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
        We Deliver More Than Packages
      </h2>

    </div>

    <div className="about-why-grid">

      <div className="why-card">

  <div className="why-icon">🚚</div>

  <h3>Fast Delivery</h3>

  <p>
    We ensure every shipment reaches its destination safely,
    quickly and within the committed delivery schedule.
  </p>

</div>

<div className="why-card">

  <div className="why-icon">📦</div>

  <h3>Safe Cargo Handling</h3>

  <p>
    Every package is handled with professional care using
    secure loading, unloading and transportation practices.
  </p>

</div>

<div className="why-card">

  <div className="why-icon">📍</div>

  <h3>Live Tracking</h3>

  <p>
    Stay updated with your shipment status through our
    tracking system and customer support team.
  </p>

</div>

<div className="why-card">

  <div className="why-icon">🤝</div>

  <h3>Trusted Service</h3>

  <p>
    Years of industry experience and thousands of successful
    deliveries have made us a trusted logistics partner.
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
    CHAIRMAN MESSAGE
  </span>

  <h2>
    A Message From Our Leadership
  </h2>

  <p>
    At R A LOGISTICS, our mission has always been to provide
    dependable, transparent and customer-focused logistics
    solutions. Every shipment entrusted to us represents our
    commitment to quality, reliability and excellence.
  </p>

  <p>
    We continuously invest in our people, transportation
    network and technology to deliver faster, safer and more
    efficient logistics services across India. Our customers'
    trust inspires us to improve every day.
  </p>

  <p>
    We sincerely thank all our clients, partners and employees
    for being an important part of our journey. Together, we
    will continue building a stronger and more reliable
    logistics network for the future.
  </p>

  <div className="signature">

    <h4>Dinanath Upadhyay</h4>

    <span>Founder & Chairman</span>

    <p>R A LOGISTICS</p>

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

  <div className="vmv-icon">👁️</div>

  <h3>Our Vision</h3>

  <p>
    To become India's most trusted logistics company by
    delivering innovative, reliable and customer-focused
    transportation solutions.
  </p>

</div>

{/* ================= MISSION ================= */}

<div className="vmv-card">

  <div className="vmv-icon">🎯</div>

  <h3>Our Mission</h3>

  <p>
    To provide safe, timely and cost-effective logistics
    services while continuously improving our technology,
    operations and customer experience.
  </p>

</div>

{/* ================= VALUES ================= */}

<div className="vmv-card">

  <div className="vmv-icon">⭐</div>

  <h3>Our Values</h3>

  <p>
    Integrity, customer satisfaction, teamwork, innovation,
    transparency and commitment drive every shipment we
    deliver.
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
        <span>Years Experience</span>
      </div>

      <div className="about-stat-card">
        <h2>5000+</h2>
        <span>Happy Clients</span>
      </div>

      <div className="about-stat-card">
        <h2>150+</h2>
        <span>Vehicles</span>
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

    <h2>Let's Move Your Business Forward</h2>

    <p>
      Partner with R A LOGISTICS for secure, fast and
      dependable transportation solutions across India.
    </p>

    <Link
      to="/contact-us"
      className="btn-primary"
    >
      Get a Free Quote
    </Link>

  </div>

</section>

</div>

);

};

export default AboutUs;


