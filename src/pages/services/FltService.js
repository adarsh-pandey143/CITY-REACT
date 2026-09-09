import ftlImage from "../../assets/images/flt.jpg";

const FTLService = () => {
  return (
    <div className="service-page">

      {/* ================= HERO ================= */}
      <section
        className="service-hero"
        style={{ backgroundImage: `url(${ftlImage})` }}
      >
        <div className="service-overlay"></div>

        <div className="container">
          <div className="service-hero-content">

            <span className="section-tag">
              FTL CARGO SERVICES
            </span>

            <h1>
              Reliable Full Truck Load Transportation
            </h1>

            <p>
              Dedicated truck transportation solutions for large-volume
              shipments with safe, reliable and timely delivery.
            </p>

          </div>
        </div>
      </section>


      {/* ================= CONTENT ================= */}
      <section className="service-content-section">

        <div className="container">

          {/* INTRO */}
          <div className="service-intro">

            <span className="section-tag">
              FTL LOGISTICS SOLUTIONS
            </span>

            <h2>
              Safe, Dedicated & Efficient Full Truck Load Services
            </h2>

            <p>
              City Express Cargo provides Full Truck Load (FTL) services
              for businesses that require a dedicated vehicle for their
              complete shipment. Our FTL solutions are suitable for
              large-volume and bulk cargo requiring direct transportation.
            </p>

            <p>
              With dedicated truck movement, secure cargo handling and
              efficient transportation planning, we help businesses
              move their shipments safely and on time.
            </p>

          </div>


          {/* FEATURES */}
          <div className="feature-grid">

            <div className="feature-card">
              <h3>Dedicated Truck</h3>
              <p>
                Dedicated vehicles are provided for your complete shipment,
                ensuring direct transportation.
              </p>
            </div>

            <div className="feature-card">
              <h3>Large Volume Cargo</h3>
              <p>
                Suitable for large-volume, bulk and commercial shipments
                requiring full truck capacity.
              </p>
            </div>

            <div className="feature-card">
              <h3>Direct Transportation</h3>
              <p>
                Direct movement of cargo helps reduce unnecessary handling
                and transit delays.
              </p>
            </div>

            <div className="feature-card">
              <h3>Door-to-Door Delivery</h3>
              <p>
                Convenient pickup and delivery solutions from the
                shipment origin to the final destination.
              </p>
            </div>

            <div className="feature-card">
              <h3>Safe Cargo Handling</h3>
              <p>
                Professional handling and transportation practices help
                keep your cargo secure throughout the journey.
              </p>
            </div>

            <div className="feature-card">
              <h3>Shipment Tracking</h3>
              <p>
                Track your shipment movement and stay updated throughout
                the transportation process.
              </p>
            </div>

          </div>


          {/* BENEFITS */}
          <div className="service-benefits">

            <span className="section-tag">
              WHY CHOOSE FTL SERVICE
            </span>

            <h2>
              Efficient Transportation For Large Shipments
            </h2>

            <ul>
              <li>Dedicated trucks for complete shipments</li>
              <li>Ideal for large-volume and commercial cargo</li>
              <li>Direct point-to-point transportation</li>
              <li>Reduced cargo handling during transit</li>
              <li>Safe and secure cargo transportation</li>
              <li>Door-to-door pickup and delivery</li>
              <li>Reliable and timely shipment movement</li>
              <li>Professional logistics support</li>
            </ul>

          </div>


          {/* CTA */}
          <div className="service-cta">

            <h2>
              Looking For Reliable FTL Cargo Services?
            </h2>

            <p>
              Choose City Express Cargo for dedicated truck
              transportation and efficient Full Truck Load solutions
              for your business shipments.
            </p>

            <a href="/NotFound" className="btn-primary">
              Get A Quote
            </a>

          </div>

        </div>

      </section>

    </div>
  );
};

export default FTLService;