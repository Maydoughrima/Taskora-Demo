import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const TaskDropdown = ({ btnclass = "", onSelect }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("To Do");

  const options = ["To Do", "In Progress", "Completed", "Overdue"];

  //  Color mapping
  const getStatusColor = (status) => {
    switch (status) {
      case "To Do":
        return "bg-gray-800";
      case "In Progress":
        return "bg-[var(--highlight)]";
      case "Completed":
        return "bg-[var(--accent)]";
      case "Overdue":
        return "bg-[var(--danger400)]";
      default:
        return "bg-gray-800";
    }
  };

  // Color mapping
  const getTextColor = (status) => {
    switch (status) {
      case "To Do":
        return "text-[var(--text)]";
      case "In Progress":
        return "text-[var(--highlight)]";
      case "Completed":
        return "text-[var(--accent)]";
      case "Overdue":
        return "text-[var(--danger400)]";
      default:
        return "text-[var(--text)]";
    }
  };

  return (
    <div className="relative w-40">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-4 rounded-md border p-2 px-4 ${btnclass}`}
      >
        {/* LEFT SIDE */}
        <div className="flex items-center gap-2">
          {/* Vertical bar */}
          <div
            className={`w-1.5 h-5 rounded-sm ${getStatusColor(selected)}`}
          ></div>

          <span className={`font-body text-sm ${getTextColor(selected)}`}>{selected}</span>
        </div>

        {/* RIGHT SIDE */}
        <IoIosArrowDown className="text-[var(--text)]"/>
      </button>

      {open && (
        <ul className="absolute w-full bg-[var(--primary)] mt-1 border z-10">
          {options.map((item) => (
            <li
              key={item}
              onClick={() => {
                setSelected(item);
                setOpen(false);
                onSelect && onSelect(item);
              }}
              className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--highlights)] cursor-pointer"
            >
              {/* 🔥 indicator inside dropdown too */}
              <div
                className={`w-1.5 h-5 rounded-sm ${getStatusColor(item)}`}
              ></div>

              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskDropdown;
