import React from "react";
import { Link } from "react-router-dom";
import "../pages/Page.css";
// import "./Network.css";
 import networkImage from "../assets/images/ground.jpg";


const Networks = () => {


return (

<div className="network-page">


{/* ================= HERO ================= */}


<section
className="network-hero"
style={{
 backgroundImage:`url(${networkImage})`
}}
>


<div className="network-overlay"></div>


<div className="container">


<div className="network-hero-content">


<span>
OUR NETWORK
</span>


<h1>
Strong Logistics Network Across India
</h1>


<p>

Connecting businesses with reliable
transportation and delivery solutions.

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







{/* ================= INTRO ================= */}



<section className="network-content">


<div className="container">



<div className="network-intro">


<h2>
Nationwide Logistics Coverage
</h2>


<p>

WWW Express has developed a strong
transportation network to provide fast,
safe and reliable delivery solutions.
Our extensive network helps businesses
move goods efficiently across India.

</p>


</div>







{/* ================= CARDS ================= */}



<div className="network-grid">



<div className="network-card">


<div className="network-icon">
🚚
</div>


<h3>
Road Connectivity
</h3>


<p>

Strong road transportation network
for smooth movement of cargo.

</p>


</div>





<div className="network-card">


<div className="network-icon">
🏢
</div>


<h3>
Branch Network
</h3>


<p>

Strategically located branches
for better service coverage.

</p>


</div>





<div className="network-card">


<div className="network-icon">
📦
</div>


<h3>
Distribution Network
</h3>


<p>

Efficient distribution system
for timely deliveries.

</p>


</div>





<div className="network-card">


<div className="network-icon">
🌐
</div>


<h3>
Pan India Reach
</h3>


<p>

Connecting major cities and
business locations across India.

</p>


</div>



</div>






{/* ================= COVERAGE ================= */}



<div className="coverage-box">


<h2>
Our Network Strength
</h2>



<div className="coverage-grid">


<div>
<h3>
100+
</h3>
<p>
Locations Covered
</p>
</div>


<div>
<h3>
24/7
</h3>
<p>
Customer Support
</p>
</div>


<div>
<h3>
10+
</h3>
<p>
Years Experience
</p>
</div>


<div>
<h3>
1000+
</h3>
<p>
Successful Deliveries
</p>
</div>



</div>


</div>







{/* ================= CTA ================= */}



<div className="network-cta">


<h2>
Need Logistics Support?
</h2>


<p>

Connect with WWW Express for
complete transportation solutions.

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


export default Networks;

