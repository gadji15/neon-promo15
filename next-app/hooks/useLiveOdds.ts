"use client";
import { useEffect, useState } from "react";

export interface OddsRow {
  match: string;
  values: Record<string, number>;
}
const initial: OddsRow[] = [
  {
    match: "PSG vs OM",
    values: { Betwinner: 2.4, Melbet: 2.45, Sunubet: 2.5 },
  },
  {
    match: "Real Madrid vs Barça",
    values: { Betwinner: 2.1, Melbet: 2.22, Sunubet: 2.19 },
  },
  {
    match: "Bayern vs Dortmund",
    values: { Betwinner: 2.05, Melbet: 2.09, Sunubet: 2.18 },
  },
];

export default function useLiveOdds() {
  const [data, setData] = useState(initial);
  useEffect(() => {
    const id = setInterval(() => {
      setData((prev) =>
        prev.map((row) => ({
          ...row,
          values: Object.fromEntries(
            Object.entries(row.values).map(([bk, od]) => {
              const delta = (Math.random() * 0.05) * (Math.random() > 0.5 ? 1 : -1);
              return [bk, +(od + delta).toFixed(2)];
            })
          ),
        }))
      );
    }, 3000);
    return () => clearInterval(id);
  }, []);
  return data;
}