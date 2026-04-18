import { useEffect, useState } from "react";

export default function CalendarTask({ day, onSelectDay }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!day) {
    return (
      <div className="min-h-[40px] sm:h-15 border rounded-md sm:rounded-lg bg-gray-50" />
    );
  }

  const getColor = (priority) => {
    if (priority === "High") return "bg-red-500";
    if (priority === "Medium") return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div
      onClick={() => onSelectDay?.(day)}
      className="
        border rounded-md items-center justify-center sm:rounded-lg bg-white p-[3px]
        h-[100px] sm:h-15
        flex flex-col overflow-hidden
      "
    >
      {/* Day number */}
      <div className="text-[9px] sm:text-xs font-medium text-gray-600">
        {day.day}
      </div>

      {/* DESKTOP (UNCHANGED) */}
      {!isMobile && (
        <div className="mt-1 space-y-1">
          {day.tasks.map((task) => (
            <div
              key={task.id}
              className={`text-xs px-2 py-1 rounded-md text-white truncate
                ${
                  task.priority === "High"
                    ? "bg-red-500"
                    : task.priority === "Medium"
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}
            >
              {task.title}
            </div>
          ))}
        </div>
      )}

      {/* MOBILE (DOT ONLY — NO EXTRA HEIGHT) */}
      {isMobile && (
        <div className="flex flex-wrap gap-[2px] mt-[2px]">
          {day.tasks?.map((task, idx) => (
            <div
              key={idx}
              className={`w-[5px] h-[5px] rounded-full ${getColor(
                task.priority
              )}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}