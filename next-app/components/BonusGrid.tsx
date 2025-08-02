import React from "react";
import { bonuses } from "../data/bonuses";
import { BonusCard } from "./BonusCard";

export function BonusGrid() {
  return (
    <section
      id="bonus"
      className="py-20 px-4 max-w-[1400px] mx-auto"
    >
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {bonuses.map((b) => (
          <BonusCard key={b.id} bonus={b} />
        ))}
      </div>
    </section>
  );
}