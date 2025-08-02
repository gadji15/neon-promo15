"use client";
import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, LineElement, PointElement, LinearScale, CategoryScale, Tooltip } from "chart.js";
Chart.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip);

const INTERVAL = 3000;
const MAX_POINTS = 15;

export function OddsChart() {
  // History of one odds value (e.g. Betwinner on PSG vs OM)
  const [data, setData] = useState<number[]>([2.4]);
  const labelsRef = useRef([new Date().toLocaleTimeString()]);
  useEffect(() => {
    const id = setInterval(() => {
      setData((prev) => {
        let last = prev[prev.length - 1] ?? 2.4;
        // Simulate change
        const delta = (Math.random() * 0.05) * (Math.random() > 0.5 ? 1 : -1);
        let next = +(last + delta).toFixed(2);
        const arr = [...prev, next].slice(-MAX_POINTS);
        labelsRef.current = [
          ...labelsRef.current,
          new Date().toLocaleTimeString(),
        ].slice(-MAX_POINTS);
        return arr;
      });
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="max-w-2xl mx-auto my-10 bg-black/40 rounded-lg p-6 shadow">
      <h2 className="text-lg font-bold text-[var(--neon-pink)] mb-4 flex items-center gap-2">
        <i className="fas fa-chart-line"></i> Historique des cotes (Betwinner PSG vs OM)
      </h2>
      <Line
        data={{
          labels: labelsRef.current,
          datasets: [
            {
              label: "Cote Betwinner",
              data: data,
              borderColor: "var(--neon-cyan)",
              backgroundColor: "rgba(0,243,255,0.14)",
              tension: 0.4,
              fill: true,
              pointRadius: 2,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            x: { ticks: { color: "#fff" } },
            y: { ticks: { color: "#fff" } }
          }
        }}
      />
    </div>
  );
}