import React from "react";
import Link from "next/link";
import { CountUpStat } from "./CountUpStat";

export function Hero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-center text-center md:text-left h-[60vh] md:h-[50vh] px-4 overflow-hidden bg-gradient-move bg-gradient-to-br from-[var(--neon-purple)] to-[var(--neon-pink)]"
    >
      {/* Decorative SVG blob */}
      <svg
        className="absolute -top-32 -left-32 w-[420px] h-[420px] opacity-10 pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <radialGradient id="blobGrad" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#00f3ff" />
            <stop offset="100%" stopColor="#bc13fe" />
          </radialGradient>
        </defs>
        <ellipse cx="200" cy="200" rx="170" ry="150" fill="url(#blobGrad)" />
      </svg>
      <div className="z-10 flex-1 flex flex-col items-center md:items-start">
        <h1 className="hero-title text-3xl md:text-5xl lg:text-6xl font-bold uppercase mb-4 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-pink)] bg-clip-text text-transparent text-shadow-neon drop-shadow">
          {title}
        </h1>
        <p className="hero-subtitle text-lg md:text-2xl text-white/90 mb-8">
          {subtitle}
        </p>
        <div className="flex flex-col md:flex-row gap-10 mb-8">
          <CountUpStat end={500000} suffix="€" label="Bonus distribués" />
          <CountUpStat end={12000} suffix="+" label="Parieurs" />
        </div>
        <Link
          href="#bonus"
          scroll={false}
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-pink)] text-black font-bold shadow-neon hover:scale-105 transition text-lg"
        >
          Découvrir les bookmakers
        </Link>
      </div>
      {/* Scroll down arrow */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 hidden md:block z-20">
        <span className="flex flex-col items-center gap-1 animate-bounce text-[var(--neon-cyan)] text-3xl opacity-80">
          <i className="fas fa-arrow-down"></i>
        </span>
      </div>
    </section>
  );
}