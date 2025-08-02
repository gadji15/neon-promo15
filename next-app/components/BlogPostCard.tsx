import React from "react";
import Link from "next/link";
import type { Post } from "../types/post";

const badgeColor: Record<Post["category"], string> = {
  EXCLUSIF: "badge-EXCLUSIF",
  GUIDE: "badge-GUIDE",
  ALERTE: "badge-ALERTE",
};

export function BlogPostCard({ post }: { post: Post }) {
  return (
    <article className="blog-post bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--neon-cyan)] shadow-md transform transition-all hover:scale-105 hover:shadow-xl relative flex flex-col">
      <div className="post-header relative">
        <img
          src={post.img}
          alt={post.title}
          className="post-image w-full h-[200px] object-cover"
          loading="lazy"
        />
        <span className={`article-badge ${badgeColor[post.category]} absolute top-4 right-[-30px] rotate-12 text-black font-bold px-4 py-1 z-10`}>
          {post.category}
        </span>
      </div>
      <div className="post-body flex flex-col flex-1 p-6">
        <div className="post-meta flex items-center justify-between text-[var(--neon-cyan)] text-xs mb-2">
          <span>{post.date}</span>
          <span>
            <i className="fas fa-clock"></i> {post.reading}
          </span>
        </div>
        <h3 className="post-title text-2xl font-semibold mb-2 bg-gradient-to-r from-white to-[var(--neon-cyan)] bg-clip-text text-transparent">
          {post.title}
        </h3>
        <div className="article-excerpt text-white/90 mb-6">{post.excerpt}</div>
        <div className="mt-auto text-right">
          <Link href={`/blog/${post.slug}`}>
            <span className="btn-read inline-flex items-center gap-2 px-4 py-2 rounded bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-pink)] text-black font-bold uppercase text-sm tracking-wide shadow-sm transition hover:bg-gradient-to-r hover:from-[var(--neon-cyan)] hover:to-[var(--neon-purple)]">
              Lire
              <i className="fas fa-arrow-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}