import React from "react";

export function Hero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section
      className="hero flex flex-col items-center justify-center text-center relative"
      style={{
        background: "linear-gradient(45deg, var(--neon-purple), var(--neon-pink))",
        clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
        padding: "8rem 1.5rem 12rem",
        marginTop: "9%",
      }}
    >
      <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-4" style={{
        background: "linear-gradient(45deg, var(--neon-cyan), var(--neon-pink))",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        textShadow: "0 0 15px rgba(0,243,255,0.5)"
      }}>
        {title}
      </h1>
      <p className="hero-subtitle text-xl md:text-2xl text-white/90">{subtitle}</p>
    </section>
  );
}