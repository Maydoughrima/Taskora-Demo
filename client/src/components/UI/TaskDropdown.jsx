import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const TaskDropdown = ({
  btnclass,
  onSelect,
  getStatusColor,
  getTextColor,
  getPriorityColor,
  options = [],
  defaultValue = "Select",
  showIndicator = true,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-4 rounded-md border p-2 px-4 text-[var(--text)] whitespace-nowrap ${
          typeof btnclass === "function" ? btnclass(selected) : btnclass
        }`}
      >
        {/* LEFT SIDE */}
        <div className="flex items-center gap-2">
          {showIndicator && getStatusColor && (
            <div
              className={`w-1.5 h-5 rounded-sm ${getStatusColor(selected)}`}
            />
          )}

          <span className={`font-body text-sm ${getTextColor?.(selected)}`}>
            {selected}
          </span>
        </div>

        {/* RIGHT SIDE */}
        <IoIosArrowDown className="text-[var(--text)]" />
      </button>

      {open && (
        <ul className="absolute bg-[var(--primary)] text-sm font-body w-40 mt-1 border z-10">
          {options.map((item) => (
            <li
              key={item}
              onClick={() => {
                setSelected(item);
                setOpen(false);
                onSelect?.(item);
              }}
              className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--highlights)] cursor-pointer"
            >
              {showIndicator && getStatusColor && (
                <div
                  className={`w-1.5 h-5 rounded-sm ${getStatusColor(item)}`}
                />
              )}

              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskDropdown;