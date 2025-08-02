"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    {
      href: "/",
      icon: <i className="fas fa-house link-icon transition duration-200" />,
      label: "ACCUEIL",
    },
    {
      href: "/blog",
      icon: <i className="fas fa-blog link-icon transition duration-200" />,
      label: "BLOG",
    },
    {
      href: "/odds-tracker",
      icon: <i className="fas fa-chart-line link-icon transition duration-200" />,
      label: (
        <>
          TRACKER LIVE
          <span className="ml-2 inline-block w-2 h-2 bg-[var(--neon-pink)] rounded-full animate-pulse shadow" />
        </>
      ),
    },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={
        "sticky top-0 z-50 border-b border-[var(--neon-purple)]/80 transition-all duration-300"
        +
        (scrolled
          ? " bg-[#0a0a0f]/95 shadow-lg backdrop-blur-md"
          : " bg-[#0a0a0f]/60 backdrop-blur")
      }
    >
      {/* Neon bars left/right */}
      <span className="pointer-events-none absolute left-0 bottom-0 w-36 h-0.5 bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/70 to-transparent animate-pulse z-40" />
      <span className="pointer-events-none absolute right-0 bottom-0 w-36 h-0.5 bg-gradient-to-l from-neon-cyan/0 via-neon-cyan/70 to-transparent animate-pulse z-40" />
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-8 relative">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl md:text-3xl font-oxanium font-bold tracking-wide text-[var(--neon-cyan)] hover:text-[var(--neon-pink)] transition"
        >
          <div className="size-9 flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-purple)] shadow-neon">
            <i className="fas fa-bolt text-xl drop-shadow-glow text-white"></i>
          </div>
          <span className="bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-purple)] to-[var(--neon-pink)] bg-clip-text text-transparent">
            NeonPromo
          </span>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map(({ href, icon, label }) => (
            <Link
              key={href}
              href={href}
              className="group relative nav-glow uppercase text-xs tracking-wide font-semibold text-white/80 hover:text-[var(--neon-cyan)] transition flex items-center gap-1"
            >
              <span className="rounded-full bg-white/5 px-1.5 py-1 mr-1 opacity-60 group-hover:opacity-100 group-hover:bg-white/10 transition">
                {icon}
              </span>
              <span>{label}</span>
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
          className={`md:hidden fixed inset-y-0 right-0 w-64 bg-[#0a0a0f]/95 backdrop-blur-lg p-7 border-l-4 border-[var(--neon-cyan)]/60 shadow-neon transform transition-transform duration-300 z-40 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-10 mt-10">
            {navLinks.map(({ href, icon, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group relative nav-glow text-xl font-bold text-white/90 hover:text-[var(--neon-cyan)] transition flex items-center gap-2"
                  onClick={closeMenu}
                >
                  <span className="rounded-full bg-white/5 px-2 py-1 mr-2 opacity-60 group-hover:opacity-100 group-hover:bg-white/10 transition text-2xl">
                    {icon}
                  </span>
                  <span>{label}</span>
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