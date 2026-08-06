import React from "react";
import { Link } from "react-router-dom";

import "../../pages/Page.css";

import warehouseImage from "../../assets/images/ware.jpg";


const Warehouse = () => {


return (

<div className="service-page">



{/* ================= HERO ================= */}

<section
  className="service-hero"
  style={{
    backgroundImage: `url(${warehouseImage})`
  }}
>

  <div className="service-overlay"></div>

  <div className="container">

    <div className="service-hero-content">

      <span>
        WAREHOUSING & DISTRIBUTION
      </span>

      <h1>
        Secure Warehouse & Inventory Management Solutions
      </h1>

      <p>
        World Wide Courier Cargo offers modern warehousing,
        inventory management and distribution services to
        help businesses store, manage and deliver goods
        efficiently. 
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
        WAREHOUSING SOLUTIONS
      </span>

      <h2>
        Smart Warehousing & Inventory Management Services
      </h2>

      <p>
        World Wide Courier Cargo provides secure warehousing,
        inventory management and distribution solutions
        designed to support businesses of every size. Our
        modern storage facilities, efficient operations and
        experienced logistics professionals ensure your goods
        remain safe, organized and ready for timely dispatch.
      </p>

    </div>

    {/* ================= FEATURES ================= */}

    <div className="feature-grid">

      <div className="feature-card">

        <h3>🏢 Secure Storage Facilities</h3>

        <p>
          Spacious and secure warehouses designed
          for safe storage of commercial goods,
          parcels and industrial cargo.
        </p>

      </div>

      <div className="feature-card">

        <h3>📊 Inventory Management</h3>

        <p>
          Efficient inventory monitoring with
          organized stock control for improved
          supply chain operations.
        </p>

      </div>

      <div className="feature-card">

        <h3>📦 Pick, Pack & Dispatch</h3>

        <p>
          Fast order processing, professional
          packaging and accurate dispatch for
          timely deliveries.
        </p>

      </div>

      <div className="feature-card">

        <h3>🚚 Distribution Services</h3>

        <p>
          Seamless distribution solutions ensuring
          smooth movement of goods across multiple
          destinations.
        </p>

      </div>

      <div className="feature-card">

        <h3>🛡 Safe Cargo Handling</h3>

        <p>
          Professional loading, unloading and
          storage practices to protect every
          shipment from damage.
        </p>

      </div>

      <div className="feature-card">

        <h3>📍 Logistics Coordination</h3>

        <p>
          Integrated warehouse and transportation
          support for faster order fulfillment
          and efficient supply chain management.
        </p>

      </div>

    </div>

    {/* ================= BENEFITS ================= */}

    <div className="service-benefits">

      <h2>
        Why Choose Our Warehousing Services?
      </h2>

      <ul>

        <li>✓ Secure and well-managed warehouse facilities</li>

        <li>✓ Efficient inventory management system</li>

        <li>✓ Professional cargo handling and storage</li>

        <li>✓ Fast pick, pack and dispatch operations</li>

        <li>✓ Reliable distribution and logistics support</li>

        <li>✓ Flexible storage solutions for businesses</li>

        <li>✓ Experienced warehouse management team</li>

        <li>✓ End-to-end supply chain assistance</li>

      </ul>

    </div>

    {/* ================= CTA ================= */}

    <div className="service-cta">

      <h2>
        Looking For Reliable Warehousing Solutions?
      </h2>

      <p>
        Partner with World Wide Courier Cargo for
        secure warehousing, efficient inventory
        management and dependable distribution
        services that keep your supply chain moving
        smoothly and efficiently.
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


export default Warehouse;