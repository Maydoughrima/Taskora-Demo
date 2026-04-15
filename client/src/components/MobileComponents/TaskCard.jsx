import TaskDropdown from "../UI/TaskDropdown";
import Button from "../UI/Button";
import TaskCardContent from "./TaskCardContent";
import {  useState } from "react";

export default function TaskCard({tasks = []}) {
  //  Color mapping
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

  // Color mapping
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

  return (
    <section className="flex w-full p-2 md:px-6 lg:px-4">
      {/* CARD CONTAINER */}
      <div className="flex flex-col p-2 gap-4 bg-[var(--secondary)] border w-full rounded-[16px]">
        {/* CONTAINER HEADER */}
        <div className="flex justify-between">
          {/* HEADER LEFT */}
          <div className="flex gap-1 md:gap-4 ">
            <TaskDropdown
              getStatusColor={getStatusColor}
              getTextColor={getTextColor}
              options={["To Do", "In Progress", "Completed", "Overdue"]}
              defaultValue="To Do"
              onSelect={(value) => setStatusFilter(value)}
            />
            <div className="flex gap-1">
              {/* total task label */}
              <div className="items-center p-2 border rounded-md text-sm font-body text-[var(--text)] hidden md:block">
                13
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
          {/* HEADER RIGHT */}
          <Button
            className="bg-transparent shadow-none whitespace-nowrap"
            to="/Todo"
          >
            <p className="text-[var(--cta)] text-sm">View All</p>
          </Button>
        </div>

        <div className="flex flex-col gap-3">
          {tasks
            .filter((task) => {
              const statusMatch = task.status === statusFilter;
              const priorityMatch =
                priorityFilter === "All" || task.priority === priorityFilter;

              return statusMatch && priorityMatch;
            })
            .map((task) => (
              <TaskCardContent key={task.taskId} task={task} />
            ))}
        </div>
      </div>
    </section>
  );
}
