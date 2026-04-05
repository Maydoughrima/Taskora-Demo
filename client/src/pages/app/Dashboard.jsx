import Strip from "../../components/Strip";
import DashHero from "../../components/DashHero";
import SummaryCard from "../../components/UI/DashboardSummaryCard";

export default function Dashboard() {
  return(
    <>
    {/* SEARCH BAR & HEROTEXT */}
    <DashHero/>
    {/* PREMIUM BANNER STRIP */}
    <Strip/>
    {/* SUMMARY CARDS */}
    <SummaryCard/>
    </>
  );
}

