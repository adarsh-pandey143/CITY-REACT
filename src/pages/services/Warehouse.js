import React from "react";
import { Link } from "react-router-dom";

import "../../pages/Page.css";

import warehouseImage from "../../assets/images/ware.jpg";


const Warehouse = () => {


return (

<div className="service-page">



{/* ================= HERO ================= */}


<section
className="service-hero"
style={{
backgroundImage:`url(${warehouseImage})`
}}
>


<div className="service-overlay"></div>


<div className="container">


<div className="service-hero-content">


<span>
WAREHOUSING SOLUTIONS
</span>


<h1>
Smart Warehouse Management
</h1>


<p>

Secure storage, inventory management
and distribution solutions for your business.

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

WAREHOUSE SERVICES

</h2>


<p>

RA LOGISTICS provides complete warehousing
solutions with modern facilities, technology
and experienced logistics professionals.

</p>


</div>







<div className="feature-grid">



<div className="feature-card">


<h3>
🏢 Storage Facility
</h3>


<p>

Secure and organized storage
for all types of goods.

</p>


</div>





<div className="feature-card">


<h3>
📊 Inventory Management
</h3>


<p>

Real-time inventory control
and stock management.

</p>


</div>





<div className="feature-card">


<h3>
📦 Pick & Pack
</h3>


<p>

Fast order processing and
efficient packaging solutions.

</p>


</div>





<div className="feature-card">


<h3>
🚚 Distribution
</h3>


<p>

Smooth transportation and
supply chain management.

</p>


</div>



</div>







{/* ================= BENEFITS ================= */}



<div className="service-benefits">


<h2>

Why Choose Our Warehouse?

</h2>



<ul>


<li>
✓ Strategically located warehouses
</li>


<li>
✓ Advanced inventory technology
</li>


<li>
✓ Secure storage environment
</li>


<li>
✓ Professional handling team
</li>


<li>
✓ Complete logistics support
</li>


</ul>


</div>







{/* ================= CTA ================= */}



<div className="service-cta">


<h2>

Need Reliable Warehousing?

</h2>


<p>

Optimize your supply chain with
RA LOGISTICS warehouse solutions.

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


export default Warehouse;