
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

          <h1>City Express Cargo</h1>

          <p>
            City Express Cargo provides reliable domestic,
            international and specialized cargo logistics
            solutions with a strong commitment to safety,
            timely delivery and customer satisfaction.
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
              Your Trusted Cargo & Logistics Partner
            </h2>

            <p>
              City Express Cargo is a customer-focused cargo
              and logistics company providing dependable
              transportation solutions for businesses and
              individuals. Our services are designed to move
              shipments safely, efficiently and on time.
            </p>

            <p>
              We provide a wide range of logistics solutions
              including Domestic Cargo, International Cargo,
              Air Cargo, Surface Cargo, Cargo By Train,
              Cargo By Sea, E-Commerce Logistics and FTL
              transportation services. Our focus is on
              reliable operations, secure cargo handling and
              timely delivery.
            </p>

            <div className="company-points">

              <div className="point">
                ✔ Domestic & International Cargo Network
              </div>

              <div className="point">
                ✔ Air, Surface, Rail & Sea Transportation
              </div>

              <div className="point">
                ✔ Safe & Reliable Cargo Handling
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
              alt="City Express Cargo"
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
            Reliable Logistics. Every Shipment. Every Time.
          </h2>

          <p>
            City Express Cargo combines reliable
            transportation, secure cargo handling and
            customer-focused service to provide efficient
            logistics solutions for businesses and
            individuals.
          </p>

        </div>


        <div className="about-why-grid">


          <div className="why-card">

            <div className="why-icon">🚚</div>

            <h3>Reliable & On-Time Delivery</h3>

            <p>
              We focus on efficient transportation and
              timely delivery to ensure your shipments
              reach their destination safely and as
              scheduled.
            </p>

          </div>


          <div className="why-card">

            <div className="why-icon">📦</div>

            <h3>Safe Cargo Handling</h3>

            <p>
              Every shipment is handled with care and
              attention to ensure secure movement from
              pickup to final delivery.
            </p>

          </div>


          <div className="why-card">

            <div className="why-icon">📍</div>

            <h3>Shipment Tracking</h3>

            <p>
              Stay informed about your shipment with
              tracking support that helps you monitor
              your cargo throughout its journey.
            </p>

          </div>


          <div className="why-card">

            <div className="why-icon">🌍</div>

            <h3>Wide Logistics Network</h3>

            <p>
              Our domestic and international logistics
              solutions help connect businesses and
              customers across multiple transportation
              channels.
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
              alt="Founder & Chairman"
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
              At City Express Cargo, we believe that every
              shipment represents a responsibility and a
              promise of trust. Our goal is to provide
              reliable, secure and efficient cargo and
              logistics services that meet the changing
              needs of our customers.
            </p>

            <p>
              We are continuously focused on improving our
              transportation network, operational processes
              and customer service so that every shipment
              receives the attention it deserves. From
              domestic cargo to international shipments and
              specialized transportation services, we aim
              to deliver dependable logistics solutions.
            </p>

            <p>
              I sincerely thank our valued customers,
              business partners and team members for their
              continued trust and support. Together, we will
              continue building City Express Cargo as a
              reliable logistics partner and expanding our
              services to serve customers more efficiently.
            </p>


            <div className="signature">

              <h4>
                Jagjeet Singh Ahlawat
              </h4>

              <span>
                Founder & Chairman
              </span>

              <p>
                City Express Cargo
              </p>

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
              To become a trusted cargo and logistics
              partner by providing reliable, efficient and
              customer-focused transportation solutions
              connecting businesses and people across India
              and international destinations.
            </p>

          </div>


          {/* ================= MISSION ================= */}

          <div className="vmv-card">

            <div className="vmv-icon">🚀</div>

            <h3>Our Mission</h3>

            <p>
              To provide safe, timely and cost-effective
              cargo transportation through efficient
              logistics operations, dependable service and
              continuous improvement in customer
              experience.
            </p>

          </div>


          {/* ================= VALUES ================= */}

          <div className="vmv-card">

            <div className="vmv-icon">🤝</div>

            <h3>Our Core Values</h3>

            <p>
              Reliability, integrity, customer satisfaction,
              transparency, safety and operational excellence
              guide the way we manage every shipment and
              every customer relationship.
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

            <h2>8+</h2>

            <span>
              Cargo & Logistics Services
            </span>

          </div>


          <div className="about-stat-card">

            <h2>24×7</h2>

            <span>
              Shipment Support
            </span>

          </div>


          <div className="about-stat-card">

            <h2>100%</h2>

            <span>
              Customer-Focused Service
            </span>

          </div>


          <div className="about-stat-card">

            <h2>Pan India</h2>

            <span>
              Cargo Service Network
            </span>

          </div>


        </div>

      </div>

    </section>


    {/* ================= CTA ================= */}

    <section className="about-cta">

      <div className="container">

        <h2>
          Ready To Ship With City Express Cargo?
        </h2>

        <p>
          Whether you need domestic cargo, international
          shipping, air cargo, surface transportation,
          rail cargo, sea cargo, e-commerce logistics or
          FTL services, City Express Cargo is ready to
          provide reliable and efficient transportation
          solutions for your shipment.
        </p>

        <Link
          to="/contact-us"
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

