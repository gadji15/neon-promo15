import React from "react";

export function BlogHero() {
  return (
    <section className="blog-hero bg-gradient-to-br from-[var(--neon-purple)] to-[var(--neon-pink)] py-16 px-4 text-center relative">
      <div className="blog-hero-content">
        <h1 className="blog-main-title text-4xl md:text-5xl font-bold mb-4">
          <span className="title-part block text-[var(--neon-cyan)]">Blog des</span>
          <span className="neon-flicker text-[var(--neon-pink)]">Paris Sportifs</span>
        </h1>
        <p className="blog-subtitle text-xl md:text-2xl text-white/90">
          Conseils, Analyses et Stratégies Gagnantes
        </p>
      </div>
    </section>
  );
}