import { OddsHero } from "../../components/OddsHero";
import { LiveOddsTable } from "../../components/LiveOddsTable";
import { OddsChart } from "../../components/OddsChart";

export default function OddsTrackerPage() {
  return (
    <main>
      <OddsHero />
      <LiveOddsTable />
      <OddsChart />
    </main>
  );
}