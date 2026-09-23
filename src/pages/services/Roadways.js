import React from "react";
import { Link } from "react-router-dom";

import "./Roadways.css";

import roadImage from "../../assets/images/road.jpg";

const Roadways = () => {
  return (
    <div className="roadways-page">

      {/* ================= HERO ================= */}

      <section
        className="roadways-hero"
        style={{
          backgroundImage: `url(${roadImage})`,
        }}
      >

        <div className="roadways-hero-overlay"></div>

        <div className="roadways-container">

          <div className="roadways-hero-content">

            <span className="roadways-eyebrow">
              DOMESTIC COURIER & CARGO SERVICES
            </span>

            <h1>
              Reliable Domestic
              <span>Delivery Across India</span>
            </h1>

            <p>
              City Express Courier provides reliable domestic
              transportation solutions for businesses and
              individuals. With efficient transportation, secure
              shipment handling and dependable delivery services,
              we help move consignments safely across India.
            </p>

            <Link
              to="/contact-us"
              className="roadways-primary-btn"
            >
              Request A Free Quote
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>


      {/* ================= CONTENT ================= */}

      <section className="roadways-content-section">

        <div className="roadways-container">

          {/* ================= INTRO ================= */}

          <div className="roadways-intro">

            <span className="roadways-section-tag">
              DOMESTIC DELIVERY SOLUTIONS
            </span>

            <h2>
              Safe, Reliable & Efficient
              <strong>Domestic Transportation</strong>
            </h2>

            <p>
              City Express Courier offers dependable domestic
              transportation services for shipments of different
              sizes and requirements. From small consignments to
              large commercial shipments and full truck loads,
              our focus is on safe handling, efficient movement
              and dependable delivery across major destinations
              in India.
            </p>

          </div>


          {/* ================= FEATURES ================= */}

          <div className="roadways-feature-grid">

            <div className="roadways-feature-card">

              <div className="roadways-feature-icon">
                🚛
              </div>

              <h3>
                Full Truck Load
              </h3>

              <p>
                Dedicated transportation solutions for
                large-volume and commercial shipments with
                dedicated vehicle capacity.
              </p>

            </div>


            <div className="roadways-feature-card">

              <div className="roadways-feature-icon">
                📦
              </div>

              <h3>
                Shipment Transportation
              </h3>

              <p>
                Reliable transportation for parcels,
                commercial goods and general shipments with
                secure handling throughout the journey.
              </p>

            </div>


            <div className="roadways-feature-card">

              <div className="roadways-feature-icon">
                🏠
              </div>

              <h3>
                Door-to-Door Delivery
              </h3>

              <p>
                Convenient pickup and delivery solutions from
                the sender's location to the required destination.
              </p>

            </div>


            <div className="roadways-feature-card">

              <div className="roadways-feature-icon">
                ⚡
              </div>

              <h3>
                Timely Delivery
              </h3>

              <p>
                Efficient transportation planning and coordinated
                operations to support dependable delivery schedules.
              </p>

            </div>


            <div className="roadways-feature-card">

              <div className="roadways-feature-icon">
                🛡
              </div>

              <h3>
                Safe Shipment Handling
              </h3>

              <p>
                Careful loading, transportation and unloading
                practices help protect shipments throughout
                their domestic journey.
              </p>

            </div>


            <div className="roadways-feature-card">

              <div className="roadways-feature-icon">
                📍
              </div>

              <h3>
                Shipment Tracking
              </h3>

              <p>
                Shipment status updates help you stay informed
                about your consignment during transportation.
              </p>

            </div>

          </div>


          {/* ================= BENEFITS ================= */}

          <div className="roadways-benefits">

            <div className="roadways-benefits-heading">

              <span>
                WHY CITY EXPRESS
              </span>

              <h2>
                Domestic Delivery
                <strong>Built Around Reliability.</strong>
              </h2>

            </div>


            <div className="roadways-benefits-list">

              <div className="roadways-benefit-item">
                <span>01</span>
                <p>
                  Reliable domestic transportation across India
                </p>
              </div>

              <div className="roadways-benefit-item">
                <span>02</span>
                <p>
                  Solutions for small, medium and large consignments
                </p>
              </div>

              <div className="roadways-benefit-item">
                <span>03</span>
                <p>
                  Full Truck Load transportation solutions
                </p>
              </div>

              <div className="roadways-benefit-item">
                <span>04</span>
                <p>
                  Safe and secure shipment handling
                </p>
              </div>

              <div className="roadways-benefit-item">
                <span>05</span>
                <p>
                  Door-to-door pickup and delivery options
                </p>
              </div>

              <div className="roadways-benefit-item">
                <span>06</span>
                <p>
                  Shipment tracking and status updates
                </p>
              </div>

              <div className="roadways-benefit-item">
                <span>07</span>
                <p>
                  Timely and dependable shipment movement
                </p>
              </div>

              <div className="roadways-benefit-item">
                <span>08</span>
                <p>
                  Cost-effective transportation solutions
                </p>
              </div>

            </div>

          </div>


          {/* ================= CTA ================= */}

          <div className="roadways-cta">

            <div className="roadways-cta-content">

              <span>
                DOMESTIC DELIVERY SERVICES
              </span>

              <h2>
                Looking For Reliable
                <strong>Domestic Delivery?</strong>
              </h2>

              <p>
                Choose City Express Courier for dependable
                domestic transportation solutions across India.
                Whether you need to move individual consignments
                or large commercial shipments, our team is
                committed to providing safe, efficient and
                reliable delivery services.
              </p>

            </div>

            <Link
              to="/contact-us"
              className="roadways-cta-button"
            >
              Request A Free Quote
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Roadways;