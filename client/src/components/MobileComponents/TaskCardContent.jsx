import Button from "../UI/Button";
import TaskProgressBar from "../UI/TaskProgressBar";
import { PiDotOutlineFill } from "react-icons/pi";

const TaskCardContent = ({ task = {} }) => {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  const getPriorityDotColor = (priority) => {
    switch (priority) {
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
  return (
    <div className="flex flex-col gap-3 p-2 border rounded-[7px]">
      {/* CARD HEADER */}
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <p className="font-heading font-semibold text-xl">{task.taskName}</p>
          <PiDotOutlineFill
            className={`text-3xl ${getPriorityDotColor(task.priority)}`}
          />
        </div>

        <p className="text-[var(--secondary400)] font-body">
          {task.projectName}
        </p>
      </div>

      {/* card progress & deadline */}
      <div className="flex flex-col gap-1">
        <TaskProgressBar value={task.progress} />

        <div className="flex gap-3">
          <p className="font-body text-sm text-[var(--secondary400)]">
            Deadline:
          </p>
          <p className="font-body text-sm text-[var(--secondary400)]">
            {formatDate(task.deadline)}
          </p>
        </div>

        <Button>View Tasks</Button>
      </div>
    </div>
  );
};

export default TaskCardContent;
