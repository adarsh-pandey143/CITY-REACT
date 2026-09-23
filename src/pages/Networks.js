
import React from "react";
import { Link } from "react-router-dom";
import "./Network.css";

import networkImage from "../assets/images/network.jpg";


const Networks = () => {

  return (

    <div className="network-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="network-hero"
        style={{
          backgroundImage: `url(${networkImage})`
        }}
      >

        <div className="network-overlay"></div>

        <div className="container">

          <div className="network-hero-content">

            <span className="network-hero-eyebrow">
              OUR DELIVERY NETWORK
            </span>

            <h1>
              Connected Delivery.
              <span> Reliable Service.</span>
            </h1>

            <p>
              City Express Courier connects businesses and customers
              through dependable courier and delivery solutions. Our
              service network supports safe, efficient and timely
              movement of shipments across different destinations.
            </p>

            <div className="network-hero-actions">

              <Link
                to="/contact-us"
                className="btn-primary"
              >
                Get Free Quote
              </Link>

              <Link
                to="/services"
                className="network-btn-secondary"
              >
                Explore Services
              </Link>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="network-content">

        <div className="container">


          <div className="network-intro">

            <div className="network-intro-heading">

              <span>
                OUR CAPABILITIES
              </span>

              <h2>
                A Connected Network Built
                <span> Around Your Delivery Needs.</span>
              </h2>

            </div>

            <div className="network-intro-text">

              <p>
                City Express Courier provides a range of courier and
                delivery solutions designed to support businesses and
                individuals with dependable shipment movement.
              </p>

              <p>
                Our services cover domestic, international and specialized
                delivery requirements through road, air, rail and other
                transportation options, supported by organized operations
                and customer-focused service.
              </p>

            </div>

          </div>



          {/* =================================================
              NETWORK CAPABILITIES
          ================================================= */}

          <div className="network-grid">


            {/* ROAD */}

            <div className="network-card">

              <div className="network-card-top">

                <div className="network-icon">
                  🚚
                </div>

                <span className="network-card-number">
                  01
                </span>

              </div>

              <h3>
                Road Delivery
              </h3>

              <p>
                Reliable road-based delivery for parcels, documents
                and shipments, supported by organized movement and
                careful handling throughout the delivery process.
              </p>

              <Link
                to="/services/Roadways"
                className="network-card-link"
              >
                Explore Services
                <span>→</span>
              </Link>

            </div>



            {/* BRANCH */}

            <div className="network-card">

              <div className="network-card-top">

                <div className="network-icon">
                  🏢
                </div>

                <span className="network-card-number">
                  02
                </span>

              </div>

              <h3>
                Branch Network
              </h3>

              <p className="branch-address">

                <strong>
                  City Express Courier
                </strong>

                <span>
                  Amber palce CHS,
                </span>

                <span>
                  chitranjan road near 
                </span>

                <span>
                   BJP office ville palace,
                </span>

                <span>
                  East Mumbai,40005 
                </span>

              </p>

              <div className="network-card-label">
                Service Location
              </div>

            </div>



            {/* DISTRIBUTION */}

            <div className="network-card">

              <div className="network-card-top">

                <div className="network-icon">
                  📦
                </div>

                <span className="network-card-number">
                  03
                </span>

              </div>

              <h3>
                Smart Distribution
              </h3>

              <p>
                Organized delivery operations help coordinate shipment
                handling, transportation and final delivery activities
                for efficient and dependable shipment movement.
              </p>

              <Link
                to="/contact-us"
                className="network-card-link"
              >
                Contact Our Team
                <span>→</span>
              </Link>

            </div>



            {/* INTERNATIONAL */}

            <div className="network-card">

              <div className="network-card-top">

                <div className="network-icon">
                  🌍
                </div>

                <span className="network-card-number">
                  04
                </span>

              </div>

              <h3>
                Domestic & International
              </h3>

              <p>
                Flexible delivery options supporting domestic and
                international shipment requirements through air,
                surface and other transportation modes.
              </p>

              <Link
                to="/services/Airfreight"
                className="network-card-link"
              >
                View Delivery Services
                <span>→</span>
              </Link>

            </div>


          </div>



          {/* =================================================
              TRANSPORTATION MODES
          ================================================= */}

          <div className="transport-section">

            <div className="transport-heading">

              <span>
                MULTI-MODAL DELIVERY
              </span>

              <h2>
                Multiple Ways To
                <span> Deliver Your Shipments.</span>
              </h2>

              <p>
                Choose the transportation solution that fits your
                shipment requirements, destination and delivery needs.
              </p>

            </div>


            <div className="transport-grid">


              <div className="transport-item">

                <div className="transport-icon">
                  🚚
                </div>

                <div>
                  <h3>
                    Surface Delivery
                  </h3>

                  <p>
                    Efficient road-based shipment movement.
                  </p>
                </div>

              </div>



              <div className="transport-item">

                <div className="transport-icon">
                  ✈️
                </div>

                <div>
                  <h3>
                    Air Delivery
                  </h3>

                  <p>
                    Air transportation for time-sensitive shipments.
                  </p>
                </div>

              </div>



              <div className="transport-item">

                <div className="transport-icon">
                  🚆
                </div>

                <div>
                  <h3>
                    Rail Delivery
                  </h3>

                  <p>
                    Rail transportation for suitable shipment requirements.
                  </p>
                </div>

              </div>



              <div className="transport-item">

                <div className="transport-icon">
                  🚢
                </div>

                <div>
                  <h3>
                    Sea Delivery
                  </h3>

                  <p>
                    Sea transportation for larger shipment requirements.
                  </p>
                </div>

              </div>


            </div>

          </div>



          {/* =================================================
              NETWORK STRENGTH
          ================================================= */}

          <div className="coverage-box">


            <div className="coverage-content">

              <span>
                NETWORK STRENGTH
              </span>

              <h2>
                Built To Support
                <span> Your Delivery Needs.</span>
              </h2>

              <p>
                Our delivery capabilities combine multiple transportation
                modes, organized shipment handling and customer-focused
                support to provide practical solutions for different
                courier and delivery requirements.
              </p>

            </div>



            <div className="coverage-grid">


              <div className="coverage-stat">

                <strong>
                  8+
                </strong>

                <span>
                  Courier & Delivery Services
                </span>

              </div>



              <div className="coverage-stat">

                <strong>
                  24×7
                </strong>

                <span>
                  Shipment Support
                </span>

              </div>



              <div className="coverage-stat">

                <strong>
                  4+
                </strong>

                <span>
                  Transportation Modes
                </span>

              </div>



              <div className="coverage-stat">

                <strong>
                  100%
                </strong>

                <span>
                  Customer-Focused Service
                </span>

              </div>


            </div>

          </div>



          {/* =================================================
              CTA
          ================================================= */}

          <div className="network-cta">

            <div className="network-cta-content">

              <span>
                READY TO SHIP?
              </span>

              <h2>
                Let's Move Your
                <span> Business Forward.</span>
              </h2>

              <p>
                Whether you need domestic courier, international delivery,
                express service, surface transportation, air delivery,
                rail, sea, e-commerce or FTL services, City Express Courier
                can help you choose a practical delivery solution for
                your shipment.
              </p>

            </div>


            <div className="network-cta-actions">

              <Link
                to="/contact-us"
                className="btn-primary"
              >
                Contact Our Team
              </Link>

              <Link
                to="/services/Home"
                className="network-btn-secondary"
              >
                View All Services
              </Link>

            </div>

          </div>


        </div>

      </section>


    </div>

  );

};


export default Networks;

