// src/components/CommercialServices.tsx
"use client";

export default function CommercialServices() {
  return (
    <section className="sec5-commercial">
      <div className="sec5-commercial__inner">
        <div className="sec5-commercial__header">
          <span className="sec5-commercial__badge">Commercial Services</span>
          <h2 className="sec5-commercial__title">Commercial Electrical Services</h2>
          <p className="sec5-commercial__intro">
            Keentel Electrical Contractors is the go-to electrical contractor for businesses in Tampa and nearby areas. From office wiring and lighting installations to emergency power solutions, we offer comprehensive commercial electrical services designed to minimize downtime and enhance business operations. Our team works closely with local businesses to provide custom solutions that meet their unique needs.
          </p>
        </div>

        <div className="sec5-commercial__grid">
          {/* Card 1 */}
          <div className="sec5-commercial__card">
            <div className="sec5-commercial__card-image">
              <img src="/assets/COmmercial+Commercial+New+construction+electrical+installation-1920w.webp" alt="New construction electrical installation" className="sec5-commercial__card-img" />
            </div>
            <div className="sec5-commercial__card-content">
              <h3 className="sec5-commercial__card-title">New Construction Electrical Installation</h3>
              <p className="sec5-commercial__card-desc">Equip your new projects with cutting-edge electrical systems designed for maximum efficiency and compliance.</p>
              <a href="#" className="sec5-commercial__card-link">Learn more →</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="sec5-commercial__card">
            <div className="sec5-commercial__card-image">
              <img src="/assets/Commercial+Office+and+retail+wiring-1920w.webp" alt="Office and retail wiring" className="sec5-commercial__card-img" />
            </div>
            <div className="sec5-commercial__card-content">
              <h3 className="sec5-commercial__card-title">Office and Retail Wiring</h3>
              <p className="sec5-commercial__card-desc">Optimize your workspace with tailored wiring solutions that ensure safety and enhance operational efficiency.</p>
              <a href="#" className="sec5-commercial__card-link">Learn more →</a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="sec5-commercial__card">
            <div className="sec5-commercial__card-image">
              <img src="/assets/Industrial+Equioment+Wiring-1920w.webp" alt="Industrial equipment wiring" className="sec5-commercial__card-img" />
            </div>
            <div className="sec5-commercial__card-content">
              <h3 className="sec5-commercial__card-title">Industrial Equipment Wiring</h3>
              <p className="sec5-commercial__card-desc">Rely on our robust wiring services for industrial equipment, designed to meet the highest standards of durability and performance.</p>
              <a href="#" className="sec5-commercial__card-link">Learn more →</a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="sec5-commercial__card">
            <div className="sec5-commercial__card-image">
              <img src="/assets/Commercial+Lighting+-+Energy+Efficiency+Solutions-1920w.webp" alt="Commercial lighting design" className="sec5-commercial__card-img" />
            </div>
            <div className="sec5-commercial__card-content">
              <h3 className="sec5-commercial__card-title">Lighting Design and Installation</h3>
              <p className="sec5-commercial__card-desc">Create the perfect ambiance and improve energy efficiency with our custom lighting solutions for commercial spaces.</p>
              <a href="#" className="sec5-commercial__card-link">Learn more →</a>
            </div>
          </div>

          {/* Card 5 */}
          <div className="sec5-commercial__card">
            <div className="sec5-commercial__card-image">
              <img src="/assets/Industrial+Emergency+power+solutions+(GeneratorsUPS)-1920w.webp" alt="Emergency power solutions" className="sec5-commercial__card-img" />
            </div>
            <div className="sec5-commercial__card-content">
              <h3 className="sec5-commercial__card-title">Emergency Power Solutions (Generators/UPS)</h3>
              <p className="sec5-commercial__card-desc">Keep your operations running without interruption with our reliable emergency power solutions, including generators and UPS systems.</p>
              <a href="#" className="sec5-commercial__card-link">Learn more →</a>
            </div>
          </div>

          {/* Card 6 */}
          <div className="sec5-commercial__card">
            <div className="sec5-commercial__card-image">
              <img src="/assets/Commercial+Electrical+maintenance+contracts+-+Copy-1920w.webp" alt="Electrical maintenance contracts" className="sec5-commercial__card-img" />
            </div>
            <div className="sec5-commercial__card-content">
              <h3 className="sec5-commercial__card-title">Electrical Maintenance Contracts</h3>
              <p className="sec5-commercial__card-desc">Maintain peak operational efficiency with our comprehensive electrical maintenance contracts, minimizing downtime and extending equipment lifespan.</p>
              <a href="#" className="sec5-commercial__card-link">Learn more →</a>
            </div>
          </div>
        </div>

        <div className="sec5-commercial__footer">
          <p className="sec5-commercial__footer-text">We ensure that your electrical systems are compliant with Tampa's electrical codes and regulations, keeping your business operations running smoothly.</p>
        </div>
      </div>
    </section>
  );
}