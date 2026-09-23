import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import homeimg from "../assets/images/homeimg.jpg";

import roadImg from "../assets/images/domestic1.jpg";
import airImg from "../assets/images/air.jpg";
import seaImg from "../assets/images/cargo.jpg";
import warehouseImg from "../assets/images/e-commerce.jpg";
import intImg from "../assets/images/int.jpg";
import surface from "../assets/images/surface.jpg";
import train from "../assets/images/train.jpg";
import flt from "../assets/images/flt.jpg";

import hero1 from "../assets/images/main3.jpg";
import hero2 from "../assets/images/main4.jpg";
import hero3 from "../assets/images/hero3.jpg";
import hero4 from "../assets/images/main5.jpg";


const Home = () => {

    /* ==========================================================
       HERO SLIDES
    ========================================================== */

    const heroSlides = [

        {
            image: hero2,
            tag: "CITY EXPRESS COURIER",
            title: "Fast, Safe & Reliable Courier Services",
            description:
                "City Express Courier provides dependable domestic, international and express courier solutions with secure handling and timely delivery."
        },

        {
            image: hero4,
            tag: "DOMESTIC COURIER",
            title: "Reliable Courier Delivery Across India",
            description:
                "Send documents, parcels and commercial shipments with secure handling and dependable delivery to destinations across India."
        },

        {
            image: hero3,
            tag: "EXPRESS COURIER",
            title: "When Your Shipment Can't Wait",
            description:
                "Fast courier solutions for urgent documents, parcels and time-sensitive shipments with professional handling and dependable service."
        },

        {
            image: hero1,
            tag: "INTERNATIONAL COURIER",
            title: "Connecting Your Shipments Beyond Borders",
            description:
                "International courier solutions for documents and parcels with secure processing and dependable shipment support."
        }

    ];


    /* ==========================================================
       HERO SLIDER STATE
    ========================================================== */

    const [current, setCurrent] = useState(0);


    /* ==========================================================
       AUTO SLIDER
    ========================================================== */

    useEffect(() => {

        const timer = setInterval(() => {

            setCurrent((prev) =>
                (prev + 1) % heroSlides.length
            );

        }, 5000);


        return () => clearInterval(timer);

    }, [heroSlides.length]);


    /* ==========================================================
       NEXT SLIDE
    ========================================================== */

    const nextSlide = () => {

        setCurrent((prev) =>
            (prev + 1) % heroSlides.length
        );

    };


    /* ==========================================================
       PREVIOUS SLIDE
    ========================================================== */

    const prevSlide = () => {

        setCurrent((prev) =>
            prev === 0
                ? heroSlides.length - 1
                : prev - 1
        );

    };


    return (

        <div className="home">


            {/* ==================================================
               HERO SECTION
            ================================================== */}

            <section className="hero">


                {/* HERO BACKGROUND SLIDES */}

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


                {/* HERO CONTENT */}

                <div className="container">

                    <div className="hero-content">

                        <div className="hero-text">


                            {/* HERO TAG */}

                            <span className="hero-tag">

                                {heroSlides[current].tag}

                            </span>


                            {/* HERO TITLE */}

                            <h1>

                                {heroSlides[current].title}

                            </h1>


                            {/* HERO DESCRIPTION */}

                            <p>

                                {heroSlides[current].description}

                            </p>


                            {/* HERO BUTTONS */}

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

                </div>


                {/* HERO PREVIOUS BUTTON */}

                <button
                    className="hero-arrow left"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                >

                    ❮

                </button>


                {/* HERO NEXT BUTTON */}

                <button
                    className="hero-arrow right"
                    onClick={nextSlide}
                    aria-label="Next slide"
                >

                    ❯

                </button>


                {/* HERO DOTS */}

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
                            role="button"
                            tabIndex="0"
                            aria-label={`Go to slide ${index + 1}`}
                        />

                    ))}

                </div>


            </section>


            {/* ==================================================
               KEY COURIER SERVICES
            ================================================== */}

            <section className="courier-highlights">

                <div className="container">

                    <div className="highlight-grid">


                        {/* DANGEROUS GOODS */}

                        <div className="highlight-card dangerous-card">

                            <div className="highlight-icon">

                                DG

                            </div>


                            <div className="highlight-content">

                                <span className="highlight-label">

                                    SPECIALIZED HANDLING

                                </span>


                                <h3>

                                    Dangerous Goods Experts

                                </h3>


                                <p>

                                    Specialized handling support for
                                    shipments requiring careful attention,
                                    secure processing and professional
                                    shipment management.

                                </p>

                            </div>


                            <span className="highlight-arrow">

                                →

                            </span>

                        </div>


                        {/* SAME DAY DELIVERY */}

                        <div className="highlight-card same-day-card">

                            <div className="highlight-icon">

                                24H

                            </div>


                            <div className="highlight-content">

                                <span className="highlight-label">

                                    FAST DELIVERY

                                </span>


                                <h3>

                                    Same Day Delivery

                                </h3>


                                <p>

                                    Fast delivery solutions for urgent
                                    and time-sensitive shipments where
                                    same-day service is available.

                                </p>

                            </div>


                            <span className="highlight-arrow">

                                →

                            </span>

                        </div>


                    </div>

                </div>

            </section>


            {/* ==================================================
               SERVICES SECTION
            ================================================== */}

            <section className="services-section">


                <div className="container">


                    {/* SECTION HEADING */}

                    <div className="home-section-heading">

                        <span>

                            OUR SERVICES

                        </span>


                        <h2>

                            Complete Courier & Delivery Solutions

                        </h2>


                        <p>

                            City Express Courier provides reliable domestic,
                            international and express delivery solutions
                            for documents, parcels and commercial shipments.
                            Our services are designed around secure handling,
                            efficient transportation and dependable delivery.

                        </p>

                    </div>


                    {/* SERVICES GRID */}

                    <div className="services-grid">


                        {/* ================= DOMESTIC ================= */}

                        <div className="service-card">

                            <img
                                src={roadImg}
                                alt="Domestic Courier Service"
                            />


                            <div className="service-content">

                                <h3>

                                    Domestic Courier

                                </h3>


                                <p>

                                    Reliable domestic courier services for
                                    documents, parcels and commercial
                                    shipments across India.

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
                                alt="International Courier Service"
                            />


                            <div className="service-content">

                                <h3>

                                    International Courier

                                </h3>


                                <p>

                                    Secure international courier solutions
                                    for documents and parcels with dependable
                                    shipment support.

                                </p>


                                <Link to="/services/Airfreight">

                                    Read More →

                                </Link>

                            </div>

                        </div>


                        {/* ================= EXPRESS ================= */}

                        <div className="service-card">

                            <img
                                src={intImg}
                                alt="Express Courier Service"
                            />


                            <div className="service-content">

                                <h3>

                                    Express Courier

                                </h3>


                                <p>

                                    Fast courier solutions for urgent and
                                    time-sensitive documents, parcels and
                                    commercial shipments.

                                </p>


                                <Link to="/services/Express">

                                    Read More →

                                </Link>

                            </div>

                        </div>


                        {/* ================= SURFACE ================= */}

                        <div className="service-card">

                            <img
                                src={surface}
                                alt="Surface Courier Service"
                            />


                            <div className="service-content">

                                <h3>

                                    Surface Courier

                                </h3>


                                <p>

                                    Cost-effective surface transportation
                                    for parcels and commercial shipments
                                    across major destinations.

                                </p>


                                <Link to="/services/surface">

                                    Read More →

                                </Link>

                            </div>

                        </div>


                        {/* ================= TRAIN ================= */}

                        <div className="service-card">

                            <img
                                src={train}
                                alt="Rail Courier Service"
                            />


                            <div className="service-content">

                                <h3>

                                    Courier By Train

                                </h3>


                                <p>

                                    Reliable rail parcel transportation
                                    offering an economical solution for
                                    moving shipments across India.

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

                                    Efficient sea transportation solutions
                                    for larger and heavier commercial
                                    shipments.

                                </p>


                                <Link to="/services/Warehouse">

                                    Read More →

                                </Link>

                            </div>

                        </div>


                        {/* ================= E-COMMERCE ================= */}

                        <div className="service-card">

                            <img
                                src={warehouseImg}
                                alt="E-Commerce Delivery Service"
                            />


                            <div className="service-content">

                                <h3>

                                    E-Commerce Delivery

                                </h3>


                                <p>

                                    End-to-end courier and delivery support
                                    for growing e-commerce businesses and
                                    online shipments.

                                </p>


                                <Link to="/services/ecommerce">

                                    Read More →

                                </Link>

                            </div>

                        </div>


                        {/* ================= FTL ================= */}

                        <div className="service-card">

                            <img
                                src={flt}
                                alt="FTL Transportation Service"
                            />


                            <div className="service-content">

                                <h3>

                                    FTL Service

                                </h3>


                                <p>

                                    Dedicated full truck load transportation
                                    for large commercial consignments with
                                    secure and dependable delivery.

                                </p>


                                <Link to="/services/FltService">

                                    Read More →

                                </Link>

                            </div>

                        </div>


                    </div>

                </div>

            </section>


            {/* ==================================================
               WHY CHOOSE US
            ================================================== */}

            <section className="why-section">


                <div className="container">


                    <div className="why-grid">


                        {/* IMAGE */}

                        <div className="why-image">

                            <img
                                src={homeimg}
                                alt="City Express Courier Services"
                            />


                            <div className="why-image-badge">

                                <strong>
                                    CITY EXPRESS
                                </strong>

                                <span>
                                    Reliable Courier Partner
                                </span>

                            </div>

                        </div>


                        {/* CONTENT */}

                        <div className="why-content">


                            <span>

                                WHY CHOOSE CITY EXPRESS

                            </span>


                            <h2>

                                Your Trusted Courier Partner

                            </h2>


                            <p>

                                City Express Courier provides dependable
                                courier and delivery solutions for individuals
                                and businesses. From everyday parcels to
                                urgent shipments, our focus is on secure
                                handling, efficient transit and reliable
                                delivery.

                            </p>


                            <ul>


                                <li>

                                    ✓ Fast & Reliable Courier Services

                                </li>


                                <li>

                                    ✓ Same Day Delivery Support

                                </li>


                                <li>

                                    ✓ Dangerous Goods Handling Expertise

                                </li>


                                <li>

                                    ✓ Door-to-Door Delivery Solutions

                                </li>


                                <li>

                                    ✓ Secure Shipment Handling & Support

                                </li>


                            </ul>


                            <Link
                                to="/about-us"
                                className="btn-primary"
                            >

                                Know More

                            </Link>


                        </div>


                    </div>

                </div>

            </section>


            {/* ==================================================
               TRACKING SECTION
            ================================================== */}

            <section className="tracking-section">


                <div className="container">


                    <div className="tracking-box">


                        <div className="tracking-content">


                            <span>

                                TRACK YOUR SHIPMENT

                            </span>


                            <h2>

                                Know Where Your Shipment Is

                            </h2>


                            <p>

                                Enter your Consignment Number or AWB Number
                                to check shipment status, delivery updates
                                and tracking details for your City Express
                                Courier shipment.

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


            {/* ==================================================
               STATS SECTION
            ================================================== */}

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

                                Delivery Modes

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


            {/* ==================================================
               CTA SECTION
            ================================================== */}

            <section className="cta-section">


                <div className="container">


                    <div className="cta-box">


                        <div className="cta-content">


                            <span>

                                CITY EXPRESS COURIER

                            </span>


                            <h2>

                                Ready to Send Your Shipment?

                            </h2>


                            <p>

                                Choose City Express Courier for reliable
                                domestic, international and express courier
                                solutions. Get in touch with our team for
                                secure, efficient and dependable delivery.

                            </p>

                        </div>


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