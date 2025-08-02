import { Hero } from "../components/Hero";
import { BonusGrid } from "../components/BonusGrid";
import { PartnerSlider } from "../components/PartnerSlider";
import { BlogHighlight } from "../components/BlogHighlight";
import Link from "next/link";

function InlineOddsButton() {
  return (
    <Link
      href="/odds-tracker"
      className="odds-tracker-button flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-purple)] text-black font-semibold border-2 border-[var(--neon-cyan)] shadow-lg mt-[-2.5rem] mb-4 ml-4 transition hover:translate-y-[-3px] hover:shadow-xl"
    >
      <i className="fas fa-chart-line"></i>
      <span>Tracker Live</span>
      <div className="button-pulse"></div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <main>
      <Hero
        title="Codes Promo Néon"
        subtitle="Électrisez vos gains avec nos offres exclusives !"
      />
      <InlineOddsButton />
      <BonusGrid />
      <PartnerSlider />
      <BlogHighlight />
    </main>
  );
}