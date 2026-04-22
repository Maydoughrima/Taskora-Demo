import React, { useState } from "react";
import InvoiceListHeader from "../../components/UI/InvoiceListHeader";
import InvoiceListCard from "../../components/MobileComponents/InvoiceListCard";
import { invoices as initialInvoices } from "../../config/Invoice";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";

export default function InvoiceList() {
  const [search, setSearch] = useState("");
  const [view, setView] = useState("table");
  const [invoiceData, setInvoiceData] = useState(initialInvoices);

  const [openAddModal, setOpenAddModal] = useState(false);

  const [form, setForm] = useState({
    clientName: "",
    projectName: "",
    amount: "",
    status: "Pending",
    dueDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddInvoice = () => {
    setInvoiceData((prev) => [
      ...prev,
      {
        id: `INV-${prev.length + 1}`,
        ...form,
        amount: Number(form.amount),
      },
    ]);

    setOpenAddModal(false);

    setForm({
      clientName: "",
      projectName: "",
      amount: "",
      status: "Pending",
      dueDate: "",
    });
  };

  const filteredInvoices = invoiceData.filter(
    (invoice) =>
      invoice.clientName?.toLowerCase().includes(search.toLowerCase()) ||
      invoice.projectName?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <InvoiceListHeader
        search={search}
        setSearch={setSearch}
        view={view}
        setView={setView}
        onAddInvoice={() => setOpenAddModal(true)}
      />

      <InvoiceListCard
        invoices={filteredInvoices}
        view={view}
      />

      {/* ADD INVOICE MODAL */}
      {openAddModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-2 animate-slideUp">
          <div className="bg-white p-6 rounded-lg w-[420px] flex flex-col gap-3">

            <h2 className="text-lg font-semibold">Create Invoice</h2>

            <Input
              name="clientName"
              value={form.clientName}
              onChange={handleChange}
              placeholder="Client Name"
            />

            <Input
              name="projectName"
              value={form.projectName}
              onChange={handleChange}
              placeholder="Project Name"
            />

            <Input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="Amount (₱)"
            />

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              <option value="Pending">Pending</option>
              <option value="Paid">Paid</option>
              <option value="Overdue">Overdue</option>
            </select>

            <Input
              type="date"
              name="dueDate"
              value={form.dueDate}
              onChange={handleChange}
              placeholder="Due Date"
            />

            <Button onClick={handleAddInvoice}>
              Create Invoice
            </Button>

            <Button
              onClick={() => setOpenAddModal(false)}
              variant="danger"
              className="text-[var(--danger400)] border border-[var(--danger)]"
            >
              Cancel
            </Button>

          </div>
        </div>
      )}
    </>
  );
}