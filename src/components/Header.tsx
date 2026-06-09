// src/components/Header.tsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    navRef.current?.classList.remove("active");
    overlayRef.current?.classList.remove("active");
    hamburgerRef.current?.classList.remove("active");
    hamburgerRef.current?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    const isActive = navRef.current?.classList.toggle("active");
    overlayRef.current?.classList.toggle("active");
    hamburgerRef.current?.classList.toggle("active");
    hamburgerRef.current?.setAttribute("aria-expanded", String(isActive));
    document.body.style.overflow = isActive ? "hidden" : "";
    if (!isActive) {
      document.querySelectorAll(".dropdown-menu.show-mobile, .sub-dropdown-menu.show-mobile")
        .forEach(el => el.classList.remove("show-mobile"));
      document.querySelectorAll(".dropdown-toggle.rotate-chevron")
        .forEach(el => el.classList.remove("rotate-chevron"));
    }
  };

  const attachMobileDropdownHandlers = () => {
    const topToggles = document.querySelectorAll(".nav-item-has-dropdown > .dropdown-toggle");
    topToggles.forEach(toggle => {
      if ((toggle as any).hasListener) return;
      const dropdownMenu = toggle.nextElementSibling;
      if (dropdownMenu?.classList.contains("dropdown-menu")) {
        toggle.addEventListener("click", (e) => {
          e.preventDefault();
          dropdownMenu.classList.toggle("show-mobile");
          toggle.classList.toggle("rotate-chevron");
        });
        (toggle as any).hasListener = true;
      }
    });

    const subParents = document.querySelectorAll(".dropdown-submenu-parent");
    subParents.forEach(parent => {
      const subToggle = parent.querySelector(".submenu-toggle");
      const subMenu = parent.querySelector(".sub-dropdown-menu");
      if (subToggle && subMenu && !(subToggle as any).hasSubListener) {
        subToggle.addEventListener("click", (e) => {
          e.preventDefault();
          subMenu.classList.toggle("show-mobile");
        });
        (subToggle as any).hasSubListener = true;
      }
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        attachMobileDropdownHandlers();
      } else {
        document.querySelectorAll(".dropdown-menu.show-mobile, .sub-dropdown-menu.show-mobile")
          .forEach(el => el.classList.remove("show-mobile"));
        document.querySelectorAll(".dropdown-toggle.rotate-chevron")
          .forEach(el => el.classList.remove("rotate-chevron"));
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener("click", (e) => {
        const targetId = anchor.getAttribute("href");
        if (targetId === "#") return;
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          if (navRef.current?.classList.contains("active")) closeMenu();
        }
      });
    });
  }, []);

  return (
    <header className="header" role="banner">
      <div className="header__inner">
        <Link href="/" className="logo">
          <img src="/assets/logo.png" alt="Keentel logo" className="logo__img" width="44" height="44" />
        </Link>

        <button
          ref={hamburgerRef}
          className="hamburger"
          id="hamburger"
          aria-label="Toggle navigation"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </button>

        <nav aria-label="Main navigation">
          <ul ref={navRef} className="nav" id="nav">
            <li><Link href="/" className="nav__link nav__link--active">Home</Link></li>
            <li><Link href="/about" className="nav__link">About us</Link></li>
            <li className="nav-item-has-dropdown" id="servicesDropdownItem">
              <a href="#" className="nav__link dropdown-toggle" id="servicesToggle">
                <span>Services</span> <span className="dropdown-chevron">⌵</span>
              </a>
              <ul className="dropdown-menu" id="servicesDropdownMenu">
                <li className="dropdown-submenu-parent">
                  <a href="#" className="dropdown-link submenu-toggle">
                    Residential Services <span className="right-arrow">❯</span>
                  </a>
                  <ul className="sub-dropdown-menu">
                    <li><Link href="/standby-generator">Stand By Generator</Link></li>
                    <li><Link href="/ev-chargers-installation">EV Chargers Installation</Link></li>
                  </ul>
                </li>
                <li><Link href="/commercial-services" className="dropdown-link">Commercial Services</Link></li>
                <li><Link href="/industrial-services" className="dropdown-link">Industrial Services</Link></li>
                <li><Link href="/electrical-engineering" className="dropdown-link">Electrical Engineering Services</Link></li>
                <li><Link href="/247-troubleshooting" className="dropdown-link">24/7 Troubleshooting & Repairs</Link></li>
                <li><Link href="/projects-capabilities" className="dropdown-link">Projects and Capabilities</Link></li>
              </ul>
            </li>
            <li><Link href="/contact" className="nav__link">Contact us</Link></li>
            <li><Link href="/faqs" className="nav__link">FAQs</Link></li>
            <li className="nav-item-has-dropdown">
              <a href="#" className="nav__link dropdown-toggle" id="serviceAreaToggle">
                Service Area <span className="dropdown-chevron">⌵</span>
              </a>
              <ul className="dropdown-menu" id="serviceAreaDropdown">
                <li><Link href="/tampa" className="dropdown-link">Tampa</Link></li>
                <li><Link href="/citrus" className="dropdown-link">Citrus</Link></li>
                <li><Link href="/hernando" className="dropdown-link">Hernando</Link></li>
                <li><Link href="/hillsborough" className="dropdown-link">Hillsborough</Link></li>
                <li><Link href="/manatee" className="dropdown-link">Manatee</Link></li>
                <li><Link href="/pasco" className="dropdown-link">Pasco</Link></li>
                <li><Link href="/pinellas" className="dropdown-link">Pinellas</Link></li>
                <li><Link href="/polk" className="dropdown-link">Polk</Link></li>
                <li><Link href="/sarasota" className="dropdown-link">Sarasota</Link></li>
              </ul>
            </li>
            <li><Link href="/blog" className="nav__link">Blog</Link></li>
          </ul>
        </nav>
        <div ref={overlayRef} className="nav-overlay" id="navOverlay" onClick={closeMenu}></div>
      </div>
    </header>
  );
}