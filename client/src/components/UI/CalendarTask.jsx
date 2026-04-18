export default function CalendarTask({ day, onSelectDay }) {
  if (!day) {
    return (
      <div className="h-[70px] lm:h-[100px] border rounded-md lm:rounded-lg bg-gray-50" />
    );
  }

  const getColor = (priority) => {
    if (priority === "High") return "bg-[var(--danger400)]";
    if (priority === "Medium") return "bg-[var(--cta)]";
    return "bg-[var(--accent)]";
  };

  return (
    <div
      onClick={() => onSelectDay?.(day)}
      className="
        border rounded-md lm:rounded-lg
        bg-white
        p-1 lm:p-2
        h-[70px] lm:h-[100px]
        flex flex-col overflow-hidden
        cursor-pointer
        hover:bg-gray-50 transition
      "
    >
      {/* DAY NUMBER */}
      <div className="text-[9px] lm:text-xs font-medium text-gray-600">
        {day.day}
      </div>

      {/* ===================== */}
      {/* DESKTOP (≥ 425px) TEXT */}
      {/* ===================== */}
      <div className="hidden lm:flex flex-col gap-[2px] mt-1 overflow-hidden">
        {day.tasks?.slice(0, 2).map((task) => (
          <div
            key={task.id}
            className={`
              text-[10px] px-2 py-[2px] rounded-md text-white truncate
              ${
                task.priority === "High"
                  ? "bg-[var(--danger400)]"
                  : task.priority === "Medium"
                  ? "bg-[var(--cta)]"
                  : "bg-[var(--accent)]"
              }
            `}
          >
            {task.title}
          </div>
        ))}

        {/* MORE INDICATOR */}
        {day.tasks?.length > 2 && (
          <div className="text-[9px] text-gray-400 px-1">
            +{day.tasks.length - 2} more
          </div>
        )}
      </div>

      {/* ===================== */}
      {/* MOBILE (< 425px) DOTS */}
      {/* ===================== */}
      <div className="flex lm:hidden flex-wrap gap-[3px] mt-1">
        {day.tasks?.slice(0, 4).map((task) => (
          <div
            key={task.id}
            className={`w-[5px] h-[5px] rounded-full ${getColor(
              task.priority
            )}`}
          />
        ))}

        {day.tasks?.length > 4 && (
          <div className="text-[8px] text-gray-400">
            +{day.tasks.length - 4}
          </div>
        )}
      </div>
    </div>
  );
}