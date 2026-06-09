// src/components/ServiceArea.tsx
"use client";

export default function ServiceArea() {
  return (
    <section className="sec3-service-area">
      <div className="sec3-service-area__inner">
        <div className="sec3-service-area__content">
          <span className="sec3-service-area__badge">Service Area</span>
          <h2 className="sec3-service-area__title">Serving Tampa and Surrounding Areas</h2>
          <p className="sec3-service-area__desc">
            At Keentel Electrical Contractors, we proudly serve Tampa, Hillsborough, Pinellas, Pasco, Polk, Sarasota, and Manatee counties. Our locally-owned team understands the unique electrical needs of Florida homes and businesses, from hurricane preparedness to solar panel installations and EV chargers.
          </p>
          <div className="sec3-service-area__button-wrapper">
            <a href="tel:8133950000" className="btn btn--primary sec3-service-area__btn">Call Us Now →</a>
          </div>
        </div>
        <div className="sec3-service-area__visual">
          <div className="sec3-service-area__image-wrapper">
            <img src="/assets/map.jpg" alt="Tampa Bay service area map" className="sec3-service-area__img" />
            <div className="sec3-service-area__visual-badge">
              <span><i className="fa-solid fa-location-dot"></i></span> 7+ Counties
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}