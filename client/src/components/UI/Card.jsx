import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({
  icon,
  title,
  description,
  link,
  className = "",
  iconClass = "",
  titleClass = "",
  descClass = "",
  ctaClass = "",
}) => {
  return (
    <div className={`flex flex-col border gap-4 p-4 rounded-md border-[var(--text)]/50 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 ${className}`}>
      
      {/* icon */}
      <div className={`flex w-max items-center justify-center p-2 rounded-md bg-[var(--accent)] text-[var(--primary)] ${iconClass}`}>
        {icon}
      </div>

      {/* title & subtext */}
      <div className="flex flex-col gap-2">
        <h4 className={`card-title text-lg font-heading ${titleClass}`}>{title}</h4>
        <p className={`text-[rgba(0,0,0,0.6)] font-body text-sm ${descClass}`}>
          {description}
        </p>
      </div>

      {/* CTA */}
      <Link
        className={`flex items-center gap-2 font-body text-sm mt-auto text-[var(--cta)] ${ctaClass}`}
        to={link}
      >
        Read More
        <FaArrowRightLong className="w-5 h-5" />
      </Link>
    </div>
  );
};

export default Card;
