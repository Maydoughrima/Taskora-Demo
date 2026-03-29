const Desc = ({ children, className = "" }) => {
  return (
    <p
      className={`hidden md:block text-[color:rgba(0,0,0,0.6)] font-body text-sm sm:text-base md:text-lg text-center ${className}`}
    >
      {children}
    </p>
  );
};

export default Desc;
