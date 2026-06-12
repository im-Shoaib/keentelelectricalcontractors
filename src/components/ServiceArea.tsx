// src/components/ServiceArea.tsx
"use client";

import { useEffect, useRef } from "react";

export default function ServiceArea() {
  const sectionRef = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);

  // Map interactive tooltip
  useEffect(() => {
    const mapWrapper = document.querySelector('.sec3-service-area__image-wrapper');
    if (!mapWrapper) return;
    const tooltip = document.createElement('div');
    tooltip.className = 'map-tooltip-svg';
    document.body.appendChild(tooltip);
    tooltip.style.position = 'absolute';
    tooltip.style.background = 'var(--color-navy)';
    tooltip.style.color = 'white';
    tooltip.style.padding = '5px 12px';
    tooltip.style.borderRadius = '30px';
    tooltip.style.fontSize = '0.8rem';
    tooltip.style.fontWeight = '500';
    tooltip.style.whiteSpace = 'nowrap';
    tooltip.style.pointerEvents = 'none';
    tooltip.style.zIndex = '1000';
    tooltip.style.opacity = '0';
    tooltip.style.transition = 'opacity 0.2s';
    tooltip.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';

    const regions = mapWrapper.querySelectorAll('.service-region');
    const onMouseEnter = (e: Event) => {
      const region = e.currentTarget as SVGElement;
      const areaName = region.getAttribute('data-area');
      if (areaName) {
        tooltip.textContent = areaName;
        tooltip.style.opacity = '1';
      }
    };
    const onMouseMove = (e: MouseEvent) => {
      tooltip.style.left = (e.pageX + 15) + 'px';
      tooltip.style.top = (e.pageY - 30) + 'px';
    };
    const onMouseLeave = () => { tooltip.style.opacity = '0'; };
    const onClick = (e: Event) => {
      const region = e.currentTarget as SVGElement;
      const link = region.getAttribute('data-link');
      if (link) window.location.href = link;
    };

    regions.forEach(region => {
      region.addEventListener('mouseenter', onMouseEnter);
      region.addEventListener('mousemove', onMouseMove);
      region.addEventListener('mouseleave', onMouseLeave);
      region.addEventListener('click', onClick);
    });
    return () => {
      regions.forEach(region => {
        region.removeEventListener('mouseenter', onMouseEnter);
        region.removeEventListener('mousemove', onMouseMove);
        region.removeEventListener('mouseleave', onMouseLeave);
        region.removeEventListener('click', onClick);
      });
      tooltip.remove();
    };
  }, []);

  // Scroll reveal animation
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const elements = [
      '.sec3-service-area__badge',
      '.sec3-service-area__title',
      '.sec3-service-area__desc',
      '.sec3-service-area__button-wrapper'
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
    <section ref={sectionRef} className="sec3-service-area">
      <div className="sec3-service-area__inner">
        <div className="sec3-service-area__content">
          <span className="sec3-service-area__badge">
            <span className="sec3-service-area__badge-dot"></span>
            Service Area
          </span>
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
            <div className="sec3-service-area__compass">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none"/>
                <polygon points="12,2 14,11 22,12 14,13 12,22 10,13 2,12 10,11" fill="currentColor" fillOpacity="0.8"/>
              </svg>
            </div>
            <svg viewBox="0 0 640 520" className="sec3-service-area__map">
              <path d="M70,50 L210,45 L260,70 L290,100 L330,110 L460,100 L500,150 L520,220 L470,280 L410,300 L380,340 L360,410 L300,450 L210,470 L150,440 L110,380 L90,320 L70,250 L65,180 L75,120 Z" fill="#12106e" stroke="#0a0845" strokeWidth="2" />
              <path d="M190,210 Q230,180 260,220 Q280,250 250,280 Q220,300 190,270 Q170,240 190,210 Z" fill="#1a2744" stroke="#2c3e66" strokeWidth="1" opacity="0.8" />
              <polygon className="service-region" data-area="Citrus" data-link="/citrus" points="70,50 210,45 210,85 140,100 85,90" fill="#12106e" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.5" />
              <polygon className="service-region" data-area="Hernando" data-link="/hernando" points="210,45 260,65 260,110 230,120 210,85" fill="#12106e" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.5" />
              <polygon className="service-region" data-area="Pasco" data-link="/pasco" points="210,85 260,110 290,150 250,185 200,155 190,120" fill="#12106e" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.5" />
              <polygon className="service-region" data-area="Pinellas" data-link="/pinellas" points="100,230 190,210 200,240 190,320 110,300" fill="#12106e" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.5" />
              <polygon className="service-region" data-area="Hillsborough" data-link="/hillsborough" points="190,120 250,185 290,150 340,180 370,240 350,300 290,320 250,280 200,235" fill="#12106e" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.5" />
              <circle className="service-region" data-area="Tampa" data-link="/tampa" cx="275" cy="240" r="22" fill="#1e3a5f" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.7" />
              <polygon className="service-region" data-area="Polk" data-link="/polk" points="340,180 430,160 460,210 450,270 410,300 370,240" fill="#12106e" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.5" />
              <polygon className="service-region" data-area="Manatee" data-link="/manatee" points="290,320 350,300 370,350 340,400 290,400 250,350" fill="#12106e" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.5" />
              <polygon className="service-region" data-area="Sarasota" data-link="/sarasota" points="250,350 290,400 320,440 280,470 220,450 200,410" fill="#12106e" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.5" />
              <polygon points="430,160 500,150 530,210 480,270 450,270 460,210" fill="#12106e" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="2,2" strokeOpacity="0.4" />
              <polygon points="80,90 140,100 170,130 130,150 90,130" fill="#12106e" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="2,2" strokeOpacity="0.4" />
              <polygon points="350,400 400,380 420,430 380,460 340,450" fill="#12106e" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="2,2" strokeOpacity="0.4" />
              <text x="110" y="75" className="map-label" fill="#cbd5e1" fontSize="10">Citrus</text>
              <text x="235" y="85" className="map-label" fill="#cbd5e1" fontSize="10">Hernando</text>
              <text x="240" y="145" className="map-label" fill="#cbd5e1" fontSize="10">Pasco</text>
              <text x="135" y="280" className="map-label" fill="#cbd5e1" fontSize="10">Pinellas</text>
              <text x="275" y="238" className="map-label" fill="#ffffff" fontWeight="bold" fontSize="11">Tampa</text>
              <text x="315" y="215" className="map-label" fill="#cbd5e1" fontSize="10">Hillsborough</text>
              <text x="400" y="215" className="map-label" fill="#cbd5e1" fontSize="10">Polk</text>
              <text x="320" y="350" className="map-label" fill="#cbd5e1" fontSize="10">Manatee</text>
              <text x="270" y="435" className="map-label" fill="#cbd5e1" fontSize="10">Sarasota</text>
              <g transform="translate(35, 480)" stroke="#cbd5e1" strokeWidth="0.8">
                <line x1="0" y1="0" x2="80" y2="0" />
                <line x1="0" y1="-3" x2="0" y2="3" />
                <line x1="40" y1="-2" x2="40" y2="2" />
                <line x1="80" y1="-3" x2="80" y2="3" />
                <text x="0" y="10" fill="#cbd5e1" fontSize="6" textAnchor="middle">0</text>
                <text x="40" y="10" fill="#cbd5e1" fontSize="6" textAnchor="middle">20</text>
                <text x="80" y="10" fill="#cbd5e1" fontSize="6" textAnchor="middle">40 mi</text>
              </g>
            </svg>
            <div className="sec3-service-area__visual-badge">
              <span><i className="fa-solid fa-location-dot"></i></span> 9 Service Areas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
