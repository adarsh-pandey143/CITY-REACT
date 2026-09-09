

import React from "react";
import { Link } from "react-router-dom";
import "../pages/Page.css";
// import "./Network.css";

import networkImage from "../assets/images/ground.jpg";


const Networks = () => {


return (

<div className="network-page">


{/* ================= HERO ================= */}


<section
className="network-hero"
style={{
 backgroundImage:`url(${networkImage})`
}}
>


<div className="network-overlay"></div>


<div className="container">


<div className="network-hero-content">

  <span>
    OUR NETWORK
  </span>

  <h1>
    A Reliable Logistics Network
  </h1>

  <p>
    City Express Cargo provides reliable cargo and
    logistics solutions through an efficient transportation
    network, professional operations and dedicated customer
    support. We help businesses and individuals move their
    shipments safely and efficiently across different
    destinations.
  </p>

  <Link
    to="/contact-us"
    className="btn-primary"
  >
    Get Free Quote
  </Link>

</div>


</div>


</section>





{/* ================= INTRO ================= */}



<section className="network-content">


<div className="container">



<div className="network-intro">

  <h2>
    Connected Transportation & Logistics Network
  </h2>

  <p>
    City Express Cargo offers a comprehensive range of
    transportation and logistics services designed to
    support businesses and customers with dependable
    shipment movement. Our operations cover domestic,
    international and specialized cargo requirements
    through road, air, rail and sea transportation
    solutions.
  </p>

</div>


{/* ================= CARDS ================= */}

<div className="network-grid">

  <div className="network-card">

    <div className="network-icon">
      🚚
    </div>

    <h3>
      Road Transportation
    </h3>

    <p>
      Our road transportation services support reliable
      movement of parcels, cargo and commercial shipments
      across different destinations with safe handling and
      efficient delivery operations.
    </p>

  </div>


  <div className="network-card">

    <div className="network-icon">
      🏢
    </div>

    <h3>
      Branch Network
    </h3>

    <p>
      <strong>City Express Courier:</strong><br />
      C-40, Sanjaygram,<br />
      Rajeev Nagar,<br />
      Sheetla Mata Mandir Road.
    </p>

  </div>


  <div className="network-card">

    <div className="network-icon">
      📦
    </div>

    <h3>
      Smart Distribution
    </h3>

    <p>
      Our organized logistics operations support smooth
      shipment handling, transportation coordination and
      reliable delivery for domestic and commercial cargo.
    </p>

  </div>


  <div className="network-card">

    <div className="network-icon">
      🌍
    </div>

    <h3>
      Domestic & International
    </h3>

    <p>
      City Express Cargo supports domestic and international
      cargo requirements with multiple transportation
      options including air, surface, rail and sea cargo
      services.
    </p>

  </div>

</div>






{/* ================= COVERAGE ================= */}



<div className="coverage-box">

  <h2>
    Our Logistics Strength
  </h2>

  <p>
    City Express Cargo is focused on providing dependable
    cargo and logistics services through efficient
    transportation solutions, professional shipment
    handling and customer-focused operations.
  </p>

  <div className="coverage-grid">

    <div>

      <h3>8+</h3>

      <p>
        Cargo & Logistics Services
      </p>

    </div>


    <div>

      <h3>24×7</h3>

      <p>
        Shipment Support
      </p>

    </div>


    <div>

      <h3>4+</h3>

      <p>
        Transportation Modes
      </p>

    </div>


    <div>

      <h3>100%</h3>

      <p>
        Customer-Focused Service
      </p>

    </div>

  </div>

</div>






{/* ================= CTA ================= */}



<div className="network-cta">

  <h2>
    Let's Move Your Business Forward
  </h2>

  <p>
    Partner with City Express Cargo for reliable
    domestic, international and specialized cargo
    transportation. From road and air cargo to rail,
    sea, e-commerce and FTL services, we provide
    practical logistics solutions for businesses and
    customers.
  </p>

  <Link
    to="/contact-us"
    className="btn-primary"
  >
    Contact Our Team
  </Link>

</div>





</div>


</section>


</div>

);

};


export default Networks;