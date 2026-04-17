import { useState, useEffect } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function TaskTable({ tasks = [], onView, onDelete }) {
  const [menu, setMenu] = useState({ id: null, top: 0, left: 0 });

  const openMenu = (e, taskId) => {
    e.stopPropagation();

    const rect = e.currentTarget.getBoundingClientRect();

    setMenu((prev) =>
      prev.id === taskId
        ? { id: null, top: 0, left: 0 }
        : {
            id: taskId,
            top: rect.bottom + window.scrollY,
            left: rect.right + window.scrollX - 140,
          }
    );
  };

  const closeMenu = () => setMenu({ id: null, top: 0, left: 0 });

  useEffect(() => {
    const handleClickOutside = () => closeMenu();

    if (menu.id) document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [menu.id]);

  const formatDate = (dateStr) => {
    if (!dateStr) return "-";
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="hidden md:block w-full overflow-x-auto relative rounded-[14px]">
      <table className="w-full border border-[var(--secondary400)] border-collapse">

        {/* HEADER */}
        <thead>
          <tr className="text-left text-sm bg-[var(--secondary600)] text-[var(--text)]">
            <th className="p-3 border font-body text-[var(--text)]">✔</th>
            <th className="p-3 border font-body text-[var(--text)]">Task ID</th>
            <th className="p-3 border font-body text-[var(--text)]">Task Name</th>
            <th className="p-3 border font-body text-[var(--text)]">Project</th>
            <th className="p-3 border font-body text-[var(--text)]">Client</th>
            <th className="p-3 border font-body text-[var(--text)]">Priority</th>
            <th className="p-3 border font-body text-[var(--text)]">Status</th>
            <th className="p-3 border font-body text-[var(--text)]">Progress</th>
            <th className="p-3 border font-body text-[var(--text)]">Deadline</th>
            <th className="p-3 border font-body text-[var(--text)]">Action</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {tasks.map((task) => (
            <tr key={task.taskId} className="hover:bg-[var(--secondary)] transition">

              <td className="p-3 border">
                <input type="checkbox" />
              </td>

              <td className="p-3 border text-xs text-[var(--secondary400)] font-body">
                {task.taskId}
              </td>

              <td className="p-3 border text-[var(--secondary400)] font-body">{task.taskName || "-"}</td>

              <td className="p-3 border text-[var(--secondary400)] font-body">{task.projectName || "-"}</td>

              <td className="p-3 border text-[var(--secondary400)] font-body">{task.clientName || "-"}</td>

              <td className="p-3 border text-[var(--secondary400)] font-body">{task.priority || "-"}</td>

              <td className="p-3 border text-[var(--secondary400)] font-body">{task.status || "-"}</td>

              <td className="p-3 border text-[var(--secondary400)] font-body">{task.progress ?? 0}%</td>

              <td className="p-3 border text-[var(--secondary400)] font-body">{formatDate(task.deadline)}</td>

              <td className="p-3 border relative text-center">
                <button
                  onClick={(e) => openMenu(e, task.taskId)}
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
              const task = tasks.find((t) => t.taskId === menu.id);
              if (task) onView(task);
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