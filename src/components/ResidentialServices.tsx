// src/components/ResidentialServices.tsx
"use client";

import { useEffect, useRef } from "react";

export default function ResidentialServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const elements = [
      '.sec4-residential__badge',
      '.sec4-residential__title',
      '.sec4-residential__intro',
      '.sec4-residential__grid',
      '.sec4-residential__footer'
    ].map(sel => document.querySelector(sel)).filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animatedRef.current) {
          elements.forEach((el, idx) => {
            setTimeout(() => el?.classList.add('animated'), idx * 100);
          });
          animatedRef.current = true;
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="sec4-residential">
      <div className="sec4-residential__inner">
        <div className="sec4-residential__header">
          <span className="sec4-residential__badge">
            <span className="sec4-residential__badge-dot"></span>
            Residential Services
          </span>
          <h2 className="sec4-residential__title">Residential Electrical Services</h2>
          <p className="sec4-residential__intro">
            At Keentel Electrical Contractors, we provide residential electrical services that are both safe and efficient, enhancing the safety and comfort of your home. Whether you're looking to upgrade your home's electrical system, install EV chargers, or ensure your home is properly wired for new smart devices, our team is here to assist. We proudly serve homeowners in Tampa, Pasco, Pinellas, and Hillsborough counties, ensuring that every project is compliant with local building codes and safety standards.
          </p>
        </div>

        <div className="sec4-residential__grid">
          {/* Card 1 */}
          <div className="sec4-residential__card">
            <div className="sec4-residential__card-image">
              <img src="/assets/Electric+Panel-1920w.webp" alt="Electrical panel upgrade" className="sec4-residential__card-img" />
            </div>
            <div className="sec4-residential__card-content">
              <h3 className="sec4-residential__card-title">Electrical Panel Upgrades</h3>
              <p className="sec4-residential__card-desc">Optimize your home's electrical efficiency and safety with our state-of-the-art electric panel upgrades.</p>
              <a href="#" className="sec4-residential__card-link">Learn more →</a>
            </div>
          </div>
          {/* Repeat for remaining 5 cards exactly as in your HTML (same image paths) */}
          {/* I'll copy the rest from your HTML but with /assets/ prefix */}
          {/* Card 2 */}
          <div className="sec4-residential__card">
            <div className="sec4-residential__card-image">
              <img src="/assets/Wiring+Rewiring+Residential-1920w.webp" alt="Home wiring services" className="sec4-residential__card-img" />
            </div>
            <div className="sec4-residential__card-content">
              <h3 className="sec4-residential__card-title">Wiring and Rewiring</h3>
              <p className="sec4-residential__card-desc">Future-proof your home and ensure safety with comprehensive wiring and rewiring services.</p>
              <a href="#" className="sec4-residential__card-link">Learn more →</a>
            </div>
          </div>
          {/* Card 3 */}
          <div className="sec4-residential__card">
            <div className="sec4-residential__card-image">
              <img src="/assets/Residential+Lighting+design+and+installation-1920w.webp" alt="Lighting design and installation" className="sec4-residential__card-img" />
            </div>
            <div className="sec4-residential__card-content">
              <h3 className="sec4-residential__card-title">Lighting Design and Installation</h3>
              <p className="sec4-residential__card-desc">Illuminate your space with custom lighting designs that blend functionality and style.</p>
              <a href="#" className="sec4-residential__card-link">Learn more →</a>
            </div>
          </div>
          {/* Card 4 */}
          <div className="sec4-residential__card">
            <div className="sec4-residential__card-image">
              <img src="/assets/Residential+Smart+home+integration-1920w.webp" alt="Smart home integration" className="sec4-residential__card-img" />
            </div>
            <div className="sec4-residential__card-content">
              <h3 className="sec4-residential__card-title">Smart Home Integration</h3>
              <p className="sec4-residential__card-desc">Elevate your living experience with smart technology for seamless control and energy savings.</p>
              <a href="#" className="sec4-residential__card-link">Learn more →</a>
            </div>
          </div>
          {/* Card 5 */}
          <div className="sec4-residential__card">
            <div className="sec4-residential__card-image">
              <img src="/assets/Standby+generator+installation-1920w.webp" alt="Standby generator installation" className="sec4-residential__card-img" />
            </div>
            <div className="sec4-residential__card-content">
              <h3 className="sec4-residential__card-title">Standby Generator Installation</h3>
              <p className="sec4-residential__card-desc">Guarantee uninterrupted power with dependable standby generators, perfect for emergency preparedness.</p>
              <a href="#" className="sec4-residential__card-link">Learn more →</a>
            </div>
          </div>
          {/* Card 6 */}
          <div className="sec4-residential__card">
            <div className="sec4-residential__card-image">
              <img src="/assets/247+troubleshooting+and+repairs-1920w.webp" alt="Emergency electrical repairs" className="sec4-residential__card-img" />
            </div>
            <div className="sec4-residential__card-content">
              <h3 className="sec4-residential__card-title">24/7 Troubleshooting and Repairs</h3>
              <p className="sec4-residential__card-desc">Access expert electrical help anytime with our 24/7 troubleshooting and repair services.</p>
              <a href="#" className="sec4-residential__card-link">Learn more →</a>
            </div>
          </div>
        </div>

        <div className="sec4-residential__footer">
          <p className="sec4-residential__footer-text">We understand the challenges of maintaining reliable power in Tampa, FL, and offer proactive solutions to prevent outages and ensure your systems run efficiently.</p>
        </div>
      </div>
    </section>
  );
}
