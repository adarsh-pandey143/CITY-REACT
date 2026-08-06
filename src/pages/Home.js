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
    tag: "WORLD WIDE COURIER CARGO",
    title: "Trusted Logistics Solutions Across India",
    description:
      "Delivering reliable courier, transportation and supply chain solutions with speed, safety and nationwide network coverage for businesses of every size."
  },

  {
    image: hero4,
    tag: "ROAD TRANSPORT",
    title: "Reliable Road Transportation Services",
    description:
      "Comprehensive Full Truck Load (FTL), Less Than Truck Load (LTL) and door-to-door transportation services with real-time shipment tracking across India."
  },

  {
    image: hero3,
    tag: "EXPRESS DELIVERY",
    title: "Fast & Time-Critical Express Delivery",
    description:
      "Efficient express delivery solutions for urgent documents, parcels and commercial shipments with secure handling and on-time delivery."
  },

  {
    image: hero1,
    tag: "WAREHOUSING",
    title: "Smart Warehousing & Distribution",
    description:
      "Secure warehousing, inventory management, order fulfillment and nationwide distribution solutions to keep your business moving efficiently."
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
        Complete Logistics & Cargo Solutions Under One Roof
      </h2>

      <p>
        World Wide Courier Cargo offers comprehensive logistics,
        courier and cargo transportation services designed to
        meet the needs of businesses and individuals. With a
        strong PAN India network, experienced professionals and
        customer-focused operations, we ensure every shipment is
        delivered safely, efficiently and on time.
      </p>

    </div>

    <div className="services-grid">

      {/* ================= ROAD ================= */}

      <div className="service-card">

        <img
          src={roadImg}
          alt="Road Transport"
        />

        <div className="service-content">

          <h3>
            Road Transportation
          </h3>

          <p>
            Reliable Full Truck Load (FTL), Less Than Truck Load
            (LTL) and door-to-door transportation services across India.
          </p>

          <Link to="/services/roadways">
            Read More →
          </Link>

        </div>

      </div>

      {/* ================= EXPRESS ================= */}

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
            Fast and time-sensitive delivery solutions for
            urgent documents, parcels and commercial shipments.
          </p>

          <Link to="/services/express">
            Read More →
          </Link>

        </div>

      </div>

      {/* ================= AIR ================= */}

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
            Secure domestic and international air cargo
            solutions with reliable transit and timely delivery.
          </p>

          <Link to="/services/airfreight">
            Read More →
          </Link>

        </div>

      </div>

      {/* ================= WAREHOUSE ================= */}

      <div className="service-card">

        <img
          src={warehouseImg}
          alt="Warehousing"
        />

        <div className="service-content">

          <h3>
            Warehousing Solutions
          </h3>

          <p>
            Secure storage, inventory management and
            efficient distribution services for your business.
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
  Your Trusted Worldwide Courier & Cargo Partner
</h2>


<p>
  Delivering trusted courier and cargo solutions with
  speed, security and excellence for businesses and
  individuals around the world.
</p>



<ul>


<li>✓ Domestic & International Shipping</li>
<li>✓ Fast, Safe & On-Time Delivery</li>
<li>✓ Real-Time Shipment Tracking</li>
<li>✓ Trusted Customer Support</li>


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
  Track Your Shipment Anytime, Anywhere
</h2>

<p>
  Enter your Consignment Number (C/N) or AWB Number to get
  real-time shipment status, delivery updates and complete
  tracking details across our nationwide network.
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
  Ready To Ship Anywhere In The World?
</h2>

<p>
  Get in touch with World Wide Courier Cargo for reliable
  domestic courier, international shipping and customized
  cargo solutions at competitive prices.
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
