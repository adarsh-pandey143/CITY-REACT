import React from "react";
import { Link } from "react-router-dom";
import "../pages/Page.css";

import careerBanner from "../assets/images/careers.jpg";

const Careers = () => {

return (

<div className="career-page">

    {/* ================= HERO ================= */}

   <section
  className="career-hero"
  style={{
    backgroundImage: `url(${careerBanner})`
  }}
>

  <div className="career-overlay"></div>

  <div className="container">

    <div className="career-hero-content">

      <span>CAREERS</span>

      <h1>
        Build Your Future With
        World Wide Courier Cargo
      </h1>

      <p>
        Join World Wide Courier Cargo and become part of a
        dynamic team delivering trusted courier, cargo and
        logistics solutions. We believe in innovation,
        teamwork and creating opportunities for talented
        professionals to grow and succeed.
      </p>

      <Link
        to="/contact-us"
        className="btn-primary"
      >
        Apply Now
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
        Build A Rewarding Career With World Wide Courier Cargo
      </h2>

      <p>
        At World Wide Courier Cargo, we believe our people are
        our greatest strength. We provide a professional work
        environment where talent is recognized, innovation is
        encouraged and every employee has the opportunity to
        learn, grow and succeed.
      </p>

    </div>

    <div className="join-grid">

      {/* ================= CARD 1 ================= */}

      <div className="join-card">

        <div className="join-icon">🚀</div>

        <h3>Career Growth</h3>

        <p>
          Build a successful career through continuous learning,
          professional development and long-term growth
          opportunities within our organization.
        </p>

      </div>

      {/* ================= CARD 2 ================= */}

      <div className="join-card">

        <div className="join-icon">🤝</div>

        <h3>Collaborative Workplace</h3>

        <p>
          Work alongside experienced professionals in a positive,
          respectful and team-oriented environment that values
          every individual's contribution.
        </p>

      </div>

      {/* ================= CARD 3 ================= */}

      <div className="join-card">

        <div className="join-icon">📚</div>

        <h3>Learning & Development</h3>

        <p>
          Gain hands-on experience in courier, cargo,
          transportation and logistics while enhancing your
          technical and leadership skills.
        </p>

      </div>

      {/* ================= CARD 4 ================= */}

      <div className="join-card">

        <div className="join-icon">🏆</div>

        <h3>Recognition & Rewards</h3>

        <p>
          We appreciate dedication and outstanding performance
          through career advancement, recognition programs and
          rewarding opportunities.
        </p>

      </div>

    </div>

  </div>

</section>

{/* ================= CURRENT OPENINGS ================= */}

<section className="job-section">

  <div className="container">

    <div className="career-section-heading">

      <span>CURRENT OPPORTUNITIES</span>

      <h2>
        Join Our Growing Team
      </h2>

      <p>
        World Wide Courier Cargo is looking for passionate,
        dedicated and talented professionals who are ready
        to build a successful career in the courier, cargo
        and logistics industry.
      </p>

    </div>

    <div className="job-list">

      {/* ================= JOB 1 ================= */}

      <div className="job-card">

        <div className="job-info">

          <h3>Delivery Executive</h3>

          <p>
            📍 Delhi NCR • Full Time
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
            📍 Noida • Full Time
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
            📍 Ghaziabad • Full Time
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
            📍 New Delhi • Full Time
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

      <h2>
        Why You'll Love Working With Us
      </h2>

      <p>
        At World Wide Courier Cargo, we are committed to
        creating a workplace where employees feel valued,
        supported and inspired to achieve their full
        potential while building a successful career.
      </p>

    </div>

    <div className="benefits-grid">

      {/* ================= BENEFIT 1 ================= */}

      <div className="benefit-card">

        <div className="benefit-icon">📚</div>

        <h3>Career Development</h3>

        <p>
          Build your future through continuous learning,
          professional development and opportunities for
          long-term career growth.
        </p>

      </div>

      {/* ================= BENEFIT 2 ================= */}

      <div className="benefit-card">

        <div className="benefit-icon">🎯</div>

        <h3>Training & Skill Enhancement</h3>

        <p>
          Receive practical training, operational guidance
          and industry exposure to strengthen your technical
          and professional skills.
        </p>

      </div>

      {/* ================= BENEFIT 3 ================= */}

      <div className="benefit-card">

        <div className="benefit-icon">🤝</div>

        <h3>Positive Work Environment</h3>

        <p>
          Work with a supportive team that values
          collaboration, mutual respect and shared
          success across every department.
        </p>

      </div>

      {/* ================= BENEFIT 4 ================= */}

      <div className="benefit-card">

        <div className="benefit-icon">🏆</div>

        <h3>Recognition & Rewards</h3>

        <p>
          We appreciate dedication through competitive
          compensation, performance recognition and
          rewarding career opportunities.
        </p>

      </div>

    </div>

  </div>

</section>

{/* ================= CTA ================= */}

<section className="career-cta">

  <div className="container">

    <h2>
      Ready To Build Your Career With World Wide Courier Cargo?
    </h2>

    <p>
      We are always looking for dedicated, talented and
      passionate professionals who want to grow with a
      trusted courier, cargo and logistics company.
      Join our team and be a part of delivering excellence
      across India.
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