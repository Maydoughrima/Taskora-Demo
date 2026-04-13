import { useNavigate } from "react-router-dom"; // <--- import this
import { GoDotFill } from "react-icons/go";
import { HiOutlineUser, HiOutlineCheck } from "react-icons/hi";
import { IoIosInformationCircleOutline } from "react-icons/io";

const RecentProjectInvoiceCard = ({
  projectName = "N/A",
  clientName = "N/A",
  projectStatus = "N/A",
  projectDate = "N/A",
  invoices = [],
}) => {
  const navigate = useNavigate(); // <--- hook for navigation

  const formattedDeadline = new Date(projectDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const isActive = projectStatus === "Active";
  const statuBg = isActive ? "var(--positive)" : "var(--secondary400)";
  const textStatus = isActive ? "var(--positive800)" : "var(--secondary800)";
  const iconStatus = isActive ? "var(--positive800)" : "var(--secondary800)";

  // Always show only 2 invoices in this section
  const visibleInvoices = invoices.slice(0, 2);

  return (
    <div className="recent-projects-card row-span-2 flex flex-col p-4 gap-8 bg-[var(--accent)] rounded-lg">
      
      {/* HEADER */}
      <div className="flex flex-col gap-4">
        <p className="font-heading font-semibold text-md text-[var(--primary80)]">
          Recent Projects
        </p>
        <p className="text-[var(--primary)] font-body font-semibold text-3xl">
          {projectName}
        </p>
        <div className="flex flex-wrap gap-2">
          {/* Client */}
          <div className="flex gap-2 items-center bg-[var(--cta)] px-2 py-1 rounded-sm">
            <HiOutlineUser className="text-[var(--primary)] text-lg" />
            <p className="text-md text-[var(--primary)] font-body">{clientName}</p>
          </div>
          {/* Project Status */}
          <div className="flex gap-2 items-center px-2 py-1 rounded-sm" style={{ backgroundColor: statuBg }}>
            <GoDotFill className="text-lg" style={{ color: iconStatus }} />
            <p className="text-md font-body" style={{ color: textStatus }}>{projectStatus}</p>
          </div>
          {/* Deadline */}
          <div className="flex gap-2 items-center bg-[var(--highlight400)] px-2 py-1 rounded-sm">
            <GoDotFill className="text-[var(--primary)] text-lg" />
            <p className="text-md text-[var(--primary)] font-body">{formattedDeadline}</p>
          </div>
        </div>
      </div>

      {/* RECENT INVOICE SECTION */}
      <div className="flex flex-col gap-4 bg-[var(--secondary)] p-4 rounded-sm justify-center">
        <p className="font-heading font-semibold text-md text-[color:rgb(0,0,0,0.7)]">
          Recent Invoice
        </p>

        <div className="flex flex-col flex-wrap gap-2 justify-center">
          {visibleInvoices.map((invoice, index) => {
            const isDone = invoice.status === "Done";
            const invoiceStatusBg = isDone ? "var(--positive)" : "var(--danger)";
            const invoiceStatusText = isDone ? "var(--positive600)" : "var(--danger400)";
            const invoiceIconStatus = isDone ? "var(--positive600)" : "var(--danger400)";
            const InvoiceIcon = isDone ? HiOutlineCheck : IoIosInformationCircleOutline;

            return (
              <div key={index} className="flex w-full flex-col p-6 gap-4 items-center border rounded-sm">
                <p className="text-[var(--text)] font-body font-semibold text-3xl text-center">
                  {invoice.amount?.toLocaleString?.() ?? "0"}
                </p>
                <div className="flex gap-4">
                  <div className="flex bg-[var(--cta)] px-2 py-1 rounded-sm items-center gap-2">
                    <HiOutlineUser className="text-[var(--primary)] text-lg" />
                    <p className="text-md text-[var(--primary)] font-body">{invoice.client}</p>
                  </div>
                  <div className="flex px-2 py-1 rounded-sm gap-2 items-center" style={{ backgroundColor: invoiceStatusBg }}>
                    <InvoiceIcon className="text-lg" style={{ color: invoiceIconStatus }} />
                    <p className="text-md font-body" style={{ color: invoiceStatusText }}>{invoice.status}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* VIEW ALL BUTTON */}
        {invoices.length > 2 && (
          <button
            onClick={() => navigate("/invoices")} // <--- navigate to invoices page
            className="text-sm text-[var(--text)] font-semibold mt-1 hover:underline self-end"
          >
            View All
          </button>
        )}
      </div>
    </div>
  );
};

export default RecentProjectInvoiceCard;