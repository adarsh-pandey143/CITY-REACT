
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
        City Express Cargo
      </h1>

      <p>
        Join City Express Cargo and become part of a
        professional team delivering reliable cargo and
        logistics solutions. We value teamwork, dedication,
        customer service and continuous improvement while
        creating opportunities for talented professionals
        to grow with us.
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
        Build A Rewarding Career With City Express Cargo
      </h2>

      <p>
        At City Express Cargo, our people play an important
        role in delivering dependable cargo and logistics
        services. We believe in a professional work
        environment where employees can learn, contribute,
        develop their skills and grow with the organization.
      </p>

    </div>

    <div className="join-grid">


      {/* ================= CARD 1 ================= */}

      <div className="join-card">

        <div className="join-icon">🚀</div>

        <h3>Career Growth</h3>

        <p>
          Develop your career through practical experience,
          continuous learning and opportunities to take on
          greater responsibilities within the organization.
        </p>

      </div>


      {/* ================= CARD 2 ================= */}

      <div className="join-card">

        <div className="join-icon">🤝</div>

        <h3>Collaborative Workplace</h3>

        <p>
          Work with a professional and supportive team where
          collaboration, communication and mutual respect are
          valued across different departments.
        </p>

      </div>


      {/* ================= CARD 3 ================= */}

      <div className="join-card">

        <div className="join-icon">📚</div>

        <h3>Learning & Development</h3>

        <p>
          Gain practical experience in cargo transportation,
          logistics operations, customer service, shipment
          handling and other areas of the logistics industry.
        </p>

      </div>


      {/* ================= CARD 4 ================= */}

      <div className="join-card">

        <div className="join-icon">🏆</div>

        <h3>Recognition & Growth</h3>

        <p>
          We value dedication, responsibility and good
          performance while providing employees with
          opportunities to develop professionally.
        </p>

      </div>


    </div>

  </div>

</section>


{/* ================= CURRENT OPENINGS ================= */}

<section className="job-section">

  <div className="container">

    <div className="career-section-heading">

      <span>CAREER OPPORTUNITIES</span>

      <h2>
        Join Our Growing Team
      </h2>

      <p>
        City Express Cargo welcomes motivated and
        responsible professionals who are interested in
        building a career in cargo, courier, transportation
        and logistics. If you are passionate about your work
        and ready to grow, we would like to hear from you.
      </p>

    </div>


    <div className="job-list">


      {/* ================= JOB 1 ================= */}

      <div className="job-card">

        <div className="job-info">

          <h3>Delivery & Field Operations</h3>

          <p>
            📍 Location Based • Full Time
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

          <h3>Logistics Operations</h3>

          <p>
            📍 Location Based • Full Time
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

          <h3>Warehouse & Cargo Operations</h3>

          <p>
            📍 Location Based • Full Time
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

          <h3>Customer Support</h3>

          <p>
            📍 Location Based • Full Time
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
        At City Express Cargo, we aim to create a professional
        workplace where employees are respected, supported
        and encouraged to improve their skills while
        contributing to reliable cargo and logistics
        operations.
      </p>

    </div>


    <div className="benefits-grid">


      {/* ================= BENEFIT 1 ================= */}

      <div className="benefit-card">

        <div className="benefit-icon">📚</div>

        <h3>Career Development</h3>

        <p>
          Build your future through practical experience,
          continuous learning and opportunities for
          professional growth.
        </p>

      </div>


      {/* ================= BENEFIT 2 ================= */}

      <div className="benefit-card">

        <div className="benefit-icon">🎯</div>

        <h3>Training & Skill Enhancement</h3>

        <p>
          Develop your operational, communication and
          professional skills through hands-on experience
          in the logistics industry.
        </p>

      </div>


      {/* ================= BENEFIT 3 ================= */}

      <div className="benefit-card">

        <div className="benefit-icon">🤝</div>

        <h3>Positive Work Environment</h3>

        <p>
          Work in a professional environment that encourages
          teamwork, responsibility, communication and
          mutual respect.
        </p>

      </div>


      {/* ================= BENEFIT 4 ================= */}

      <div className="benefit-card">

        <div className="benefit-icon">🏆</div>

        <h3>Recognition & Opportunities</h3>

        <p>
          We value commitment and good performance while
          providing opportunities to take on new
          responsibilities and grow professionally.
        </p>

      </div>


    </div>

  </div>

</section>


{/* ================= CTA ================= */}

<section className="career-cta">

  <div className="container">

    <h2>
      Ready To Build Your Career With City Express Cargo?
    </h2>

    <p>
      If you are a dedicated and motivated professional
      looking for an opportunity in the cargo, courier and
      logistics industry, connect with City Express Cargo.
      Share your details with our team and explore suitable
      career opportunities.
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

