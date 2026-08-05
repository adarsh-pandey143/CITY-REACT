import React from "react";
import "./ContactUs.css";

import contactBanner from "../assets/images/sea.jpg";

const ContactUs = () => {

return (

<div className="contact-page">

    {/* ================= HERO ================= */}

    <section
        className="contact-hero"
        style={{
            backgroundImage:`url(${contactBanner})`
        }}
    >

        <div className="contact-overlay"></div>

        <div className="container">

            <div className="contact-hero-content">

                <span>CONTACT US</span>

                <h1>
                    Let's Move Your Business Forward
                </h1>

                <p>
                    Our logistics experts are always ready to help you
                    with transportation, warehousing and supply chain
                    solutions across India.
                </p>

            </div>

        </div>

    </section>

    {/* ================= CONTACT INFO ================= */}

    <section className="contact-info-section">

        <div className="container">

            <div className="contact-section-heading">

                <span>GET IN TOUCH</span>

                <h2>Contact Information</h2>

            </div>

            <div className="contact-grid">

              {/* ================= PHONE ================= */}

<div className="contact-card">

  <div className="contact-icon">
    📞
  </div>

  <h3>Call Us</h3>

  <p>
    +91 99588 26252
  </p>

  <p>
    +91 93128 77460
  </p>

</div>

{/* ================= EMAIL ================= */}

<div className="contact-card">

  <div className="contact-icon">
    ✉️
  </div>

  <h3>Email</h3>

  <p>
    info@ralogistics.in
  </p>

  <p>
    support@ralogistics.in
  </p>

</div>

{/* ================= OFFICE ================= */}

<div className="contact-card">

  <div className="contact-icon">
    📍
  </div>

  <h3>Corporate Office</h3>

  <p>
    New Delhi, India
  </p>

  <p>
    Serving PAN India Logistics Network
  </p>

</div>

{/* ================= HOURS ================= */}

<div className="contact-card">

  <div className="contact-icon">
    🕒
  </div>

  <h3>Working Hours</h3>

  <p>
    Monday – Saturday
  </p>

  <p>
    09:00 AM – 07:00 PM
  </p>

</div>

</div>

</div>

</section>

{/* ================= CONTACT FORM ================= */}

<section className="contact-form-section">

  <div className="container">

    <div className="contact-wrapper">

      {/* ================= LEFT SIDE ================= */}

<div className="contact-form-box">

  <h2>Send Us A Message</h2>

  <p>
    Fill out the form below and our logistics team will contact you
    as soon as possible.
  </p>

  <form className="contact-form">

    <div className="form-group">
      <input
        type="text"
        placeholder="Full Name"
      />
    </div>

    <div className="form-group">
      <input
        type="email"
        placeholder="Email Address"
      />
    </div>

    <div className="form-group">
      <input
        type="tel"
        placeholder="Phone Number"
      />
    </div>

    <div className="form-group">
      <input
        type="text"
        placeholder="Company Name"
      />
    </div>

    <div className="form-group">
      <textarea
        rows="6"
        placeholder="Tell us about your logistics requirement..."
      ></textarea>
    </div>

    <button
      type="submit"
      className="btn-primary"
    >
      Send Message
    </button>

  </form>

</div>

{/* ================= RIGHT SIDE ================= */}

<div className="company-info">

  <h2>Why Contact RA Logistics?</h2>

  <p>
    We provide reliable logistics and transportation services
    for businesses across India with a strong distribution
    network and experienced operations team.
  </p>

  <div className="info-list">

    <div className="info-item">
      ✅ Road Transportation
    </div>

    <div className="info-item">
      ✅ Air Freight Services
    </div>

    <div className="info-item">
      ✅ Warehousing Solutions
    </div>

    <div className="info-item">
      ✅ Express Delivery
    </div>

    <div className="info-item">
      ✅ PAN India Network
    </div>

    <div className="info-item">
      ✅ Safe & Secure Delivery
    </div>

  </div>

</div>

</div>

</div>

</section>

{/* ================= GOOGLE MAP ================= */}

<section className="map-section">

    <div className="container">

        <div className="map-wrapper">

            <iframe
                title="RA Logistics Location"
                src="https://www.google.com/maps?q=New+Delhi,+India&output=embed"
                loading="lazy"
                allowFullScreen
            ></iframe>

        </div>

    </div>

</section>

</div>

);

};

export default ContactUs;

