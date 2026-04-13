import { IoIosInformationCircleOutline } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";

const SummaryCard = ({
  title = "N/A",
  value = 0,
  growth = 0,
}) => {
  const growthBg = growth >= 0 ? "var(--positive)" : "var(--danger)";
  const growthText = growth >= 0 ? "var(--positive400)" : "var(--danger400)";

  return (
    <div className="bg-transparent border justify-center rounded-md gap-4 flex flex-1 flex-col px-2 py-4">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="font-heading font-semibold text-md text-[color:rgb(0,0,0,0.7)]">
            {title}
          </p>
          <IoIosInformationCircleOutline className="text-lg text-inherit" />
        </div>

        <HiOutlineDotsVertical className="text-[var(--cta)] text-lg" />
      </div>

      {/* Content */}
      <p className="text-[var(--text)] font-body font-semibold text-3xl text-center">
        {value?.toLocaleString?.() ?? "0"}
      </p>

      {/* Footer */}
      <div className="flex justify-center items-center gap-2">
        <div
          className="p-1 rounded-sm"
          style={{ backgroundColor: growthBg }}
        >
          <p className="font-body" style={{ color: growthText }}>
            {growth >= 0 ? `+${growth}%` : `${growth}%`}
          </p>
        </div>

        <p className="text-[color:rgb(0,0,0,0.7)] font-body">
          vs Last Month
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;