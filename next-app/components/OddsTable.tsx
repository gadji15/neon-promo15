import React from "react";

const mockOdds = [
  {
    match: "PSG vs OM",
    odds: { Betwinner: 2.4, Melbet: 2.45, Sunubet: 2.5 },
  },
  {
    match: "Real Madrid vs Barça",
    odds: { Betwinner: 2.1, Melbet: 2.22, Sunubet: 2.19 },
  },
  {
    match: "Bayern vs Dortmund",
    odds: { Betwinner: 2.05, Melbet: 2.09, Sunubet: 2.18 },
  },
];

export function OddsTable() {
  const bookmakers = ["Betwinner", "Melbet", "Sunubet"];
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
          {mockOdds.map((row, i) => (
            <tr key={row.match} className="transition">
              <td className="px-4 py-3 font-semibold text-white">{row.match}</td>
              {bookmakers.map((bk) => (
                <td key={bk} className="px-4 py-3 text-center text-[var(--neon-cyan)] font-mono">
                  {row.odds[bk]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}