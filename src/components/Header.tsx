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

  const attachTopLevelDropdownHandlers = () => {
    const topToggles = document.querySelectorAll(".nav-item-has-dropdown > .dropdown-toggle");
    topToggles.forEach(toggle => {
      if ((toggle as any).hasTopLevelListener) return;
      const dropdownMenu = toggle.nextElementSibling;
      if (dropdownMenu?.classList.contains("dropdown-menu")) {
        toggle.addEventListener("click", (e) => {
          e.preventDefault();
          dropdownMenu.classList.toggle("show-mobile");
          toggle.classList.toggle("rotate-chevron");
        });
        (toggle as any).hasTopLevelListener = true;
      }
    });
  };

  const attachSubmenuHandlers = () => {
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
        attachTopLevelDropdownHandlers();
        attachSubmenuHandlers();
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

  // Smooth scroll for anchor links
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handler = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute("href");
      if (href && href !== "#") {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          if (navRef.current?.classList.contains("active")) closeMenu();
        }
      }
    };
    anchors.forEach(a => a.addEventListener("click", handler));
    return () => anchors.forEach(a => a.removeEventListener("click", handler));
  }, []);

  // Attach hamburger/overlay event listeners
  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const overlay = overlayRef.current;
    const navLinks = document.querySelectorAll('.nav__link:not(.dropdown-toggle)');
    if (hamburger) hamburger.addEventListener("click", toggleMenu);
    if (overlay) overlay.addEventListener("click", closeMenu);
    navLinks.forEach(link => link.addEventListener("click", () => {
      if (navRef.current?.classList.contains("active")) closeMenu();
    }));
    return () => {
      if (hamburger) hamburger.removeEventListener("click", toggleMenu);
      if (overlay) overlay.removeEventListener("click", closeMenu);
      navLinks.forEach(link => link.removeEventListener("click", () => {}));
    };
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
        >
          <span></span><span></span><span></span>
        </button>

        <nav aria-label="Main navigation">
          <ul ref={navRef} className="nav" id="nav">
            <li><Link href="/" className="nav__link">Home</Link></li>
            <li><Link href="/about" className="nav__link">About Us</Link></li>

            {/* General Contractor Services */}
            <li className="nav-item-has-dropdown">
              <a href="/general-contractor" className="nav__link dropdown-toggle">
                General Contractor Services <span className="dropdown-chevron">⌵</span>
              </a>
              <ul className="dropdown-menu">
                {/* Design Services submenu */}
                <li className="dropdown-submenu-parent">
                  <a href="/design-services" className="dropdown-link submenu-toggle">
                    Design Services <span className="right-arrow">❯</span>
                  </a>
                  <ul className="sub-dropdown-menu">
                    <li><Link href="/residential-design">Residential design (custom homes, renovations, interiors, landscaping integration)</Link></li>
                    <li><Link href="/commercial-design">Commercial design (office layouts, retail spaces, restaurant designs, industrial planning)</Link></li>
                    <li><Link href="/architectural-drawings">Architectural & engineering drawings</Link></li>
                    <li><Link href="/3d-modeling">3D modeling & project visualization</Link></li>
                    <li><Link href="/permit-compliance">Permit & code compliance support</Link></li>
                  </ul>
                </li>
                {/* Build Services submenu */}
                <li className="dropdown-submenu-parent">
                  <a href="/build-services" className="dropdown-link submenu-toggle">
                    Build Services <span className="right-arrow">❯</span>
                  </a>
                  <ul className="sub-dropdown-menu">
                    <li><Link href="/new-residential-construction">New residential construction</Link></li>
                    <li><Link href="/commercial-construction">Commercial construction (tenant improvements, office buildings, warehouses)</Link></li>
                    <li><Link href="/project-management">Project management & general contracting</Link></li>
                    <li><Link href="/quality-assurance">Quality assurance & safety control</Link></li>
                    <li><Link href="/sustainable-solutions">Sustainable & energy-efficient solutions</Link></li>
                  </ul>
                </li>
                {/* Emergency Services submenu */}
                <li className="dropdown-submenu-parent">
                  <a href="/emergency-services" className="dropdown-link submenu-toggle">
                    Emergency Services (24/7 availability) <span className="right-arrow">❯</span>
                  </a>
                  <ul className="sub-dropdown-menu">
                    <li><Link href="/fire-storm-flood-restoration">Fire, storm, and flood damage restoration</Link></li>
                    <li><Link href="/electrical-structural-repairs">Electrical and structural emergency repairs</Link></li>
                    <li><Link href="/roof-plumbing-emergencies">Roof leaks and plumbing emergencies</Link></li>
                    <li><Link href="/secure-unsafe-structures">Securing unsafe structures</Link></li>
                    <li><Link href="/insurance-claim-assistance">Insurance claim assistance</Link></li>
                  </ul>
                </li>
                {/* Remodeling Services submenu */}
                <li className="dropdown-submenu-parent">
                  <a href="/remodeling-services" className="dropdown-link submenu-toggle">
                    Remodeling Services <span className="right-arrow">❯</span>
                  </a>
                  <ul className="sub-dropdown-menu">
                    <li><Link href="/residential-remodeling">Residential remodeling (kitchens, bathrooms, basements, whole-home upgrades)</Link></li>
                    <li><Link href="/commercial-remodeling">Commercial remodeling (office renovations, retail build-outs, restaurant redesigns)</Link></li>
                    <li><Link href="/additions-expansions">Additions and expansions</Link></li>
                    <li><Link href="/green-smart-remodeling">Green remodeling & smart home integration</Link></li>
                    <li><Link href="/ada-compliance">ADA compliance upgrades</Link></li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Industries We Serve */}
            <li className="nav-item-has-dropdown">
              <a href="/industries" className="nav__link dropdown-toggle">
                Industries We Serve <span className="dropdown-chevron">⌵</span>
              </a>
              <ul className="dropdown-menu">
                <li><Link href="/residential-industries" className="dropdown-link">Residential – Homeowners, landlords, property managers</Link></li>
                <li><Link href="/commercial-industries" className="dropdown-link">Commercial – Office buildings, retail stores, restaurants, industrial spaces, healthcare facilities</Link></li>
              </ul>
            </li>

            <li><Link href="/electrical-contractor-services" className="nav__link">Electrical Services</Link></li>
            <li><Link href="/faq" className="nav__link">FAQ</Link></li>
            <li><Link href="/blog" className="nav__link">Blogs</Link></li>
            <li><Link href="/contact" className="nav__link">Contact Us</Link></li>
          </ul>
        </nav>
        <div ref={overlayRef} className="nav-overlay" id="navOverlay"></div>
      </div>
    </header>
  );
}
