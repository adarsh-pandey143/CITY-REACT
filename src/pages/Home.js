import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";


import heroBg from "../assets/images/main.jpg";

import roadImg from "../assets/images/road.jpg";
import airImg from "../assets/images/air.jpg";
import seaImg from "../assets/images/sea1.jpg";
import warehouseImg from "../assets/images/ware.jpg";

import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import hero4 from "../assets/images/hero4.jpg";


const Home = () => {
 const heroSlides = [
        {
            image: hero2,
            tag: "FAST • SAFE • RELIABLE",
            title: "Smart Logistics Solutions For Your Business",
            description: "Providing reliable transportation, express delivery and warehouse solutions with nationwide network coverage."
        },
        {
            image: hero4,
            tag: "ROAD TRANSPORT",
            title: "Reliable Road Transportation Across India",
            description: "Fast, secure and cost-effective road freight services with nationwide coverage, real-time shipment tracking and guaranteed on-time delivery."
         },
        {
            image: hero3,
            tag: "AIR FREIGHT",
            title: "Express Air Cargo Services",
            description: "Fast and secure air cargo solutions for urgent and high-value shipments."
        },
        {
            image: hero1,
            tag: "WAREHOUSING",
            title: "Modern Warehouse Management",
            description: "Inventory management, secure storage and nationwide distribution services."
        }
    ];


    const [current, setCurrent] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % heroSlides.length);
        }, 5000);

        return () => clearInterval(timer);

    }, [heroSlides.length]);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? heroSlides.length - 1 : prev - 1
        );
    };

return (

<div className="home">


{/* ================= HERO SECTION ================= */}


<section className="hero">

    {heroSlides.map((slide, index) => (

        <div
            key={index}
            className={`hero-slide ${index === current ? "active" : ""}`}
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
                    to="/contact-us"
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
                className={index === current ? "dot active" : "dot"}
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

Complete Logistics Solutions

</h2>


<p>

We provide end-to-end logistics services
designed for speed, safety and reliability.

</p>


</div>



<div className="services-grid">



<div className="service-card">


<img
src={roadImg}
alt="Road Transport"
/>


<div className="service-content">


<h3>
Road Transport
</h3>


<p>

Reliable road transportation
for domestic shipments.

</p>


<Link to="/services/roadways">

Read More →

</Link>


</div>


</div>



<div className="service-card">


<img
src={airImg}
alt="Express Delivery"
/>


<div className="service-content">


<h3>
Express Delivery
</h3>


<p>

Fast and secure express
delivery solutions.

</p>


<Link to="/services/express">

Read More →

</Link>


</div>


</div>





<div className="service-card">


<img
src={seaImg}
alt="Air Freight"
/>


<div className="service-content">


<h3>
Air Freight
</h3>


<p>

Time critical cargo
transportation solutions.

</p>


<Link to="/services/airfreight">

Read More →

</Link>


</div>


</div>






<div className="service-card">


<img
src={warehouseImg}
alt="Warehouse"
/>


<div className="service-content">


<h3>
Warehousing
</h3>


<p>

Modern storage and
distribution facilities.

</p>


<Link to="/services/warehouse">

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
WHY CHOOSE US
</span>


<h2>

Your Trusted Logistics Partner

</h2>


<p>

WWW Express delivers reliable,
cost-effective and technology-driven
logistics solutions for businesses.

</p>



<ul>


<li>
✓ Wide Network Coverage
</li>


<li>
✓ Fast & Secure Delivery
</li>


<li>
✓ Experienced Logistics Team
</li>


<li>
✓ Customer Focused Service
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
alt="Logistics"
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

Where Is Your Package?

</h2>


<p>

Enter your shipment details and
get real-time tracking information.

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
10+
</h3>


<p>
Years Experience
</p>


</div>





<div className="stat-card">


<h3>
500+
</h3>


<p>
Happy Clients
</p>


</div>





<div className="stat-card">


<h3>
50+
</h3>


<p>
Cities Covered
</p>


</div>





<div className="stat-card">


<h3>
24/7
</h3>


<p>
Customer Support
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

Need Reliable Logistics Support?

</h2>


<p>

Contact WWW Express today
for customized shipping solutions.

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
