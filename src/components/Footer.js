
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
                City Express Cargo
              </h3>


              <p>
                At City Express Cargo, we provide reliable courier,
                cargo and logistics solutions designed to move your
                shipments safely, efficiently and on time.
              </p>


              <p>
                With domestic, air, surface, rail, e-commerce and
                FTL cargo services, we help businesses and customers
                transport their shipments with confidence.
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
                    Road Transport
                  </Link>
                </li>


                <li>
                  <Link to="/services/express">
                    Express Delivery
                  </Link>
                </li>


                <li>
                  <Link to="/services/airfreight">
                    Air Freight
                  </Link>
                </li>


                <li>
                  <Link to="/services/warehouse">
                    Warehousing
                  </Link>
                </li>


                <li>
                  <Link to="/services/surface">
                    Surface Cargo
                  </Link>
                </li>


                <li>
                  <Link to="/services/FltService">
                    FTL Service
                  </Link>
                </li>


                <li>
                  <Link to="/services/ecommerce">
                    E-Commerce
                  </Link>
                </li>


                <li>
                  <Link to="/services/train">
                    Cargo By Train
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
                  City Express Courier, C-40, Sanjaygram,
                  Rajeev Nagar, Sheetla Mata Mandir Road.
                </li>


              </ul>


            </div>



          </div>



          {/* ================= FOOTER BOTTOM ================= */}

          <div className="footer-bottom">


            <p>
              © 2018 - {new Date().getFullYear()} City Express Cargo.
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

