import { Link } from "react-router-dom";

export default function Button({
  children,
  variant = "primary",
  className = "",
  to,
  onClick,
  ...props
}) {
  // ✅ CONSISTENT BASE
  const baseStyles =
    "inline-flex items-center justify-center px-4 h-10 rounded-md text-sm font-medium transition";

  // ✅ CLEAN VARIANTS (colors only)
  const variants = {
    primary:
      "bg-[var(--cta)] text-[var(--primary)] shadow-sm hover:opacity-90",
    secondary:
      "bg-[var(--secondary)] text-[var(--text)] border border-black/10 shadow-sm hover:bg-white",
    danger:
      "bg-[var(--danger)] text-white shadow-sm hover:opacity-90",
  };

  if (to) {
    return (
      <Link
        to={to}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}