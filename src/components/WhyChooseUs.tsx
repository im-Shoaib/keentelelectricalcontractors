// src/components/WhyChooseUs.tsx
"use client";

import { useEffect, useRef } from "react";

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const elements = [
      '.sec8-why-choose__badge',
      '.sec8-why-choose__title',
      '.sec8-why-choose__intro',
      '.sec8-why-choose__grid'
    ].map(sel => document.querySelector(sel)).filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animatedRef.current) {
          elements.forEach((el, idx) => setTimeout(() => el?.classList.add('animated'), idx * 100));
          animatedRef.current = true;
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="sec8-why-choose">
      <div className="sec8-why-choose__inner">
        <div className="sec8-why-choose__header">
          <span className="sec8-why-choose__badge">
            <span className="sec8-why-choose__badge-dot"></span>
            Why Choose Us
          </span>
          <h2 className="sec8-why-choose__title">Why Choose Keentel Electrical Contractors?</h2>
          <p className="sec8-why-choose__intro">With decades of experience and a deep commitment to quality, Keentel Electrical Contractors is your trusted partner for all electrical needs in Tampa, FL. We prioritize safety, efficiency, and customer satisfaction in every project, big or small.</p>
        </div>

        <div className="sec8-why-choose__grid">
          {/* Copy your 4 cards exactly from your HTML (SVGs already there) */}
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
          {/* repeat for other three cards – copy from your HTML */}
        </div>
      </div>
    </section>
  );
}
