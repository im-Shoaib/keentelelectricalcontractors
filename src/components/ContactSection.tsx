// src/components/ContactSection.tsx
"use client";

import { useEffect, useRef } from "react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const leftCol = document.querySelector('.sec9-contact__left');
    const rightCol = document.querySelector('.sec9-contact__right');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animatedRef.current) {
          leftCol?.classList.add('animated');
          rightCol?.classList.add('animated');
          animatedRef.current = true;
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="sec9-contact">
      <div className="sec9-contact__inner">
        <div className="sec9-contact__left">
          <span className="sec9-contact__badge">
            <span className="sec9-contact__badge-dot"></span>
            The Keentel Difference
          </span>
          <h2 className="sec9-contact__title">Experience the Keentel Difference in Tampa's Electrical Services</h2>
          <p className="sec9-contact__desc">
            Choose Keentel Electrical Contractors and experience a unique blend of precision, reliability, and customer-focused service that stands out in the Tampa Bay area. Unlike others, we blend decades of expertise with continuous innovation in residential and commercial electrical services. Proudly serving Hillsborough, Polk, Pasco, Pinellas, and Sarasota, we are your local experts committed to safety and quality that exceeds expectations.
          </p>
          <div className="sec9-contact__cta-block">
            <h3 className="sec9-contact__cta-title">Get in Touch with Keentel Electrical Contractors</h3>
            <p className="sec9-contact__cta-text">For reliable, safe, and professional electrical services in Tampa, FL, contact us today. Whether you need a panel upgrade, lighting installation, or emergency repair, Keentel is here to power your home and business.</p>
            <div className="sec9-contact__buttons">
              <a href="tel:8133950000" className="btn btn--secondary sec9-contact__btn">Give Us a Call →</a>
              <a href="#quote" className="btn btn--primary sec9-contact__btn">Free Estimate →</a>
            </div>
          </div>
        </div>
        <div className="sec9-contact__right">
          <div className="sec9-contact__info">
            <h3 className="sec9-contact__info-title">Contact Us Today</h3>
            <div className="sec9-contact__info-item">
              <svg className="sec9-contact__info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <span>813-395-0000</span>
            </div>
            <div className="sec9-contact__info-item">
              <svg className="sec9-contact__info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>contact@keentelelectricalcontractors.com</span>
            </div>
            <div className="sec9-contact__info-item">
              <svg className="sec9-contact__info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>400 North Ashley Drive, Suite 2600, Tampa, FL 33602</span>
            </div>
          </div>
          <div className="sec9-contact__form-wrapper">
            <h3 className="sec9-contact__form-title">Request a Free Quote Online</h3>
            <form className="sec9-contact__form" onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll contact you soon."); }}>
              <div className="sec9-contact__form-group">
                <input type="text" name="name" placeholder="Your Name" required className="sec9-contact__input" />
              </div>
              <div className="sec9-contact__form-group">
                <input type="email" name="email" placeholder="Email Address" required className="sec9-contact__input" />
              </div>
              <div className="sec9-contact__form-group">
                <input type="tel" name="phone" placeholder="Phone Number" required className="sec9-contact__input" />
              </div>
              <div className="sec9-contact__form-group">
                <textarea name="message" rows={4} placeholder="Your Message" required className="sec9-contact__textarea"></textarea>
              </div>
              <button type="submit" className="btn btn--primary sec9-contact__submit">Send Message →</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
