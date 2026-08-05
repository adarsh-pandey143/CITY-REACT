import React from "react";
import { Link } from "react-router-dom";
import "../../pages/Page.css";

import expressImage from "../../assets/images/air.jpg";


const Express = () => {


return (

<div className="service-page">



{/* ================= HERO ================= */}



<section
className="service-hero"
style={{
backgroundImage:`url(${expressImage})`
}}
>


<div className="service-overlay"></div>


<div className="container">


<div className="service-hero-content">


<span>
EXPRESS LOGISTICS
</span>


<h1>
Express Delivery Services
</h1>


<p>

Fast and secure delivery solutions
for your urgent business requirements.

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

AIR FREIGHT - EXPRESS

</h2>


<p>

RA LOGISTICS provides reliable express
delivery solutions designed for urgent
and time-sensitive shipments.

Our priority is speed, safety and customer
satisfaction.

</p>


</div>







<div className="feature-grid">



<div className="feature-card">


<h3>
⚡ Same Day Delivery
</h3>


<p>

Quick delivery solutions for
urgent shipments.

</p>


</div>





<div className="feature-card">


<h3>
🚚 Next Day Delivery
</h3>


<p>

Guaranteed delivery schedules
with dedicated routes.

</p>


</div>





<div className="feature-card">


<h3>
📍 Real Time Tracking
</h3>


<p>

Track your shipment status
anytime anywhere.

</p>


</div>





<div className="feature-card">


<h3>
📦 Secure Handling
</h3>


<p>

Professional packaging and
careful cargo management.

</p>


</div>



</div>







{/* ================= BENEFITS ================= */}



<div className="service-benefits">


<h2>

Why Choose Express Service?

</h2>



<ul>


<li>
✓ Fast delivery for urgent shipments
</li>


<li>
✓ Priority shipment handling
</li>


<li>
✓ Real-time shipment monitoring
</li>


<li>
✓ Reliable transportation network
</li>


<li>
✓ Professional logistics support
</li>


</ul>


</div>







{/* ================= CTA ================= */}



<div className="service-cta">


<h2>

Need Urgent Delivery?

</h2>


<p>

Get in touch with RA LOGISTICS
for express shipment solutions.

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


export default Express;