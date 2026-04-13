import Strip from "../../components/Strip";
import DashHero from "../../components/DashHero";
import DashboardSummary from "../../components/UI/DashboardSummary"
import WorkOverView from "../../components/UI/WorkOverViewSection";

export default function Dashboard() {
  return(
    <>
    {/* SEARCH BAR & HEROTEXT */}
    <DashHero/>
    {/* PREMIUM BANNER STRIP */}
    <Strip/>
    {/* SUMMARY CARDS */}
    <DashboardSummary/>
    {/* WORK OVERVIEW */}
    <WorkOverView/>
    </>
  );
}

