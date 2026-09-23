
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {

  const [showScrollTop, setShowScrollTop] = useState(false);


  useEffect(() => {

    const handleScroll = () => {

      setShowScrollTop(window.scrollY > 300);

    };


    window.addEventListener("scroll", handleScroll);


    return () => {

      window.removeEventListener("scroll", handleScroll);

    };

  }, []);



  const scrollToTop = () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  };


  return (

    <>

      <footer className="footer">


        <div className="container">


          <div className="footer-grid">


            {/* ================= COMPANY ================= */}

            <div className="footer-column company">


              <h3>
                City Express Courier
              </h3>


              <p>
                At City Express Courier, we provide fast, safe and
                reliable courier and delivery solutions designed to
                ensure your shipments reach their destination securely
                and on time.
              </p>


              <p>
                From domestic and express deliveries to air, surface,
                e-commerce and specialized courier services, we help
                individuals and businesses deliver their shipments
                with confidence.
              </p>


            </div>



            {/* ================= SERVICES ================= */}

            <div className="footer-column">


              <h3>
                Our Services
              </h3>


              <ul className="service-list">


                <li>
                  <Link to="/services/roadways">
                    Domestic Courier
                  </Link>
                </li>


                <li>
                  <Link to="/services/express">
                    Express Delivery
                  </Link>
                </li>


                <li>
                  <Link to="/services/airfreight">
                    International Delivery
                  </Link>
                </li>


                <li>
                  <Link to="/services/warehouse">
                    Sea Delivery
                  </Link>
                </li>


                <li>
                  <Link to="/services/surface">
                    Surface Delivery
                  </Link>
                </li>


                <li>
                  <Link to="/services/FltService">
                    FTL Service
                  </Link>
                </li>


                <li>
                  <Link to="/services/ecommerce">
                    E-Commerce Delivery
                  </Link>
                </li>


                <li>
                  <Link to="/services/train">
                    Train Delivery
                  </Link>
                </li>


              </ul>


            </div>



            {/* ================= QUICK LINKS ================= */}

            <div className="footer-column">


              <h3>
                Quick Links
              </h3>


              <ul>


                <li>
                  <Link to="/">
                    Home
                  </Link>
                </li>


                <li>
                  <Link to="/about-us">
                    About Us
                  </Link>
                </li>


                <li>
                  <Link to="/networks">
                    Networks
                  </Link>
                </li>


                <li>
                  <Link to="/tracking">
                    Tracking
                  </Link>
                </li>


                <li>
                  <Link to="/careers">
                    Careers
                  </Link>
                </li>


                <li>
                  <Link to="/contact-us">
                    Contact Us
                  </Link>
                </li>


              </ul>


            </div>



            {/* ================= CONTACT ================= */}

            <div className="footer-column">


              <h3>
                Contact
              </h3>


              <ul className="contact-list">


                <li>
                  Phone:
                  <br />
                  +91 92123 06365
                </li>


                <li>
                  Email:
                  <br />
                  info@cityexpcargo.com
                </li>


                <li>
                  Location:
                  <br />
                  City Express Courier, mata Ekvira building ,
                  radha nagar Tulij road, Nalasopara, East vasai, Maharashtra 401209, India
                </li>


              </ul>


            </div>



          </div>



          {/* ================= FOOTER BOTTOM ================= */}

          <div className="footer-bottom">


            <p>
              © 2018 - {new Date().getFullYear()} City Express Courier.
              All Rights Reserved.
            </p>


            <p>
              Website Designed & Developed By
              <span> SIZIL SOFTEC PVT. LTD.</span>
            </p>


          </div>


        </div>


      </footer>



      {/* ================= SCROLL TO TOP ================= */}

      {showScrollTop && (

        <button

          className="scroll-to-top"

          onClick={scrollToTop}

        >

          ↑

        </button>

      )}


    </>

  );

};


export default Footer;

