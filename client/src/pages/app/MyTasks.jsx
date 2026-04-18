import MyTasksHeader from "../../components/UI/MyTasksHeader";
import TaskCard from "../../components/MobileComponents/TaskCard";
import { useState, useEffect } from "react";
import { User } from "../../config/User";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import TopCalendar from "../../components/UI/TopCalendar";

const TASKS_KEY = "taskora_tasks_v1";

const loadTasks = () => {
  try {
    const saved = localStorage.getItem(TASKS_KEY);
    if (saved) return JSON.parse(saved);
    return User.tasks;
  } catch (err) {
    console.error("Failed to load tasks:", err);
    return User.tasks;
  }
};

export default function MyTasks() {
  const [tasks, setTasks] = useState(() => loadTasks());
  const [isOpen, setIsOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    taskName: "",
    projectName: "",
    clientName: "",
    deadline: "",
    priority: "Low",
    progress: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "progress" ? Number(value) : value,
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
      status: "To Do",
      progress: Number(form.progress) || 0,
    };

    setTasks((prev) => [newTask, ...prev]);
    setIsOpen(false);

    setForm({
      taskName: "",
      clientName: "",
      projectName: "",
      priority: "Low",
      deadline: "",
      progress: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // SAFE SEARCH FILTER
  const filteredTasks = tasks.filter((task) => {
    const q = search.toLowerCase();

    return (
      (task.taskName || "").toLowerCase().includes(q) ||
      (task.projectName || "").toLowerCase().includes(q) ||
      (task.clientName || "").toLowerCase().includes(q)
    );
  });

  return (
    <>
      {/* HEADER */}
      <MyTasksHeader
        onAddClick={() => setIsOpen(true)}
        onOpenCalendar={() => setShowCalendar(true)}
        search={search}
        setSearch={setSearch}
      />

      {/* TASK LIST */}
      <TaskCard
        tasks={filteredTasks}
        onDelete={(id) =>
          setTasks((prev) => prev.filter((t) => t.taskId !== id))
        }
      />

      {/* CALENDAR */}
      {showCalendar && (
        <div className="fixed inset-0 z-[999] flex justify-center items-start pt-10 p-4">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowCalendar(false)}
          />

          <div className="relative z-[1000]">
            <TopCalendar tasks={tasks} />
          </div>
        </div>
      )}

      {/* ADD TASK MODAL */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-2 animate-slideUp">
          <div className="bg-white p-6 rounded-lg w-[400px] flex flex-col gap-3">
            <h2 className="text-lg font-semibold">Add Task</h2>

            <Input name="taskName" value={form.taskName} onChange={handleChange} placeholder="Task Name"/>
            <Input name="projectName" value={form.projectName} onChange={handleChange} placeholder="Project Name"/>
            <Input name="clientName" value={form.clientName} onChange={handleChange} placeholder="Client Name"/>

            <input
              type="range"
              min="0"
              max="100"
              value={form.progress}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  progress: Number(e.target.value),
                }))
              }
            />

            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>

            <Input type="date" name="deadline" value={form.deadline} onChange={handleChange} />

            <Button onClick={handleAddTask}>Add Task</Button>
            <Button onClick={() => setIsOpen(false)} variant="danger" className="text-[var(--danger400)] border border-[var(--danger)]">
              Cancel
            </Button>
          </div>
        </div>
      )}
    </>
  );
}