import { Link } from "react-router-dom";

export default function Button({
    children, // is what i'll put in the button
    variant = "primary", // the default variant
    className = "", // empty so I can add other styles
    to,
    onClick,
    ...props //collect props and pass to the button
}) {

    const baseStyles = "px-4 py-2 rounded font-medium" //this is the base of the button

    const variants = { //variants
    primary: "bg-[var(--cta)] text-[var(--primary)] text-ctatxt font-body shadow-sm",
    secondary: "bg-[var(--secondary)] text-[var(--text)] text-ctatxt font-body border border-black/10 shadow-sm",
    danger: "bg-[var(--danger)] text-ctatxt font-body shadow-sm",
  };

  if (to) {
    return(
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
  )
}
