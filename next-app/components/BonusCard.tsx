"use client";
import React from "react";
import type { Bonus } from "../types/bonus";
import useCopyClipboard from "../hooks/useCopyClipboard";

export function BonusCard({ bonus }: { bonus: Bonus }) {
  const copy = useCopyClipboard();

  function handleCopy() {
    copy(bonus.code);
  }

  return (
    <article className="bonus-card flex flex-col items-center bg-[var(--card-bg)] rounded-[15px] p-8 relative overflow-hidden transition border border-transparent hover:translate-y-[-10px] hover:shadow-lg hover:border-[var(--neon-purple)]">
      {bonus.media && bonus.media.endsWith('.mp4') ? (
        <video
          src={bonus.media}
          poster={bonus.img}
          className="bonus-image w-full h-[180px] object-contain drop-shadow-[0_0_10px_var(--neon-cyan)] mb-6 rounded"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <img
          src={bonus.img}
          alt={bonus.name}
          className="bonus-image w-full h-[180px] object-contain drop-shadow-[0_0_10px_var(--neon-cyan)] mb-6 rounded"
          loading="lazy"
        />
      )}
      <div className="bonus-content flex-1 flex flex-col items-center w-full">
        <h3 className="text-2xl font-semibold text-[var(--neon-pink)] mb-2">{bonus.name}</h3>
        <p className="text-white/90 mb-4 text-center">{bonus.description}</p>
        <div className="code-container flex items-center justify-between w-full bg-black/50 border border-[var(--neon-purple)] rounded px-4 py-3 mb-4">
          <span className="font-mono text-lg">{bonus.code}</span>
          <button
            className="copy-btn text-[var(--neon-cyan)] hover:text-[var(--neon-pink)] transition ml-3"
            onClick={handleCopy}
            aria-label="Copier le code"
            type="button"
          >
            <i className="far fa-copy"></i>
          </button>
        </div>
        <a
          href={bonus.link}
          className="btn btn-redirect w-full justify-center mt-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-external-link-alt"></i>
          Accéder à {bonus.name}
        </a>
      </div>
    </article>
  );
}