
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import heroBg from "../assets/images/main.jpg";

import roadImg from "../assets/images/road.jpg";
import airImg from "../assets/images/air.jpg";
import seaImg from "../assets/images/sea1.jpg";
import warehouseImg from "../assets/images/ware.jpg";
import intImg from "../assets/images/int.jpg";
import surface from "../assets/images/surface.jpg";
import train from "../assets/images/train.jpg";
import flt from "../assets/images/flt.jpg";

import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import hero4 from "../assets/images/hero4.jpg";


const Home = () => {

    const heroSlides = [

        {
            image: hero2,
            tag: "CITY EXPRESS CARGO",
            title: "Reliable Courier & Cargo Solutions",
            description:
                "City Express Cargo provides reliable courier, cargo and logistics solutions with secure handling, efficient transportation and dependable delivery across India."
        },

        {
            image: hero4,
            tag: "ROAD CARGO SERVICE",
            title: "Safe & Reliable Road Cargo Transportation",
            description:
                "Efficient road cargo transportation for commercial shipments, parcels and bulk consignments with professional handling and dependable delivery across major destinations."
        },

        {
            image: hero3,
            tag: "AIR & EXPRESS CARGO",
            title: "Fast Solutions for Time-Critical Shipments",
            description:
                "Express air cargo and courier services for urgent documents, parcels and commercial shipments with fast transit and secure handling."
        },

        {
            image: hero1,
            tag: "RAIL PARCEL & TRAIN CARGO",
            title: "Cost-Effective Rail Cargo Solutions",
            description:
                "Reliable rail parcel and train cargo services for commercial and bulk shipments, connecting Delhi with Guwahati, Srinagar and destinations across India."
        }

    ];


    const [current, setCurrent] = useState(0);


    useEffect(() => {

        const timer = setInterval(() => {

            setCurrent((prev) =>
                (prev + 1) % heroSlides.length
            );

        }, 5000);


        return () => clearInterval(timer);

    }, [heroSlides.length]);


    const nextSlide = () => {

        setCurrent((prev) =>
            (prev + 1) % heroSlides.length
        );

    };


    const prevSlide = () => {

        setCurrent((prev) =>
            prev === 0
                ? heroSlides.length - 1
                : prev - 1
        );

    };


    return (

        <div className="home">


            {/* ================= HERO SECTION ================= */}


            <section className="hero">

                {heroSlides.map((slide, index) => (

                    <div
                        key={index}
                        className={`hero-slide ${
                            index === current ? "active" : ""
                        }`}
                        style={{
                            backgroundImage: `url(${slide.image})`
                        }}
                    >

                        <div className="hero-overlay"></div>

                    </div>

                ))}


                <div className="container">

                    <div className="hero-content">

                        <span className="hero-tag">

                            {heroSlides[current].tag}

                        </span>


                        <h1>

                            {heroSlides[current].title}

                        </h1>


                        <p>

                            {heroSlides[current].description}

                        </p>


                        <div className="hero-buttons">


                            <Link
                                to="/NotFound"
                                className="btn-primary"
                            >

                                Get Quote

                            </Link>


                            <Link
                                to="/tracking"
                                className="btn-outline"
                            >

                                Track Shipment

                            </Link>


                        </div>

                    </div>

                </div>


                <button
                    className="hero-arrow left"
                    onClick={prevSlide}
                >

                    ❮

                </button>


                <button
                    className="hero-arrow right"
                    onClick={nextSlide}
                >

                    ❯

                </button>


                <div className="hero-dots">

                    {heroSlides.map((_, index) => (

                        <span
                            key={index}
                            className={
                                index === current
                                    ? "dot active"
                                    : "dot"
                            }
                            onClick={() => setCurrent(index)}
                        />

                    ))}

                </div>


            </section>




            {/* ================= SERVICES ================= */}


<section className="services-section">

  <div className="container">

    <div className="home-section-heading">

      <span>
        OUR SERVICES
      </span>

      <h2>
        Complete Cargo & Logistics Solutions
      </h2>

      <p>
        City Express Cargo offers comprehensive domestic and international
        cargo solutions through air, surface, rail and sea transportation.
        From full truck load services to e-commerce logistics, we provide
        reliable and efficient solutions for businesses of every size.
      </p>

    </div>


    <div className="services-grid">


      {/* ================= DOMESTIC ================= */}

      <div className="service-card">

        <img
          src={roadImg}
          alt="Domestic Cargo Service"
        />

        <div className="service-content">

          <h3>
            Domestic Cargo
          </h3>

          <p>
            Reliable domestic cargo transportation solutions for
            businesses and individuals with safe handling and
            timely delivery across India.
          </p>

          <Link to="/services/Roadways">
            Read More →
          </Link>

        </div>

      </div>



      {/* ================= INTERNATIONAL ================= */}

      <div className="service-card">

        <img
          src={airImg}
          alt="International Cargo Service"
        />

        <div className="service-content">

          <h3>
            International Cargo
          </h3>

          <p>
            Efficient international cargo solutions for commercial
            shipments with dependable transportation and professional
            shipment handling.
          </p>

          <Link to="/services/international">
            Read More →
          </Link>

        </div>

      </div>



      {/* ================= AIR CARGO ================= */}

      <div className="service-card">

        <img
          src={intImg}
          alt="Air Cargo Service"
        />

        <div className="service-content">

          <h3>
            Air Cargo
          </h3>

          <p>
            Fast and secure air cargo services for time-sensitive
            shipments requiring efficient transit and reliable delivery.
          </p>

          <Link to="/services/air-cargo">
            Read More →
          </Link>

        </div>

      </div>



      {/* ================= SURFACE CARGO ================= */}

      <div className="service-card">

        <img
          src={surface}
          alt="Surface Cargo Service"
        />

        <div className="service-content">

          <h3>
            Surface Cargo
          </h3>

          <p>
            Cost-effective surface cargo transportation for parcels,
            commercial shipments and bulk consignments across major
            destinations.
          </p>

          <Link to="/services/surface">
            Read More →
          </Link>

        </div>

      </div>



      {/* ================= RAIL ================= */}

      <div className="service-card">

        <img
          src={train}
          alt="Rail Cargo Service"
        />

        <div className="service-content">

          <h3>
            Cargo By Train
          </h3>

          <p>
            Reliable rail cargo and parcel transportation offering
            an economical solution for moving shipments across
            major railway destinations.
          </p>

          <Link to="/services/train">
            Read More →
          </Link>

        </div>

      </div>



      {/* ================= SEA ================= */}

      <div className="service-card">

        <img
          src={seaImg}
          alt="Sea Cargo Service"
        />

        <div className="service-content">

          <h3>
            Sea Cargo
          </h3>

          <p>
            Efficient sea cargo solutions for larger and heavier
            shipments with reliable transportation and professional
            cargo handling.
          </p>

          <Link to="/services/sea-cargo">
            Read More →
          </Link>

        </div>

      </div>



      {/* ================= E-COMMERCE ================= */}

      <div className="service-card">

        <img
          src={warehouseImg}
          alt="E-Commerce Logistics"
        />

        <div className="service-content">

          <h3>
            E-Commerce Logistics
          </h3>

          <p>
            End-to-end logistics support for e-commerce businesses,
            including shipment movement, order fulfillment and
            reliable delivery solutions.
          </p>

          <Link to="/services/e-commerce">
            Read More →
          </Link>

        </div>

      </div>



      {/* ================= FTL ================= */}

      <div className="service-card">

        <img
          src={flt}
          alt="FTL Full Truck Load Service"
        />

        <div className="service-content">

          <h3>
            FTL Service
          </h3>

          <p>
            Full Truck Load transportation for large-volume shipments
            with dedicated vehicle capacity, secure handling and
            dependable delivery.
          </p>

          <Link to="/services/ftl">
            Read More →
          </Link>

        </div>

      </div>


    </div>

  </div>

</section>





            {/* ================= WHY CHOOSE US ================= */}


            <section className="why-section">


                <div className="container">


                    <div className="why-grid">


                        <div className="why-content">


                            <span>
                                WHY CHOOSE CITY EXPRESS
                            </span>


                            <h2>
                                Your Trusted Courier & Cargo Partner
                            </h2>


                            <p>
                                City Express Cargo combines road, rail and
                                air transportation to provide dependable
                                logistics solutions for businesses and
                                individuals. Our focus is on safe handling,
                                efficient transit and reliable delivery.
                            </p>



                            <ul>

                                <li>
                                    ✓ Road, Rail & Air Cargo Services
                                </li>

                                <li>
                                    ✓ Door-to-Door Delivery Solutions
                                </li>

                                <li>
                                    ✓ Reliable Delhi to Guwahati & Srinagar Services
                                </li>

                                <li>
                                    ✓ Secure Handling & Shipment Support
                                </li>

                            </ul>



                            <Link
                                to="/about-us"
                                className="btn-primary"
                            >

                                Know More

                            </Link>


                        </div>




                        <div className="why-image">


                            <img
                                src={heroBg}
                                alt="City Express Cargo Logistics"
                            />


                        </div>


                    </div>


                </div>


            </section>




            {/* ================= TRACKING SECTION ================= */}


            <section className="tracking-section">


                <div className="container">


                    <div className="tracking-box">


                        <div className="tracking-content">


                            <span>
                                TRACK YOUR SHIPMENT
                            </span>


                            <h2>
                                Track Your Cargo Anytime, Anywhere
                            </h2>


                            <p>
                                Enter your Consignment Number or AWB Number
                                to check shipment status, delivery updates
                                and tracking details for your City Express
                                Cargo shipment.
                            </p>


                        </div>



                        <div className="tracking-action">


                            <Link
                                to="/tracking"
                                className="btn-primary"
                            >

                                Track Now

                            </Link>


                        </div>


                    </div>


                </div>


            </section>




            {/* ================= STATS SECTION ================= */}


            <section className="stats-section">


                <div className="container">


                    <div className="stats-grid">


                        <div className="stat-card">


                            <h3>
                                15+
                            </h3>


                            <p>
                                Years of Experience
                            </p>


                        </div>




                        <div className="stat-card">


                            <h3>
                                PAN
                            </h3>


                            <p>
                                India Connectivity
                            </p>


                        </div>




                        <div className="stat-card">


                            <h3>
                                3
                            </h3>


                            <p>
                                Transport Modes
                            </p>


                        </div>




                        <div className="stat-card">


                            <h3>
                                24/7
                            </h3>


                            <p>
                                Shipment Support
                            </p>


                        </div>


                    </div>


                </div>


            </section>




            {/* ================= CTA SECTION ================= */}


            <section className="cta-section">


                <div className="container">


                    <div className="cta-box">


                        <h2>
                            Ready to Ship Your Cargo?
                        </h2>


                        <p>
                            Choose City Express Cargo for reliable courier,
                            road cargo, rail parcel and air cargo solutions.
                            Get in touch with our team for secure and
                            cost-effective transportation solutions.
                        </p>


                        <Link
                            to="/contact-us"
                            className="btn-primary"
                        >

                            Contact Us

                        </Link>


                    </div>


                </div>


            </section>


        </div>

    );

};


export default Home;
