
import React from "react";
import { Link } from "react-router-dom";

import "./Careers.css";

import careerBanner from "../assets/images/careers.jpg";


const Careers = () => {
  return (
    <div className="career-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="career-hero"
        style={{ backgroundImage: `url(${careerBanner})` }}
      >
        <div className="career-overlay"></div>

        <div className="container">
          <div className="career-hero-content">

            <span className="career-hero-eyebrow">
              CAREERS AT CITY EXPRESS COURIER
            </span>

            <h1>
              Build Your Future With
              <span> City Express Courier.</span>
            </h1>

            <p>
              Join City Express Courier and become part of a professional
              team delivering fast, safe and reliable courier and delivery
              solutions. We value teamwork, dedication, customer service
              and continuous improvement while creating opportunities for
              talented professionals to grow with us.
            </p>

            <div className="career-hero-actions">
              <Link
                to="/contact-us"
                className="btn-primary"
              >
                Apply Now
              </Link>

              <a
                href="#career-opportunities"
                className="career-secondary-btn"
              >
                Explore Opportunities
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          WHY JOIN US
      ===================================================== */}

      <section className="why-join">
        <div className="container">

          <div className="career-section-heading">

            <span>WHY JOIN US</span>

            <h2>
              Build A Rewarding Career
              <span> With City Express Courier.</span>
            </h2>

            <p>
              At City Express Courier, our people play an important role
              in delivering dependable courier and delivery services.
              We believe in a professional work environment where
              employees can learn, contribute, develop their skills
              and grow with the organization.
            </p>

          </div>


          <div className="join-grid">

            {/* CARD 1 */}

            <div className="join-card">

              <div className="join-card-top">
                <div className="join-icon">🚀</div>
                <span>01</span>
              </div>

              <h3>Career Growth</h3>

              <p>
                Develop your career through practical experience,
                continuous learning and opportunities to take on
                greater responsibilities within the organization.
              </p>

            </div>


            {/* CARD 2 */}

            <div className="join-card">

              <div className="join-card-top">
                <div className="join-icon">🤝</div>
                <span>02</span>
              </div>

              <h3>Collaborative Workplace</h3>

              <p>
                Work with a professional and supportive team where
                collaboration, communication and mutual respect are
                valued across different departments.
              </p>

            </div>


            {/* CARD 3 */}

            <div className="join-card">

              <div className="join-card-top">
                <div className="join-icon">📚</div>
                <span>03</span>
              </div>

              <h3>Learning & Development</h3>

              <p>
                Gain practical experience in courier operations,
                delivery services, customer support, shipment handling
                and other areas of the courier and delivery industry.
              </p>

            </div>


            {/* CARD 4 */}

            <div className="join-card">

              <div className="join-card-top">
                <div className="join-icon">🏆</div>
                <span>04</span>
              </div>

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


      {/* =====================================================
          CAREER OPPORTUNITIES
      ===================================================== */}

      <section
        className="job-section"
        id="career-opportunities"
      >
        <div className="container">

          <div className="career-section-heading">

            <span>CAREER OPPORTUNITIES</span>

            <h2>
              Join Our Growing Team.
            </h2>

            <p>
              City Express Courier welcomes motivated and responsible
              professionals who are interested in building a career
              in courier services, delivery operations, transportation
              and customer support. If you are passionate about your
              work and ready to grow, we would like to hear from you.
            </p>

          </div>


          <div className="job-list">

            {/* JOB 1 */}

            <div className="job-card">

              <div className="job-card-icon">
                🚚
              </div>

              <div className="job-info">

                <span className="job-category">
                  OPERATIONS
                </span>

                <h3>
                  Delivery & Field Operations
                </h3>

                <p>
                  Location Based
                  <span>•</span>
                  Full Time
                </p>

              </div>

              <Link
                to="/contact-us"
                className="apply-btn"
              >
                Apply Now
                <span>→</span>
              </Link>

            </div>


            {/* JOB 2 */}

            <div className="job-card">

              <div className="job-card-icon">
                📦
              </div>

              <div className="job-info">

                <span className="job-category">
                  COURIER OPERATIONS
                </span>

                <h3>
                  Courier Operations
                </h3>

                <p>
                  Location Based
                  <span>•</span>
                  Full Time
                </p>

              </div>

              <Link
                to="/contact-us"
                className="apply-btn"
              >
                Apply Now
                <span>→</span>
              </Link>

            </div>


            {/* JOB 3 */}

            <div className="job-card">

              <div className="job-card-icon">
                🏢
              </div>

              <div className="job-info">

                <span className="job-category">
                  WAREHOUSE
                </span>

                <h3>
                  Warehouse & Shipment Handling
                </h3>

                <p>
                  Location Based
                  <span>•</span>
                  Full Time
                </p>

              </div>

              <Link
                to="/contact-us"
                className="apply-btn"
              >
                Apply Now
                <span>→</span>
              </Link>

            </div>


            {/* JOB 4 */}

            <div className="job-card">

              <div className="job-card-icon">
                💬
              </div>

              <div className="job-info">

                <span className="job-category">
                  CUSTOMER SERVICE
                </span>

                <h3>
                  Customer Support
                </h3>

                <p>
                  Location Based
                  <span>•</span>
                  Full Time
                </p>

              </div>

              <Link
                to="/contact-us"
                className="apply-btn"
              >
                Apply Now
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="benefits-section">
        <div className="container">

          <div className="career-section-heading">

            <span>EMPLOYEE BENEFITS</span>

            <h2>
              A Workplace Designed
              <span> For Growth.</span>
            </h2>

            <p>
              At City Express Courier, we aim to create a professional
              workplace where employees are respected, supported and
              encouraged to improve their skills while contributing
              to reliable courier and delivery operations.
            </p>

          </div>


          <div className="benefits-grid">

            {/* BENEFIT 1 */}

            <div className="benefit-card">

              <div className="benefit-icon">
                📚
              </div>

              <h3>
                Career Development
              </h3>

              <p>
                Build your future through practical experience,
                continuous learning and opportunities for
                professional growth.
              </p>

            </div>


            {/* BENEFIT 2 */}

            <div className="benefit-card">

              <div className="benefit-icon">
                🎯
              </div>

              <h3>
                Training & Skill Enhancement
              </h3>

              <p>
                Develop your operational, communication and
                professional skills through hands-on experience
                in the courier and delivery industry.
              </p>

            </div>


            {/* BENEFIT 3 */}

            <div className="benefit-card">

              <div className="benefit-icon">
                🤝
              </div>

              <h3>
                Positive Work Environment
              </h3>

              <p>
                Work in a professional environment that encourages
                teamwork, responsibility, communication and
                mutual respect.
              </p>

            </div>


            {/* BENEFIT 4 */}

            <div className="benefit-card">

              <div className="benefit-icon">
                🏆
              </div>

              <h3>
                Recognition & Opportunities
              </h3>

              <p>
                We value commitment and good performance while
                providing opportunities to take on new
                responsibilities and grow professionally.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="career-cta">

        <div className="career-cta-pattern"></div>

        <div className="container">

          <div className="career-cta-content">

            <span>
              START YOUR JOURNEY
            </span>

            <h2>
              Ready To Build Your Career
              <span> With City Express Courier?</span>
            </h2>

            <p>
              If you are a dedicated and motivated professional
              looking for an opportunity in the courier, delivery
              and transportation industry, connect with City Express
              Courier. Share your details with our team and explore
              suitable career opportunities.
            </p>

            <div className="career-cta-actions">

              <Link
                to="/contact-us"
                className="btn-primary"
              >
                Apply Now
              </Link>

              <Link
                to="/contact-us"
                className="career-cta-outline"
              >
                Contact Our Team
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};


export default Careers;

