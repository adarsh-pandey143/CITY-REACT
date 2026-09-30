
import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

import heroImg from "../assets/images/abouts.jpg";
import companyImg from "../assets/images/contacts.jpg";
import chairmanImg from "../assets/images/owner5.jpeg";

const AboutUs = () => {
  return (
    <div className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="about-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="about-overlay"></div>

        <div className="container">
          <div className="about-hero-content">

            <span className="about-hero-eyebrow">
              ABOUT CITY EXPRESS COURIER
            </span>

            <h1>
              Moving Your Business
              <span> Forward With Confidence.</span>
            </h1>

            <p>
              City Express Courier provides dependable courier and delivery
              solutions designed around safety, efficiency, timely delivery
              and customer satisfaction.
            </p>

            <div className="about-hero-actions">

              <Link
                to="/contact-us"
                className="btn-primary"
              >
                Get In Touch
              </Link>

              <Link
                to="/services"
                className="about-btn-secondary"
              >
                Explore Our Services
              </Link>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          COMPANY INTRODUCTION
      ===================================================== */}

      <section className="company-section">

        <div className="container">

          <div className="about-company-grid">

            {/* LEFT CONTENT */}

            <div className="company-content">

              <span className="section-tag">
                WHO WE ARE
              </span>

              <h2>
                A Reliable Partner For
                <span> Every Delivery.</span>
              </h2>

              <p>
                City Express Courier is a customer-focused courier and delivery
                company providing dependable transportation solutions for
                businesses and individuals. We are committed to making parcel
                movement simpler, safer and more efficient.
              </p>

              <p>
                From domestic and international courier services to express,
                same day, air, surface, rail, e-commerce and FTL deliveries,
                our services are designed to support different delivery
                requirements with reliable operations and careful shipment
                handling.
              </p>


              {/* COMPANY HIGHLIGHTS */}

              <div className="company-points">

                <div className="point">
                  <span className="point-icon">✓</span>
                  <span>Domestic & International Courier</span>
                </div>

                <div className="point">
                  <span className="point-icon">✓</span>
                  <span>Express, Air, Surface & Rail Delivery</span>
                </div>

                <div className="point">
                  <span className="point-icon">✓</span>
                  <span>Safe & Responsible Shipment Handling</span>
                </div>

                <div className="point">
                  <span className="point-icon">✓</span>
                  <span>Customer-Focused Courier Solutions</span>
                </div>

              </div>

            </div>


            {/* RIGHT IMAGE */}

            <div className="company-image">

              <img
                src={companyImg}
                alt="City Express Courier delivery operations"
              />

              <div className="company-image-badge">

                <strong>City Express</strong>

                <span>
                  Courier & Delivery
                </span>

              </div>

            </div>
          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="why-us">

        <div className="container">

          <div className="about-section-heading">

            <span>
              WHY CITY EXPRESS COURIER
            </span>

            <h2>
              Delivery Built Around
              <span> Reliability & Trust.</span>
            </h2>

            <p>
              We focus on dependable delivery, careful shipment handling
              and responsive customer service to create a smooth courier
              experience from pickup to final delivery.
            </p>

          </div>


          <div className="about-why-grid">


            {/* CARD 1 */}

            <div className="why-card">

              <div className="why-icon">
                🚚
              </div>

              <h3>
                Reliable Delivery
              </h3>

              <p>
                Efficient delivery processes designed to help shipments
                reach their destinations safely and on schedule.
              </p>

            </div>


            {/* CARD 2 */}

            <div className="why-card">

              <div className="why-icon">
                📦
              </div>

              <h3>
                Safe Shipment Handling
              </h3>

              <p>
                We give careful attention to parcel and shipment handling
                throughout the courier and delivery process.
              </p>

            </div>


            {/* CARD 3 */}

            <div className="why-card">

              <div className="why-icon">
                📍
              </div>

              <h3>
                Shipment Visibility
              </h3>

              <p>
                Tracking support helps customers stay informed about their
                shipment journey and delivery progress.
              </p>

            </div>


            {/* CARD 4 */}

            <div className="why-card">

              <div className="why-icon">
                🌍
              </div>

              <h3>
                Multiple Delivery Services
              </h3>

              <p>
                Flexible courier solutions covering domestic, international,
                express, air, surface, rail and specialized delivery needs.
              </p>

            </div>


          </div>

        </div>

      </section>


      {/* =====================================================
          CHAIRMAN MESSAGE
      ===================================================== */}

      <section className="chairman-section">

        <div className="container">

          <div className="chairman-grid">


            {/* IMAGE */}

            <div className="chairman-image">

              <img
                src={chairmanImg}
                alt="Jagjeet Singh, Founder and Chairman"
              />

              <div className="chairman-image-caption">

                <strong>
                  Jagjeet Singh 
                </strong>

                <span>
                  Founder & Chairman
                </span>

              </div>

            </div>


            {/* MESSAGE */}

            <div className="chairman-content">

              <span className="section-tag">
                LEADERSHIP
              </span>

              <h2>
                A Message From Our
                <span> Founder & Chairman</span>
              </h2>

              <p>
                At City Express Courier, we believe that every delivery
                represents more than a package. It represents a responsibility,
                a commitment and the trust our customers place in us.
              </p>

              <p>
                Our goal is to provide reliable, secure and efficient courier
                and delivery services that respond to the changing needs of
                businesses and individuals. We continuously focus on improving
                our delivery network, operational processes and customer
                service.
              </p>

              <p>
                From domestic courier to international shipments and
                specialized delivery services, our approach remains centered
                around dependable operations, responsible shipment handling
                and customer satisfaction.
              </p>

              <p>
                I sincerely thank our customers, business partners and team
                members for their continued trust and support. We look forward
                to strengthening our services and building long-term
                relationships through reliable courier and delivery solutions.
              </p>


              <div className="signature">

                <h4>
                  Jagjeet Singh 
                </h4>

                <span>
                  Founder & Chairman
                </span>

                <p>
                  City Express Courier
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VISION / MISSION / VALUES
      ===================================================== */}

      <section className="vmv-section">

        <div className="container">

          <div className="about-section-heading">

            <span>
              OUR FOUNDATION
            </span>

            <h2>
              What Guides
              <span> Our Journey.</span>
            </h2>

            <p>
              Our vision, mission and values shape the way we serve customers,
              manage deliveries and build lasting business relationships.
            </p>

          </div>


          <div className="about-vmv-grid">


            {/* VISION */}

            <div className="vmv-card">

              <div className="vmv-icon">
                🌍
              </div>

              <span className="vmv-number">
                01
              </span>

              <h3>
                Our Vision
              </h3>

              <p>
                To become a trusted courier and delivery partner by providing
                reliable, efficient and customer-focused delivery solutions
                connecting businesses and people across India and
                international destinations.
              </p>

            </div>


            {/* MISSION */}

            <div className="vmv-card">

              <div className="vmv-icon">
                🚀
              </div>

              <span className="vmv-number">
                02
              </span>

              <h3>
                Our Mission
              </h3>

              <p>
                To provide safe, timely and cost-effective courier services
                through efficient delivery operations, dependable service and
                continuous improvement in customer experience.
              </p>

            </div>


            {/* VALUES */}

            <div className="vmv-card">

              <div className="vmv-icon">
                🤝
              </div>

              <span className="vmv-number">
                03
              </span>

              <h3>
                Our Core Values
              </h3>

              <p>
                Reliability, integrity, transparency, safety, customer
                satisfaction and operational excellence guide the way we
                manage every shipment and every customer relationship.
              </p>

            </div>


          </div>

        </div>

      </section>


      {/* =====================================================
          COMPANY STATS
      ===================================================== */}

      <section className="company-stats">

        <div className="container">

          <div className="about-stats-grid">


            <div className="about-stat-card">

              <div className="about-stat-icon">
                🚚
              </div>

              <h2>
                8+
              </h2>

              <span>
                Courier & Delivery Services
              </span>

            </div>


            <div className="about-stat-card">

              <div className="about-stat-icon">
                🕐
              </div>

              <h2>
                24×7
              </h2>

              <span>
                Shipment Support
              </span>

            </div>


            <div className="about-stat-card">

              <div className="about-stat-icon">
                🤝
              </div>

              <h2>
                100%
              </h2>

              <span>
                Customer-Focused Service
              </span>

            </div>


            <div className="about-stat-card">

              <div className="about-stat-icon">
                🇮🇳
              </div>

              <h2>
                Pan India
              </h2>

              <span>
                Courier Service Network
              </span>

            </div>


          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="about-cta">

        <div className="container">

          <span className="cta-eyebrow">
            LET'S MOVE FORWARD
          </span>

          <h2>
            Ready To Ship With
            <span> City Express Courier?</span>
          </h2>

          <p>
            Whether you need domestic courier, international delivery, express
            service, same day delivery, air delivery, surface transportation,
            rail delivery, e-commerce logistics or FTL services, our team is
            ready to discuss the right delivery solution for your shipment.
          </p>

          <div className="about-cta-actions">

            <Link
              to="/contact-us"
              className="btn-primary"
            >
              Request a Free Quote
            </Link>

            <Link
              to="/services"
              className="about-btn-secondary"
            >
              View Services
            </Link>

          </div>

        </div>

      </section>


    </div>
  );
};

export default AboutUs;

