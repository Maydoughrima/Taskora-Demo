import TaskDropdown from "../UI/TaskDropdown";
import Button from "../UI/Button"

export default function TaskCard() {
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

  return (
    <section className="flex w-full p-2 pt-4 md:px-6 lg:px-4">
      {/* CARD CONTAINER */}
      <div className="flex flex-col p-2 gap-4 bg-[var(--secondary)] border w-full rounded-[16px]">
        {/* CONTAINER HEADER */}
        <div className="flex justify-between">
          {/* HEADER LEFT */}
          <div className="flex gap-1">
            <TaskDropdown
              getStatusColor={getStatusColor}
              getTextColor={getTextColor}
              options={["To Do", "In Progress", "Completed", "Overdue"]}
              defaultValue="To Do"
            />
            <TaskDropdown
              options={["All", "High", "Medium", "Low"]}
              showIndicator={false}
              getTextColor={getTextColor}
              defaultValue="All"
              btnclass={(selected) =>
                selected === "High"
                  ? "bg-[var(--danger)] text-[var(--danger400)]"
                  : selected === "Medium"
                    ? "bg-[var(--cta400)] text-[var(--cta)]"
                  : selected === "Low"
                  ?  "bg-[var(--accent400)]"
                  : ""
              }
            />
          </div>
          {/* HEADER RIGHT */}
          <Button
          className="bg-transparent shadow-none whitespace-nowrap"
          to="/Todo"
          >
            <p className="text-[var(--cta)] text-sm">View All</p>
          </Button>
        </div>
      </div>
    </section>
  );
}
