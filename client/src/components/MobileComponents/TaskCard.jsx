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
              <div className="hidden md:flex items-center px-3 py-2 border rounded-md text-sm text-[var(--text)]">
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
          <div className="flex flex-col gap-5">
            {/* HEADER */}
            <div className="flex flex-col gap-1">
              <h2 className="font-heading font-semibold text-2xl text-[var(--text)]">
                {selectedTask.taskName}
              </h2>

              <p className="text-sm text-[var(--secondary400)]">
                Task Details Overview
              </p>
            </div>

            {/* INFO CARD */}
            <div className="flex flex-col gap-3 p-4 rounded-xl border bg-[var(--secondary)]">
              {/* PROJECT */}
              <div className="flex justify-between items-center">
                <p className="text-sm text-[var(--secondary400)]">Project</p>
                <p className="text-sm font-medium text-[var(--text)]">
                  {selectedTask.projectName || "-"}
                </p>
              </div>

              {/* CLIENT */}
              <div className="flex justify-between items-center">
                <p className="text-sm text-[var(--secondary400)]">Client</p>
                <p className="text-sm font-medium text-[var(--text)]">
                  {selectedTask.clientName || "-"}
                </p>
              </div>

              {/* DEADLINE */}
              <div className="flex justify-between items-center">
                <p className="text-sm text-[var(--secondary400)]">Deadline</p>
                <p className="text-sm font-medium text-[var(--text)]">
                  {selectedTask.deadline || "-"}
                </p>
              </div>

              {/* PRIORITY */}
              <div className="flex justify-between items-center">
                <p className="text-sm text-[var(--secondary400)]">Priority</p>

                <span
                  className={`px-2 py-1 rounded-md text-xs font-medium
              ${
                selectedTask.priority === "High"
                  ? "bg-[var(--danger100)] text-[var(--danger400)]"
                  : selectedTask.priority === "Medium"
                    ? "bg-[var(--cta100)] text-[var(--cta)]"
                    : selectedTask.priority === "Low"
                      ? "bg-[var(--accent100)] text-[var(--accent)]"
                      : "bg-[var(--secondary400)] text-[var(--text)]"
              }`}
                >
                  {selectedTask.priority || "-"}
                </span>
              </div>

              {/* STATUS */}
              <div className="flex justify-between items-center">
                <p className="text-sm text-[var(--secondary400)]">Status</p>

                <span
                  className={`px-2 py-1 rounded-md text-xs font-medium
              ${
                selectedTask.status === "To Do"
                  ? "bg-gray-200 text-gray-700"
                  : selectedTask.status === "In Progress"
                    ? "bg-[var(--cta100)] text-[var(--cta)]"
                    : selectedTask.status === "Done"
                      ? "bg-[var(--positive)] text-[var(--positive600)]"
                      : "bg-[var(--secondary400)] text-[var(--text)]"
              }`}
                >
                  {selectedTask.status || "-"}
                </span>
              </div>

              {/* PROGRESS */}
              <div className="flex justify-between items-center">
                <p className="text-sm text-[var(--secondary400)]">Progress</p>
                <p className="text-sm font-medium text-[var(--text)]">
                  {selectedTask.progress ?? 0}%
                </p>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-2">
              <Button
                className="flex-1"
                onClick={() => console.log("Edit:", selectedTask.taskId)}
              >
                Edit Task
              </Button>

              <Button
                className="flex-1 text-[var(--danger400)]"
                variant="danger"
                onClick={() => console.log("Delete:", selectedTask.taskId)}
              >
                Delete
              </Button>
            </div>
          </div>
        )}
      </TaskModal>
    </section>
  );
}
