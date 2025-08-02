import React from "react";

export function OddsHero() {
  return (
    <section
      className="odds-hero flex flex-col items-center justify-center text-center relative"
      style={{
        background:
          "linear-gradient(45deg, var(--neon-cyan), var(--neon-purple))",
        clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)",
        padding: "6rem 1.5rem 8rem",
        marginTop: "3.5rem",
      }}
    >
      <h1 className="text-4xl md:text-5xl font-bold uppercase mb-3 text-[var(--neon-cyan)] drop-shadow-lg">
        Tracker Live
      </h1>
      <p className="text-xl md:text-2xl text-white/90">
        Suivez les cotes en temps réel
      </p>
    </section>
  );
}