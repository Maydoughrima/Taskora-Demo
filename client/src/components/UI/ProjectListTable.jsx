import { useState, useEffect } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoCheckmarkOutline } from "react-icons/io5";

export default function ProjectListTable({ projects = [], onView, onDelete }) {
  const [menu, setMenu] = useState({ id: null, top: 0, left: 0 });

  const openMenu = (e, projectId) => {
    e.stopPropagation();

    const rect = e.currentTarget.getBoundingClientRect();

    setMenu((prev) =>
      prev.id === projectId
        ? { id: null, top: 0, left: 0 }
        : {
            id: projectId,
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
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return "-";

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  };

  return (
    <div className="hidden md:block w-full overflow-x-auto relative rounded-[14px]">
      <table className="w-full border border-[var(--secondary400)] border-collapse">

        {/* HEADER */}
        <thead>
          <tr className="text-left text-sm bg-[var(--secondary600)] text-[var(--text)]">
            <th className="p-3 border font-body"><IoCheckmarkOutline className="text-[var(--text)] text-xl"/></th>
            <th className="p-3 border font-body">Project ID</th>
            <th className="p-3 border font-body">Project Name</th>
            <th className="p-3 border font-body">Client</th>
            <th className="p-3 border font-body">Priority</th>
            <th className="p-3 border font-body">Status</th>
            <th className="p-3 border font-body">Deadline</th>
            <th className="p-3 border font-body">Action</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {projects.map((project) => (
            <tr
              key={project.id}
              className="hover:bg-[var(--secondary)] transition"
            >
              <td className="p-3 border">
                <input type="checkbox" />
              </td>

              <td className="p-3 border text-xs text-[var(--secondary400)] font-body">
                {project.id}
              </td>

              <td className="p-3 border text-[var(--secondary400)] font-body">
                {project.projectname || "-"}
              </td>

              <td className="p-3 border text-[var(--secondary400)] font-body">
                {project.clientname || "-"}
              </td>

              <td className="p-3 border text-[var(--secondary400)] font-body">
                {project.priority || "-"}
              </td>

              <td className="p-3 border text-[var(--secondary400)] font-body">
                {project.status || "-"}
              </td>

              <td className="p-3 border text-[var(--secondary400)] font-body">
                {formatDate(project.deadline)}
              </td>

              <td className="p-3 border relative text-center">
                <button
                  onClick={(e) => openMenu(e, project.id)}
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
              const project = projects.find((p) => p.id === menu.id);
              if (project) onView?.(project);
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