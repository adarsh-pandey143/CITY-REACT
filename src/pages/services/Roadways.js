import React from "react";
import { Link } from "react-router-dom";

import "../../pages/Page.css";

import roadImage from "../../assets/images/g1.jpg";


const Roadways = () => {


return (

<div className="service-page">



{/* ================= HERO ================= */}



<section
className="service-hero"
style={{
backgroundImage:`url(${roadImage})`
}}
>


<div className="service-overlay"></div>


<div className="container">


<div className="service-hero-content">


<span>
ROAD TRANSPORT
</span>


<h1>
Roadways Logistics Services
</h1>


<p>

Reliable road transportation solutions
with safe and timely delivery across India.

</p>



<Link
to="/contact-us"
className="btn-primary"
>

Get Quote

</Link>


</div>


</div>


</section>







{/* ================= CONTENT ================= */}



<section className="service-content-section">


<div className="container">



<div className="service-intro">


<h2>

GROUND SHIPPING - ROADWAYS

</h2>


<p>

RA LOGISTICS provides complete road freight
solutions including LTL, FTL and part load
services with nationwide coverage.

</p>


</div>







<div className="feature-grid">



<div className="feature-card">


<h3>
🚛 Full Truck Load
</h3>


<p>

Dedicated vehicles for large
volume shipments.

</p>


</div>





<div className="feature-card">


<h3>
📦 Part Load Service
</h3>


<p>

Cost effective transportation
for smaller cargo.

</p>


</div>





<div className="feature-card">


<h3>
🏠 Door To Door Delivery
</h3>


<p>

Complete pickup and delivery
solutions.

</p>


</div>





<div className="feature-card">


<h3>
⚡ Express Road Freight
</h3>


<p>

Fast transportation for
urgent requirements.

</p>


</div>



</div>







{/* ================= BENEFITS ================= */}



<div className="service-benefits">


<h2>

Why Choose Road Transport?

</h2>



<ul>


<li>
✓ Wide network coverage across India
</li>


<li>
✓ Safe and secure cargo handling
</li>


<li>
✓ Experienced drivers and team
</li>


<li>
✓ Real-time shipment tracking
</li>


<li>
✓ Reliable delivery commitment
</li>


</ul>


</div>







{/* ================= CTA ================= */}



<div className="service-cta">


<h2>

Need Reliable Road Transport?

</h2>


<p>

Contact RA LOGISTICS for
safe and efficient road freight solutions.

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


export default Roadways;