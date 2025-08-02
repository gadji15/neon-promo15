"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.classList.toggle("NoScroll", isOpen);
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.classList.remove("NoScroll");
      }
    };
  }, [isOpen]);

  return (
    <header className="main-header">
      <div className="header-content">
        {/* Logo */}
        <Link href="/" className="brand-logo">
          <i className="fas fa-bolt neon-cyan"></i>
          <span>NeonPromo</span>
        </Link>
        {/* Navigation principale */}
        <nav className={`main-nav${isOpen ? " active" : ""}`}>
          <Link href="/" className="nav-link">
            <i className="fas fa-house"></i>
            <span>Accueil</span>
          </Link>
          <Link href="/blog" className="nav-link">
            <i className="fas fa-blog"></i>
            <span>Blog</span>
          </Link>
          <Link href="/odds-tracker" className="nav-link tracker-link">
            <i className="fas fa-chart-line"></i>
            <span>Tracker Live</span>
            <span className="live-pulse"></span>
          </Link>
        </nav>
        {/* Menu mobile */}
        <button
          className={`mobile-menu-btn${isOpen ? " active" : ""}`}
          aria-label="Ouvrir le menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
        </button>
      </div>
    </header>
  );
}