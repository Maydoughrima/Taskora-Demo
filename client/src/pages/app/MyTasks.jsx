import MyTasksHeader from "../../components/UI/MyTasksHeader";
import TaskCard from "../../components/MobileComponents/TaskCard";
import { useState, useEffect } from "react";
import { User } from "../../config/User";

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
  const [tasks, setTasks] = useState(loadTasks);
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    taskName: "",
    projectName: "",
    clientName: "",
    deadline: "",
    priority: "Low",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
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
      progress: "0",
    };
    setTasks((prev) => [newTask, ...prev]);
    setIsOpen(false);

    setForm({
      taskName: "",
      clientName: "",
      projectName: "",
      priority: "Low",
      deadline: "",
    });
  };

  useEffect(() => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <MyTasksHeader onAddClick={() => setIsOpen(true)} />
      <TaskCard tasks={tasks} />
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[400px] flex flex-col gap-3">
            <h2 className="text-lg font-semibold">Add Task</h2>

            <input
              name="taskName"
              value={form.taskName}
              onChange={handleChange}
              placeholder="Task Name"
              className="border p-2 rounded"
            />

            <input
              name="projectName"
              value={form.projectName}
              onChange={handleChange}
              placeholder="Project Name"
              className="border p-2 rounded"
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

            <input
              type="date"
              name="deadline"
              value={form.deadline}
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <button
              onClick={handleAddTask}
              className="bg-[var(--cta)] text-white p-2 rounded"
            >
              Add Task
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="text-red-500 text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
