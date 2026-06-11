// src/components/About.tsx
"use client";

export default function About() {
  return (
    <section className="sec2-about">
      <div className="sec2-about__inner">
        <div className="sec2-about__header">
          <span className="sec2-about__badge">Who We Are</span>
        </div>

        <div className="sec2-about__main">
          <div className="sec2-about__headline">
            <h2 className="sec2-about__title">
              Reliable & Safe<br />Electrical Solutions
            </h2>
            <p className="sec2-about__subtitle">
              For Homes and Businesses Across Tampa, FL, and Surrounding Areas
            </p>
          </div>

          <div className="sec2-about__stats-strip">
            <div className="sec2-about__stat">
              <span className="sec2-about__stat-number">30+</span>
              <span className="sec2-about__stat-label">Years of Excellence</span>
            </div>
            <div className="sec2-about__stat-divider"></div>
            <div className="sec2-about__stat">
              <span className="sec2-about__stat-number">24/7</span>
              <span className="sec2-about__stat-label">Emergency Service</span>
            </div>
            <div className="sec2-about__stat-divider"></div>
            <div className="sec2-about__stat">
              <span className="sec2-about__stat-number">100%</span>
              <span className="sec2-about__stat-label">Licensed & Insured</span>
            </div>
          </div>
        </div>

        <div className="sec2-about__description">
          <div className="sec2-about__quote-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path
                d="M10 11h-4v-4h4v4zm8 0h-4v-4h4v4zm0 8h-4v-4h4v4zm-8 0h-4v-4h4v4z"
                stroke="none"
                fill="currentColor"
                opacity="0.3"
              />
            </svg>
          </div>
          <p className="sec2-about__desc">
            At Keentel Electrical Contractors, we pride ourselves on delivering exceptional electrical solutions for both residential and commercial clients throughout Tampa, FL, including Hillsborough, Pasco, Pinellas, and nearby Sarasota counties. Our team of expert licensed electricians brings decades of experience to every project, ensuring safe, efficient, and custom-tailored services. Whether you're in need of a sophisticated upgrade to your home's electrical panel, precise wiring for new commercial constructions, or responsive 24/7 emergency electrical repairs, Keentel is committed to powering your projects with unmatched professionalism and meticulous attention to detail.
          </p>
          <div className="sec2-about__signature">
            <div className="sec2-about__signature-line"></div>
            <span>Keentel Electrical Contractors</span>
          </div>
        </div>

        <div className="sec2-about__contact">
          <p className="sec2-about__contact-text">
            Contact us today for a free consultation and estimate!
          </p>
          <a href="#contact" className="btn btn--primary sec2-about__btn">
            Free Estimate →
          </a>
        </div>
      </div>
    </section>
  );
}
