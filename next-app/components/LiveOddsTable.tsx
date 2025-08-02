"use client";
import React, { useRef } from "react";
import useLiveOdds, { OddsRow } from "../hooks/useLiveOdds";

export function LiveOddsTable() {
  const { rows: odds, isLoading, error } = useLiveOdds();
  const bookmakers =
    odds[0] ? Object.keys(odds[0].values) : ["Bookmaker1", "Bookmaker2", "Bookmaker3"];
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
          {isLoading ? (
            [...Array(3)].map((_, i) => (
              <tr key={i} className="animate-pulse">
                <td className="px-4 py-3">
                  <div className="h-4 bg-white/10 rounded w-2/3" />
                </td>
                {bookmakers.map((bk) => (
                  <td key={bk} className="px-4 py-3">
                    <div className="h-4 bg-white/10 rounded w-4/5 mx-auto" />
                  </td>
                ))}
              </tr>
            ))
          ) : error ? (
            <tr>
              <td colSpan={bookmakers.length + 1} className="text-red-400 text-center py-6">
                Erreur de chargement des cotes.
              </td>
            </tr>
          ) : (
            odds.map((row, i) => (
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
                      {typeof val === "number" ? val.toFixed(2) : "--"}
                      {arrow && (
                        <span className={up ? "odds-arrow-up" : down ? "odds-arrow-down" : ""}>
                          {arrow}
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}