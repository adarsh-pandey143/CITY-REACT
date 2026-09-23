import React from "react";
import { Link } from "react-router-dom";

import "./SurfaceCargo.css";

import surfaceImage from "../../assets/images/surface.jpg";

const SurfaceCargo = () => {
  return (
    <div className="surface-cargo-page">

      {/* ================= HERO ================= */}

      <section
        className="surface-cargo-hero"
        style={{
          backgroundImage: `url(${surfaceImage})`,
        }}
      >

        <div className="surface-cargo-hero-overlay"></div>

        <div className="surface-cargo-container">

          <div className="surface-cargo-hero-content">

            <span className="surface-cargo-eyebrow">
              SURFACE TRANSPORTATION SERVICES
            </span>

            <h1>
              Reliable & Cost-Effective
              <span>Surface Transportation</span>
            </h1>

            <p>
              City Express Courier provides dependable surface
              transportation solutions for businesses and
              individuals. Our surface delivery services are
              designed for safe, efficient and economical
              movement of shipments across major destinations
              in India.
            </p>

            <Link
              to="/contact-us"
              className="surface-cargo-primary-btn"
            >
              Request A Free Quote
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>


      {/* ================= CONTENT ================= */}

      <section className="surface-cargo-content-section">

        <div className="surface-cargo-container">

          {/* ================= INTRO ================= */}

          <div className="surface-cargo-intro">

            <span className="surface-cargo-section-tag">
              SURFACE DELIVERY SOLUTIONS
            </span>

            <h2>
              Safe, Efficient &
              <strong>Economical Transportation</strong>
            </h2>

            <p>
              City Express Courier offers reliable surface
              transportation for parcels, commercial goods,
              business shipments and larger consignments. Our
              surface delivery solutions provide an efficient
              and cost-effective way to move shipments across
              different destinations while maintaining safe
              handling and dependable delivery.
            </p>

          </div>


          {/* ================= FEATURES ================= */}

          <div className="surface-cargo-feature-grid">

            <div className="surface-cargo-feature-card">

              <div className="surface-cargo-feature-icon">
                🚛
              </div>

              <h3>
                Surface Transportation
              </h3>

              <p>
                Reliable road-based transportation solutions
                for commercial shipments, parcels and general
                shipments across major destinations.
              </p>

            </div>


            <div className="surface-cargo-feature-card">

              <div className="surface-cargo-feature-icon">
                📦
              </div>

              <h3>
                Commercial Shipments
              </h3>

              <p>
                Efficient transportation for business goods,
                commercial consignments and regular shipment
                movement requirements.
              </p>

            </div>


            <div className="surface-cargo-feature-card">

              <div className="surface-cargo-feature-icon">
                🏠
              </div>

              <h3>
                Door-to-Door Delivery
              </h3>

              <p>
                Convenient pickup and delivery solutions that
                help move shipments from the origin location
                to the required destination.
              </p>

            </div>


            <div className="surface-cargo-feature-card">

              <div className="surface-cargo-feature-icon">
                💰
              </div>

              <h3>
                Cost-Effective Freight
              </h3>

              <p>
                Economical surface transportation options
                designed to provide dependable shipment
                movement while helping businesses manage
                transportation costs.
              </p>

            </div>


            <div className="surface-cargo-feature-card">

              <div className="surface-cargo-feature-icon">
                🛡
              </div>

              <h3>
                Safe Shipment Handling
              </h3>

              <p>
                Careful loading, transportation and unloading
                processes help protect shipments throughout
                their transportation journey.
              </p>

            </div>


            <div className="surface-cargo-feature-card">

              <div className="surface-cargo-feature-icon">
                📍
              </div>

              <h3>
                Shipment Tracking
              </h3>

              <p>
                Stay informed about your shipment with tracking
                and timely status updates during transportation.
              </p>

            </div>

          </div>


          {/* ================= BENEFITS ================= */}

          <div className="surface-cargo-benefits">

            <div className="surface-cargo-benefits-heading">

              <span>
                WHY CITY EXPRESS
              </span>

              <h2>
                Surface Delivery
                <strong>Built Around Efficiency.</strong>
              </h2>

            </div>


            <div className="surface-cargo-benefits-list">

              <div className="surface-cargo-benefit-item">
                <span>01</span>
                <p>
                  Reliable surface transportation services
                </p>
              </div>

              <div className="surface-cargo-benefit-item">
                <span>02</span>
                <p>
                  Cost-effective freight solutions
                </p>
              </div>

              <div className="surface-cargo-benefit-item">
                <span>03</span>
                <p>
                  Transportation for commercial and general shipments
                </p>
              </div>

              <div className="surface-cargo-benefit-item">
                <span>04</span>
                <p>
                  Door-to-door pickup and delivery options
                </p>
              </div>

              <div className="surface-cargo-benefit-item">
                <span>05</span>
                <p>
                  Safe and secure shipment handling
                </p>
              </div>

              <div className="surface-cargo-benefit-item">
                <span>06</span>
                <p>
                  Efficient shipment movement across major destinations
                </p>
              </div>

              <div className="surface-cargo-benefit-item">
                <span>07</span>
                <p>
                  Shipment tracking and status updates
                </p>
              </div>

              <div className="surface-cargo-benefit-item">
                <span>08</span>
                <p>
                  Dependable and professional logistics support
                </p>
              </div>

            </div>

          </div>


          {/* ================= CTA ================= */}

          <div className="surface-cargo-cta">

            <div className="surface-cargo-cta-content">

              <span>
                SURFACE DELIVERY SERVICES
              </span>

              <h2>
                Looking For Reliable
                <strong>Surface Transportation?</strong>
              </h2>

              <p>
                Choose City Express Courier for dependable and
                cost-effective surface transportation. Whether
                you need to move parcels, commercial goods or
                larger consignments, our team is committed to
                providing safe and efficient delivery solutions.
              </p>

            </div>

            <Link
              to="/contact-us"
              className="surface-cargo-cta-button"
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

export default SurfaceCargo;