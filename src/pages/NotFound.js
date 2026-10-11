
import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./NotFound.css";

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    pickup: "",
    delivery: "",
    packageType: "",
    weight: "",
    deliveryType: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);

    try {
      await emailjs.send(
        "service_nh6ttfg",
        "template_foc2knv",
        formData,
        "8FOwewJEdNmRfPoZJ"
      );

      console.log("Quote Request:", formData);

      alert(
        "Thank you! Your quote request has been submitted. Our team will contact you shortly."
      );

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        pickup: "",
        delivery: "",
        packageType: "",
        weight: "",
        deliveryType: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      alert(
        "Sorry! Your quote request could not be sent. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="quote-page">

      {/* ================= HERO ================= */}
      <section className="quote-hero">
        <div className="quote-hero-overlay"></div>

        <div className="quote-container">
          <div className="quote-hero-content">

            <span className="quote-hero-tag">
              CITY EXPRESS COURIER
            </span>

            <h1>
              Get Your
              <span>Delivery Quote.</span>
            </h1>

            <p>
              Tell us about your shipment and our team will help you find
              the right courier and delivery solution for your requirement.
            </p>

            <div className="quote-hero-points">

              <div className="quote-hero-point">
                <span>✓</span>
                Fast Response
              </div>

              <div className="quote-hero-point">
                <span>✓</span>
                Reliable Service
              </div>

              <div className="quote-hero-point">
                <span>✓</span>
                Customized Solutions
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ================= QUOTE SECTION ================= */}
      <section className="quote-main-section">

        <div className="quote-container">

          <div className="quote-layout">

            {/* ================= LEFT INFO ================= */}
            <div className="quote-info">

              <span className="quote-section-tag">
                REQUEST A QUOTE
              </span>

              <h2>
                Let's Move Your
                <strong>Shipment.</strong>
              </h2>

              <p className="quote-info-intro">
                Share your shipment details with us and our logistics team
                will review your requirement and get back to you with a
                suitable quotation.
              </p>


              <div className="quote-info-cards">

                <div className="quote-info-card">
                  <div className="quote-info-icon">01</div>

                  <div>
                    <h3>Tell Us Your Requirement</h3>
                    <p>
                      Provide pickup, delivery and shipment details.
                    </p>
                  </div>
                </div>


                <div className="quote-info-card">
                  <div className="quote-info-icon">02</div>

                  <div>
                    <h3>Get A Suitable Quote</h3>
                    <p>
                      Our team reviews your requirement and prepares
                      the appropriate service quotation.
                    </p>
                  </div>
                </div>


                <div className="quote-info-card">
                  <div className="quote-info-icon">03</div>

                  <div>
                    <h3>Start Your Shipment</h3>
                    <p>
                      Once confirmed, our team helps coordinate your
                      shipment movement.
                    </p>
                  </div>
                </div>

              </div>


              <div className="quote-contact-box">

                <span>NEED HELP?</span>

                <h3>
                  Talk To Our
                  <strong>Courier Team</strong>
                </h3>

                <div className="quote-contact-details">

                  <a href="tel:+919212306365">
                    <span>☎</span>
                    +91 92123 06365
                  </a>

                  <a href="mailto:info@cityexpcargo.com">
                    <span>✉</span>
                    info@cityexpcargo.com
                  </a>

                </div>

              </div>

            </div>


            {/* ================= FORM ================= */}
            <div className="quote-form-wrapper">

              <div className="quote-form-header">

                <div>
                  <span>QUOTE REQUEST</span>

                  <h2>
                    Shipment Details
                  </h2>
                </div>

                <div className="quote-form-number">
                  01
                </div>

              </div>


              <form
                className="quote-form"
                onSubmit={handleSubmit}
              >

                {/* PERSONAL DETAILS */}
                <div className="quote-form-section">

                  <div className="quote-form-section-title">
                    <span>01</span>
                    Contact Information
                  </div>

                  <div className="quote-form-grid">

                    <div className="quote-field">
                      <label>
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>


                    <div className="quote-field">
                      <label>
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        required
                      />
                    </div>


                    <div className="quote-field quote-field-full">
                      <label>
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                      />
                    </div>

                  </div>

                </div>


                {/* SHIPMENT DETAILS */}
                <div className="quote-form-section">

                  <div className="quote-form-section-title">
                    <span>02</span>
                    Shipment Information
                  </div>

                  <div className="quote-form-grid">

                    <div className="quote-field">
                      <label>
                        Service Required
                      </label>

                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">
                          Select service
                        </option>

                        <option value="domestic">
                          Domestic Courier
                        </option>

                        <option value="express">
                          Express Delivery
                        </option>

                        <option value="air">
                          Air Courier
                        </option>

                        <option value="surface">
                          Surface Delivery
                        </option>

                        <option value="ecommerce">
                          E-Commerce Delivery
                        </option>

                        <option value="ftl">
                          FTL Service
                        </option>

                        <option value="train">
                          Rail Delivery
                        </option>

                        <option value="other">
                          Other Requirement
                        </option>
                      </select>
                    </div>


                    <div className="quote-field">
                      <label>
                        Package Type
                      </label>

                      <select
                        name="packageType"
                        value={formData.packageType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">
                          Select package type
                        </option>

                        <option value="documents">
                          Documents
                        </option>

                        <option value="parcel">
                          Parcel
                        </option>

                        <option value="commercial">
                          Commercial Shipment
                        </option>

                        <option value="ecommerce">
                          E-Commerce Package
                        </option>

                        <option value="fragile">
                          Fragile Shipment
                        </option>

                        <option value="other">
                          Other
                        </option>
                      </select>
                    </div>


                    <div className="quote-field">
                      <label>
                        Pickup Location
                      </label>

                      <input
                        type="text"
                        name="pickup"
                        value={formData.pickup}
                        onChange={handleChange}
                        placeholder="City / Pickup location"
                        required
                      />
                    </div>


                    <div className="quote-field">
                      <label>
                        Delivery Location
                      </label>

                      <input
                        type="text"
                        name="delivery"
                        value={formData.delivery}
                        onChange={handleChange}
                        placeholder="City / Delivery location"
                        required
                      />
                    </div>


                    <div className="quote-field">
                      <label>
                        Approx. Weight
                      </label>

                      <input
                        type="text"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        placeholder="e.g. 5 KG"
                        required
                      />
                    </div>


                    <div className="quote-field">
                      <label>
                        Delivery Preference
                      </label>

                      <select
                        name="deliveryType"
                        value={formData.deliveryType}
                        onChange={handleChange}
                      >
                        <option value="">
                          Select preference
                        </option>

                        <option value="standard">
                          Standard Delivery
                        </option>

                        <option value="express">
                          Express Delivery
                        </option>

                        <option value="same-day">
                          Same Day Delivery
                        </option>

                        <option value="priority">
                          Priority Delivery
                        </option>
                      </select>
                    </div>


                    <div className="quote-field quote-field-full">
                      <label>
                        Additional Requirements
                      </label>

                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us anything else about your shipment..."
                        rows="5"
                      ></textarea>
                    </div>

                  </div>

                </div>


                {/* SUBMIT */}
                <div className="quote-submit-area">

                  <div className="quote-submit-note">
                    <span>🔒</span>

                    <p>
                      Your information is used only to process
                      your quotation request.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="quote-submit-btn"
                    disabled={isSending}
                  >
                    {isSending
                      ? "Sending..."
                      : "Request My Quote"}

                    {!isSending && <span>→</span>}
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BOTTOM CTA ================= */}
      <section className="quote-bottom-cta">

        <div className="quote-container">

          <div className="quote-bottom-inner">

            <div>
              <span>
                CITY EXPRESS COURIER
              </span>

              <h2>
                Fast. Safe.
                <strong>Reliable.</strong>
              </h2>
            </div>

            <Link
              to="/tracking"
              className="quote-track-btn"
            >
              Track Existing Shipment
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default GetQuote;

