import React from "react";
import { Link } from "react-router-dom";
import "../../pages/Page.css";

import expressImage from "../../assets/images/air.jpg";


const Express = () => {


return (

<div className="service-page">



{/* ================= HERO ================= */}



<section
  className="service-hero"
  style={{
    backgroundImage: `url(${expressImage})`
  }}
>

  <div className="service-overlay"></div>

  <div className="container">

    <div className="service-hero-content">

      <span>
        EXPRESS DELIVERY
      </span>

      <h1>
        Fast, Reliable & Time-Critical Delivery Services
      </h1>

      <p>
        World Wide Courier Cargo provides express delivery
        solutions for urgent documents, parcels and commercial
        shipments. We ensure fast transit, secure handling and
        on-time delivery through our trusted logistics network.
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
        EXPRESS DELIVERY SOLUTIONS
      </span>

      <h2>
        Fast, Secure & Time-Sensitive Delivery Services
      </h2>

      <p>
        World Wide Courier Cargo specializes in express
        delivery solutions for businesses and individuals
        who require fast, reliable and secure transportation.
        Whether it's important documents, parcels or commercial
        shipments, we ensure every delivery reaches its
        destination safely and on schedule.
      </p>

    </div>

    {/* ================= FEATURES ================= */}

    <div className="feature-grid">

      <div className="feature-card">

        <h3>⚡ Same Day Delivery</h3>

        <p>
          Rapid delivery solutions for urgent shipments
          requiring immediate transportation.
        </p>

      </div>

      <div className="feature-card">

        <h3>🚚 Next Day Delivery</h3>

        <p>
          Reliable next-day delivery service with
          committed transit schedules.
        </p>

      </div>

      <div className="feature-card">

        <h3>📍 Live Shipment Tracking</h3>

        <p>
          Monitor your shipment in real time from
          pickup to final delivery.
        </p>

      </div>

      <div className="feature-card">

        <h3>📦 Secure Package Handling</h3>

        <p>
          Every shipment is handled carefully to
          ensure maximum safety during transit.
        </p>

      </div>

      <div className="feature-card">

        <h3>🕒 Time-Critical Deliveries</h3>

        <p>
          Dedicated transportation solutions for
          urgent business and commercial consignments.
        </p>

      </div>

      <div className="feature-card">

        <h3>🤝 Dedicated Customer Support</h3>

        <p>
          Our support team keeps you informed and
          assists you throughout the delivery process.
        </p>

      </div>

    </div>

    {/* ================= BENEFITS ================= */}

    <div className="service-benefits">

      <h2>
        Why Choose Our Express Delivery Service?
      </h2>

      <ul>

        <li>✓ Fast and dependable delivery solutions</li>

        <li>✓ Priority handling for urgent shipments</li>

        <li>✓ Real-time shipment tracking</li>

        <li>✓ Safe and secure package transportation</li>

        <li>✓ Experienced logistics professionals</li>

        <li>✓ Wide service coverage across India</li>

        <li>✓ Transparent communication and customer support</li>

        <li>✓ Cost-effective express logistics solutions</li>

      </ul>

    </div>

    {/* ================= CTA ================= */}

    <div className="service-cta">

      <h2>
        Need An Urgent Delivery Solution?
      </h2>

      <p>
        Contact World Wide Courier Cargo today for
        fast, secure and reliable express delivery
        services. Our logistics experts are ready
        to provide customized solutions for your
        business and personal shipping needs.
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


export default Express;