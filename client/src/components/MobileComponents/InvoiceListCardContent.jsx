import Button from "../UI/Button";
import { PiDotOutlineFill } from "react-icons/pi";

const InvoiceCardContent = ({ invoice = {}, onView }) => {

  const getStatusColor = (status) => {
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

  const formatCurrency = (value) => {
    return `₱${value?.toLocaleString() || 0}`;
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "-";
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return "-";

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="flex flex-col gap-3 p-2 border rounded-[7px]">

      {/* CARD HEADER */}
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          
          <p className="font-heading font-semibold text-xl text-[var(--text)]">
            {invoice.invoiceId}
          </p>

          {/* DOT STATUS (CLEANER UI) */}
          <PiDotOutlineFill
            className={`text-3xl ${getStatusColor(invoice.status)}`}
          />
        </div>

        <p className="text-[var(--secondary400)] font-body text-sm">
          {invoice.clientName || "-"}
        </p>
      </div>

      {/* META (MATCHED STRUCTURE) */}
      <div className="flex flex-col gap-1">

        <div className="flex gap-2">
          <p className="text-sm text-[var(--secondary400)] font-body">
            Project:
          </p>
          <p className="text-sm text-[var(--secondary400)] font-body">
            {invoice.projectName || "-"}
          </p>
        </div>

        <div className="flex gap-2">
          <p className="text-sm text-[var(--secondary400)] font-body">
            Amount:
          </p>
          <p className="text-sm text-[var(--secondary400)] font-body">
            {formatCurrency(invoice.amount)}
          </p>
        </div>

        <div className="flex gap-2">
          <p className="text-sm text-[var(--secondary400)] font-body">
            Issued:
          </p>
          <p className="text-sm text-[var(--secondary400)] font-body">
            {formatDate(invoice.issueDate)}
          </p>
        </div>

        <div className="flex gap-2">
          <p className="text-sm text-[var(--secondary400)] font-body">
            Due:
          </p>
          <p className="text-sm text-[var(--secondary400)] font-body">
            {formatDate(invoice.dueDate)}
          </p>
        </div>

      </div>

      {/* ACTION */}
      <Button onClick={onView}>
        View Invoice
      </Button>
    </div>
  );
};

export default InvoiceCardContent;