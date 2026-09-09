
import React from "react";
import { Link } from "react-router-dom";

import "../../pages/Page.css";

import surfaceImage from "../../assets/images/surface.jpg";


const SurfaceCargo = () => {


return (

<div className="service-page">



{/* ================= HERO ================= */}

<section
  className="service-hero"
  style={{
    backgroundImage: `url(${surfaceImage})`
  }}
>

  <div className="service-overlay"></div>

  <div className="container">

    <div className="service-hero-content">

      <span>
        SURFACE CARGO SERVICES
      </span>

      <h1>
        Reliable & Cost-Effective Surface Cargo Transportation
      </h1>

      <p>
        City Express Cargo provides dependable surface cargo
        transportation solutions for businesses and individuals.
        Our surface cargo services are designed for safe,
        efficient and economical movement of shipments across
        major destinations in India.
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
        SURFACE CARGO SOLUTIONS
      </span>

      <h2>
        Safe, Efficient & Economical Surface Cargo Services
      </h2>

      <p>
        City Express Cargo offers reliable surface transportation
        for parcels, commercial goods, business shipments and
        larger consignments. Our surface cargo solutions provide
        an efficient and cost-effective way to move shipments
        across different destinations while maintaining safe
        cargo handling and dependable delivery.
      </p>

    </div>



    {/* ================= FEATURES ================= */}

    <div className="feature-grid">


      <div className="feature-card">

        <h3>🚛 Surface Cargo Transportation</h3>

        <p>
          Reliable road-based transportation solutions for
          commercial shipments, parcels and general cargo
          across major destinations.
        </p>

      </div>



      <div className="feature-card">

        <h3>📦 Commercial Shipments</h3>

        <p>
          Efficient transportation for business goods,
          commercial consignments and regular cargo
          movement requirements.
        </p>

      </div>



      <div className="feature-card">

        <h3>🏠 Door-to-Door Delivery</h3>

        <p>
          Convenient pickup and delivery solutions that help
          move shipments from the origin location to the
          required destination.
        </p>

      </div>



      <div className="feature-card">

        <h3>💰 Cost-Effective Freight</h3>

        <p>
          Economical surface transportation options designed
          to provide dependable cargo movement while helping
          businesses manage transportation costs.
        </p>

      </div>



      <div className="feature-card">

        <h3>🛡 Safe Cargo Handling</h3>

        <p>
          Careful loading, transportation and unloading
          processes help protect shipments throughout their
          transportation journey.
        </p>

      </div>



      <div className="feature-card">

        <h3>📍 Shipment Tracking</h3>

        <p>
          Stay informed about your cargo with shipment tracking
          and timely status updates during transportation.
        </p>

      </div>


    </div>



    {/* ================= BENEFITS ================= */}

    <div className="service-benefits">

      <h2>
        Why Choose Our Surface Cargo Services?
      </h2>

      <ul>

        <li>✓ Reliable surface cargo transportation</li>

        <li>✓ Cost-effective freight solutions</li>

        <li>✓ Transportation for commercial and general cargo</li>

        <li>✓ Door-to-door pickup and delivery options</li>

        <li>✓ Safe and secure cargo handling</li>

        <li>✓ Efficient shipment movement across major destinations</li>

        <li>✓ Shipment tracking and status updates</li>

        <li>✓ Dependable and professional logistics support</li>

      </ul>

    </div>



    {/* ================= CTA ================= */}

    <div className="service-cta">

      <h2>
        Looking For Reliable Surface Cargo Services?
      </h2>

      <p>
        Choose City Express Cargo for dependable and
        cost-effective surface cargo transportation. Whether
        you need to move parcels, commercial goods or larger
        consignments, our team is committed to providing
        safe and efficient cargo transportation solutions.
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


export default SurfaceCargo;

