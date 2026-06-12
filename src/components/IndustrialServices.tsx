// src/components/IndustrialServices.tsx
"use client";

import { useEffect, useRef } from "react";

export default function IndustrialServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const elements = [
      '.sec6-industrial__badge',
      '.sec6-industrial__title',
      '.sec6-industrial__intro',
      '.sec6-industrial__grid',
      '.sec6-industrial__footer'
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
    <section ref={sectionRef} className="sec6-industrial">
      <div className="sec6-industrial__inner">
        <div className="sec6-industrial__header">
          <span className="sec6-industrial__badge">
            <span className="sec6-industrial__badge-dot"></span>
            Industrial Services
          </span>
          <h2 className="sec6-industrial__title">Industrial Electrical Services</h2>
          <p className="sec6-industrial__intro">
            We offer specialized services for industrial facilities, ensuring that your electrical systems meet the high demands of industrial operations. From high-voltage installations to motor control systems and backup power solutions, our team provides safe and reliable solutions that optimize your facility's electrical performance.
          </p>
        </div>

        <div className="sec6-industrial__grid">
          {/* Card 1 */}
          <div className="sec6-industrial__card">
            <div className="sec6-industrial__card-image">
              <img src="/assets/Industrial+Electrical+Installations-1920w.webp" alt="Industrial electrical installation" className="sec6-industrial__card-img" />
            </div>
            <div className="sec6-industrial__card-content">
              <h3 className="sec6-industrial__card-title">Industrial Electrical Installation</h3>
              <p className="sec6-industrial__card-desc">Deploy cutting-edge electrical installations tailored to the complex needs of industrial operations, ensuring efficiency and safety.</p>
              <a href="#" className="sec6-industrial__card-link">Learn more →</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="sec6-industrial__card">
            <div className="sec6-industrial__card-image">
              <img src="/assets/247+Availability-1920w.webp" alt="Industrial 24/7 service call" className="sec6-industrial__card-img" />
            </div>
            <div className="sec6-industrial__card-content">
              <h3 className="sec6-industrial__card-title">Industrial 24/7 Service Call</h3>
              <p className="sec6-industrial__card-desc">Access round-the-clock electrical support to minimize downtime and enhance productivity in your industrial environment.</p>
              <a href="#" className="sec6-industrial__card-link">Learn more →</a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="sec6-industrial__card">
            <div className="sec6-industrial__card-image">
              <img src="/assets/Industrial+Electrical+Inspections+-+Compliance-1920w.webp" alt="Electrical inspections and compliance" className="sec6-industrial__card-img" />
            </div>
            <div className="sec6-industrial__card-content">
              <h3 className="sec6-industrial__card-title">Electrical Inspections & Compliance</h3>
              <p className="sec6-industrial__card-desc">Ensure your operations meet all regulatory standards with comprehensive electrical inspections and compliance checks.</p>
              <a href="#" className="sec6-industrial__card-link">Learn more →</a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="sec6-industrial__card">
            <div className="sec6-industrial__card-image">
              <img src="/assets/Energy+Efficiency+Upgrade-1920w.webp" alt="Energy efficiency upgrades" className="sec6-industrial__card-img" />
            </div>
            <div className="sec6-industrial__card-content">
              <h3 className="sec6-industrial__card-title">Energy Efficiency Upgrades</h3>
              <p className="sec6-industrial__card-desc">Upgrade to energy-efficient systems to reduce costs and boost sustainability in your industrial operations.</p>
              <a href="#" className="sec6-industrial__card-link">Learn more →</a>
            </div>
          </div>

          {/* Card 5 */}
          <div className="sec6-industrial__card">
            <div className="sec6-industrial__card-image">
              <img src="/assets/Industrial+Electrical+System+Maintenance+-+Repairs-1920w.webp" alt="Industrial electrical system maintenance" className="sec6-industrial__card-img" />
            </div>
            <div className="sec6-industrial__card-content">
              <h3 className="sec6-industrial__card-title">Industrial Electrical System Maintenance & Repairs</h3>
              <p className="sec6-industrial__card-desc">Maintain peak operational efficiency with our thorough maintenance and repair services for industrial electrical systems.</p>
              <a href="#" className="sec6-industrial__card-link">Learn more →</a>
            </div>
          </div>

          {/* Card 6 */}
          <div className="sec6-industrial__card">
            <div className="sec6-industrial__card-image">
              <img src="/assets/Industrial+Energy+Efficiency+-+Power+Management-1920w.webp" alt="Power management solutions" className="sec6-industrial__card-img" />
            </div>
            <div className="sec6-industrial__card-content">
              <h3 className="sec6-industrial__card-title">Industrial Energy Efficiency & Power Management</h3>
              <p className="sec6-industrial__card-desc">Optimize your power usage and manage energy more efficiently with our specialized power management solutions.</p>
              <a href="#" className="sec6-industrial__card-link">Learn more →</a>
            </div>
          </div>
        </div>

        <div className="sec6-industrial__footer">
          <p className="sec6-industrial__footer-text">We help keep your systems up and running, reducing costly downtime and improving safety.</p>
        </div>
      </div>
    </section>
  );
}
