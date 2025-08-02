import React from "react";

export function SectionWrapper({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--neon-cyan)] mb-8 text-center">
        {title}
      </h1>
      <div className="space-y-6">{children}</div>
    </section>
  );
}