const TaskProgressBar = ({ value = 0 }) => {
  const clampedValue = Math.min(100, Math.max(0, Number(value) || 0));

  return (
    <div className="flex items-center gap-3 w-[200px]">
      {/* Label */}
      <span className="text-sm font-body text-[var(--secondary400)] whitespace-nowrap">
        Progress:
      </span>

      {/* Bar */}
      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full transition-all duration-300"
          style={{
            width: `${clampedValue}%`,
            backgroundColor: "var(--cta)"
          }}
        />
      </div>

      {/* Value */}
      <span className="text-sm font-body text-[var(--secondary400)] whitespace-nowrap">
        {clampedValue}%
      </span>
    </div>
  );
};

export default TaskProgressBar;