import React from "react";
import type { Article } from "../types/article";

const badgeColor: Record<Article["category"], string> = {
  EXCLUSIF: "badge-EXCLUSIF",
  GUIDE: "badge-GUIDE",
  ALERTE: "badge-ALERTE",
};

export function ArticleHero({ article }: { article: Article }) {
  return (
    <section className="article-hero relative flex items-center justify-center min-h-[320px] mb-[-70px]">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `url('${article.img}') center/cover no-repeat`,
          filter: "brightness(0.4)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 py-16 text-center text-white">
        <span className={`article-badge ${badgeColor[article.category]} inline-block mb-4`}>
          {article.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{article.title}</h1>
        <div className="article-meta flex items-center justify-center gap-4 text-[var(--neon-cyan)] text-xs">
          <span>{article.date}</span>
          <span>
            <i className="fas fa-clock"></i> {article.reading}
          </span>
        </div>
      </div>
    </section>
  );
}