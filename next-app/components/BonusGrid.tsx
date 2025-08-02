import React from "react";
import { bonuses } from "../data/bonuses";
import { BonusCard } from "./BonusCard";

export function BonusGrid() {
  return (
    <div className="bonus-grid max-w-[1400px] mx-auto grid gap-8 py-16 px-4 md:grid-cols-2 xl:grid-cols-4">
      {bonuses.map((b) => (
        <BonusCard key={b.id} bonus={b} />
      ))}
    </div>
  );
}