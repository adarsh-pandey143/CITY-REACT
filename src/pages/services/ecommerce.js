
import React from "react";
import { Link } from "react-router-dom";

import "../../pages/Page.css";

import ecommerceImage from "../../assets/images/ware.jpg";


const Ecommerce = () => {


return (

<div className="service-page">



{/* ================= HERO ================= */}

<section
  className="service-hero"
  style={{
    backgroundImage: `url(${ecommerceImage})`
  }}
>

  <div className="service-overlay"></div>

  <div className="container">

    <div className="service-hero-content">

      <span>
        E-COMMERCE LOGISTICS SERVICES
      </span>

      <h1>
        Reliable E-Commerce Logistics & Delivery Solutions
      </h1>

      <p>
        City Express Cargo provides reliable logistics and delivery
        solutions for e-commerce businesses, helping online sellers
        move customer orders safely and efficiently from pickup to
        final delivery across India.
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
        E-COMMERCE LOGISTICS SOLUTIONS
      </span>

      <h2>
        Efficient Logistics Solutions For Your E-Commerce Business
      </h2>

      <p>
        City Express Cargo supports e-commerce businesses with
        dependable shipment transportation and delivery solutions.
        From order pickup and shipment movement to final delivery,
        our logistics services are designed to help online businesses
        manage their deliveries efficiently and provide a reliable
        experience to their customers.
      </p>

    </div>



    {/* ================= FEATURES ================= */}

    <div className="feature-grid">


      <div className="feature-card">

        <h3>📦 E-Commerce Shipment Delivery</h3>

        <p>
          Reliable transportation and delivery solutions for
          e-commerce orders, parcels and customer shipments
          across multiple destinations.
        </p>

      </div>



      <div className="feature-card">

        <h3>🚚 Order Pickup & Transportation</h3>

        <p>
          Convenient pickup and transportation solutions to
          help move e-commerce shipments efficiently from
          the seller to the required destination.
        </p>

      </div>



      <div className="feature-card">

        <h3>🏠 Door-to-Door Delivery</h3>

        <p>
          End-to-end delivery support with shipment movement
          from pickup location to the customer's doorstep.
        </p>

      </div>



      <div className="feature-card">

        <h3>⚡ Fast & Reliable Delivery</h3>

        <p>
          Efficient shipment processing and transportation
          designed to support timely delivery of online orders
          and customer shipments.
        </p>

      </div>



      <div className="feature-card">

        <h3>🛡 Secure Package Handling</h3>

        <p>
          Careful handling of packages throughout transportation
          helps keep e-commerce shipments secure from pickup
          to final delivery.
        </p>

      </div>



      <div className="feature-card">

        <h3>📍 Shipment Tracking</h3>

        <p>
          Track your e-commerce shipments and stay updated
          with shipment status throughout the delivery journey.
        </p>

      </div>


    </div>



    {/* ================= BENEFITS ================= */}

    <div className="service-benefits">

      <h2>
        Why Choose Our E-Commerce Logistics Services?
      </h2>

      <ul>

        <li>✓ Reliable logistics support for e-commerce businesses</li>

        <li>✓ Efficient pickup and shipment transportation</li>

        <li>✓ Door-to-door delivery solutions</li>

        <li>✓ Safe and secure package handling</li>

        <li>✓ Solutions for different shipment sizes</li>

        <li>✓ Shipment tracking and status updates</li>

        <li>✓ Timely and dependable delivery support</li>

        <li>✓ Cost-effective logistics solutions for online businesses</li>

      </ul>

    </div>



    {/* ================= CTA ================= */}

    <div className="service-cta">

      <h2>
        Looking For Reliable E-Commerce Logistics?
      </h2>

      <p>
        Partner with City Express Cargo for dependable
        e-commerce logistics and delivery solutions. Our team
        helps online businesses move their shipments safely,
        efficiently and reliably from pickup to final delivery.
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


export default Ecommerce;

