import { HiOutlineCheck } from "react-icons/hi";
import { IoIosInformationCircleOutline } from "react-icons/io";

const DeadlineCards = ({ deadlines = [] }) => {
  return (
    <div className="cards-container flex gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-[var(--primary)] scrollbar-track-[var(--secondary)] mt-4">
      {deadlines.map((deadline, index) => {
        const isActive = deadline.deadlinestatus === "Upcoming";

        const deadlineStatusBg = isActive ? "var(--positive)" : "var(--danger)";
        const deadlineStatusText = isActive
          ? "var(--positive600)"
          : "var(--danger400)";
        const deadlineIconStatus = isActive
          ? "var(--positive600)"
          : "var(--danger400)";
        const deadlineProjectText = isActive
          ? "var(--positive600)"
          : "var(--danger400)";

        const DeadlineIcon = isActive
          ? HiOutlineCheck
          : IoIosInformationCircleOutline;

        const formattedDate = new Date(deadline.duedate).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        );

        return (
          <div
            key={index}
            className={`flex w-72 flex-col p-6 gap-4 items-center border rounded-sm 
              ${isActive
                ? "bg-gradient-to-b from-[rgb(54,120,57,0.2)] to-[var(--primary)] border-[rgb(54,120,57,0.2)]"
                : "bg-gradient-to-b from-[rgb(239,68,68,0.2)] to-[var(--primary)] border-[rgb(239,68,68,0.2)]"
              }`}
          >
            <p
              className="text-[var(--accent)] font-body font-semibold text-3xl text-center"
              style={{ color: deadlineProjectText }}
            >
              {deadline.projectName}
            </p>

            <p className="text-[color:rgb(0,0,0,0.7)] font-body">
              {formattedDate}
            </p>

            <div className="flex gap-4">
              <div
                className="flex px-2 py-1 rounded-sm gap-2 items-center"
                style={{ backgroundColor: deadlineStatusBg }}
              >
                <DeadlineIcon
                  className="text-lg"
                  style={{ color: deadlineIconStatus }}
                />
                <p
                  className="text-md font-body"
                  style={{ color: deadlineStatusText }}
                >
                  {deadline.deadlinestatus}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DeadlineCards;