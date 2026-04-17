import { useMemo } from "react";

export default function TopCalendar({ tasks = [] }) {
  const today = new Date();

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const taskMap = useMemo(() => {
    const map = {};

    tasks.forEach((task) => {
      if (!task.deadline) return;

      const date = new Date(task.deadline);
      const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

      if (!map[key]) map[key] = [];
      map[key].push(task);
    });

    return map;
  }, [tasks]);

  return (
    <div
      className="
        /* MOBILE (unchanged) */
        w-full max-w-[360px]

        /* TABLET (NEW) */
        md:max-w-[440px]

        /* DESKTOP (unchanged) */
        lg:w-[460px]
        lg:max-w-none

        bg-[var(--secondary)]
        border border-black/10
        rounded-2xl shadow-xl

        /* MOBILE padding */
        p-3

        /* DESKTOP padding unchanged */
        lg:p-5
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-[var(--text)] font-body">
            {today.toLocaleString("default", { month: "long" })}
          </h2>
          <p className="text-xs text-[var(--secondary400)]">
            {currentYear}
          </p>
        </div>

        <div className="
          px-2 py-1 text-[10px]

          md:text-[11px]

          lg:px-3 lg:py-1 lg:text-xs

          rounded-full bg-[var(--primary)]
          text-[var(--text)]
          border border-black/10
        ">
          Today: {today.getDate()}
        </div>
      </div>

      {/* WEEK LABELS */}
      <div className="
        grid grid-cols-7 mb-2 font-medium

        text-[9px]
        md:text-[10px]
        lg:text-[11px]

        text-[var(--secondary400)]
      ">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div key={`${d}-${i}`} className="text-center">
            {d}
          </div>
        ))}
      </div>

      {/* GRID */}
      <div className="
        grid grid-cols-7

        gap-[4px]
        md:gap-1
        lg:gap-1.5
      ">
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;

          const key = `${currentYear}-${currentMonth}-${day}`;
          const tasksForDay = taskMap[key] || [];

          const isToday = day === today.getDate();
          const hasTasks = tasksForDay.length > 0;

          return (
            <div
              key={key}
              className={`
                relative flex flex-col items-center justify-center
                rounded-md border cursor-pointer transition

                /* MOBILE */
                h-8

                /* TABLET */
                md:h-10

                /* DESKTOP (original) */
                lg:h-12

                ${
                  isToday
                    ? "border-[var(--cta)] bg-[var(--primary)]"
                    : "border-black/5 hover:bg-[var(--primary)]"
                }
              `}
            >
              <span
                className={`
                  font-medium

                  text-[9px]
                  md:text-[10px]
                  lg:text-xs

                  ${
                    isToday
                      ? "text-[var(--cta)]"
                      : "text-[var(--text)]"
                  }
                `}
              >
                {day}
              </span>

              {hasTasks && (
                <div className="
                  flex

                  gap-[2px]
                  md:gap-[2.5px]
                  lg:gap-[3px]

                  mt-[1px]
                  md:mt-[2px]
                  lg:mt-1
                ">
                  {tasksForDay.slice(0, 3).map((t, idx) => (
                    <span
                      key={`${t.taskId}-${idx}`}
                      className={`
                        rounded-full

                        w-1 h-1
                        md:w-1.2 md:h-1.2
                        lg:w-1.5 lg:h-1.5

                        ${
                          t.priority === "High"
                            ? "bg-[var(--danger400)]"
                            : t.priority === "Medium"
                            ? "bg-[var(--cta)]"
                            : "bg-[var(--accent)]"
                        }
                      `}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* LEGEND */}
      <div className="
        mt-3 flex items-center justify-between

        text-[8px]
        md:text-[9px]
        lg:text-[11px]

        text-[var(--secondary400)]
      ">
        <div className="flex items-center gap-2 lg:gap-3">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[var(--danger400)]"></span>
            High
          </div>

          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[var(--cta)]"></span>
            Medium
          </div>

          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            Low
          </div>
        </div>

        <p className="
          text-[8px]
          md:text-[9px]
          lg:text-[10px]
        ">
          Task deadlines overview
        </p>
      </div>
    </div>
  );
}