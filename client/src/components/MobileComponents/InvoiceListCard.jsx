import TaskDropdown from "../UI/TaskDropdown";
import Button from "../UI/Button";
import InvoiceCardContent from "./InvoiceListCardContent";
import InvoiceTable from "../UI/InvoiceTable";
import TaskModal from "../UI/TaskModal";
import { useState } from "react";

export default function InvoiceListCard({ invoices = [], view = "table" }) {
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const getTextColor = (status) => {
    switch (status) {
      case "Paid":
        return "text-[var(--positive600)]";
      case "Pending":
        return "text-[var(--cta)]";
      case "Overdue":
        return "text-[var(--danger400)]";
      default:
        return "text-[var(--text)]";
    }
  };

  const filteredInvoices = invoices.filter((invoice) => {
    if (statusFilter === "All") return true;
    return invoice.status === statusFilter;
  });

  return (
    <section className="flex w-full p-2 md:px-6 lg:px-4">
      <div className="flex flex-col p-2 gap-4 bg-[var(--secondary)] border w-full rounded-[16px] animate-fadeIn">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 md:gap-4 items-center">
            <div className="px-3 py-2 border rounded-md text-sm font-body text-[var(--text)]">
              Invoices
            </div>

            <div className="flex gap-1">
              <div className="hidden md:flex items-center px-3 py-2 border rounded-md text-sm text-[var(--text)]">
                {filteredInvoices.length}
              </div>

              <TaskDropdown
                options={["All", "Paid", "Pending", "Overdue"]}
                defaultValue="All"
                getTextColor={getTextColor}
                onSelect={(value) => setStatusFilter(value)}
                btnclass={(selected) =>
                  selected === "Paid"
                    ? "bg-[var(--positive)]"
                    : selected === "Pending"
                      ? "bg-[var(--cta400)]"
                      : selected === "Overdue"
                        ? "bg-[var(--danger)]"
                        : ""
                }
              />
            </div>
          </div>

          <Button
            className="bg-transparent shadow-none whitespace-nowrap"
            to="/invoices"
          >
            <p className="text-[var(--cta)] text-sm">View All</p>
          </Button>
        </div>

        {/* MOBILE (CARDS ONLY) */}
        <div className="flex flex-col gap-3 md:hidden">
          {filteredInvoices.map((invoice) => (
            <InvoiceCardContent
              key={invoice.invoiceId}
              invoice={invoice} // temporary reuse
              onView={() => setSelectedInvoice(invoice)}
            />
          ))}
        </div>

        {/* TABLET+ */}
        <div className="hidden md:block">
          {view === "table" ? (
            <InvoiceTable
              invoices={filteredInvoices}
              onView={(inv) => setSelectedInvoice(inv)}
            />
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredInvoices.map((invoice) => (
                <InvoiceCardContent
                  key={invoice.invoiceId}
                  invoice={invoice} // temporary reuse
                  onView={() => setSelectedInvoice(invoice)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ================= INVOICE MODAL ================= */}
      <TaskModal
  isOpen={!!selectedInvoice}
  onClose={() => setSelectedInvoice(null)}
>
  {selectedInvoice && (
    <div className="flex flex-col gap-5">

      {/* HEADER */}
      <div className="flex flex-col gap-1">
        <h2 className="font-heading font-semibold text-2xl text-[var(--text)]">
          Invoice #{selectedInvoice.invoiceId}
        </h2>

        <p className="text-sm text-[var(--secondary400)]">
          Invoice overview and billing summary
        </p>
      </div>

      {/* TOP SUMMARY */}
      <div className="flex items-center justify-between p-5 rounded-xl border bg-[var(--secondary)]">

        {/* LEFT */}
        <div className="flex flex-col gap-1">
          <p className="text-xs text-[var(--secondary400)] uppercase tracking-wide">
            Billed To
          </p>
          <p className="text-sm font-semibold text-[var(--text)]">
            {selectedInvoice.clientName || "-"}
          </p>
          <p className="text-xs text-[var(--secondary400)]">
            {selectedInvoice.clientEmail || "-"}
          </p>
        </div>

        {/* RIGHT */}
        <div className="text-right">
          <p className="text-xs text-[var(--secondary400)] uppercase tracking-wide">
            Total Amount
          </p>
          <p className="text-xl font-semibold text-[var(--text)]">
            ₱{selectedInvoice.amount?.toLocaleString() || 0}
          </p>
        </div>

      </div>

      {/* DETAILS (UNIFORM KEY/VALUE LAYOUT) */}
      <div className="flex flex-col gap-3 p-4 rounded-xl border bg-[var(--secondary)]">

        {/* PROJECT */}
        <div className="flex justify-between items-center">
          <p className="text-xs text-[var(--secondary400)]">Project</p>
          <p className="text-sm font-medium text-[var(--text)]">
            {selectedInvoice.projectName || "-"}
          </p>
        </div>

        {/* STATUS */}
        <div className="flex justify-between items-center">
          <p className="text-xs text-[var(--secondary400)]">Status</p>

          <span
            className={`px-2 py-1 rounded-md text-xs font-medium
              ${
                selectedInvoice.status === "Paid"
                  ? "bg-[var(--positive)] text-[var(--positive600)]"
                  : selectedInvoice.status === "Pending"
                    ? "bg-[var(--cta100)] text-[var(--cta)]"
                    : selectedInvoice.status === "Overdue"
                      ? "bg-[var(--danger100)] text-[var(--danger400)]"
                      : "bg-[var(--secondary400)] text-[var(--text)]"
              }`}
          >
            {selectedInvoice.status || "-"}
          </span>
        </div>

        {/* DUE DATE */}
        <div className="flex justify-between items-center">
          <p className="text-xs text-[var(--secondary400)]">Due Date</p>
          <p className="text-sm font-medium text-[var(--text)]">
            {selectedInvoice.dueDate || "-"}
          </p>
        </div>

        {/* ISSUED */}
        <div className="flex justify-between items-center">
          <p className="text-xs text-[var(--secondary400)]">Issued</p>
          <p className="text-sm font-medium text-[var(--text)]">
            {selectedInvoice.issueDate || "-"}
          </p>
        </div>

      </div>

      {/* ACTIONS (COMPACT + BALANCED) */}
      <div className="flex gap-2 pt-1">

        <Button
          className="flex-1 py-2 text-sm"
          onClick={() => console.log("Edit:", selectedInvoice.invoiceId)}
        >
          Edit
        </Button>

        <Button
          className="flex-1 py-2 text-sm text-[var(--danger400)]"
          variant="danger"
          onClick={() => console.log("Delete:", selectedInvoice.invoiceId)}
        >
          Delete
        </Button>

        <Button
          className="flex-1 py-2 text-sm"
          variant="secondary"
          onClick={() => console.log("Download:", selectedInvoice.invoiceId)}
        >
          PDF
        </Button>

      </div>

    </div>
  )}
</TaskModal>
    </section>
  );
}
