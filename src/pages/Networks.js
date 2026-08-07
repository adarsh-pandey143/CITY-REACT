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
    A Strong Nationwide Logistics Network
  </h1>

  <p>
    With an extensive network of branches, transportation
    partners and delivery hubs, World Wide Courier Cargo
    ensures safe, timely and efficient movement of
    shipments across India, backed by advanced tracking
    technology and dedicated customer support.
  </p>

  <Link
    to="/NotFound"
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
    Nationwide & Worldwide Logistics Network
  </h2>

  <p>
    World Wide Courier Cargo has built a strong and
    reliable logistics network to provide seamless
    courier, cargo and transportation services across
    India and international destinations. Our extensive
    branch network, experienced professionals and modern
    logistics infrastructure ensure every shipment is
    delivered safely, efficiently and on time.
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
      Our extensive road transportation network ensures
      fast, secure and on-time movement of parcels,
      cargo and commercial shipments across India.
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
  <strong>Hyderabad Branch:</strong><br />
  Plot No. 640-B, Sreeram Nagar Colony,<br />
  Kondapur Village,<br />
  Hyderabad – 500084.
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
      Our organized distribution system ensures smooth
      handling, secure storage and reliable last-mile
      delivery for every shipment.
    </p>

  </div>

  <div className="network-card">

    <div className="network-icon">
      🌍
    </div>

    <h3>
      Nationwide Coverage
    </h3>

    <p>
      Serving businesses and individuals through a
      comprehensive logistics network connecting major
      cities and commercial hubs across India.
    </p>

  </div>

</div>






{/* ================= COVERAGE ================= */}



<div className="coverage-box">

  <h2>
    Our Network Strength
  </h2>

  <p>
    World Wide Courier Cargo is committed to delivering
    reliable courier, cargo and logistics services through
    an extensive transportation network, experienced
    professionals and customer-focused operations.
  </p>

  <div className="coverage-grid">

    <div>

      <h3>100+</h3>

      <p>
        Service Locations
      </p>

    </div>

    <div>

      <h3>24×7</h3>

      <p>
        Customer Support
      </p>

    </div>

    <div>

      <h3>10+</h3>

      <p>
        Years of Experience
      </p>

    </div>

    <div>

      <h3>1000+</h3>

      <p>
        Successful Deliveries
      </p>

    </div>

  </div>

</div>







{/* ================= CTA ================= */}



<div className="network-cta">

  <h2>
    Let's Build A Stronger Supply Chain Together
  </h2>

  <p>
    Partner with World Wide Courier Cargo for
    fast, secure and technology-driven courier,
    cargo and logistics services across India.
    We are committed to delivering reliable
    transportation solutions for businesses
    of every size.
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

