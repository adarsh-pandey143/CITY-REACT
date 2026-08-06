import React from "react";
import "./ContactUs.css";

import contactBanner from "../assets/images/contact.jpg";

const ContactUs = () => {

return (

<div className="contact-page">

    {/* ================= HERO ================= */}

   <section
  className="contact-hero"
  style={{
    backgroundImage: `url(${contactBanner})`
  }}
>

  <div className="contact-overlay"></div>

  <div className="container">

    <div className="contact-hero-content">

      <span>CONTACT US</span>

      <h1>
        We're Here To Support
        Your Logistics Needs
      </h1>

      <p>
        Get in touch with World Wide Courier Cargo for
        reliable courier, cargo and logistics solutions.
        Our experienced team is ready to assist you with
        shipment inquiries, transportation services and
        customized logistics support across India.
      </p>

    </div>

  </div>

</section>

    {/* ================= CONTACT INFO ================= */}

 <section className="contact-info-section">

  <div className="container">

    <div className="contact-section-heading">

      <span>GET IN TOUCH</span>

      <h2>
        Contact World Wide Courier Cargo
      </h2>

      <p>
        Our team is always ready to assist you with courier,
        cargo and logistics solutions. Feel free to contact us
        for shipment inquiries, business partnerships or any
        transportation requirements.
      </p>

    </div>

    <div className="contact-grid">

      {/* ================= PHONE ================= */}

      <div className="contact-card">

        <div className="contact-icon">📞</div>

        <h3>Call Us</h3>

        <p>+91 70426 99313</p>

      </div>

      {/* ================= EMAIL ================= */}

      <div className="contact-card">

        <div className="contact-icon">✉️</div>

        <h3>Email Us</h3>

        <p>info@worldwidecouriercargo.com</p>

      </div>

      {/* ================= OFFICE ================= */}

      <div className="contact-card">

        <div className="contact-icon">📍</div>

        <h3>Corporate Office</h3>

        <p>
          1st Floor, H. No. 168,<br />
          Pawan Kataria Road,<br />
          Gali Number B,<br />
          Gurugram, Haryana – 122001,<br />
          India
        </p>

      </div>

      {/* ================= REGISTRATION ================= */}

      <div className="contact-card">

        <div className="contact-icon">🧾</div>

        <h3>Business Information</h3>

        <p>
          <strong>Trade Name:</strong><br />
          World Wide Courier Cargo
        </p>

        <p>
          <strong>Legal Name:</strong><br />
          Shashi Ranjan Panday
        </p>

        <p>
          <strong>GSTIN / Registration No.:</strong><br />
          06DYLPP8013E1ZC
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

        <h2>
          Send Us A Message
        </h2>

        <p>
          Have a question about our courier, cargo or
          logistics services? Fill out the form below
          and our team will get back to you with the
          right solution as quickly as possible.
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
              placeholder="Company Name (Optional)"
            />
          </div>

          <div className="form-group">
            <textarea
              rows="6"
              placeholder="Tell us about your shipment or logistics requirements..."
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

        <h2>
          Why Choose World Wide Courier Cargo?
        </h2>

        <p>
          World Wide Courier Cargo is committed to providing
          reliable, secure and cost-effective courier, cargo
          and logistics solutions. Our experienced team and
          strong transportation network ensure every shipment
          is delivered safely and on time.
        </p>

        <div className="info-list">

          <div className="info-item">
            ✅ Domestic Courier Services
          </div>

          <div className="info-item">
            ✅ Cargo Transportation Solutions
          </div>

          <div className="info-item">
            ✅ Road Freight Services
          </div>

          <div className="info-item">
            ✅ Express & Time-Critical Deliveries
          </div>

          <div className="info-item">
            ✅ PAN India Service Network
          </div>

          <div className="info-item">
            ✅ Safe, Secure & On-Time Delivery
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
  title="World Wide Courier Cargo - Gurugram Office"
  src="https://www.google.com/maps?q=H+No+168,+Pawan+Kataria+Road,+Gali+Number+B,+Gurugram,+Haryana+122001,+India&output=embed"
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

        </div>

    </div>

</section>

</div>

);

};

export default ContactUs;

