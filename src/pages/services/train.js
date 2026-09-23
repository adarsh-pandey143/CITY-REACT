import React from "react";
import { Link } from "react-router-dom";

import "./Train.css";

import trainImage from "../../assets/images/train.jpg";

const Train = () => {
  return (
    <div className="train-page">

      {/* ================= HERO ================= */}
      <section
        className="train-hero"
        style={{
          backgroundImage: `url(${trainImage})`,
        }}
      >
        <div className="train-hero-overlay"></div>

        <div className="train-container">
          <div className="train-hero-content">

            <span className="train-hero-eyebrow">
              RAIL CARGO SERVICES
            </span>

            <h1>
              Reliable Cargo
              <span>Transportation By Train</span>
            </h1>

            <p>
              City Express Courier provides reliable and
              cost-effective rail cargo transportation solutions
              for businesses and individuals. Our rail cargo
              services help move suitable shipments safely and
              efficiently across major destinations in India.
            </p>

            <Link
              to="/contact-us"
              className="train-primary-btn"
            >
              Request A Free Quote
              <span>→</span>
            </Link>

          </div>
        </div>

        <div className="train-hero-bottom">
          <div>RAIL TRANSPORT</div>
          <div>COST EFFECTIVE</div>
          <div>SECURE HANDLING</div>
        </div>
      </section>


      {/* ================= CONTENT ================= */}
      <section className="train-content-section">

        <div className="train-container">

          {/* ================= INTRO ================= */}
          <div className="train-intro">

            <span className="train-section-tag">
              RAIL CARGO SOLUTIONS
            </span>

            <h2>
              Safe, Reliable & Cost-Effective
              <span>Rail Cargo Transportation</span>
            </h2>

            <p>
              City Express Courier offers dependable rail cargo
              and parcel transportation solutions for commercial
              goods, parcels and larger consignments. By using
              the extensive Indian railway network, we provide
              an efficient transportation option for moving
              suitable cargo between major destinations.
            </p>

          </div>


          {/* ================= FEATURES ================= */}
          <div className="train-feature-grid">

            <div className="train-feature-card train-feature-card-highlight">
              <div className="train-feature-number">01</div>

              <div className="train-feature-icon">
                🚆
              </div>

              <h3>
                Rail Cargo Transportation
              </h3>

              <p>
                Reliable transportation of commercial cargo and
                consignments through established railway routes
                connecting major destinations.
              </p>

              <Link to="/contact-us">
                Discuss Service
                <span>→</span>
              </Link>
            </div>


            <div className="train-feature-card">
              <div className="train-feature-number">02</div>

              <div className="train-feature-icon">
                📦
              </div>

              <h3>
                Rail Parcel Service
              </h3>

              <p>
                Convenient rail parcel solutions for businesses
                and individuals looking for an economical way to
                transport suitable shipments.
              </p>

              <Link to="/contact-us">
                Discuss Service
                <span>→</span>
              </Link>
            </div>


            <div className="train-feature-card">
              <div className="train-feature-number">03</div>

              <div className="train-feature-icon">
                🏢
              </div>

              <h3>
                Commercial Cargo
              </h3>

              <p>
                Efficient transportation solutions for commercial
                goods, business shipments and larger consignments
                requiring dependable movement.
              </p>

              <Link to="/contact-us">
                Discuss Service
                <span>→</span>
              </Link>
            </div>


            <div className="train-feature-card">
              <div className="train-feature-number">04</div>

              <div className="train-feature-icon">
                💰
              </div>

              <h3>
                Cost-Effective Transportation
              </h3>

              <p>
                Rail transportation provides an economical option
                for moving suitable shipments over longer distances
                across India.
              </p>

              <Link to="/contact-us">
                Discuss Service
                <span>→</span>
              </Link>
            </div>


            <div className="train-feature-card">
              <div className="train-feature-number">05</div>

              <div className="train-feature-icon">
                🛡
              </div>

              <h3>
                Safe Cargo Handling
              </h3>

              <p>
                Careful handling and organized shipment processing
                help ensure cargo remains secure throughout the
                transportation process.
              </p>

              <Link to="/contact-us">
                Discuss Service
                <span>→</span>
              </Link>
            </div>


            <div className="train-feature-card">
              <div className="train-feature-number">06</div>

              <div className="train-feature-icon">
                📍
              </div>

              <h3>
                Shipment Tracking
              </h3>

              <p>
                Stay informed about your shipment with timely
                tracking information and status updates during
                the transportation journey.
              </p>

              <Link to="/contact-us">
                Discuss Service
                <span>→</span>
              </Link>
            </div>

          </div>


          {/* ================= BENEFITS ================= */}
          <div className="train-benefits">

            <div className="train-benefits-heading">

              <span className="train-section-tag">
                WHY RAIL TRANSPORT
              </span>

              <h2>
                Reliable Movement.
                <span>Practical Logistics.</span>
              </h2>

              <p>
                Rail transportation can provide an efficient and
                economical option for suitable shipments moving
                across longer distances.
              </p>

            </div>


            <div className="train-benefits-list">

              <div className="train-benefit-item">
                <div className="train-benefit-number">01</div>
                <div>
                  <h3>
                    Reliable Rail Transportation
                  </h3>
                  <p>
                    Dependable rail cargo transportation across
                    major destinations in India.
                  </p>
                </div>
              </div>


              <div className="train-benefit-item">
                <div className="train-benefit-number">02</div>
                <div>
                  <h3>
                    Cost-Effective Solution
                  </h3>
                  <p>
                    An economical transportation option for
                    suitable shipments and longer routes.
                  </p>
                </div>
              </div>


              <div className="train-benefit-item">
                <div className="train-benefit-number">03</div>
                <div>
                  <h3>
                    Commercial Shipment Support
                  </h3>
                  <p>
                    Suitable solutions for commercial goods,
                    parcels and larger consignments.
                  </p>
                </div>
              </div>


              <div className="train-benefit-item">
                <div className="train-benefit-number">04</div>
                <div>
                  <h3>
                    Organized Cargo Handling
                  </h3>
                  <p>
                    Structured shipment processing helps maintain
                    secure cargo movement.
                  </p>
                </div>
              </div>


              <div className="train-benefit-item">
                <div className="train-benefit-number">05</div>
                <div>
                  <h3>
                    Major Rail Routes
                  </h3>
                  <p>
                    Transportation support through established
                    railway routes connecting important destinations.
                  </p>
                </div>
              </div>


              <div className="train-benefit-item">
                <div className="train-benefit-number">06</div>
                <div>
                  <h3>
                    Shipment Updates
                  </h3>
                  <p>
                    Stay informed with shipment status and
                    transportation updates.
                  </p>
                </div>
              </div>

            </div>

          </div>


          {/* ================= CTA ================= */}
          <div className="train-cta">

            <div className="train-cta-mark">
              RAIL
            </div>

            <div className="train-cta-content">

              <span>
                CITY EXPRESS COURIER
              </span>

              <h2>
                Need Reliable
                <span>Rail Transportation?</span>
              </h2>

              <p>
                Tell us about your shipment requirements and our
                team can help you with a suitable rail cargo
                transportation solution.
              </p>

            </div>

            <Link
              to="/contact-us"
              className="train-cta-button"
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

export default Train;