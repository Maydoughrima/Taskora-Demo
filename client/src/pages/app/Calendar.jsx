import { useState, useEffect } from "react";
import { User } from "../../config/User";
import CalendarTask from "../../components/UI/CalendarTask";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import {IoAddOutline} from "react-icons/io5";

const TASKS_KEY = "taskora_tasks_v1";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 3));
  const [selectedDay, setSelectedDay] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState({
    taskName: "",
    projectName: "",
    clientName: "",
    deadline: "",
    priority: "Low",
  });

  // Load localStorage tasks
  const [storedTasks, setStoredTasks] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(TASKS_KEY)) || [];
      setStoredTasks(saved);
    } catch {
      setStoredTasks([]);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddTask = () => {
    const newTask = {
      taskId: "TSK-" + Math.random().toString(36).slice(2, 9),
      taskName: form.taskName,
      projectName: form.projectName,
      clientName: form.clientName,
      deadline: form.deadline,
      priority: form.priority,
    };

    const updated = [newTask, ...storedTasks];

    localStorage.setItem(TASKS_KEY, JSON.stringify(updated));
    setStoredTasks(updated);

    setIsOpen(false);
    setForm({
      taskName: "",
      projectName: "",
      clientName: "",
      deadline: "",
      priority: "Low",
    });
  };

  // Normalize tasks
  const allTasks = [
    ...User.tasks.map((t) => ({
      id: t.taskId,
      title: t.taskName,
      date: t.deadline,
      priority: t.priority,
      clientName: t.clientName,
    })),

    ...User.deadlines.map((d, i) => ({
      id: `DL-${i}`,
      title: d.projectName,
      date: d.duedate,
      clientName: "N/A",
      priority: d.deadlinestatus === "Overdue" ? "High" : "Medium",
    })),

    ...storedTasks.map((t) => ({
      id: t.taskId,
      title: t.taskName,
      date: t.deadline,
      clientName: t.clientName,
      priority: t.priority,
    })),
  ];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
  });

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay();

  const generateDays = () => {
    const days = [];

    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
        d,
      ).padStart(2, "0")}`;

      const dayTasks = allTasks.filter((t) => t.date === dateStr);

      days.push({
        day: d,
        date: dateStr,
        tasks: dayTasks,
      });
    }

    return days;
  };

  const days = generateDays();

  const changeMonth = (offset) => {
    setCurrentDate(new Date(year, month + offset));
  };

  const priorityClass = {
    High: "bg-[var(--danger)]",
    Medium: "bg-[var(--cta400)]",
    Low: "bg-[var(--accent400)]",
  };

  return (
    <div className="p-4 md:px-6 lg:px-4 lg:pt-12 w-full">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div className="flex items-center justify-between sm:justify-start gap-3">
          <button onClick={() => changeMonth(-1)} className="px-2">
            ←
          </button>

          <h1 className="text-lg sm:text-xl font-semibold">
            {monthName} {year}
          </h1>

          <button onClick={() => changeMonth(1)} className="px-2">
            →
          </button>
        </div>

        <Button
          variant="primary"
          className="inline-flex items-center gap-2 whitespace-nowrap"
          onClick={() => setIsOpen(true)}
        >
          <IoAddOutline className="text-[var(--primary)] text-[18px]" />
          <p className="hidden lg:block font-[var(--ctaTxt)]">Add Task</p>
        </Button>
      </div>

      {/* WEEK LABELS */}
      <div className="grid grid-cols-7 text-[10px] sm:text-sm text-gray-500 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="text-center">
            {d}
          </div>
        ))}
      </div>

      {/* CALENDAR */}
      <div className="bg-white border rounded-xl p-2 sm:p-3 shadow-sm animate-fadeIn">
        <div className="grid grid-cols-7 gap-1 sm:gap-2">
          {days.map((item, idx) => (
            <CalendarTask key={idx} day={item} onSelectDay={setSelectedDay} />
          ))}
        </div>
      </div>

      {/* ADD TASK MODAL */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-2 animate-slideUp">
          <div className="bg-white p-6 rounded-lg w-[400px] flex flex-col gap-3">
            <h2 className="text-lg font-semibold">Add Task</h2>

            <Input
              name="taskName"
              value={form.taskName}
              onChange={handleChange}
              placeholder="Task Name"
            />

            <Input
              name="projectName"
              value={form.projectName}
              onChange={handleChange}
              placeholder="Project Name"
            />

            <Input
              name="clientName"
              value={form.clientName}
              onChange={handleChange}
              placeholder="Client Name"
            />

            <Input
              type="date"
              name="deadline"
              value={form.deadline}
              onChange={handleChange}
            />

            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>

            <div className="flex gap-2 pt-2">
              <Button
                onClick={handleAddTask}
                className="flex-1"
                variant="primary"
              >
                Save
              </Button>

              <Button
                onClick={() => setIsOpen(false)}
                className="flex-1 border border-[var(--danger)] p-2 rounded text-[var(--danger400)]"
                variant="danger"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* DAY MODAL (UNCHANGED) */}
      {selectedDay && (
        <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-[999] p-2 animate-fadeIn">
          {/* BACKDROP */}
          <div
            className="absolute inset-0"
            onClick={() => setSelectedDay(null)}
          />

          {/* MODAL */}
          <div
            className="
      relative bg-white w-full sm:w-[440px]
      rounded-t-2xl sm:rounded-2xl
      p-4 sm:p-5
      max-h-[75vh]
      overflow-y-auto
      shadow-xl
      animate-slideUp
    "
          >
            {/* HEADER */}
            <div className="flex justify-between items-start mb-5">
              <div>
                <h2 className="font-semibold text-base sm:text-lg text-[var(--text)]">
                  {selectedDay.date}
                </h2>

                <p className="text-[11px] sm:text-xs text-gray-400">
                  {selectedDay.tasks.length} task(s)
                </p>
              </div>

              <button
                onClick={() => setSelectedDay(null)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500"
              >
                ✕
              </button>
            </div>

            {/* TASK LIST */}
            <div className="space-y-3">
              {selectedDay.tasks.length > 0 ? (
                selectedDay.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="
                p-3 rounded-xl border bg-gray-50
                hover:bg-gray-100 transition
              "
                  >
                    {/* TITLE (PRIMARY) */}
                    <div className="font-semibold text-sm text-[var(--text)]">
                      {task.title}
                    </div>

                    {/* META ROW */}
                    <div className="flex items-center justify-between mt-2">
                      {/* CLIENT (SECONDARY INFO) */}
                      <div className="text-[11px] text-gray-500">
                        Client:{" "}
                        <span className="text-gray-700 font-medium">
                          {task.clientName || "N/A"}
                        </span>
                      </div>

                      {/* PRIORITY BADGE */}
                      <span
                        className={`
                    text-[10px] px-2 py-[3px] rounded-full
                    ${
                      task.priority === "High"
                        ? "bg-[var(--danger)] text-[var(--danger400)]"
                        : task.priority === "Medium"
                          ? "bg-[var(--cta400)] text-[var(--cta)]"
                          : "bg-[var(--accent400)] text-[var(--accent)]"
                    }
                  `}
                      >
                        {task.priority}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-sm text-gray-400 text-center py-6">
                  No tasks for this day
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
