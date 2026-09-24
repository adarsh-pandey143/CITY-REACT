
import React from "react";
import "./ContactUs.css";

import contactBanner from "../assets/images/contact3.jpg";


const ContactUs = () => {
  return (
    <div className="contact-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="contact-hero"
        style={{
          backgroundImage: `url(${contactBanner})`
        }}
      >
        <div className="contact-overlay"></div>

        <div className="container">
          <div className="contact-hero-content">

            <span className="contact-hero-eyebrow">
              CONTACT CITY EXPRESS COURIER
            </span>

            <h1>
              We're Here To Support
              <span>Your Delivery Needs.</span>
            </h1>

            <p>
              Get in touch with City Express Courier for fast, safe and
              reliable courier and delivery solutions. Our team is ready
              to assist you with shipment enquiries, delivery services
              and customized courier requirements.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}

      <section className="contact-info-section">

        <div className="container">

          <div className="contact-section-heading">

            <span>GET IN TOUCH</span>

            <h2>
              Contact City Express Courier.
            </h2>

            <p>
              Our team is ready to assist you with domestic, international,
              express, air, surface and e-commerce delivery requirements.
              Contact us for shipment enquiries, delivery services,
              business partnerships or courier-related assistance.
            </p>

          </div>


          <div className="contact-grid">

            {/* PHONE */}

            <div className="contact-card">

              <div className="contact-card-top">
                <div className="contact-icon">
                  📞
                </div>

                <span className="contact-card-number">
                  01
                </span>
              </div>

              <h3>
                Call Us
              </h3>

              <div className="contact-detail">

                <span>
                  Mobile No.
                </span>

                <a href="tel:+8287877656">
                  +91 82878-77656
                </a>

                 <span>
                  Mobile No.
                </span>

                <a href="tel:+ 9818519775">
                  +91  9818519775
                </a>

              </div>
              <div className="contact-detail">

                <span>
                  Telephone No.
                </span>

                <a href="tel:+919212306365">
                  +91 92123-06365
                </a>

              </div>

            </div>


            {/* EMAIL */}

            <div className="contact-card">

              <div className="contact-card-top">
                <div className="contact-icon">
                  ✉️
                </div>

                <span className="contact-card-number">
                  02
                </span>
              </div>

              <h3>
                Email Us
              </h3>

              <div className="contact-detail">

                <span>
                  General Enquiries
                </span>

                <a href="mailto:info@cityexpcargo.com">
                  info@cityexpcargo.com
                </a>

              </div>

              <div className="contact-detail">

                <span>
                  Alternate Contact
                </span>

                <a href="mailto:tocggn.7@gmail.com">
                  tocggn.7@gmail.com
                </a>

              </div>

            </div>


            {/* OFFICE */}

            <div className="contact-card">

              <div className="contact-card-top">
                <div className="contact-icon">
                  📍
                </div>

                <span className="contact-card-number">
                  03
                </span>
              </div>

              <h3>
                Corporate Office
              </h3>

              <address className="office-address">
                <span>
                  City Express Courier
                </span>

                <span>
                 KHASRA NO.1960, ,
                </span>

                <span>
                 SANJAY GRAM, BLOCK -C, 
                </span>

                <span>
                  GURUGRAM,, 
                </span>

                <span>
                  Gurgaon, Haryana, 122001
                </span>
              </address>

            </div>


            {/* BUSINESS INFORMATION */}

            <div className="contact-card">

              <div className="contact-card-top">
                <div className="contact-icon">
                  🧾
                </div>

                <span className="contact-card-number">
                  04
                </span>
              </div>

              <h3>
                Business Information
              </h3>

              <div className="business-detail">

                <span>
                  Trade Name
                </span>

                <strong>
                  CITY EXPRESS COURIER
                </strong>

              </div>

              <div className="business-detail">

                <span>
                  Legal Name
                </span>

                <strong>
                  Jagjeet Singh Ahlawat
                </strong>

              </div>

              <div className="business-detail">

                <span>
                  GSTIN / Registration No.
                </span>

                <strong>
                  06AGMPA9167E1ZD
                </strong>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT FORM
      ===================================================== */}

      <section className="contact-form-section">

        <div className="container">

          <div className="contact-wrapper">

            {/* LEFT - FORM */}

            <div className="contact-form-box">

              <div className="form-heading">

                <span>
                  SEND AN ENQUIRY
                </span>

                <h2>
                  Let's Discuss Your
                  <strong> Delivery Requirements.</strong>
                </h2>

                <p>
                  Share your shipment details with us and our team
                  will get back to you with a suitable solution for
                  your courier and delivery requirements.
                </p>

              </div>


              <form className="contact-form">

                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="fullName">
                      Full Name
                    </label>

                    <input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                    />

                  </div>


                  <div className="form-group">

                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                    />

                  </div>

                </div>


                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                    />

                  </div>


                  <div className="form-group">

                    <label htmlFor="company">
                      Company Name
                    </label>

                    <input
                      id="company"
                      type="text"
                      placeholder="Company name (optional)"
                    />

                  </div>

                </div>


                <div className="form-group">

                  <label htmlFor="message">
                    Your Requirement
                  </label>

                  <textarea
                    id="message"
                    rows="6"
                    placeholder="Tell us about your shipment or delivery requirements..."
                  ></textarea>

                </div>


                <button
                  type="submit"
                  className="contact-submit-btn"
                >
                  Send Message
                  <span>→</span>
                </button>

              </form>

            </div>


            {/* RIGHT - SERVICES */}

            <div className="company-info">

              <div className="company-info-inner">

                <span className="company-info-eyebrow">
                  OUR SERVICES
                </span>

                <h2>
                  Courier Solutions
                  <span>Built Around Your Needs.</span>
                </h2>

                <p>
                  City Express Courier is committed to providing fast,
                  secure and reliable courier and delivery solutions.
                  Our services are designed to support different
                  shipment requirements for individuals, businesses
                  and e-commerce customers.
                </p>


                <div className="info-list">

                  <div className="info-item">
                    <span className="info-check">
                      ✓
                    </span>

                    <span>
                      Domestic Courier Services
                    </span>
                  </div>


                  <div className="info-item">
                    <span className="info-check">
                      ✓
                    </span>

                    <span>
                      International Courier Services
                    </span>
                  </div>


                  <div className="info-item">
                    <span className="info-check">
                      ✓
                    </span>

                    <span>
                      Express & Same Day Delivery
                    </span>
                  </div>


                  <div className="info-item">
                    <span className="info-check">
                      ✓
                    </span>

                    <span>
                      Air & Surface Delivery
                    </span>
                  </div>


                  <div className="info-item">
                    <span className="info-check">
                      ✓
                    </span>

                    <span>
                      Rail & Specialized Delivery
                    </span>
                  </div>


                  <div className="info-item">
                    <span className="info-check">
                      ✓
                    </span>

                    <span>
                      E-Commerce & FTL Services
                    </span>
                  </div>

                </div>


                <div className="company-info-footer">

                  <span>
                    NEED ASSISTANCE?
                  </span>

                  <a href="tel:+8287877656">
                    +91 82878-77656
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAP
      ===================================================== */}

      <section className="map-section">

        <div className="container">

          <div className="map-heading">

            <span>
              FIND US
            </span>

            <h2>
              Visit Our Corporate Office.
            </h2>

            <p>
              Locate City Express Courier at our corporate office
              and connect with our team for your courier and
              delivery needs.
            </p>

          </div>


        <div className="map-wrapper">
  <iframe
    title="City Express Courier - Sanjay Gram Office"
    src="https://www.google.com/maps?q=KHASRA+NO.+1960,+SANJAY+GRAM,+BLOCK+C,+GURUGRAM,+HARYANA+122001,+INDIA&output=embed"
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

