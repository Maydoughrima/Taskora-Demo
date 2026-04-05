import { IoIosInformationCircleOutline } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { User } from "../../config/User";



export default function SummaryCard() {
    const user = User;

    //define the color based on growth
    const ClientGrowthColor = user.ClientGrowth >=0 ? "var(--positive)" : "var(--danger)";
    const ClientGrowthTextColor = user.ClientGrowth >=0 ? "var(--positive400)" : "var(--danger400)";
    const ActiveProjectstGrowthColor = user.ActiveProjectsGrowth >=0 ? "var(--positive)" : "var(--danger)";
    const ActiveProjectsTextColor = user.ActiveProjectsGrowth >=0 ? "var(--positive400)" : "var(--danger400)";
    const TotalInvoiceGrowthColor = user.TotalInvoiceGrowth >=0 ? "var(--positive)" : "var(--danger)";
    const TotalInvoiceTextColor = user.TotalInvoiceGrowth >=0 ? "var(--positive400)" : "var(--danger400)";
  return (
    <section className="flex flex-col w-full p-2 pt-4 md:px-6 lg:px-4">
      <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
        {/* card 1 */}
        <div className="bg-transparent border justify-center rounded-md gap-4 flex flex-1 flex-col px-2 py-4">
          {/* card header */}
          <div className="flex items-center justify-between">
            {/* left side */}
            <div className="flex items-center gap-2">
              <p className="font-body font-semibold text-lg text-[color:rgb(0,0,0,0.7)]">
                Total Clients
              </p>
              <IoIosInformationCircleOutline className="text-lg text-inherit" />
            </div>
            {/* right side */}
            <HiOutlineDotsVertical className="text-[color:rgb(0,0,0,0.7)] text-lg" />
          </div>

          {/* Card content */}
          <p className="text-[var(--text)] font-body font-semibold text-3xl text-center">
            {user.totalClients.toLocaleString()}
          </p>

          {/* Card footer*/}
          <div className="flex justify-center items-center gap-2">
            {/* summary */}
            <div
            className="p-1 rounded-sm"
            style={{
              backgroundColor: ClientGrowthColor,
            }}
          >
            <p
              className="font-body"
              style={{
                color: ClientGrowthTextColor,
              }}
            >
              {user.ClientGrowth >= 0 ? `+${user.ClientGrowth}%` : `${user.ClientGrowth}%`}
            </p>
          </div>
            <p className="text-[color:rgb(0,0,0,0.7)] font-body">
              vs Last Month
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div className="bg-transparent border justify-center rounded-md gap-4 flex flex-1 flex-col px-2 py-4">
          {/* card header */}
          <div className="flex items-center justify-between">
            {/* left side */}
            <div className="flex items-center gap-2">
              <p className="font-body font-semibold text-lg text-[color:rgb(0,0,0,0.7)]">
                Active Projects
              </p>
              <IoIosInformationCircleOutline className="text-lg text-inherit" />
            </div>
            {/* right side */}
            <HiOutlineDotsVertical className="text-[color:rgb(0,0,0,0.7)] text-lg" />
          </div>

          {/* Card content */}
          <p className="text-[var(--text)] font-body font-semibold text-3xl text-center">
            {user.ActiveProjects.toLocaleString()}
          </p>

          {/* Card footer*/}
          <div className="flex justify-center items-center gap-2">
            {/* summary */}
            <div
            className="p-1 rounded-sm"
            style={{
              backgroundColor: ActiveProjectstGrowthColor,
            }}
          >
            <p
              className="font-body"
              style={{
                color: ActiveProjectsTextColor,
              }}
            >
              {user.ActiveProjectsGrowth >= 0 ? `+${user.ActiveProjectsGrowth}%` : `${user.ActiveProjectsGrowth}%`}
            </p>
          </div>
            <p className="text-[color:rgb(0,0,0,0.7)] font-body">
              vs Last Month
            </p>
          </div>
        </div>
        {/* card 3 */}
        <div className="bg-transparent border justify-center rounded-md gap-4 flex flex-1 flex-col px-2 py-4">
          {/* card header */}
          <div className="flex items-center justify-between">
            {/* left side */}
            <div className="flex items-center gap-2">
              <p className="font-body font-semibold text-lg text-[color:rgb(0,0,0,0.7)]">
                Total Invoice
              </p>
              <IoIosInformationCircleOutline className="text-lg text-inherit" />
            </div>
            {/* right side */}
            <HiOutlineDotsVertical className="text-[color:rgb(0,0,0,0.7)] text-lg" />
          </div>

          {/* Card content */}
          <p className="text-[var(--text)] font-body font-semibold text-3xl text-center">
            {user.TotalInvoice.toLocaleString()}
          </p>

          {/* Card footer*/}
          <div className="flex justify-center items-center gap-2">
            {/* summary */}
            <div
            className="p-1 rounded-sm"
            style={{
              backgroundColor: TotalInvoiceGrowthColor,
            }}
          >
            <p
              className="font-body"
              style={{
                color: TotalInvoiceTextColor,
              }}
            >
              {user.TotalInvoiceGrowth >= 0 ? `+${user.TotalInvoiceGrowth}%` : `${user.TotalInvoiceGrowth}%`}
            </p>
          </div>
            <p className="text-[color:rgb(0,0,0,0.7)] font-body">
              vs Last Month
            </p>
          </div>
        </div>
        {/* card 4 */}
        <div className="bg-transparent border justify-center rounded-md gap-4 flex flex-1 flex-col px-2 py-4">
          {/* card header */}
          <div className="flex items-center justify-between">
            {/* left side */}
            <div className="flex items-center gap-2">
              <p className="font-body font-semibold text-lg text-[color:rgb(0,0,0,0.7)]">
                Total Client
              </p>
              <IoIosInformationCircleOutline className="text-lg text-inherit" />
            </div>
            {/* right side */}
            <HiOutlineDotsVertical className="text-[color:rgb(0,0,0,0.7)] text-lg" />
          </div>

          {/* Card content */}
          <p className="text-[var(--text)] font-body font-semibold text-3xl text-center">
            {user.totalClients.toLocaleString()}
          </p>

          {/* Card footer*/}
          <div className="flex justify-center items-center gap-2">
            {/* summary */}
            <div className="bg-[var(--positive)] p-1 rounded-sm">
              <p className="text-[var(--positive400)] font-body">{user.growth}</p>
            </div>
            <p className="text-[color:rgb(0,0,0,0.7)] font-body">
              vs Last Month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
