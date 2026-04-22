import Button from "../UI/Button";
import { PiDotOutlineFill } from "react-icons/pi";

const ProjectListCardContent = ({ project = {}, onView }) => {
  const formatDate = (dateStr) => {
  if (!dateStr) return "-";

  const date = new Date(dateStr);

  if (isNaN(date.getTime())) return "-";

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

  const getPriorityColor = (priority) => {
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
          
          <p className="font-heading font-semibold text-xl text-[var(--text)]">
            {project.projectname}
          </p>

          {/* MOBILE DOT */}
          <PiDotOutlineFill
            className={`text-3xl ${getPriorityColor(project.priority)} md:hidden`}
          />

          {/* DESKTOP TEXT */}
          <span
            className={`hidden md:block text-xs font-medium ${getPriorityColor(
              project.priority
            )}`}
          >
            {project.priority}
          </span>
        </div>

        <p className="text-[var(--secondary400)] font-body text-sm">
          {project.clientname}
        </p>
      </div>

      {/* META (MATCHING TASK STYLE) */}
      <div className="flex flex-col gap-1">

        {/* STATUS */}
        <div className="flex gap-2">
          <p className="text-sm text-[var(--secondary400)] font-body">
            Status:
          </p>
          <p className="text-sm text-[var(--secondary400)] font-body">
            {project.status || "-"}
          </p>
        </div>

        {/* DEADLINE */}
        <div className="flex gap-2">
          <p className="text-sm text-[var(--secondary400)] font-body">
            Deadline:
          </p>
          <p className="text-sm text-[var(--secondary400)] font-body">
            {formatDate(project.deadline)}
          </p>
        </div>
      </div>

      {/* ACTION */}
      <Button onClick={onView}>
        View Project
      </Button>
    </div>
  );
};

export default ProjectListCardContent;