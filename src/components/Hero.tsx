// src/components/Hero.tsx
"use client";

export default function Hero() {
  return (
    <section 
      className="sec1-hero" 
      style={{ backgroundImage: "url('/assets/hero_bg.png')" }}
    >
      <div className="sec1-hero__overlay"></div>
      <div className="sec1-hero__inner">
        <div className="sec1-hero__content">
          <span className="sec1-hero__badge">Top-Rated Electricians</span>
          <h1 className="sec1-hero__title">Top-Rated Electricians in Tampa, FL</h1>
          <p className="sec1-hero__subtitle">Residential, Commercial & Industrial Electrical Experts</p>
          <p className="sec1-hero__desc">
            Keentel Electrical Contractors delivers licensed, code-compliant electrical services backed by 30+ years of proven field experience across Tampa and surrounding Florida counties. Our certified electricians specialize in safe installations, precision repairs, emergency response, and advanced electrical systems for homes, businesses, and industrial facilities.
          </p>
          <div className="sec1-hero__buttons">
            <a href="#contact" className="btn btn--primary">Get a Free Quote</a>
            <a href="tel:8133950000" className="btn btn--secondary">Call Us Now</a>
          </div>
        </div>
        <div className="sec1-hero__floating-badge">
          <strong>30+</strong> Years<br />Experience
        </div>
      </div>
    </section>
  );
}
