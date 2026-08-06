import React from "react";
import { Link } from "react-router-dom";
import "../../pages/Page.css";

import airImage from "../../assets/images/sea1.jpg";


const Airfreight = () => {


return (

<div className="service-page">


{/* ================= HERO ================= */}


<section
className="service-hero"
style={{
backgroundImage:`url(${airImage})`
}}
>


<div className="service-overlay"></div>


<div className="container">


<div className="service-hero-content">


<span>
AIR LOGISTICS
</span>


<h1>
Air Freight Services
</h1>


<p>

Fast, secure and reliable air cargo
solutions for time critical shipments.

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

SEA DELIVERY - AIR FREIGHT

</h2>


<p>

WWW Express provides professional air freight
solutions for domestic and international cargo.
Our services are designed for businesses that
need speed, security and reliable delivery.

</p>


</div>







<div className="feature-grid">



<div className="feature-card">


<h3>
✈ Domestic Air Cargo
</h3>


<p>

Fast transportation of goods
across major Indian cities.

</p>


</div>





<div className="feature-card">


<h3>
🌎 International Freight
</h3>


<p>

Global air cargo solutions
with reliable carrier networks.

</p>


</div>





<div className="feature-card">


<h3>
⚡ Express Air Service
</h3>


<p>

Priority delivery for
urgent shipments.

</p>


</div>





<div className="feature-card">


<h3>
📦 Heavy Cargo Handling
</h3>


<p>

Safe handling of large and
special cargo requirements.

</p>


</div>



</div>







{/* ================= WHY AIR ================= */}



<div className="service-benefits">


<h2>

Why Choose Our Air Freight?

</h2>



<ul>


<li>
✓ Faster delivery for urgent shipments
</li>


<li>
✓ Professional cargo handling
</li>


<li>
✓ Real-time shipment tracking
</li>


<li>
✓ Competitive freight solutions
</li>


<li>
✓ Experienced logistics team
</li>


</ul>


</div>





<div className="service-cta">


<h2>

Need Fast Air Cargo Solution?

</h2>


<p>

Contact WWW Express for customized
air freight services.

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


export default Airfreight;
