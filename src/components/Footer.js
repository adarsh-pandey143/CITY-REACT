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

      top:0,

      behavior:"smooth"

    });

  };


  return (

    <>

      <footer className="footer">


        <div className="container">


          <div className="footer-grid">


            {/* COMPANY */}

            <div className="footer-column company">


              <h3>
                RA LOGISTICS
              </h3>


              <p>

                Providing reliable logistics solutions with
                wide area coverage and better services under
                one umbrella.

              </p>


              <p>

                We focus on safe, fast and efficient
                transportation solutions for our valuable clients.

              </p>


            </div>



            {/* SERVICES */}

            <div className="footer-column">


              <h3>
                Our Services
              </h3>


              <ul>


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


              </ul>


            </div>




            {/* QUICK LINKS */}

            <div className="footer-column">


              <h3>
                Quick Links
              </h3>


              <ul>


                <li>
                  <Link to="/about-us">
                    About Us
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




            {/* CONTACT */}

            <div className="footer-column">


              <h3>
                Contact
              </h3>


              <ul className="contact-list">


                <li>
                  Phone:
                  <br/>
                  +91 99588 26252
                </li>


                <li>
                  Email:
                  <br/>
                  info@ralogistics.com
                </li>


                <li>
                  Location:
                  <br/>
                  India
                </li>


              </ul>


            </div>



          </div>



          <div className="footer-bottom">


            <p>

              © 2018 RA LOGISTICS. All Rights Reserved.

            </p>


            <p>

              Designed By:
              <span>
                SIZIL SOFTEC PVT. LTD.
              </span>

            </p>


          </div>


        </div>


      </footer>




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