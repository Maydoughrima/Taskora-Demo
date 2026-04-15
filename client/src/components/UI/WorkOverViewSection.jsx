import { User } from "../../config/User";
import RecentProjectInvoiceCard from "./RecentProject-InvoiceCard";
import RevenueChart from "./RevenueChart";
import DeadlineCards from "./DeadlineCardsSummary";

export default function WorkOverView() {
  const user = User;

  return (
    <section className="flex flex-col w-full p-2 pt-4 md:px-6 lg:px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4 max-h-[580px]">
        <RecentProjectInvoiceCard
          projectName={user.RecentProjectName}
          clientName={user.ClientName}
          projectStatus={user.ProjectStatus}
          projectDate={user.ProjectDeadline}
          invoices={user.invoices}
        />
        <div className="chart-container flex flex-col py-4 gap-6 border rounded-lg">
          {/* header */}
          <div className="px-4">
            <p className="font-heading font-semibold text-md text-[rgba(0,0,0,0.7)] ">
            Revenue Overview
          </p>
          </div>
          <RevenueChart data={user.monthlyRevenue}/>
        </div>
        <div className="deadline-container flex flex-col p-4 gap-6 border rounded-lg">
          <p className="font-heading font-semibold text-md text-[rgba(0,0,0,0.7)] ">
            Upcoming Deadlines
          </p>
          <DeadlineCards
          deadlines={user.deadlines}
          />
        </div>
      </div>
    </section>
  );
}
