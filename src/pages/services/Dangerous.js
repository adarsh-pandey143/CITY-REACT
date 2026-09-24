import React from "react";
import { Link } from "react-router-dom";
import "./Dangerous.css";

import dangerousImg from "../../assets/images/danger.jpg";

function Dangerous() {
  return (
    <div className="dangerous-page">

      {/* ================= HERO ================= */}
      <section className="dangerous-hero">

        <img
          src={dangerousImg}
          alt="Dangerous Goods Courier Service"
          className="dangerous-hero-image"
        />

        <div className="dangerous-hero-overlay"></div>

        <div className="dangerous-container dangerous-hero-content">

          <span className="dangerous-eyebrow">
            CITY EXPRESS COURIER
          </span>

          <h1>
            Dangerous Goods
            <span> Experts</span>
          </h1>

          <p>
            Specialized courier and logistics support for shipments
            requiring careful handling, secure processing and
            professional transportation coordination.
          </p>

          <div className="dangerous-hero-buttons">
            <Link to="/get-quote" className="dangerous-btn-primary">
              Get A Quote
            </Link>

            <Link to="/tracking" className="dangerous-btn-outline">
              Track Shipment
            </Link>
          </div>

        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="dangerous-intro">

        <div className="dangerous-container">

          <div className="dangerous-intro-grid">

            <div className="dangerous-intro-content">

              <span className="dangerous-section-label">
                SPECIALIZED COURIER SERVICE
              </span>

              <h2>
                Professional Support for
                <span> Sensitive Shipments</span>
              </h2>

              <p>
                Dangerous goods shipments require additional attention,
                careful documentation and secure transportation processes.
                City Express Courier provides specialized logistics support
                designed around the specific requirements of sensitive
                shipments.
              </p>

              <p>
                From shipment coordination and secure handling to
                transportation planning and delivery support, our team
                focuses on maintaining an organized and reliable shipment
                journey from pickup to destination.
              </p>

              <Link
                to="/contact-us"
                className="dangerous-text-link"
              >
                Talk To Our Team →
              </Link>

            </div>


            <div className="dangerous-intro-card">

              <div className="dangerous-card-icon">
                DG
              </div>

              <h3>
                Specialized Handling
              </h3>

              <p>
                Dedicated coordination for shipments that require
                additional attention, secure processing and
                professional logistics support.
              </p>

              <div className="dangerous-card-line"></div>

              <div className="dangerous-mini-points">

                <div>
                  <strong>01</strong>
                  <span>Secure Coordination</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Careful Handling</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Delivery Support</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}
      <section className="dangerous-services">

        <div className="dangerous-container">

          <div className="dangerous-heading">

            <span className="dangerous-section-label">
              OUR SPECIALIZED SUPPORT
            </span>

            <h2>
              Designed Around Your
              <span> Shipment Requirements</span>
            </h2>

            <p>
              Our dangerous goods logistics support focuses on organized
              coordination, secure shipment movement and dependable
              communication throughout the delivery process.
            </p>

          </div>


          <div className="dangerous-service-grid">

            <div className="dangerous-service-card">

              <div className="dangerous-service-number">
                01
              </div>

              <h3>
                Secure Shipment Coordination
              </h3>

              <p>
                Support for coordinating sensitive shipments with
                attention to packaging information, shipment details
                and transportation requirements.
              </p>

            </div>


            <div className="dangerous-service-card">

              <div className="dangerous-service-number">
                02
              </div>

              <h3>
                Professional Handling Support
              </h3>

              <p>
                Organized handling and movement support designed to
                reduce unnecessary risks during the shipment journey.
              </p>

            </div>


            <div className="dangerous-service-card">

              <div className="dangerous-service-number">
                03
              </div>

              <h3>
                Transportation Planning
              </h3>

              <p>
                Assistance with selecting suitable transportation
                arrangements based on shipment requirements and
                destination needs.
              </p>

            </div>


            <div className="dangerous-service-card">

              <div className="dangerous-service-number">
                04
              </div>

              <h3>
                Delivery Monitoring
              </h3>

              <p>
                Coordinated shipment movement and delivery support
                helping customers stay informed throughout the
                transportation process.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROCESS ================= */}
      <section className="dangerous-process">

        <div className="dangerous-container">

          <div className="dangerous-process-header">

            <div>
              <span className="dangerous-section-label">
                HOW WE SUPPORT
              </span>

              <h2>
                A Carefully Coordinated
                <span> Shipment Journey</span>
              </h2>
            </div>

            <p>
              Every sensitive shipment requires organized coordination.
              Our service process is designed to keep communication and
              shipment movement structured from pickup through delivery.
            </p>

          </div>


          <div className="dangerous-process-grid">

            <div className="dangerous-process-item">
              <span>01</span>
              <h3>Shipment Details</h3>
              <p>
                We understand the shipment requirements and delivery
                information before transportation begins.
              </p>
            </div>

            <div className="dangerous-process-item">
              <span>02</span>
              <h3>Secure Coordination</h3>
              <p>
                Shipment movement is coordinated according to the
                applicable transportation requirements.
              </p>
            </div>

            <div className="dangerous-process-item">
              <span>03</span>
              <h3>Transit Support</h3>
              <p>
                Our team maintains communication and coordination
                throughout the transportation journey.
              </p>
            </div>

            <div className="dangerous-process-item">
              <span>04</span>
              <h3>Final Delivery</h3>
              <p>
                Delivery activities are coordinated carefully to
                support a smooth completion of the shipment journey.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY US ================= */}
      <section className="dangerous-why">

        <div className="dangerous-container">

          <div className="dangerous-why-box">

            <div className="dangerous-why-content">

              <span className="dangerous-section-label">
                WHY CITY EXPRESS COURIER
              </span>

              <h2>
                Reliable Support for
                <span> Specialized Shipments</span>
              </h2>

              <p>
                We understand that sensitive shipments require more
                than standard delivery coordination. Our specialized
                service approach focuses on secure handling, organized
                communication and dependable transportation support.
              </p>

            </div>


            <div className="dangerous-why-list">

              <div>
                <span>✓</span>
                <p>Professional shipment coordination</p>
              </div>

              <div>
                <span>✓</span>
                <p>Secure handling support</p>
              </div>

              <div>
                <span>✓</span>
                <p>Organized transportation planning</p>
              </div>

              <div>
                <span>✓</span>
                <p>Reliable delivery communication</p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="dangerous-cta">

        <div className="dangerous-container">

          <div className="dangerous-cta-content">

            <div>
              <span>
                NEED SPECIALIZED COURIER SUPPORT?
              </span>

              <h2>
                Let's Discuss Your Shipment Requirements
              </h2>

              <p>
                Contact City Express Courier for professional
                assistance with your specialized shipment requirements.
              </p>
            </div>

            <Link
              to="/get-quote"
              className="dangerous-cta-button"
            >
              Request A Quote →
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Dangerous;