import { useState, useEffect } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function ClientTable({ clients = [], onView, onDelete }) {
  const [menu, setMenu] = useState({ id: null, top: 0, left: 0 });

  const openMenu = (e, clientId) => {
    e.stopPropagation();

    const rect = e.currentTarget.getBoundingClientRect();

    setMenu((prev) =>
      prev.id === clientId
        ? { id: null, top: 0, left: 0 }
        : {
            id: clientId,
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
            <th className="p-3 border font-body text-[var(--text)]">✔</th>
            <th className="p-3 border font-body text-[var(--text)]">Client ID</th>
            <th className="p-3 border font-body text-[var(--text)]">Name</th>
            <th className="p-3 border font-body text-[var(--text)]">Contact</th>
            <th className="p-3 border font-body text-[var(--text)]">Status</th>
            <th className="p-3 border font-body text-[var(--text)]">Projects</th>
            <th className="p-3 border font-body text-[var(--text)]">Revenue</th>
            <th className="p-3 border font-body text-[var(--text)]">Action</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {clients.map((client) => (
            <tr
              key={client.id}
              className="hover:bg-[var(--secondary)] transition"
            >
              <td className="p-3 border">
                <input type="checkbox" />
              </td>

              <td className="p-3 border text-xs text-[var(--secondary400)] font-body">
                {client.id}
              </td>

              <td className="p-3 border text-[var(--secondary400)] font-body">
                {client.name || "-"}
              </td>

              <td className="p-3 border text-[var(--secondary400)] font-body">
                {client.contact || "-"}
              </td>

              <td className="p-3 border text-[var(--secondary400)] font-body">
                {client.status || "-"}
              </td>

              <td className="p-3 border text-[var(--secondary400)] font-body">
                {client.projects ?? 0}
              </td>

              <td className="p-3 border text-[var(--secondary400)] font-body">
                ₱{client.revenue?.toLocaleString() || 0}
              </td>

              <td className="p-3 border relative text-center">
                <button
                  onClick={(e) => openMenu(e, client.id)}
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
              const client = clients.find((c) => c.id === menu.id);
              if (client) onView?.(client);
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