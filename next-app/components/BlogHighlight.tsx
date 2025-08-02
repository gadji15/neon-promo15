import React from "react";
import { posts } from "../data/posts";
import Link from "next/link";

export function BlogHighlight() {
  const featured = posts.slice(0, 2);
  const badgeColor: Record<string, string> = {
    EXCLUSIF: "badge-EXCLUSIF",
    GUIDE: "badge-GUIDE",
    ALERTE: "badge-ALERTE",
  };

  return (
    <section className="max-w-5xl mx-auto py-14 px-2">
      <h2 className="text-center text-xl font-semibold text-[var(--neon-cyan)] mb-6">À la une sur le blog</h2>
      <div className="flex md:grid md:grid-cols-2 gap-8 overflow-x-auto md:overflow-visible snap-x">
        {featured.map((post) => (
          <div
            key={post.id}
            className="flex-1 min-w-[300px] max-w-[380px] bg-[var(--card-bg)] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-neon snap-center group relative"
          >
            <div className="relative">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-44 object-cover"
                loading="lazy"
              />
              <span className={`article-badge ${badgeColor[post.category]} absolute top-4 right-[-20px] rotate-12 text-black font-bold px-4 py-1 z-10`}>
                {post.category}
              </span>
            </div>
            <div className="p-5 flex flex-col h-full">
              <h3 className="text-lg font-bold text-white mb-2">{post.title}</h3>
              <p className="text-white/70 flex-1">{post.excerpt}</p>
              <div className="mt-5">
                <Link href={`/blog/${post.slug}`} className="inline-block btn-read">
                  Lire l&apos;article <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link href="/blog" className="btn btn-redirect text-base px-6">
          Voir tous les articles
        </Link>
      </div>
    </section>
  );
}