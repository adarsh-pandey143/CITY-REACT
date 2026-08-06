import React from "react";
import { Link } from "react-router-dom";
import "../../pages/Page.css";

import airImage from "../../assets/images/sea1.jpg";


const Airfreight = () => {


return (

<div className="service-page">


{/* ================= HERO ================= */}


<section
  className="service-hero"
  style={{
    backgroundImage: `url(${airImage})`
  }}
>

  <div className="service-overlay"></div>

  <div className="container">

    <div className="service-hero-content">

      <span>AIR FREIGHT SERVICES</span>

      <h1>
        Fast & Reliable Air Cargo Solutions
      </h1>

      <p>
        World Wide Courier Cargo provides secure,
        time-sensitive and efficient air freight
        services for businesses requiring faster
        domestic and international cargo movement.
      </p>

      <Link
        to="/NotFound"
        className="btn-primary"
      >
        Request A Quote
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
        AIR FREIGHT SOLUTIONS
      </span>

      <h2>
        Fast, Secure & Time-Critical Air Cargo Services
      </h2>

      <p>
        World Wide Courier Cargo offers dependable air freight
        solutions for businesses that require speed, security
        and efficiency. From urgent documents to commercial
        cargo, we ensure timely transportation through our
        trusted logistics network while maintaining the highest
        standards of safety and service quality.
      </p>

    </div>

    {/* ================= FEATURES ================= */}

    <div className="feature-grid">

      <div className="feature-card">

        <h3>✈ Domestic Air Freight</h3>

        <p>
          Fast and secure delivery connecting major
          airports and commercial hubs across India.
        </p>

      </div>

      <div className="feature-card">

        <h3>🌍 International Air Cargo</h3>

        <p>
          Reliable international shipping through
          trusted airline partners and global logistics
          connections.
        </p>

      </div>

      <div className="feature-card">

        <h3>⚡ Express Priority Service</h3>

        <p>
          Dedicated solutions for urgent shipments
          requiring the fastest possible delivery.
        </p>

      </div>

      <div className="feature-card">

        <h3>📦 Commercial Cargo</h3>

        <p>
          Safe handling of commercial, industrial and
          high-value cargo with complete shipment care.
        </p>

      </div>

      <div className="feature-card">

        <h3>🛡 Secure Handling</h3>

        <p>
          Professional packaging coordination and
          secure cargo management from pickup to delivery.
        </p>

      </div>

      <div className="feature-card">

        <h3>📍 Live Shipment Tracking</h3>

        <p>
          Stay informed with real-time shipment
          updates throughout the transportation process.
        </p>

      </div>

    </div>

    {/* ================= BENEFITS ================= */}

    <div className="service-benefits">

      <h2>
        Why Choose World Wide Courier Cargo?
      </h2>

      <ul>

        <li>✓ Fast and dependable air freight solutions</li>

        <li>✓ Domestic & international cargo support</li>

        <li>✓ Time-critical express shipment handling</li>

        <li>✓ Safe and secure transportation process</li>

        <li>✓ Real-time shipment tracking</li>

        <li>✓ Professional logistics specialists</li>

        <li>✓ Competitive pricing with transparent service</li>

        <li>✓ Dedicated customer support</li>

      </ul>

    </div>

    {/* ================= CTA ================= */}

    <div className="service-cta">

      <h2>
        Ready To Ship By Air?
      </h2>

      <p>
        Contact World Wide Courier Cargo today for
        customized air freight solutions tailored to
        your business requirements. Our logistics team
        is ready to provide fast, secure and reliable
        transportation services.
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


export default Airfreight;
