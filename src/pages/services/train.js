
import React from "react";
import { Link } from "react-router-dom";

import "../../pages/Page.css";

import trainImage from "../../assets/images/train.jpg";


const Train = () => {


return (

<div className="service-page">



{/* ================= HERO ================= */}

<section
  className="service-hero"
  style={{
    backgroundImage: `url(${trainImage})`
  }}
>

  <div className="service-overlay"></div>

  <div className="container">

    <div className="service-hero-content">

      <span>
        RAIL CARGO SERVICES
      </span>

      <h1>
        Reliable Cargo Transportation By Train
      </h1>

      <p>
        City Express Cargo provides reliable and cost-effective
        rail cargo transportation solutions for businesses and
        individuals. Our rail cargo services help move shipments
        safely and efficiently across major destinations in India.
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
        RAIL CARGO SOLUTIONS
      </span>

      <h2>
        Safe, Reliable & Cost-Effective Rail Cargo Transportation
      </h2>

      <p>
        City Express Cargo offers dependable rail cargo and
        parcel transportation solutions for commercial goods,
        parcels and larger consignments. By using the extensive
        Indian railway network, we provide an efficient
        transportation option for moving cargo between major
        destinations.
      </p>

    </div>



    {/* ================= FEATURES ================= */}

    <div className="feature-grid">


      <div className="feature-card">

        <h3>🚆 Rail Cargo Transportation</h3>

        <p>
          Reliable transportation of commercial cargo and
          consignments through established railway routes
          connecting major destinations.
        </p>

      </div>



      <div className="feature-card">

        <h3>📦 Rail Parcel Service</h3>

        <p>
          Convenient rail parcel solutions for businesses
          and individuals looking for an economical way to
          transport their shipments.
        </p>

      </div>



      <div className="feature-card">

        <h3>🏢 Commercial Cargo</h3>

        <p>
          Efficient transportation solutions for commercial
          goods, business shipments and larger consignments
          requiring dependable movement.
        </p>

      </div>



      <div className="feature-card">

        <h3>💰 Cost-Effective Transportation</h3>

        <p>
          Rail transportation provides an economical option
          for moving suitable shipments over longer distances
          across India.
        </p>

      </div>



      <div className="feature-card">

        <h3>🛡 Safe Cargo Handling</h3>

        <p>
          Careful handling and organized shipment processing
          help ensure cargo remains secure throughout the
          transportation process.
        </p>

      </div>



      <div className="feature-card">

        <h3>📍 Shipment Tracking</h3>

        <p>
          Stay informed about your shipment with timely
          tracking information and status updates during
          the transportation journey.
        </p>

      </div>


    </div>



    {/* ================= BENEFITS ================= */}

    <div className="service-benefits">

      <h2>
        Why Choose Our Rail Cargo Services?
      </h2>

      <ul>

        <li>✓ Reliable rail cargo transportation across India</li>

        <li>✓ Cost-effective solution for suitable shipments</li>

        <li>✓ Rail parcel services for businesses and individuals</li>

        <li>✓ Suitable for commercial and larger consignments</li>

        <li>✓ Safe and organized cargo handling</li>

        <li>✓ Efficient transportation through major railway routes</li>

        <li>✓ Shipment tracking and status updates</li>

        <li>✓ Dependable cargo transportation solutions</li>

      </ul>

    </div>



    {/* ================= CTA ================= */}

    <div className="service-cta">

      <h2>
        Looking For Reliable Cargo Transportation By Train?
      </h2>

      <p>
        Choose City Express Cargo for dependable rail cargo
        transportation solutions. Our team helps businesses
        and individuals move suitable shipments efficiently
        and cost-effectively through rail transportation
        across India.
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


export default Train;
