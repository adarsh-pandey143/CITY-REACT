import React from "react";
import { Link } from "react-router-dom";

import "./Express.css";

import expressImage from "../../assets/images/int.jpg";

const Express = () => {
  return (
    <div className="express-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        className="express-page-hero"
        style={{
          backgroundImage: `url(${expressImage})`,
        }}
      >
        <div className="express-page-hero-overlay"></div>

        <div className="express-page-container">
          <div className="express-page-hero-content">

            <div className="express-page-status">
              <span className="express-page-status-dot"></span>
              PRIORITY DELIVERY SERVICES
            </div>

            <span className="express-page-eyebrow">
              CITY EXPRESS COURIER
            </span>

            <h1>
              When Time
              <span>Can't Wait.</span>
            </h1>

            <p>
              Fast and dependable express delivery solutions
              for urgent documents, parcels and commercial
              shipments requiring efficient transportation
              and timely delivery.
            </p>

            <div className="express-page-hero-actions">

              <Link
                to="/contact-us"
                className="express-page-primary-btn"
              >
                Request Express Delivery
                <span>→</span>
              </Link>

              <a
                href="#express-process"
                className="express-page-secondary-btn"
              >
                View Delivery Process
              </a>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          SPEED INTRO
      ===================================================== */}
      <section className="express-page-intro-section">

        <div className="express-page-container">

          <div className="express-page-intro-grid">

            <div className="express-page-intro-title">

              <span>
                EXPRESS DELIVERY
              </span>

              <h2>
                Built Around
                <strong>Your Urgency.</strong>
              </h2>

            </div>


            <div className="express-page-intro-copy">

              <p>
                City Express Courier provides express delivery
                solutions for shipments where speed and
                dependable transportation are important.
              </p>

              <p>
                From important documents and parcels to
                business consignments, our express logistics
                services are designed to support urgent
                delivery requirements.
              </p>

            </div>

          </div>


          {/* SPEED STATS */}
          <div className="express-page-speed-strip">

            <div className="express-page-speed-item">

              <strong>01</strong>

              <div>
                <span>PRIORITY</span>
                <p>Urgent shipment handling</p>
              </div>

            </div>


            <div className="express-page-speed-item">

              <strong>02</strong>

              <div>
                <span>FAST TRANSIT</span>
                <p>Efficient shipment movement</p>
              </div>

            </div>


            <div className="express-page-speed-item">

              <strong>03</strong>

              <div>
                <span>TRACKING</span>
                <p>Shipment status visibility</p>
              </div>

            </div>


            <div className="express-page-speed-item">

              <strong>04</strong>

              <div>
                <span>SUPPORT</span>
                <p>Assistance throughout delivery</p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DELIVERY OPTIONS
      ===================================================== */}
      <section className="express-page-options-section">

        <div className="express-page-container">

          <div className="express-page-heading-row">

            <div>

              <span>
                DELIVERY OPTIONS
              </span>

              <h2>
                Choose The Right
                <strong>Express Solution.</strong>
              </h2>

            </div>

            <p>
              Express delivery requirements can vary by
              shipment type, urgency and destination. Select
              a service approach suitable for your requirement.
            </p>

          </div>


          <div className="express-page-options-grid">

            {/* SAME DAY */}
            <div className="express-page-option-card express-page-option-priority">

              <div className="express-page-option-top">

                <span className="express-page-option-number">
                  01
                </span>

                <span className="express-page-option-icon">
                  ⚡
                </span>

              </div>

              <span className="express-page-option-label">
                HIGH PRIORITY
              </span>

              <h3>
                Same Day Delivery
              </h3>

              <p>
                Rapid delivery solutions for urgent shipments
                that require transportation within the same
                day, subject to route and service availability.
              </p>

              <div className="express-page-option-footer">

                <span>
                  URGENT SHIPMENTS
                </span>

                <Link to="/contact-us">
                  Enquire
                  <b>→</b>
                </Link>

              </div>

            </div>


            {/* NEXT DAY */}
            <div className="express-page-option-card">

              <div className="express-page-option-top">

                <span className="express-page-option-number">
                  02
                </span>

                <span className="express-page-option-icon">
                  ◷
                </span>

              </div>

              <span className="express-page-option-label">
                FAST DELIVERY
              </span>

              <h3>
                Next Day Delivery
              </h3>

              <p>
                Convenient next-day delivery support for
                shipments requiring a faster transit schedule
                between supported locations.
              </p>

              <div className="express-page-option-footer">

                <span>
                  TIME SENSITIVE
                </span>

                <Link to="/contact-us">
                  Enquire
                  <b>→</b>
                </Link>

              </div>

            </div>


            {/* BUSINESS */}
            <div className="express-page-option-card">

              <div className="express-page-option-top">

                <span className="express-page-option-number">
                  03
                </span>

                <span className="express-page-option-icon">
                  ▣
                </span>

              </div>

              <span className="express-page-option-label">
                BUSINESS DELIVERY
              </span>

              <h3>
                Commercial Express
              </h3>

              <p>
                Express transportation support for business
                documents, commercial parcels and urgent
                consignments.
              </p>

              <div className="express-page-option-footer">

                <span>
                  BUSINESS SHIPMENTS
                </span>

                <Link to="/contact-us">
                  Enquire
                  <b>→</b>
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPRESS PROCESS
      ===================================================== */}
      <section
        className="express-page-process-section"
        id="express-process"
      >

        <div className="express-page-container">

          <div className="express-page-process-header">

            <span>
              EXPRESS DELIVERY PROCESS
            </span>

            <h2>
              From Pickup
              <strong>To Final Delivery.</strong>
            </h2>

            <p>
              Our express delivery workflow is designed to
              keep shipment movement organized from the
              initial request through final delivery.
            </p>

          </div>


          <div className="express-page-timeline">

            <div className="express-page-timeline-line"></div>


            {/* STEP 01 */}
            <div className="express-page-timeline-item">

              <div className="express-page-timeline-marker">
                01
              </div>

              <div className="express-page-timeline-content">

                <span>
                  STEP ONE
                </span>

                <h3>
                  Shipment Request
                </h3>

                <p>
                  Share your shipment details, pickup location,
                  destination and delivery requirements.
                </p>

              </div>

            </div>


            {/* STEP 02 */}
            <div className="express-page-timeline-item">

              <div className="express-page-timeline-marker">
                02
              </div>

              <div className="express-page-timeline-content">

                <span>
                  STEP TWO
                </span>

                <h3>
                  Pickup Coordination
                </h3>

                <p>
                  Our team coordinates shipment pickup based
                  on the agreed service and available route.
                </p>

              </div>

            </div>


            {/* STEP 03 */}
            <div className="express-page-timeline-item">

              <div className="express-page-timeline-marker">
                03
              </div>

              <div className="express-page-timeline-content">

                <span>
                  STEP THREE
                </span>

                <h3>
                  Priority Movement
                </h3>

                <p>
                  Shipment enters the transportation process
                  for movement toward its destination.
                </p>

              </div>

            </div>


            {/* STEP 04 */}
            <div className="express-page-timeline-item">

              <div className="express-page-timeline-marker">
                04
              </div>

              <div className="express-page-timeline-content">

                <span>
                  STEP FOUR
                </span>

                <h3>
                  Final Delivery
                </h3>

                <p>
                  Shipment reaches the designated delivery
                  location with available status updates.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}
      <section className="express-page-features-section">

        <div className="express-page-container">

          <div className="express-page-features-heading">

            <span>
              SERVICE FEATURES
            </span>

            <h2>
              Everything Your
              <strong>Urgent Shipment Needs.</strong>
            </h2>

          </div>


          <div className="express-page-feature-grid">

            <div className="express-page-feature">

              <div className="express-page-feature-icon">
                ⚡
              </div>

              <div>
                <h3>
                  Fast Transit
                </h3>

                <p>
                  Efficient transportation options for
                  time-sensitive shipments.
                </p>
              </div>

            </div>


            <div className="express-page-feature">

              <div className="express-page-feature-icon">
                📦
              </div>

              <div>
                <h3>
                  Secure Handling
                </h3>

                <p>
                  Careful handling of documents, parcels
                  and commercial shipments.
                </p>
              </div>

            </div>


            <div className="express-page-feature">

              <div className="express-page-feature-icon">
                ⌖
              </div>

              <div>
                <h3>
                  Shipment Tracking
                </h3>

                <p>
                  Available shipment updates help you
                  stay informed during transit.
                </p>
              </div>

            </div>


            <div className="express-page-feature">

              <div className="express-page-feature-icon">
                ◉
              </div>

              <div>
                <h3>
                  Delivery Coordination
                </h3>

                <p>
                  Organized coordination from pickup
                  through final delivery.
                </p>
              </div>

            </div>


            <div className="express-page-feature">

              <div className="express-page-feature-icon">
                ◎
              </div>

              <div>
                <h3>
                  Flexible Solutions
                </h3>

                <p>
                  Service options designed around different
                  shipment urgency and requirements.
                </p>
              </div>

            </div>


            <div className="express-page-feature">

              <div className="express-page-feature-icon">
                ☎
              </div>

              <div>
                <h3>
                  Customer Assistance
                </h3>

                <p>
                  Support for shipment-related questions
                  throughout the delivery process.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="express-page-cta-section">

        <div className="express-page-container">

          <div className="express-page-cta">

            <div className="express-page-cta-speed">

              <span>
                EXPRESS
              </span>

              <strong>
                →
              </strong>

            </div>


            <div className="express-page-cta-content">

              <span>
                HAVE AN URGENT SHIPMENT?
              </span>

              <h2>
                Don't Let Time
                <strong>Slow You Down.</strong>
              </h2>

              <p>
                Contact City Express Courier to discuss your
                express delivery requirement and available
                transportation options.
              </p>

            </div>


            <Link
              to="/contact-us"
              className="express-page-cta-button"
            >
              Request A Quote
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Express;