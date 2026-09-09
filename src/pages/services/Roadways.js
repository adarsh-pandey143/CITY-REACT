
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
        DOMESTIC CARGO SERVICES
      </span>

      <h1>
        Reliable Domestic Cargo Services Across India
      </h1>

      <p>
        City Express Cargo provides reliable domestic cargo
        transportation solutions for businesses and individuals.
        With efficient transportation, secure cargo handling and
        dependable delivery services, we help move shipments
        safely and efficiently across India.
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
        DOMESTIC CARGO SOLUTIONS
      </span>

      <h2>
        Safe, Reliable & Efficient Domestic Cargo Transportation
      </h2>

      <p>
        City Express Cargo offers dependable domestic cargo
        transportation services for shipments of different sizes
        and requirements. From small consignments to large
        commercial shipments and full truck loads, our focus is
        on safe handling, efficient movement and timely delivery
        across major destinations in India.
      </p>

    </div>



    {/* ================= FEATURES ================= */}

    <div className="feature-grid">


      <div className="feature-card">

        <h3>🚛 Full Truck Load (FTL)</h3>

        <p>
          Dedicated transportation solutions for large-volume
          and commercial shipments with dedicated vehicle
          capacity for efficient movement.
        </p>

      </div>



      <div className="feature-card">

        <h3>📦 Cargo Transportation</h3>

        <p>
          Reliable transportation for parcels, commercial goods
          and general cargo with secure handling throughout
          the shipment journey.
        </p>

      </div>



      <div className="feature-card">

        <h3>🏠 Door-to-Door Delivery</h3>

        <p>
          Convenient pickup and delivery solutions from the
          sender's location to the required destination with
          efficient shipment handling.
        </p>

      </div>



      <div className="feature-card">

        <h3>⚡ Timely Delivery</h3>

        <p>
          Efficient transportation planning and coordinated
          operations to help ensure shipments reach their
          destinations on time.
        </p>

      </div>



      <div className="feature-card">

        <h3>🛡 Safe Cargo Handling</h3>

        <p>
          Careful loading, transportation and unloading
          practices help protect cargo throughout its
          domestic journey.
        </p>

      </div>



      <div className="feature-card">

        <h3>📍 Shipment Tracking</h3>

        <p>
          Track your shipment and receive timely status updates
          to stay informed about your cargo during transportation.
        </p>

      </div>


    </div>



    {/* ================= BENEFITS ================= */}

    <div className="service-benefits">

      <h2>
        Why Choose Our Domestic Cargo Services?
      </h2>

      <ul>

        <li>✓ Reliable domestic cargo transportation across India</li>

        <li>✓ Solutions for small, medium and large consignments</li>

        <li>✓ Full Truck Load (FTL) transportation solutions</li>

        <li>✓ Safe and secure cargo handling</li>

        <li>✓ Door-to-door pickup and delivery options</li>

        <li>✓ Efficient shipment tracking and status updates</li>

        <li>✓ Timely and dependable cargo movement</li>

        <li>✓ Cost-effective transportation solutions</li>

      </ul>

    </div>



    {/* ================= CTA ================= */}

    <div className="service-cta">

      <h2>
        Looking For Reliable Domestic Cargo Services?
      </h2>

      <p>
        Choose City Express Cargo for dependable domestic
        transportation solutions across India. Whether you
        need to move individual consignments or large commercial
        shipments, our team is committed to providing safe,
        efficient and reliable cargo transportation.
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
