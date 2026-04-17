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

    if (saved) {
      return JSON.parse(saved);
    }

    return User.tasks;
  } catch (err) {
    console.error("Failed to load tasks:", err);
    return User.tasks;
  }
};

export default function MyTasks() {
  const [tasks, setTasks] = useState(() => loadTasks());
  const [isOpen, setIsOpen] = useState(false);
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
      taskId: "TSK-" + Date.now(),
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
    console.log("FORM BEFORE SAVE:", form);
  };

  useEffect(() => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const [showCalendar, setShowCalendar] = useState(false);
  const [view, setView] = useState("list");

  return (
    <>
      <MyTasksHeader
        onAddClick={() => setIsOpen(true)}
        onOpenCalendar={() => setShowCalendar(true)}
        onViewChange={setView}
      />
      <TaskCard
        tasks={tasks}
        onDelete={(id) =>
          setTasks((prev) => prev.filter((t) => t.taskId !== id))
        }
      />
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-2">
          <div className="bg-white p-6 rounded-lg w-[400px] flex flex-col gap-3">
            <h2 className="text-lg font-heading font-semibold text-[var(--text)]">
              Add Task
            </h2>

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
              name="progress"
            />

            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="border p-2 rounded font-body text-[var(--text)]"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>

            <Input
              type="date"
              name="deadline"
              value={form.deadline}
              onChange={handleChange}
            />

            <Button
              onClick={handleAddTask}
              className="bg-[var(--cta)] text-white p-2 rounded"
            >
              Add Task
            </Button>

            <Button
              onClick={() => setIsOpen(false)}
              className="text-[var(--danger400)] text-sm"
              variant="danger"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {showCalendar && (
        <div
          className="fixed inset-0 bg-black/40 flex justify-center items-start pt-10 p-4"
          onClick={() => setShowCalendar(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <TopCalendar tasks={tasks} />
          </div>
        </div>
      )}
    </>
  );
}
