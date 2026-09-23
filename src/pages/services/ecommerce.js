import React from "react";
import { Link } from "react-router-dom";
import "./Ecommerce.css";

import ecommerceImage from "../../assets/images/e-commerce.jpg";

const Ecommerce = () => {
  return (
    <div className="ecommerce-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="ecommerce-hero"
        style={{
          backgroundImage: `url(${ecommerceImage})`,
        }}
      >
        <div className="ecommerce-hero-overlay"></div>

        <div className="ecommerce-container">

          <div className="ecommerce-hero-content">

            <span className="ecommerce-hero-eyebrow">
              E-COMMERCE LOGISTICS
            </span>

            <h1>
              Moving Your Online
              <span>Business Forward.</span>
            </h1>

            <p>
              City Express Courier provides dependable e-commerce
              logistics and delivery solutions that help online
              businesses move orders efficiently from pickup to
              final customer delivery.
            </p>

            <div className="ecommerce-hero-actions">

              <Link
                to="/contact-us"
                className="ecommerce-primary-btn"
              >
                Discuss Your Requirement
                <span>→</span>
              </Link>

              <a
                href="#ecommerce-solutions"
                className="ecommerce-secondary-btn"
              >
                Explore Solutions
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          E-COMMERCE INTRO
      ===================================================== */}

      <section
        className="ecommerce-intro-section"
        id="ecommerce-solutions"
      >

        <div className="ecommerce-container">

          <div className="ecommerce-intro-grid">

            {/* LEFT */}

            <div className="ecommerce-intro-heading">

              <span>
                E-COMMERCE LOGISTICS SOLUTIONS
              </span>

              <h2>
                From Your Store
                <strong>To Their Door.</strong>
              </h2>

            </div>


            {/* RIGHT */}

            <div className="ecommerce-intro-content">

              <p>
                Online businesses depend on efficient shipment
                movement and dependable delivery. City Express
                Courier supports e-commerce operations with
                transportation and delivery solutions designed
                around the complete shipment journey.
              </p>

              <p>
                From seller pickup and shipment transportation
                to final delivery, our services help businesses
                manage their logistics requirements through a
                simple and reliable process.
              </p>

            </div>

          </div>


          {/* =================================================
              ORDER JOURNEY
          ================================================= */}

          <div className="ecommerce-journey">

            <div className="ecommerce-journey-heading">

              <span>
                THE DELIVERY JOURNEY
              </span>

              <h2>
                One Shipment.
                <strong>Multiple Connected Steps.</strong>
              </h2>

            </div>


            <div className="ecommerce-journey-track">

              <div className="ecommerce-journey-step">

                <div className="ecommerce-journey-number">
                  01
                </div>

                <div className="ecommerce-journey-icon">
                  ◇
                </div>

                <h3>
                  Order Pickup
                </h3>

                <p>
                  Shipment collected from the seller or
                  designated pickup location.
                </p>

              </div>


              <div className="ecommerce-journey-connector"></div>


              <div className="ecommerce-journey-step">

                <div className="ecommerce-journey-number">
                  02
                </div>

                <div className="ecommerce-journey-icon">
                  ▣
                </div>

                <h3>
                  Processing
                </h3>

                <p>
                  Shipment is prepared and coordinated for
                  transportation to its destination.
                </p>

              </div>


              <div className="ecommerce-journey-connector"></div>


              <div className="ecommerce-journey-step">

                <div className="ecommerce-journey-number">
                  03
                </div>

                <div className="ecommerce-journey-icon">
                  ➜
                </div>

                <h3>
                  Transportation
                </h3>

                <p>
                  Orders move through the appropriate
                  logistics network toward the destination.
                </p>

              </div>


              <div className="ecommerce-journey-connector"></div>


              <div className="ecommerce-journey-step">

                <div className="ecommerce-journey-number">
                  04
                </div>

                <div className="ecommerce-journey-icon">
                  ⌂
                </div>

                <h3>
                  Final Delivery
                </h3>

                <p>
                  Shipment reaches the required delivery
                  location or customer's doorstep.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SOLUTIONS
      ===================================================== */}

      <section className="ecommerce-solutions-section">

        <div className="ecommerce-container">

          <div className="ecommerce-section-heading">

            <div>

              <span>
                OUR CAPABILITIES
              </span>

              <h2>
                Logistics Solutions
                <strong>For Online Businesses.</strong>
              </h2>

            </div>

            <p>
              Flexible logistics support for businesses
              handling regular online orders, parcels and
              customer shipments.
            </p>

          </div>


          <div className="ecommerce-solution-grid">

            {/* 01 */}

            <div className="ecommerce-solution-card ecommerce-solution-featured">

              <div className="ecommerce-solution-number">
                01
              </div>

              <div className="ecommerce-solution-icon">
                📦
              </div>

              <h3>
                E-Commerce Shipment Delivery
              </h3>

              <p>
                Reliable transportation and delivery support
                for online orders, parcels and customer
                shipments across multiple destinations.
              </p>

              <Link to="/contact-us">
                Discuss Service
                <span>→</span>
              </Link>

            </div>


            {/* 02 */}

            <div className="ecommerce-solution-card">

              <div className="ecommerce-solution-number">
                02
              </div>

              <div className="ecommerce-solution-icon">
                🚚
              </div>

              <h3>
                Seller Pickup
              </h3>

              <p>
                Convenient pickup coordination helps online
                sellers move prepared orders into the
                transportation process.
              </p>

              <Link to="/contact-us">
                Discuss Service
                <span>→</span>
              </Link>

            </div>


            {/* 03 */}

            <div className="ecommerce-solution-card">

              <div className="ecommerce-solution-number">
                03
              </div>

              <div className="ecommerce-solution-icon">
                ⌂
              </div>

              <h3>
                Door-to-Door Delivery
              </h3>

              <p>
                End-to-end delivery support from pickup
                location through transportation to the
                customer's delivery address.
              </p>

              <Link to="/contact-us">
                Discuss Service
                <span>→</span>
              </Link>

            </div>


            {/* 04 */}

            <div className="ecommerce-solution-card">

              <div className="ecommerce-solution-number">
                04
              </div>

              <div className="ecommerce-solution-icon">
                ⚡
              </div>

              <h3>
                Fast Delivery Support
              </h3>

              <p>
                Efficient shipment processing designed to
                support timely movement of online orders and
                customer shipments.
              </p>

              <Link to="/contact-us">
                Discuss Service
                <span>→</span>
              </Link>

            </div>


            {/* 05 */}

            <div className="ecommerce-solution-card">

              <div className="ecommerce-solution-number">
                05
              </div>

              <div className="ecommerce-solution-icon">
                ◈
              </div>

              <h3>
                Secure Package Handling
              </h3>

              <p>
                Careful package handling throughout the
                transportation journey helps maintain
                shipment security.
              </p>

              <Link to="/contact-us">
                Discuss Service
                <span>→</span>
              </Link>

            </div>


            {/* 06 */}

            <div className="ecommerce-solution-card">

              <div className="ecommerce-solution-number">
                06
              </div>

              <div className="ecommerce-solution-icon">
                ⌖
              </div>

              <h3>
                Shipment Tracking
              </h3>

              <p>
                Shipment status updates help businesses
                remain informed about the movement of
                their customer orders.
              </p>

              <Link to="/contact-us">
                Discuss Service
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BUSINESS BENEFITS
      ===================================================== */}

      <section className="ecommerce-benefits-section">

        <div className="ecommerce-container">

          <div className="ecommerce-benefits-wrapper">

            <div className="ecommerce-benefits-intro">

              <span>
                BUSINESS ADVANTAGE
              </span>

              <h2>
                Make Your Logistics
                <strong>Work For Your Business.</strong>
              </h2>

              <p>
                A dependable logistics process allows online
                businesses to focus on customers, orders and
                growth while their shipments move through an
                organized delivery network.
              </p>

            </div>


            <div className="ecommerce-benefits-list">

              <div className="ecommerce-benefit">

                <div>
                  01
                </div>

                <section>
                  <h3>
                    Reliable Shipment Movement
                  </h3>

                  <p>
                    Support for regular movement of e-commerce
                    orders and customer shipments.
                  </p>
                </section>

              </div>


              <div className="ecommerce-benefit">

                <div>
                  02
                </div>

                <section>
                  <h3>
                    Convenient Pickup
                  </h3>

                  <p>
                    Pickup solutions help sellers move orders
                    into the logistics process efficiently.
                  </p>
                </section>

              </div>


              <div className="ecommerce-benefit">

                <div>
                  03
                </div>

                <section>
                  <h3>
                    Delivery Visibility
                  </h3>

                  <p>
                    Shipment updates help businesses stay
                    informed about order movement.
                  </p>
                </section>

              </div>


              <div className="ecommerce-benefit">

                <div>
                  04
                </div>

                <section>
                  <h3>
                    Scalable Logistics Support
                  </h3>

                  <p>
                    Solutions can support different shipment
                    volumes and business requirements.
                  </p>
                </section>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="ecommerce-cta-section">

        <div className="ecommerce-container">

          <div className="ecommerce-cta">

            <div className="ecommerce-cta-mark">
              CITY
            </div>

            <div className="ecommerce-cta-content">

              <span>
                FOR E-COMMERCE BUSINESSES
              </span>

              <h2>
                Ready To Simplify
                <strong>Your Delivery Operations?</strong>
              </h2>

              <p>
                Connect with City Express Courier to discuss
                your e-commerce shipment and delivery
                requirements.
              </p>

            </div>

            <Link
              to="/contact-us"
              className="ecommerce-cta-button"
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

export default Ecommerce;