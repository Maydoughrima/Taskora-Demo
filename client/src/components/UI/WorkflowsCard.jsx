import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const WorkFlowCard = ({
  icon,
  stepName,
  step,
  title,
  description,
  className = "",
  stepNameClass = "",
}) => {
  return (
    <div
      className={`group flex flex-col border border-[var(--text)]/50 p-4 rounded-lg gap-4 shadow-sm hover:bg-[var(--accent)] transition-all duration-300 hover:translate-x-2 ${className}`}
    >
      {/* Card Header */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex gap-2 items-center">
              {icon &&
                React.cloneElement(icon, {
                  className: `h-6 w-6 ${icon.props.className || ""} text-[var(--accent)] group-hover:text-[var(--primary)]`,
                })}
          <h4
            className={`font-heading font-semibold text-lg text-[var(--text)] group-hover:text-[var(--primary)] ${stepNameClass}`}
          >
            {" "}
            {stepName}{" "}
          </h4>
          <FaArrowRightLong className="w-5 h-5 text-[var(--text)] group-hover:text-[var(--primary)]" />
        </div>
        <p className="font-body font-semibold text-[rgba(0,0,0,0.5)] group-hover:text-[var(--primary)]">
          {step}
        </p>
      </div>

      {/* content */}
      <div className="flex flex-col gap-2">
        <h4 className="font-head font-semibold text-xl text-[var(--text)] group-hover:text-[var(--primary)]">
          {title}
        </h4>
        <p className="text-sm font-body text-[rgba(0,0,0,0.6)] group-hover:text-[var(--primary)]">
          {description}
        </p>
      </div>
    </div>
  );
};
export default WorkFlowCard;
