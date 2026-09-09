
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
        Get in touch with City Express Cargo for reliable
        courier, cargo and logistics solutions. Our team is
        ready to assist you with shipment inquiries,
        transportation services and customized logistics
        requirements.
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
        Contact City Express Cargo
      </h2>

      <p>
        Our team is ready to assist you with courier, cargo
        and logistics requirements. Contact us for shipment
        inquiries, transportation services, business
        partnerships or any other logistics requirements.
      </p>

    </div>

    <div className="contact-grid">


      {/* ================= PHONE ================= */}

      <div className="contact-card">

        <div className="contact-icon">📞</div>

        <h3>Call Us</h3>

        <span>
          Mobile No.
          <p>
            <a href="tel:+917042699313">
              +91 70426-99313
            </a>
          </p>
        </span>

        <br />

        <span>
          Telephone No.
          <p>
            <a href="tel:+919212306365">
              +91 92123-06365
            </a>
          </p>
        </span>

        <br />

      </div>


      {/* ================= EMAIL ================= */}


<div className="contact-card">

  <div className="contact-icon">✉️</div>

  <h3>Email Us</h3>

  <p>
    <a href="mailto:info@cityexpcargo.com">
      info@cityexpcargo.com
    </a>
  </p>

  <p>
    <a href="mailto:tocggn.7@gmail.com">
      tocggn.7@gmail.com
    </a>
  </p>

</div>



      {/* ================= OFFICE ================= */}

      <div className="contact-card">

        <div className="contact-icon">📍</div>

        <h3>Corporate Office</h3>

        <p>
          City Express Courier, C-40,<br />
          Sanjaygram, Rajeev Nagar,<br />
          Sheetla Mata Mandir Road,<br />
          India
        </p>

      </div>


      {/* ================= REGISTRATION ================= */}

      <div className="contact-card">

        <div className="contact-icon">🧾</div>

        <h3>Business Information</h3>

        <p>
          <strong>Trade Name:</strong><br />
          CITY EXPRESS COURIER
        </p>

        <p>
          <strong>Legal Name:</strong><br />
          Jagjeet Singh Ahlawat
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
          right solution for your requirements.
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
          Why Choose City Express Cargo?
        </h2>

        <p>
          City Express Cargo is committed to providing
          reliable, secure and efficient courier, cargo
          and logistics solutions. We offer multiple
          transportation options to support domestic,
          international and specialized shipment
          requirements.
        </p>


        <div className="info-list">


          <div className="info-item">
            ✅ Domestic Cargo Services
          </div>


          <div className="info-item">
            ✅ International Cargo Services
          </div>


          <div className="info-item">
            ✅ Air Cargo Transportation
          </div>


          <div className="info-item">
            ✅ Surface Cargo Services
          </div>


          <div className="info-item">
            ✅ Cargo By Train & Sea
          </div>


          <div className="info-item">
            ✅ E-Commerce & FTL Services
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
            title="City Express Courier - Corporate Office"
            src="https://www.google.com/maps?q=City+Express+Courier,+C-40,+Sanjaygram,+Rajeev+Nagar,+Sheetla+Mata+Mandir+Road&output=embed"
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

