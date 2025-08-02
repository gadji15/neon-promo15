"use client";
import React, { useRef } from "react";
import useLiveOdds, { OddsRow } from "../hooks/useLiveOdds";

const bookmakers = ["Betwinner", "Melbet", "Sunubet"];

export function LiveOddsTable() {
  const odds = useLiveOdds();
  // Keep previous values for arrow indication
  const prevRef = useRef<OddsRow[] | null>(null);
  const prev = prevRef.current;
  prevRef.current = odds;

  return (
    <div className="max-w-2xl mx-auto my-12 overflow-x-auto">
      <table className="min-w-full table-auto odds-table rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-[var(--neon-purple)] text-white">
            <th className="px-4 py-3 text-left">Match</th>
            {bookmakers.map((bk) => (
              <th key={bk} className="px-4 py-3">{bk}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {odds.map((row, i) => (
            <tr key={row.match} className="transition">
              <td className="px-4 py-3 font-semibold text-white">{row.match}</td>
              {bookmakers.map((bk) => {
                let arrow = "";
                let up = false, down = false;
                const val = row.values[bk];
                const pval = prev?.[i]?.values?.[bk];
                if (pval !== undefined) {
                  if (val > pval) { arrow = "🔺"; up = true; }
                  else if (val < pval) { arrow = "🔻"; down = true; }
                }
                return (
                  <td key={bk} className="px-4 py-3 text-center text-[var(--neon-cyan)] font-mono">
                    {val.toFixed(2)}{" "}
                    {arrow && (
                      <span className={up ? "odds-arrow-up" : down ? "odds-arrow-down" : ""}>
                        {arrow}
                      </span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}