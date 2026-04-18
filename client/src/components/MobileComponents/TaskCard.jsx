import TaskDropdown from "../UI/TaskDropdown";
import Button from "../UI/Button";
import TaskCardContent from "./TaskCardContent";
import TaskTable from "../UI/TaskTable";
import { useState } from "react";
import TaskModal from "../UI/TaskModal";

export default function TaskCard({ tasks = [], onDelete }) {
  // Color mapping
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

  const getTextColor = (text) => {
    switch (text) {
      case "To Do":
        return "text-[var(--text)]";
      case "In Progress":
        return "text-[var(--highlight)]";
      case "Completed":
        return "text-[var(--accent)]";
      case "Overdue":
        return "text-[var(--danger400)]";
      case "High":
        return "text-[var(--danger400)]";
      case "Medium":
        return "text-[var(--cta)]";
      case "Low":
        return "text-[var(--accent)]";
      default:
        return "text-[var(--text)]";
    }
  };

  const [statusFilter, setStatusFilter] = useState("To Do");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [selectedTask, setSelectedTask] = useState(null);

  //  FILTERED TASKS
 const filteredTasks = tasks.filter((task) => {
  const statusMatch = task.status === statusFilter;
  const priorityMatch =
    priorityFilter === "All" || task.priority === priorityFilter;

  return statusMatch && priorityMatch;
});

  return (
    <section className="flex w-full p-2 md:px-6 lg:px-4">
      <div className="flex flex-col p-2 gap-4 bg-[var(--secondary)] border w-full rounded-[16px] animate-fadeIn">
        {/* HEADER */}
        <div className="flex justify-between">
          <div className="flex gap-1 md:gap-4">
            <TaskDropdown
              getStatusColor={getStatusColor}
              getTextColor={getTextColor}
              options={["To Do", "In Progress", "Completed", "Overdue"]}
              defaultValue="To Do"
              onSelect={(value) => setStatusFilter(value)}
            />

            <div className="flex gap-1">
              <div className="items-center p-2 border rounded-md text-sm font-body text-[var(--text)] hidden md:block">
                {filteredTasks.length}
              </div>

              <TaskDropdown
                options={["All", "High", "Medium", "Low"]}
                showIndicator={false}
                getTextColor={getTextColor}
                defaultValue="All"
                onSelect={(value) => setPriorityFilter(value)}
                btnclass={(selected) =>
                  selected === "High"
                    ? "bg-[var(--danger)] text-[var(--danger400)]"
                    : selected === "Medium"
                      ? "bg-[var(--cta400)] text-[var(--cta)]"
                      : selected === "Low"
                        ? "bg-[var(--accent400)]"
                        : ""
                }
              />
            </div>
          </div>

          <Button
            className="bg-transparent shadow-none whitespace-nowrap"
            to="/Todo"
          >
            <p className="text-[var(--cta)] text-sm">View All</p>
          </Button>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="flex flex-col gap-3 md:hidden">
          {filteredTasks.map((task) => (
            <TaskCardContent
              key={task.taskId}
              task={task}
              onView={() => setSelectedTask(task)}
            />
          ))}
        </div>

        {/* ================= TABLET+ ================= */}
        <div className="hidden md:block">
          <TaskTable
            tasks={filteredTasks}
            onView={(task) => setSelectedTask(task)}
            onDelete={onDelete}
          />
        </div>
      </div>

      {/* MODAL */}
      <TaskModal isOpen={!!selectedTask} onClose={() => setSelectedTask(null)}>
        {selectedTask && (
          <div className="flex flex-col gap-1">
            <h2 className="font-body font-semibold text-[var(--text)] text-xl">
              {selectedTask.taskName}
            </h2>

            <p className="text-[var(--secondary400)]">
              Project: {selectedTask.projectName || "-"}
            </p>
            <p className="text-[var(--secondary400)]">
              Client: {selectedTask.clientName || "-"}
            </p>
            <p className="text-[var(--secondary400)]">
              Deadline: {selectedTask.deadline || "-"}
            </p>
            <p className="text-[var(--secondary400)]">
              Priority: {selectedTask.priority || "-"}
            </p>
            <p className="text-[var(--secondary400)]">
              Status: {selectedTask.status || "-"}
            </p>
          </div>
        )}
      </TaskModal>
    </section>
  );
}
