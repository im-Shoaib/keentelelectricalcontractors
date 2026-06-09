// src/components/About.tsx
"use client";

export default function About() {
  return (
    <section className="sec2-about">
      <div className="sec2-about__inner">
        <div className="sec2-about__header">
          <span className="sec2-about__badge">Who We Are</span>
          <h2 className="sec2-about__title" id="sec2-title">Reliable & Safe Electrical Solutions</h2>
          <p className="sec2-about__subtitle">For Homes and Businesses Across Tampa, FL, and Surrounding Areas</p>
        </div>

        <div className="sec2-about__grid">
          <div className="sec2-about__text">
            <p className="sec2-about__desc">
              At Keentel Electrical Contractors, we pride ourselves on delivering exceptional electrical solutions for both residential and commercial clients throughout Tampa, FL, including Hillsborough, Pasco, Pinellas, and nearby Sarasota counties. Our team of expert licensed electricians brings decades of experience to every project, ensuring safe, efficient, and custom-tailored services. Whether you're in need of a sophisticated upgrade to your home's electrical panel, precise wiring for new commercial constructions, or responsive 24/7 emergency electrical repairs, Keentel is committed to powering your projects with unmatched professionalism and meticulous attention to detail.
            </p>
          </div>
          <div className="sec2-about__stats">
            <div className="sec2-about__stat-card">
              <div className="sec2-about__stat-number">30+</div>
              <div className="sec2-about__stat-label">Years of Excellence</div>
            </div>
            <div className="sec2-about__stat-card">
              <div className="sec2-about__stat-number">24/7</div>
              <div className="sec2-about__stat-label">Emergency Service</div>
            </div>
            <div className="sec2-about__stat-card">
              <div className="sec2-about__stat-number">100%</div>
              <div className="sec2-about__stat-label">Licensed & Insured</div>
            </div>
          </div>
        </div>

        <div className="sec2-about__contact">
          <div className="sec2-about__contact-inner">
            <p className="sec2-about__contact-text">Contact us today for a free consultation and estimate!</p>
            <a href="#contact" className="btn btn--primary sec2-about__btn">Free Estimate →</a>
          </div>
        </div>
      </div>
    </section>
  );
}