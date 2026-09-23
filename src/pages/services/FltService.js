import React from "react";
import { Link } from "react-router-dom";
import "./FTLService.css";

import ftlImage from "../../assets/images/flt.jpg";

const FTLService = () => {
  return (
    <div className="ftl-service-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section
        className="ftl-hero"
        style={{ backgroundImage: `url(${ftlImage})` }}
      >
        <div className="ftl-hero-overlay"></div>

        <div className="ftl-container">

          <div className="ftl-hero-content">

            <div className="ftl-label">
              <span className="ftl-label-dot"></span>
              FULL TRUCK LOAD SERVICES
            </div>

            <h1>
              One Truck.
              <br />
              <span>One Dedicated Journey.</span>
            </h1>

            <p>
              Dedicated truck transportation for large-volume shipments,
              designed for direct movement, secure handling and dependable
              delivery from origin to destination.
            </p>

            <div className="ftl-hero-actions">

              <Link
                to="/contact-us"
                className="ftl-primary-btn"
              >
                Get FTL Quote
                <span>→</span>
              </Link>

              <a
                href="#ftl-solutions"
                className="ftl-outline-btn"
              >
                Explore FTL Solutions
              </a>

            </div>

          </div>

        </div>

        <div className="ftl-hero-bottom">
          <div>DIRECT TRANSPORT</div>
          <div>DEDICATED VEHICLE</div>
          <div>SECURE CARGO</div>
        </div>

      </section>


      {/* ==================================================
          INTRO / OVERVIEW
      ================================================== */}

      <section
        className="ftl-overview"
        id="ftl-solutions"
      >

        <div className="ftl-container">

          <div className="ftl-overview-grid">

            <div className="ftl-overview-heading">

              <span className="ftl-section-number">
                01 / FTL LOGISTICS
              </span>

              <h2>
                Dedicated capacity
                <br />
                for <span>larger shipments.</span>
              </h2>

            </div>


            <div className="ftl-overview-text">

              <p className="ftl-lead">
                City Express Courier provides Full Truck Load (FTL)
                transportation for businesses that need an entire vehicle
                dedicated to their shipment.
              </p>

              <p>
                FTL service is ideal for large-volume, bulk and commercial
                cargo where direct transportation and efficient movement
                are important. By dedicating the vehicle to one shipment,
                unnecessary cargo handling and intermediate movement can
                be reduced.
              </p>

              <p>
                From pickup to final delivery, our logistics team focuses
                on coordinated transportation, secure cargo handling and
                dependable shipment movement.
              </p>

            </div>

          </div>


          {/* ==================================================
              FTL STATS
          ================================================== */}

          <div className="ftl-stat-bar">

            <div className="ftl-stat">
              <strong>01</strong>
              <span>Dedicated Vehicle</span>
            </div>

            <div className="ftl-stat">
              <strong>02</strong>
              <span>Direct Movement</span>
            </div>

            <div className="ftl-stat">
              <strong>03</strong>
              <span>Secure Handling</span>
            </div>

            <div className="ftl-stat">
              <strong>04</strong>
              <span>Door-to-Door</span>
            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          SOLUTIONS
      ================================================== */}

      <section className="ftl-solutions">

        <div className="ftl-container">

          <div className="ftl-section-header">

            <div>

              <span className="ftl-section-number">
                02 / OUR CAPABILITIES
              </span>

              <h2>
                Built for the
                <br />
                <span>full load.</span>
              </h2>

            </div>

            <p>
              Flexible FTL transportation solutions designed around
              shipment size, route requirements and delivery needs.
            </p>

          </div>


          <div className="ftl-card-grid">

            <div className="ftl-card ftl-card-featured">

              <div className="ftl-card-top">
                <span>01</span>
                <div className="ftl-card-icon">↗</div>
              </div>

              <h3>Dedicated Truck</h3>

              <p>
                A dedicated vehicle is assigned to your complete shipment,
                providing direct transportation without sharing truck
                capacity with other cargo.
              </p>

              <div className="ftl-card-line"></div>

              <small>
                Dedicated Capacity
              </small>

            </div>


            <div className="ftl-card">

              <div className="ftl-card-top">
                <span>02</span>
                <div className="ftl-card-icon">▦</div>
              </div>

              <h3>Large Volume Cargo</h3>

              <p>
                Suitable for bulk, commercial and large-volume shipments
                requiring the capacity of an entire truck.
              </p>

              <div className="ftl-card-line"></div>

              <small>
                Large Shipments
              </small>

            </div>


            <div className="ftl-card">

              <div className="ftl-card-top">
                <span>03</span>
                <div className="ftl-card-icon">→</div>
              </div>

              <h3>Direct Transportation</h3>

              <p>
                Direct point-to-point movement helps simplify the
                transportation journey and reduce unnecessary handling.
              </p>

              <div className="ftl-card-line"></div>

              <small>
                Point To Point
              </small>

            </div>


            <div className="ftl-card">

              <div className="ftl-card-top">
                <span>04</span>
                <div className="ftl-card-icon">⌂</div>
              </div>

              <h3>Door-to-Door Delivery</h3>

              <p>
                Coordinated pickup and delivery from the shipment origin
                to the final destination.
              </p>

              <div className="ftl-card-line"></div>

              <small>
                Complete Movement
              </small>

            </div>


            <div className="ftl-card">

              <div className="ftl-card-top">
                <span>05</span>
                <div className="ftl-card-icon">✓</div>
              </div>

              <h3>Safe Cargo Handling</h3>

              <p>
                Professional transportation practices help protect cargo
                throughout the movement from pickup to delivery.
              </p>

              <div className="ftl-card-line"></div>

              <small>
                Cargo Protection
              </small>

            </div>


            <div className="ftl-card">

              <div className="ftl-card-top">
                <span>06</span>
                <div className="ftl-card-icon">⌁</div>
              </div>

              <h3>Shipment Tracking</h3>

              <p>
                Stay informed about shipment movement with tracking and
                status updates throughout transportation.
              </p>

              <div className="ftl-card-line"></div>

              <small>
                Shipment Visibility
              </small>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          TRANSPORT PROCESS
      ================================================== */}

      <section className="ftl-process">

        <div className="ftl-container">

          <div className="ftl-process-header">

            <span className="ftl-section-number">
              03 / TRANSPORT PROCESS
            </span>

            <h2>
              From pickup
              <br />
              to <span>destination.</span>
            </h2>

          </div>


          <div className="ftl-route">

            <div className="ftl-route-line"></div>


            <div className="ftl-route-step">

              <div className="ftl-route-marker">
                01
              </div>

              <div>
                <h3>Shipment Planning</h3>
                <p>
                  Understand cargo requirements, route and vehicle
                  requirements before transportation.
                </p>
              </div>

            </div>


            <div className="ftl-route-step">

              <div className="ftl-route-marker">
                02
              </div>

              <div>
                <h3>Truck Allocation</h3>
                <p>
                  Coordinate the appropriate dedicated vehicle for
                  the shipment.
                </p>
              </div>

            </div>


            <div className="ftl-route-step">

              <div className="ftl-route-marker">
                03
              </div>

              <div>
                <h3>Cargo Pickup</h3>
                <p>
                  Cargo is collected from the origin and prepared
                  for direct transportation.
                </p>
              </div>

            </div>


            <div className="ftl-route-step">

              <div className="ftl-route-marker">
                04
              </div>

              <div>
                <h3>Direct Movement</h3>
                <p>
                  Dedicated truck movement keeps the shipment focused
                  on its planned destination.
                </p>
              </div>

            </div>


            <div className="ftl-route-step">

              <div className="ftl-route-marker">
                05
              </div>

              <div>
                <h3>Final Delivery</h3>
                <p>
                  Shipment reaches the destination through coordinated
                  final-mile delivery.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          WHY FTL
      ================================================== */}

      <section className="ftl-why">

        <div className="ftl-container">

          <div className="ftl-why-box">

            <div className="ftl-why-heading">

              <span className="ftl-section-number">
                04 / WHY FTL
              </span>

              <h2>
                More control.
                <br />
                <span>Less handling.</span>
              </h2>

              <p>
                Full Truck Load transportation gives businesses a
                dedicated movement solution for larger shipments.
              </p>

            </div>


            <div className="ftl-benefit-list">

              <div className="ftl-benefit">
                <span>01</span>

                <div>
                  <h3>Dedicated Capacity</h3>
                  <p>
                    Complete truck capacity dedicated to your shipment.
                  </p>
                </div>
              </div>


              <div className="ftl-benefit">
                <span>02</span>

                <div>
                  <h3>Reduced Handling</h3>
                  <p>
                    Fewer intermediate handling points during transit.
                  </p>
                </div>
              </div>


              <div className="ftl-benefit">
                <span>03</span>

                <div>
                  <h3>Direct Movement</h3>
                  <p>
                    Point-to-point transportation for efficient cargo
                    movement.
                  </p>
                </div>
              </div>


              <div className="ftl-benefit">
                <span>04</span>

                <div>
                  <h3>Business Support</h3>
                  <p>
                    Professional logistics coordination throughout
                    the shipment journey.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          CTA
      ================================================== */}

      <section className="ftl-cta">

        <div className="ftl-container">

          <div className="ftl-cta-inner">

            <div>

              <span className="ftl-cta-label">
                CITY EXPRESS COURIER
              </span>

              <h2>
                Have a full truck
                <br />
                <span>to move?</span>
              </h2>

              <p>
                Tell us your shipment requirements and let our logistics
                team help coordinate the right FTL transportation solution.
              </p>

            </div>


            <Link
              to="/contact-us"
              className="ftl-cta-button"
            >
              Request FTL Quote
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default FTLService;