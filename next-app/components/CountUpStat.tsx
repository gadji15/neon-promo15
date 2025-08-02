"use client";
import CountUp from 'react-countup';
export function CountUpStat({ end, suffix, label }: { end: number; suffix?: string; label: string }) {
  return (
    <div className="flex flex-col items-center md:items-start">
      <span className="text-3xl md:text-4xl font-bold text-[var(--neon-cyan)]">
        <CountUp end={end} duration={3} suffix={suffix} />
      </span>
      <span className="text-white/80 text-xs uppercase tracking-wide mt-1">{label}</span>
    </div>
  );
}