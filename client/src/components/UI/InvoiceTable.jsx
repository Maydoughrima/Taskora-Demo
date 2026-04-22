import { useState, useEffect } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoCheckmarkOutline } from "react-icons/io5";

export default function InvoiceTable({ invoices = [], onView, onDelete }) {
  const [menu, setMenu] = useState({ id: null, top: 0, left: 0 });

  const openMenu = (e, invoiceId) => {
    e.stopPropagation();

    const rect = e.currentTarget.getBoundingClientRect();

    setMenu((prev) =>
      prev.id === invoiceId
        ? { id: null, top: 0, left: 0 }
        : {
            id: invoiceId,
            top: rect.bottom + window.scrollY,
            left: rect.right + window.scrollX - 140,
          }
    );
  };

  const closeMenu = () => setMenu({ id: null, top: 0, left: 0 });

  useEffect(() => {
    const handleClickOutside = () => closeMenu();

    if (menu.id) document.addEventListener("click", handleClickOutside);

    return () =>
      document.removeEventListener("click", handleClickOutside);
  }, [menu.id]);

  return (
    <div className="hidden md:block w-full overflow-x-auto relative rounded-[14px]">
      <table className="w-full border border-[var(--secondary400)] border-collapse">

        {/* HEADER */}
        <thead>
          <tr className="text-left text-sm bg-[var(--secondary600)] text-[var(--text)]">
            <th className="p-3 border font-body">
              <IoCheckmarkOutline className="text-[var(--text)] text-xl" />
            </th>
            <th className="p-3 border font-body text-[var(--text)]">Invoice ID</th>
            <th className="p-3 border font-body text-[var(--text)]">Client</th>
            <th className="p-3 border font-body text-[var(--text)]">Due Date</th>
            <th className="p-3 border font-body text-[var(--text)]">Status</th>
            <th className="p-3 border font-body text-[var(--text)]">Items</th>
            <th className="p-3 border font-body text-[var(--text)]">Amount</th>
            <th className="p-3 border font-body text-[var(--text)]">Action</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {invoices.map((invoice) => (
            <tr
              key={invoice.id}
              className="hover:bg-[var(--secondary)] transition"
            >
              <td className="p-3 border">
                <input type="checkbox" />
              </td>

              <td className="p-3 border text-xs text-[var(--secondary400)] font-body">
                {invoice.invoiceId}
              </td>

              <td className="p-3 border text-[var(--secondary400)] font-body">
                {invoice.clientName || "-"}
              </td>

              <td className="p-3 border text-[var(--secondary400)] font-body">
                {invoice.dueDate || "-"}
              </td>

              <td className="p-3 border text-[var(--secondary400)] font-body">
                {invoice.status || "-"}
              </td>

              <td className="p-3 border text-[var(--secondary400)] font-body">
                {invoice.items ?? 0}
              </td>

              <td className="p-3 border text-[var(--secondary400)] font-body">
                ₱{invoice.amount?.toLocaleString() || 0}
              </td>

              <td className="p-3 border relative text-center">
                <button
                  onClick={(e) => openMenu(e, invoice.id)}
                  className="p-2 rounded hover:bg-[var(--secondary)]"
                >
                  <HiOutlineDotsHorizontal />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* FLOATING MENU */}
      {menu.id && (
        <div
          className="fixed w-32 bg-white border rounded-md shadow-lg z-[9999]"
          style={{
            top: menu.top,
            left: menu.left,
          }}
        >
          <button
            onClick={() => {
              const invoice = invoices.find((i) => i.id === menu.id);
              if (invoice) onView?.(invoice);
              closeMenu();
            }}
            className="w-full text-left px-3 py-2 hover:bg-gray-100"
          >
            View
          </button>

          <button
            onClick={() => {
              onDelete?.(menu.id);
              closeMenu();
            }}
            className="w-full text-left px-3 py-2 text-red-500 hover:bg-gray-100"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}