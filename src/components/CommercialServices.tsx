// src/components/CommercialServices.tsx
"use client";

import { useEffect, useRef } from "react";

export default function CommercialServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const elements = [
      '.sec5-commercial__badge',
      '.sec5-commercial__title',
      '.sec5-commercial__intro',
      '.sec5-commercial__grid',
      '.sec5-commercial__footer'
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
    <section ref={sectionRef} className="sec5-commercial">
      <div className="sec5-commercial__inner">
        <div className="sec5-commercial__header">
          <span className="sec5-commercial__badge">
            <span className="sec5-commercial__badge-dot"></span>
            Commercial Services
          </span>
          <h2 className="sec5-commercial__title">Commercial Electrical Services</h2>
          <p className="sec5-commercial__intro">
            Keentel Electrical Contractors is the go-to electrical contractor for businesses in Tampa and nearby areas. From office wiring and lighting installations to emergency power solutions, we offer comprehensive commercial electrical services designed to minimize downtime and enhance business operations. Our team works closely with local businesses to provide custom solutions that meet their unique needs.
          </p>
        </div>

        <div className="sec5-commercial__grid">
          {/* Repeat cards exactly as in your HTML, with /assets/ prefix */}
          <!-- I'll keep only one card for brevity; you must copy all 6 cards from your HTML -->
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
          {/* Add the other 5 cards exactly as from your original HTML, with /assets/ */}
        </div>

        <div className="sec5-commercial__footer">
          <p className="sec5-commercial__footer-text">We ensure that your electrical systems are compliant with Tampa's electrical codes and regulations, keeping your business operations running smoothly.</p>
        </div>
      </div>
    </section>
  );
}
