const TaskProgressBar = ({ value = 50 }) => {
  return (
    <div className="flex items-center gap-3 w-[200px]">
      {/* Label */}
      <span className="text-sm font-body text-[var(--secondary400)] whitespace-nowrap">
        Progress:
      </span>

      {/* Bar */}
      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-[var(--cta)] transition-all duration-300"
          style={{ width: `${value}%` }}
        />
      </div>

      {/* Value */}
      <span className="text-sm font-body text-[var(--secondary400)] whitespace-nowrap">
        {value}%
      </span>
    </div>
  );
};
export default TaskProgressBar;
