import DashboardSummaryCard from "./DashboardSummaryCard";
import { User } from "../../config/User";

export default function DashboardSummary() {
  const user = User;

  const cards = [
    {
      title: "Total Clients",
      value: user.totalClients ?? 0,
      growth: user.ClientGrowth ?? 0,
    },
    {
      title: "Active Projects",
      value: user.ActiveProjects ?? 0,
      growth: user.ActiveProjectsGrowth ?? 0,
    },
    {
      title: "Total Invoice",
      value: user.TotalInvoice ?? 0,
      growth: user.TotalInvoiceGrowth ?? 0,
    },
    {
      title: "Total Revenue",
      value: user.TotalRevenue ?? 0,
      growth: user.RevenueGrowth ?? 0,
    },
  ];

  return (
    <section className="flex flex-col w-full p-2 pt-4 md:px-6 lg:px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {cards.map((card, index) => (
          <DashboardSummaryCard
            key={index}
            title={card.title}
            value={card.value}
            growth={card.growth}
          />
        ))}
      </div>
    </section>
  );
}