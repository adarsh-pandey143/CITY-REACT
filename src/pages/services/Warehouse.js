
import React from "react";
import { Link } from "react-router-dom";

import "./Warehouse.css";

import warehouseImage from "../../assets/images/cargo.jpg";

const Warehouse = () => {
  return (
    <div className="warehouse-page">

      {/* ================= HERO ================= */}
      <section
        className="warehouse-hero"
        style={{
          backgroundImage: `url(${warehouseImage})`,
        }}
      >
        <div className="warehouse-hero-overlay"></div>

        <div className="warehouse-container">
          <div className="warehouse-hero-content">

            <span className="warehouse-hero-eyebrow">
              SEA COURIER SERVICES
            </span>

            <h1>
              Reliable Sea Courier &
              <span>International Shipment Solutions</span>
            </h1>

            <p>
              City Express Courier provides dependable sea courier services
              for businesses and customers requiring secure, cost-effective
              and reliable transportation of shipments to international
              destinations.
            </p>

            <Link
              to="/contact-us"
              className="warehouse-primary-btn"
            >
              Request A Free Quote
              <span>→</span>
            </Link>

          </div>
        </div>

        <div className="warehouse-hero-bottom">
          <div>SECURE SHIPPING</div>
          <div>INTERNATIONAL DELIVERY</div>
          <div>COST-EFFECTIVE SERVICE</div>
        </div>
      </section>


      {/* ================= CONTENT ================= */}
      <section className="warehouse-content-section">

        <div className="warehouse-container">

          {/* ================= INTRO ================= */}
          <div className="warehouse-intro">

            <span className="warehouse-section-tag">
              SEA COURIER SOLUTIONS
            </span>

            <h2>
              Reliable Sea Courier &
              <span>International Shipping Services</span>
            </h2>

            <p>
              City Express Courier provides sea courier solutions for
              businesses and individuals who need dependable international
              shipment transportation. Our sea delivery services are designed
              for secure handling, organized shipment movement and
              cost-effective transportation across international destinations.
            </p>

          </div>


          {/* ================= FEATURES ================= */}
          <div className="warehouse-feature-grid">

            <div className="warehouse-feature-card warehouse-feature-card-highlight">

              <div className="warehouse-feature-number">
                01
              </div>

              <div className="warehouse-feature-icon">
                🚢
              </div>

              <h3>
                International Sea Shipping
              </h3>

              <p>
                Reliable sea transportation solutions for shipments moving
                between international destinations through established
                shipping routes.
              </p>

              <Link to="/contact-us">
                Discuss Service
                <span>→</span>
              </Link>

            </div>


            <div className="warehouse-feature-card">

              <div className="warehouse-feature-number">
                02
              </div>

              <div className="warehouse-feature-icon">
                📦
              </div>

              <h3>
                Secure Shipment Handling
              </h3>

              <p>
                Careful handling of parcels and shipments throughout the
                sea courier process to support safe and organized delivery.
              </p>

              <Link to="/contact-us">
                Discuss Service
                <span>→</span>
              </Link>

            </div>


            <div className="warehouse-feature-card">

              <div className="warehouse-feature-number">
                03
              </div>

              <div className="warehouse-feature-icon">
                🌍
              </div>

              <h3>
                International Destinations
              </h3>

              <p>
                Sea courier support for businesses and customers sending
                shipments to destinations across international markets.
              </p>

              <Link to="/contact-us">
                Discuss Service
                <span>→</span>
              </Link>

            </div>


            <div className="warehouse-feature-card">

              <div className="warehouse-feature-number">
                04
              </div>

              <div className="warehouse-feature-icon">
                ⚓
              </div>

              <h3>
                Port-to-Destination Delivery
              </h3>

              <p>
                Organized shipment movement from port handling through
                delivery coordination for a smoother international courier
                experience.
              </p>

              <Link to="/contact-us">
                Discuss Service
                <span>→</span>
              </Link>

            </div>


            <div className="warehouse-feature-card">

              <div className="warehouse-feature-number">
                05
              </div>

              <div className="warehouse-feature-icon">
                🛡
              </div>

              <h3>
                Safe Shipment Management
              </h3>

              <p>
                Responsible shipment management and handling practices
                designed to support secure movement during sea transportation.
              </p>

              <Link to="/contact-us">
                Discuss Service
                <span>→</span>
              </Link>

            </div>


            <div className="warehouse-feature-card">

              <div className="warehouse-feature-number">
                06
              </div>

              <div className="warehouse-feature-icon">
                📍
              </div>

              <h3>
                Sea Delivery Coordination
              </h3>

              <p>
                Coordinated sea courier operations helping businesses manage
                international shipments and delivery requirements efficiently.
              </p>

              <Link to="/contact-us">
                Discuss Service
                <span>→</span>
              </Link>

            </div>

          </div>


          {/* ================= BENEFITS ================= */}
          <div className="warehouse-benefits">

            <div className="warehouse-benefits-heading">

              <span className="warehouse-section-tag">
                WHY CHOOSE US
              </span>

              <h2>
                Reliable Sea Shipping.
                <span>Global Delivery.</span>
              </h2>

              <p>
                Sea courier services provide a practical solution for
                international shipments requiring secure transportation,
                organized handling and cost-effective delivery.
              </p>

            </div>


            <div className="warehouse-benefits-list">

              <div className="warehouse-benefit-item">

                <div className="warehouse-benefit-number">
                  01
                </div>

                <div>
                  <h3>
                    Secure Sea Transportation
                  </h3>

                  <p>
                    Reliable shipment handling and transportation support
                    for international sea courier requirements.
                  </p>
                </div>

              </div>


              <div className="warehouse-benefit-item">

                <div className="warehouse-benefit-number">
                  02
                </div>

                <div>
                  <h3>
                    Cost-Effective Shipping
                  </h3>

                  <p>
                    Sea transportation offers a practical option for
                    businesses managing international shipment requirements.
                  </p>
                </div>

              </div>


              <div className="warehouse-benefit-item">

                <div className="warehouse-benefit-number">
                  03
                </div>

                <div>
                  <h3>
                    Professional Shipment Handling
                  </h3>

                  <p>
                    Careful handling and organized shipment processes help
                    maintain reliable movement throughout sea transportation.
                  </p>
                </div>

              </div>


              <div className="warehouse-benefit-item">

                <div className="warehouse-benefit-number">
                  04
                </div>

                <div>
                  <h3>
                    International Delivery Support
                  </h3>

                  <p>
                    Coordinated support for businesses and customers sending
                    shipments to international destinations.
                  </p>
                </div>

              </div>


              <div className="warehouse-benefit-item">

                <div className="warehouse-benefit-number">
                  05
                </div>

                <div>
                  <h3>
                    Organized Port Coordination
                  </h3>

                  <p>
                    Structured coordination helps manage shipment movement
                    through ports and onward delivery requirements.
                  </p>
                </div>

              </div>


              <div className="warehouse-benefit-item">

                <div className="warehouse-benefit-number">
                  06
                </div>

                <div>
                  <h3>
                    Global Shipment Assistance
                  </h3>

                  <p>
                    Courier support for businesses managing regular
                    international sea shipment and delivery requirements.
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* ================= CTA ================= */}
          <div className="warehouse-cta">

            <div className="warehouse-cta-mark">
              CITY
            </div>

            <div className="warehouse-cta-content">

              <span>
                CITY EXPRESS COURIER
              </span>

              <h2>
                Need Reliable
                <span>Sea Courier Services?</span>
              </h2>

              <p>
                Tell us about your international shipment requirements and
                our team can help you plan a suitable sea courier and delivery
                solution.
              </p>

            </div>

            <Link
              to="/contact-us"
              className="warehouse-cta-button"
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

export default Warehouse;

