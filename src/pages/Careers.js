import React from "react";
import { Link } from "react-router-dom";
import "../pages/Page.css";

import careerBanner from "../assets/images/g1.jpg";

const Careers = () => {

return (

<div className="career-page">

    {/* ================= HERO ================= */}

    <section
        className="career-hero"
        style={{
            backgroundImage:`url(${careerBanner})`
        }}
    >

        <div className="career-overlay"></div>

        <div className="container">

            <div className="career-hero-content">

                <span>CAREER</span>

                <h1>
                    Build Your Career
                    With RA Logistics
                </h1>

                <p>
                    Join a fast growing logistics company where
                    innovation, teamwork and customer satisfaction
                    drive everything we do.
                </p>

                <Link
                    to="/contact-us"
                    className="btn-primary"
                >
                    Apply Today
                </Link>

            </div>

        </div>

    </section>

    {/* ================= WHY JOIN ================= */}

    <section className="why-join">

        <div className="container">

            <div className="career-section-heading">

                <span>WHY JOIN US</span>

                <h2>
                    Grow With One Of India's Trusted Logistics Companies
                </h2>

            </div>

            <div className="join-grid">


              {/* ================= CARD 1 ================= */}

<div className="join-card">

  <div className="join-icon">🚀</div>

  <h3>Career Growth</h3>

  <p>
    We believe in developing talent by providing continuous
    learning opportunities, training programs and career
    advancement paths.
  </p>

</div>

{/* ================= CARD 2 ================= */}

<div className="join-card">

  <div className="join-icon">🤝</div>

  <h3>Supportive Team</h3>

  <p>
    Work with experienced professionals in a collaborative
    environment where every employee is valued and respected.
  </p>

</div>

{/* ================= CARD 3 ================= */}

<div className="join-card">

  <div className="join-icon">📈</div>

  <h3>Learning Culture</h3>

  <p>
    Gain practical experience in logistics, transportation,
    warehousing and supply chain management while building
    your professional skills.
  </p>

</div>

{/* ================= CARD 4 ================= */}

<div className="join-card">

  <div className="join-icon">🏆</div>

  <h3>Performance Rewards</h3>

  <p>
    We recognize dedication and excellence through
    performance-based growth, appreciation and long-term
    career opportunities.
  </p>

</div>

</div>

</div>

</section>

{/* ================= CURRENT OPENINGS ================= */}

<section className="job-section">

  <div className="container">

    <div className="career-section-heading">

      <span>CURRENT OPENINGS</span>

      <h2>Available Positions</h2>

    </div>

    <div className="job-list">

      {/* ================= JOB 1 ================= */}

<div className="job-card">

  <div className="job-info">

    <h3>Delivery Executive</h3>

    <p>
      Full Time • Delhi NCR
    </p>

  </div>

  <Link
    to="/contact-us"
    className="apply-btn"
  >
    Apply Now
  </Link>

</div>

{/* ================= JOB 2 ================= */}

<div className="job-card">

  <div className="job-info">

    <h3>Operations Executive</h3>

    <p>
      Full Time • Noida
    </p>

  </div>

  <Link
    to="/contact-us"
    className="apply-btn"
  >
    Apply Now
  </Link>

</div>

{/* ================= JOB 3 ================= */}

<div className="job-card">

  <div className="job-info">

    <h3>Warehouse Supervisor</h3>

    <p>
      Full Time • Ghaziabad
    </p>

  </div>

  <Link
    to="/contact-us"
    className="apply-btn"
  >
    Apply Now
  </Link>

</div>

{/* ================= JOB 4 ================= */}

<div className="job-card">

  <div className="job-info">

    <h3>Customer Support Executive</h3>

    <p>
      Full Time • New Delhi
    </p>

  </div>

  <Link
    to="/contact-us"
    className="apply-btn"
  >
    Apply Now
  </Link>

</div>

</div>

</div>

</section>


   {/* ================= BENEFITS ================= */}

<section className="benefits-section">

  <div className="container">

    <div className="career-section-heading">

      <span>EMPLOYEE BENEFITS</span>

      <h2>What We Offer</h2>

    </div>

    <div className="benefits-grid">

      <div className="benefit-card">
        <div className="benefit-icon">💼</div>
        <h3>Professional Growth</h3>
        <p>
          Continuous learning opportunities, skill development programs,
          and career advancement within the organization.
        </p>
      </div>

      <div className="benefit-card">
        <div className="benefit-icon">🎓</div>
        <h3>Training Programs</h3>
        <p>
          Hands-on logistics training, operational workshops,
          and industry best practices.
        </p>
      </div>

      <div className="benefit-card">
        <div className="benefit-icon">🤝</div>
        <h3>Supportive Team</h3>
        <p>
          Work with experienced professionals in a collaborative,
          positive and growth-oriented environment.
        </p>
      </div>

      <div className="benefit-card">
        <div className="benefit-icon">📈</div>
        <h3>Performance Rewards</h3>
        <p>
          Competitive salary, incentives, recognition programs
          and long-term career stability.
        </p>
      </div>

    </div>

  </div>

</section>

{/* ================= CTA ================= */}

<section className="career-cta">

  <div className="container">

    <h2>Ready To Join R A Logistics?</h2>

    <p>
      We are always looking for talented and passionate professionals.
      If you are ready to build your future with us, send your resume today.
    </p>

    <Link
      to="/contact-us"
      className="btn-primary"
    >
      Apply Now
    </Link>

  </div>

</section>

</div>

);

};

export default Careers;