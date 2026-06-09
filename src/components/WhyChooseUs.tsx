// src/components/WhyChooseUs.tsx
"use client";

export default function WhyChooseUs() {
  return (
    <section className="sec8-why-choose">
      <div className="sec8-why-choose__inner">
        <div className="sec8-why-choose__header">
          <span className="sec8-why-choose__badge">Why Choose Us</span>
          <h2 className="sec8-why-choose__title">Why Choose Keentel Electrical Contractors?</h2>
          <p className="sec8-why-choose__intro">With decades of experience and a deep commitment to quality, Keentel Electrical Contractors is your trusted partner for all electrical needs in Tampa, FL. We prioritize safety, efficiency, and customer satisfaction in every project, big or small.</p>
        </div>

        <div className="sec8-why-choose__grid">
          <div className="sec8-why-choose__card">
            <div className="sec8-why-choose__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h3 className="sec8-why-choose__card-title">Certified & Experienced Team</h3>
            <p className="sec8-why-choose__card-desc">We have licensed electricians specializing in residential, commercial, and industrial services.</p>
          </div>
          <div className="sec8-why-choose__card">
            <div className="sec8-why-choose__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="sec8-why-choose__card-title">Proven Track Record</h3>
            <p className="sec8-why-choose__card-desc">Trusted by homeowners, businesses, and industries throughout Tampa Bay.</p>
          </div>
          <div className="sec8-why-choose__card">
            <div className="sec8-why-choose__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3 className="sec8-why-choose__card-title">Reliable, Compliant & Safe</h3>
            <p className="sec8-why-choose__card-desc">We strictly follow Tampa's electrical codes and adhere to safety standards on every project.</p>
          </div>
          <div className="sec8-why-choose__card">
            <div className="sec8-why-choose__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3 className="sec8-why-choose__card-title">24/7 Emergency Support</h3>
            <p className="sec8-why-choose__card-desc">Our team is always ready to assist with urgent electrical issues, ensuring minimal disruption to your home or business.</p>
          </div>
        </div>
      </div>
    </section>
  );
}