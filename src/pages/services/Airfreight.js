import React from "react";
import { Link } from "react-router-dom";
import "./Airfreight.css";

import airImage from "../../assets/images/air.jpg";

const Airfreight = () => {
  return (
    <div className="airfreight-page">

      {/* ================= HERO ================= */}

      <section
        className="airfreight-hero"
        style={{
          backgroundImage: `url(${airImage})`,
        }}
      >
        <div className="airfreight-hero-overlay"></div>

        <div className="airfreight-container">

          <div className="airfreight-hero-content">

            <span className="airfreight-hero-tag">
              AIR FREIGHT SERVICES
            </span>

            <h1>
              Fast & Reliable Air Cargo Solutions
            </h1>

            <p>
              City Express Courier provides secure,
              time-sensitive and efficient air freight
              services for businesses requiring faster
              domestic and international cargo movement.
            </p>

            <Link
              to="/NotFound"
              className="airfreight-btn-primary"
            >
              Request A Quote
            </Link>

          </div>

        </div>
      </section>

      {/* ================= CONTENT ================= */}

      <section className="airfreight-content-section">

        <div className="airfreight-container">

          {/* ================= INTRO ================= */}

          <div className="airfreight-intro">

            <span className="airfreight-section-tag">
              AIR FREIGHT SOLUTIONS
            </span>

            <h2>
              Fast, Secure & Time-Critical Air Cargo Services
            </h2>

            <p>
              City Express Courier offers dependable air freight
              solutions for businesses that require speed, security
              and efficiency. From urgent documents to commercial
              cargo, we ensure timely transportation through our
              trusted logistics network while maintaining the highest
              standards of safety and service quality.
            </p>

          </div>

          {/* ================= FEATURES ================= */}

          <div className="airfreight-feature-grid">

            <div className="airfreight-feature-card">
              <div className="airfreight-feature-icon">✈</div>

              <h3>
                Domestic Air Freight
              </h3>

              <p>
                Fast and secure delivery connecting major
                airports and commercial hubs across India.
              </p>
            </div>

            <div className="airfreight-feature-card">
              <div className="airfreight-feature-icon">🌍</div>

              <h3>
                International Air Cargo
              </h3>

              <p>
                Reliable international shipping through
                trusted airline partners and global logistics
                connections.
              </p>
            </div>

            <div className="airfreight-feature-card">
              <div className="airfreight-feature-icon">⚡</div>

              <h3>
                Express Priority Service
              </h3>

              <p>
                Dedicated solutions for urgent shipments
                requiring the fastest possible delivery.
              </p>
            </div>

            <div className="airfreight-feature-card">
              <div className="airfreight-feature-icon">📦</div>

              <h3>
                Commercial Cargo
              </h3>

              <p>
                Safe handling of commercial, industrial and
                high-value cargo with complete shipment care.
              </p>
            </div>

            <div className="airfreight-feature-card">
              <div className="airfreight-feature-icon">🛡</div>

              <h3>
                Secure Handling
              </h3>

              <p>
                Professional packaging coordination and
                secure cargo management from pickup to delivery.
              </p>
            </div>

            <div className="airfreight-feature-card">
              <div className="airfreight-feature-icon">📍</div>

              <h3>
                Live Shipment Tracking
              </h3>

              <p>
                Stay informed with real-time shipment
                updates throughout the transportation process.
              </p>
            </div>

          </div>

          {/* ================= BENEFITS ================= */}

          <div className="airfreight-benefits">

            <div className="airfreight-benefits-content">

              <span className="airfreight-section-tag">
                WHY CITY EXPRESS
              </span>

              <h2>
                Why Choose City Express Courier?
              </h2>

              <p>
                Our air freight services are designed to provide
                businesses with dependable transportation, secure
                handling and timely delivery support.
              </p>

              <ul>

                <li>
                  <span>✓</span>
                  Fast and dependable air freight solutions
                </li>

                <li>
                  <span>✓</span>
                  Domestic & international cargo support
                </li>

                <li>
                  <span>✓</span>
                  Time-critical express shipment handling
                </li>

                <li>
                  <span>✓</span>
                  Safe and secure transportation process
                </li>

                <li>
                  <span>✓</span>
                  Real-time shipment tracking
                </li>

                <li>
                  <span>✓</span>
                  Professional logistics specialists
                </li>

                <li>
                  <span>✓</span>
                  Competitive pricing with transparent service
                </li>

                <li>
                  <span>✓</span>
                  Dedicated customer support
                </li>

              </ul>

            </div>

            <div className="airfreight-benefits-box">

              <div className="airfreight-benefits-box-icon">
                ✈
              </div>

              <h3>
                Speed Meets Reliability
              </h3>

              <p>
                From urgent documents to commercial shipments,
                our air freight solutions are built around speed,
                safety and dependable service.
              </p>

            </div>

          </div>

          {/* ================= CTA ================= */}

          <div className="airfreight-cta">

            <div className="airfreight-cta-content">

              <span className="airfreight-cta-tag">
                READY TO SHIP?
              </span>

              <h2>
                Ready To Ship By Air?
              </h2>

              <p>
                Contact City Express Courier today for
                customized air freight solutions tailored to
                your business requirements. Our logistics team
                is ready to provide fast, secure and reliable
                transportation services.
              </p>

            </div>

            <Link
              to="/NotFound"
              className="airfreight-btn-primary airfreight-cta-btn"
            >
              Request A Free Quote
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Airfreight;