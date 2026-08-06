import React from "react";
import { Link } from "react-router-dom";

import "../../pages/Page.css";

import roadImage from "../../assets/images/road.jpg";


const Roadways = () => {


return (

<div className="service-page">



{/* ================= HERO ================= */}

<section
  className="service-hero"
  style={{
    backgroundImage: `url(${roadImage})`
  }}
>

  <div className="service-overlay"></div>

  <div className="container">

    <div className="service-hero-content">

      <span>
        ROAD TRANSPORT SERVICES
      </span>

      <h1>
        Reliable Road Transportation Across India
      </h1>

      <p>
        World Wide Courier Cargo offers dependable road
        transportation solutions for businesses of all sizes.
        Our extensive network, modern fleet and experienced
        logistics professionals ensure safe, timely and
        cost-effective delivery of your shipments across India.
      </p>

      <Link
        to="/NotFound"
        className="btn-primary"
      >
        Request A Free Quote
      </Link>

    </div>

  </div>

</section>

{/* ================= CONTENT ================= */}

<section className="service-content-section">

  <div className="container">

    {/* ================= INTRO ================= */}

    <div className="service-intro">

      <span className="section-tag">
        ROAD TRANSPORT SOLUTIONS
      </span>

      <h2>
        Safe, Reliable & Nationwide Road Transportation
      </h2>

      <p>
        World Wide Courier Cargo provides comprehensive road
        transportation services for businesses across India.
        From small consignments to full truck loads, our
        experienced logistics team ensures every shipment is
        transported safely, efficiently and delivered on time
        through our extensive transportation network.
      </p>

    </div>

    {/* ================= FEATURES ================= */}

    <div className="feature-grid">

      <div className="feature-card">

        <h3>🚛 Full Truck Load (FTL)</h3>

        <p>
          Dedicated vehicles for bulk cargo,
          industrial goods and large commercial
          consignments with direct transportation.
        </p>

      </div>

      <div className="feature-card">

        <h3>📦 Less Than Truck Load (LTL)</h3>

        <p>
          Cost-effective transportation solutions
          for smaller shipments with reliable
          nationwide delivery.
        </p>

      </div>

      <div className="feature-card">

        <h3>🏠 Door-to-Door Delivery</h3>

        <p>
          Complete pickup and delivery services
          from your location directly to the
          customer's destination.
        </p>

      </div>

      <div className="feature-card">

        <h3>⚡ Express Road Freight</h3>

        <p>
          Fast and dependable road transportation
          for urgent and time-sensitive shipments.
        </p>

      </div>

      <div className="feature-card">

        <h3>🛡 Safe Cargo Handling</h3>

        <p>
          Professional loading, transportation and
          unloading practices ensuring maximum
          shipment safety.
        </p>

      </div>

      <div className="feature-card">

        <h3>📍 Live Shipment Tracking</h3>

        <p>
          Monitor your shipment throughout its
          journey with real-time tracking and
          timely status updates.
        </p>

      </div>

    </div>

    {/* ================= BENEFITS ================= */}

    <div className="service-benefits">

      <h2>
        Why Choose Our Road Transport Services?
      </h2>

      <ul>

        <li>✓ Extensive PAN India transportation network</li>

        <li>✓ Full Truck Load (FTL) & LTL solutions</li>

        <li>✓ Safe and secure cargo transportation</li>

        <li>✓ Experienced drivers and logistics professionals</li>

        <li>✓ Door-to-door pickup and delivery service</li>

        <li>✓ Real-time shipment tracking</li>

        <li>✓ On-time delivery commitment</li>

        <li>✓ Competitive pricing with reliable service</li>

      </ul>

    </div>

    {/* ================= CTA ================= */}

    <div className="service-cta">

      <h2>
        Looking For Reliable Road Transportation?
      </h2>

      <p>
        Partner with World Wide Courier Cargo for
        dependable road freight solutions across India.
        Our experienced logistics team is committed to
        delivering your shipments safely, efficiently
        and always on schedule.
      </p>

      <Link
        to="/NotFound"
        className="btn-primary"
      >
        Request A Free Quote
      </Link>

    </div>

  </div>

</section>

</div>


);


};


export default Roadways;