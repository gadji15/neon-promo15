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

  const navLinks = [
    {
      href: "/",
      icon: <i className="fas fa-house mr-2"></i>,
      label: "Accueil",
    },
    {
      href: "/blog",
      icon: <i className="fas fa-blog mr-2"></i>,
      label: "Blog",
    },
    {
      href: "/odds-tracker",
      icon: <i className="fas fa-chart-line mr-2"></i>,
      label: (
        <>
          Tracker Live
          <span className="ml-2 inline-block w-2 h-2 bg-[var(--neon-pink)] rounded-full animate-pulse shadow" />
        </>
      ),
    },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-[var(--neon-purple)] shadow-[0_2px_24px_0_rgba(188,19,254,0.09)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl md:text-3xl font-oxanium font-bold tracking-wide text-[var(--neon-cyan)] hover:text-[var(--neon-pink)] transition"
        >
          <i className="fas fa-bolt drop-shadow-glow"></i>
          <span className="bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-pink)] bg-clip-text text-transparent">
            NeonPromo
          </span>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map(({ href, icon, label }) => (
            <Link
              key={href}
              href={href}
              className="relative nav-glow text-sm font-semibold text-white/80 hover:text-[var(--neon-cyan)] transition flex items-center"
            >
              {icon}
              {label}
            </Link>
          ))}
        </nav>
        {/* Mobile menu button */}
        <button
          className="md:hidden w-9 h-9 flex flex-col justify-between items-center z-50 relative"
          aria-label="Ouvrir le menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span
            className={`block h-[3px] w-full rounded bg-[var(--neon-cyan)] transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-[12px]" : ""
            }`}
          />
          <span
            className={`block h-[3px] w-full rounded bg-[var(--neon-cyan)] transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[3px] w-full rounded bg-[var(--neon-cyan)] transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[12px]" : ""
            }`}
          />
        </button>
        {/* Mobile drawer */}
        <nav
          className={`md:hidden fixed inset-y-0 right-0 w-64 bg-[#0a0a0f]/95 backdrop-blur-lg p-6 transform transition-transform duration-300 z-40 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-8 mt-8">
            {navLinks.map(({ href, icon, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="relative nav-glow text-lg font-bold text-white/90 hover:text-[var(--neon-cyan)] transition flex items-center"
                  onClick={closeMenu}
                >
                  {icon}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Overlay for mobile menu */}
        {isOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
            onClick={closeMenu}
            aria-label="Fermer le menu"
          ></div>
        )}
      </div>
    </header>
  );
}