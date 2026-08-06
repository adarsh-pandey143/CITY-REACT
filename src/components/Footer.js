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
                World Wide Courier Cargo
              </h3>


            <p>
  At World Wide Courier Cargo, we offer end-to-end courier,
  cargo and freight solutions backed by a strong nationwide
  and international network, ensuring every shipment is
  delivered safely, efficiently and on time.
</p>


             <p>
  Trusted courier and cargo solutions with nationwide and
  worldwide delivery, designed to move your shipments
  safely, quickly and efficiently.
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
                  +91 70426 99313
                </li>


                <li>
                  Email:
                  <br/>
                  info@worldwidecouriercargo.com
                </li>


                <li>
                  Location:
                  <br/>
                   Gurugram, Haryana, India
                </li>


              </ul>


            </div>



          </div>



      <div className="footer-bottom">

  <p>
    © 2018 - {new Date().getFullYear()} World Wide Courier Cargo. All Rights Reserved.
  </p>

  <p>
    Website Designed & Developed By
    <span> SIZIL SOFTEC PVT. LTD.</span>
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